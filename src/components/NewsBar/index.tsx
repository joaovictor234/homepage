import { DataGrid } from '@mui/x-data-grid';
import styles from './newsbar.module.css';
import { useGetNews } from '../../hooks/getNews';
import Box from '../Box';
import { useContext, useState } from 'react';
import { NewsContext } from '../../context/NewsContext';
import { NewsContextType } from '../../@types/NewsContextType';
import NewsForm from './NewsForm';

export const NewsBar = () => {
  const [editMode, setEditMode] = useState(false);
  const { rows, columns, rowsPerPageOptions } = useGetNews(editMode, 365);
  const { news, setNews } = useContext(NewsContext) as NewsContextType;
  const [toggleModalForm, setToggleModalForm] = useState(false);

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
              scrollbarSize={1}
              density='compact'
              localeText={{
                MuiTablePagination: {
                  labelRowsPerPage: 'Linhas por página',
                  rowsPerPageOptions: rowsPerPageOptions
                }
              }} />
          </div>
        }
        formChildren={<NewsForm
          setToggleForm={setToggleModalForm} />}
      />
    </div>
  )
}
