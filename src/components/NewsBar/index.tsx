import styles from './newsbar.module.css';

import { useGetNews } from '../../hooks/getNews';

import { ChangeEvent, useContext, useState } from 'react';
import { NewsContext } from '../../context/NewsContext';
import { NewsContextType } from '../../@types/NewsContextType';

import { DataGrid } from '@mui/x-data-grid';
import Box from '../Box';
import NewsForm from './NewsForm';

import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import { IOption } from '../../interface/Option';

export const NewsBar = () => {
  const [editMode, setEditMode] = useState(false);
  const { rows, columns, rowsPerPageOptions } = useGetNews(editMode, 365);
  const { news, setNews } = useContext(NewsContext) as NewsContextType;
  const [toggleModalForm, setToggleModalForm] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handlePagination = (page: number) => (event: ChangeEvent<unknown>) => {
    setPage(page)
  }

  return (
    <div className={styles.newsbar}>
      <Box
        title='Comunicados'
        list={news}
        setList={setNews}
        editMode={editMode}
        setEditMode={setEditMode}
        toggleModalForm={toggleModalForm}
        setToggleModalForm={setToggleModalForm}
        children={
          <div className={styles.newsbar_table}>
            <DataGrid
              autoHeight
              rows={rows}
              columns={columns}
              disableRowSelectionOnClick
              hideFooter
              scrollbarSize={1}
              density='compact' />
            <div className={styles.footer}>
              <div className={styles.footer_element}>
                <p>Linhas por página</p>
                <select>
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
                <p><span>{rowsPerPage * page + 1}</span> - <span>{(rowsPerPage * page > rows.length) ? rows.length : rowsPerPage * page + page}</span> de <span>{rows.length}</span></p>
              </div>
              <div className={styles.footer_element}>
                <KeyboardDoubleArrowLeftIcon />
                <KeyboardArrowLeftIcon onClick={handlePagination(-1)}/>
                <KeyboardArrowRightIcon onClick={handlePagination(1)}/>
                <KeyboardDoubleArrowRightIcon />
              </div>
            </div>
          </div>
        }
        formChildren={<NewsForm
          setToggleForm={setToggleModalForm} />}
      />
    </div>
  )
}
