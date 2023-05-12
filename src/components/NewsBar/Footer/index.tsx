import { ChangeEvent, Dispatch, SetStateAction, useContext } from 'react'

import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import { NewsContextType } from '../../../@types/NewsContextType';
import { NewsContext } from '../../../context/NewsContext';
import { IOption } from '../../../interface/IOption';
import { useStyles } from './newsBarFooterStyle';

interface INewsBarFooter {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  numberPages: number,
  rowsPerPage: number,
  setRowsPerPage: Dispatch<SetStateAction<number>>;
  rowsperPageOptions: (number | IOption)[] | undefined;
  handlePagination: (page: number) => (event: ChangeEvent<unknown>) => void;
}

const NewsBarFooter = ({
  rowsPerPage, setRowsPerPage,
  handlePagination,
  page, setPage,
  rowsperPageOptions,
  numberPages
}: INewsBarFooter) => {
  const classes = useStyles();
  const { news } = useContext(NewsContext) as NewsContextType;

  const handleChangePagination = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value);
    setRowsPerPage(value);
    setPage(0);
  }

  return (
    <div className={classes.footer}>
      <div className={classes.element}>
        <p>Linhas por página: </p>
        <select onChange={handleChangePagination}>
          {rowsperPageOptions && rowsperPageOptions.map(option => {
            if(option instanceof IOption) {
              const value = option as IOption;
              return <option value={value.value} key={value.value}>{value.label}</option>
            }
            const value = option as number;
            return <option value={value} key={value}>{value}</option>
          })}
        </select>
      </div>
      <div className={classes.element}>
          <p><span>{rowsPerPage * page + 1}</span> - <span>{page >= numberPages - 1 ? news.length : (rowsPerPage * page + rowsPerPage)}</span> de <span>{news.length}</span></p>
      </div>
      <div className={classes.element}>
          <KeyboardDoubleArrowLeftIcon
            className={page <= 0 ? classes.disable : classes.button}
            onClick={page > 0 ? handlePagination(-page) : () => {}}
          />
          <KeyboardArrowLeftIcon
            className={page <= 0 ? classes.disable : classes.button}
            onClick={page > 0 ? handlePagination(-1) : () => {}}
          />
          <KeyboardArrowRightIcon
            className={page >= numberPages - 1 ? classes.disable : classes.button}
            onClick={page < numberPages - 1 ? handlePagination(1) : () => { }}
          />
          <KeyboardDoubleArrowRightIcon
            className={page >= numberPages - 1 ? classes.disable : classes.button}
            onClick={page < numberPages - 1 ? handlePagination(numberPages - 1) : () => { }}
          />
      </div>
    </div>
  )
}

export default NewsBarFooter