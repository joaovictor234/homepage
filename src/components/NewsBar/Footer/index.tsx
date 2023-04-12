import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import styles from './newsfooter.module.css';
import { IOption } from '../../../interface/Option';
import { ChangeEvent, Dispatch, SetStateAction, useContext } from 'react';
import { NewsContext } from '../../../context/NewsContext';
import { NewsContextType } from '../../../@types/NewsContextType';

interface INewsFooter {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  numberPages: number;
  rowsPerPage: number;
  setRowsPerPage: Dispatch<SetStateAction<number>>;
  rowsPerPageOptions: (number | IOption)[] | undefined;
  handlePagination: (page: number) => (event: ChangeEvent<unknown>) => void
}

const NewsFooter = ({
  rowsPerPage, setRowsPerPage,
  handlePagination,
  page, setPage,
  rowsPerPageOptions,
  numberPages }: INewsFooter) => {
  const { news } = useContext(NewsContext) as NewsContextType;

  const handleChangePagination = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value)
    setRowsPerPage(value)
    setPage(0)
  }

  return (
    <div className={styles.footer}>
      <div className={`${styles.footer_element} ${styles.rows_per_page}`}>
        <p>Linhas por página: </p>
        <select onChange={handleChangePagination}>
          {rowsPerPageOptions && rowsPerPageOptions.map(option => {
            if (option instanceof IOption) {
              const value = option as IOption;
              return <option value={value.value}>{value.label}</option>
            }
            const value = option as number;
            return <option value={value}>{value}</option>
          })}
        </select>
      </div>
      <div className={styles.footer_element}>
        <p><span>{rowsPerPage * page + 1}</span> - <span>{page >= numberPages-1 ? news.length : (rowsPerPage * page + rowsPerPage)}</span> de <span>{news.length}</span></p>
      </div>
      <div className={styles.footer_element}>
        <KeyboardDoubleArrowLeftIcon
          className={page === 0 ? styles.disabled : ''}
          onClick={page > 0 ? handlePagination(-page) : () => { }} />
        <KeyboardArrowLeftIcon
          className={page === 0 ? styles.disabled : ''}
          onClick={page > 0 ? handlePagination(-1) : () => { }} />
        <KeyboardArrowRightIcon
          className={page === numberPages - 1 ? styles.disabled : ''}
          onClick={page >= numberPages - 1 ? () => { } : handlePagination(1)} />
        <KeyboardDoubleArrowRightIcon
          className={page === numberPages - 1 ? styles.disabled : ''}
          onClick={page >= numberPages - 1 ? () => { } : handlePagination(numberPages - 1)} />
      </div>
    </div>
  )
}

export default NewsFooter