import { DataGrid } from '@mui/x-data-grid';
import styles from './newsbar.module.css';
import { useGetNews } from '../../hooks/getNews';
import Box from '../Box';
import { useContext, useState } from 'react';
import { NewsContext } from '../../context/NewsContext';
import { NewsContextType } from '../../@types/NewsContextType';
import NewsForm from './NewsForm';

export const NewsBar = () => {
  const { rows, columns } = useGetNews(false, 365);
  const { news, setNews } = useContext(NewsContext) as NewsContextType;
  const [editMode, setEditMode] = useState(false);
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
          <DataGrid
            autoHeight
            rows={rows}
            columns={columns}
            disableRowSelectionOnClick
            hideFooter={true}
            density='compact'
            columnHeaderHeight={0}
            className={styles.newsbar_table} />
        }
        formChildren={<NewsForm
          setToggleForm={setToggleModalForm} />}
      />
    </div>
  )
}
