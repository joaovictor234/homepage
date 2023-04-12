import styles from './newsbar.module.css';

import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { NewsContext } from '../../context/NewsContext';
import { NewsContextType } from '../../@types/NewsContextType';

import Box from '../Box';
import NewsForm from './Form';

import { IOption } from '../../interface/Option';
import NewsTable from './Table';
import NewsFooter from './Footer';
import { INews } from '../../interface/INews';

export const NewsBar = () => {
  const [editMode, setEditMode] = useState(false);
  const { news, setNews } = useContext(NewsContext) as NewsContextType;
  const [rowsPerPageOptions, setRowsPerPageOptions] = useState<(number | IOption)[]>([]);
  const [toggleModalForm, setToggleModalForm] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [numberPages, setNumberPages] = useState(0);
  const [page, setPage] = useState(0);
  const [filteredNews, setFilteredNews] = useState<INews[]>([]);

  const handlePagination = (value: number) => (event: ChangeEvent<unknown>) => {
    setPage(page + value)
  }

  useEffect(() => {
    setRowsPerPageOptions([]);
    const rowsOptions = [];
    rowsOptions.push(new IOption(news.length, 'Todos'));
    if (news.length > 50) rowsOptions.unshift(50);
    if (news.length > 25) rowsOptions.unshift(25);
    if (news.length > 15) rowsOptions.unshift(15);
    if (news.length > 5) rowsOptions.unshift(5);
    setRowsPerPageOptions(rowsOptions);
  }, [news.length]);

  useEffect(() => {
    setNumberPages(Math.ceil(news.length / rowsPerPage));
  }, [news.length, rowsPerPage])

  useEffect(() => {
    const n = news.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    setFilteredNews(n);
  }, [page, rowsPerPage, news])

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
            <NewsTable 
              editMode={editMode} 
              news={filteredNews}/>
            <NewsFooter
              page={page}
              setPage={setPage}
              numberPages={numberPages}
              rowsPerPage={rowsPerPage}
              setRowsPerPage={setRowsPerPage}
              handlePagination={handlePagination}
              rowsPerPageOptions={rowsPerPageOptions} />
          </div>
        }
        formChildren={<NewsForm
          setToggleForm={setToggleModalForm} />}
      />
    </div>
  )
}
