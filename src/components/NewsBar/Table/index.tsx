import { convertToBRLData } from '../../../util/convertData';
import styles from './newstable.module.css';
import EditIcon from '@mui/icons-material/Edit';
import ClearIcon from '@mui/icons-material/Clear';
import CheckIcon from '@mui/icons-material/Check';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { INews } from '../../../interface/INews';
import { KeyboardEvent, useContext, useEffect, useRef, useState } from 'react';
import { NewsContext } from '../../../context/NewsContext';
import { NewsContextType } from '../../../@types/NewsContextType';

interface INewsTable {
  editMode: boolean;
  news: INews[]
}

const NewsTable = ({ editMode, news }: INewsTable) => {
  const { news: newsList, setNews } = useContext(NewsContext) as NewsContextType;
  const [selectedRowIdToEdit, setSelectedRowIdToEdit] = useState('');
  const [selectedRowDescription, setSelectedRowDescription] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const deleteNews = (id: string) => {
    const updatedNews = newsList.filter(n => n.id !== id);
    setNews(updatedNews);
  }

  const selectRow = (id: string) => {
    setSelectedRowIdToEdit(id);
    const [{ description }] = newsList.filter(n => id === n.id);
    setSelectedRowDescription(description);
  }

  const handleEvent = (e: KeyboardEvent) => {
    if(e.key === "Enter") updateRow();
  }

  const updateRow = () => {
    const updatedNews = newsList.map(n => {
      if(n.id === selectedRowIdToEdit) {
        return {
          ...n,
          description: selectedRowDescription
        }
      }
      return n;
    })
    setNews(updatedNews);
    setSelectedRowDescription('');
    setSelectedRowIdToEdit('');
  }

  const handleReturn = () => {
    setSelectedRowDescription('');
    setSelectedRowIdToEdit('');
  }

  useEffect(() => {
    if(selectedRowIdToEdit && inputRef.current) inputRef.current.focus();
  }, [selectedRowIdToEdit])

  return (
    <div className={styles.table}>
      <div className={styles.header}>
        {
          <>
            {editMode && <p>Opções</p>}
            <p>Data</p>
            <p>Descrição</p>
          </>
        }
      </div>
      <div className={styles.body}>
        {
          news && news.map(n => (
            <div className={editMode ? `${styles.row} ${styles.row_editmode}` : `${styles.row} ${styles.row_default}`}>
              {editMode &&
                <div className={styles.row_options}>
                  {
                    selectedRowIdToEdit === n.id ?
                      <>
                        <button
                          title='Retornar'
                          onClick={handleReturn}>
                          <ArrowBackIcon />
                        </button>
                        <button
                          title='Salvar alterações'
                          onClick={updateRow}>
                          <CheckIcon />
                        </button>
                      </> :
                      <>
                        <button
                          title='Deletar comunicado'
                          onClick={() => deleteNews(n.id)}>
                          <ClearIcon />
                        </button>
                        <button
                          title='Editar comunicado'
                          onClick={() => selectRow(n.id)}>
                          <EditIcon />
                        </button>
                      </>
                  }
                </div>
              }
              <div className={styles.row_value}>
                {convertToBRLData(n.data)}
              </div>
              <div className={styles.row_value}>
                {
                  selectedRowIdToEdit === n.id ?
                    <input
                      className={styles.edit_input}
                      value={selectedRowDescription}
                      onKeyDown={handleEvent}
                      ref={inputRef}
                      onChange={e => setSelectedRowDescription(e.target.value)} /> :
                    <p onDoubleClick={() => selectRow(n.id)}>{n.description}</p>
                }
              </div>
            </div>
          ))
        }
        {news && news.length === 0 && <p className={styles.no_rows}>Não há comunicados...</p>}
      </div>
    </div>
  )
}

export default NewsTable