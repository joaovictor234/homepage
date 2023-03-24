import { Modal } from '@mui/material';
import { DataGrid, GridToolbarContainer } from '@mui/x-data-grid';
import { useContext, useEffect, useState } from 'react';
import { useGetNews } from '../../hooks/getNews';
import Button from '../Button';
import styles from './allnews.module.css';
import NewsForm from './NewsForm';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ClearIcon from '@mui/icons-material/Clear';
import SettingsIcon from '@mui/icons-material/Settings';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import { NewsContext } from '../../context/NewsContext';
import { NewsContextType } from '../../@types/NewsContextType';
import { INews } from '../../interface/INews';

export const AllNews = () => {
  const [toggleOptions, setToggleOptions] = useState(false);
  const { rows, columns } = useGetNews(toggleOptions, 720);
  const  { news, setNews } = useContext(NewsContext) as NewsContextType;
  const [toggleForm, setToggleForm] = useState(false);
  const [toggleConfirmModal, setConfirmModal] = useState(false);
  const [undoNews, setUndoNews] = useState<INews[][]>([]);
  const [redoNews, setRedoNews] = useState<INews[][]>([]);

  const handleUndoAction = () => {
    const undoNewsUpdated = [...undoNews];
    const removedNews = undoNewsUpdated.pop();
    if(removedNews) {
      setNews(removedNews);
      setRedoNews([...redoNews, removedNews]);
    }
    setUndoNews(undoNewsUpdated);
  }

  const handleRedoAction = () => {
    const redoNewsUpdated = [...redoNews];
    const removedNews = redoNewsUpdated.pop();
    if(removedNews) {
      setNews(removedNews);
      setUndoNews([...redoNews, removedNews]);
    }
    setRedoNews(redoNewsUpdated);
  }

  useEffect(() => {
    setUndoNews([...undoNews, news]);
  }, [news.length, news])

  const CustomToolbar = () =>
    <GridToolbarContainer className={styles.grid_toolbar}>
      <h4>Todos os comunicados</h4>
      {
        toggleOptions ?
          <div>
            <Button
              className={styles.additem}
              onClick={() => setToggleOptions(false)}>
              <ArrowBackIcon />RETORNAR
            </Button>
            <Button
              onClick={() => setConfirmModal(true)}
              className={styles.additem}>
              <ClearIcon />REMOVER TODOS
            </Button>
            <Button
              onClick={handleUndoAction}
              className={styles.additem}>
              <UndoIcon />DESFAZER
            </Button>
            <Button
              onClick={handleRedoAction}
              className={styles.additem}>
              REFAZER<RedoIcon />
            </Button>
            <Button
              className={styles.additem}
              onClick={() => setToggleForm(true)}>
              ADICIONAR<AddIcon />
            </Button>
          </div> :
          <Button
            className={styles.additem}
            onClick={() => setToggleOptions(true)}>
            <SettingsIcon />OPÇÕES
          </Button>
      }
    </GridToolbarContainer>

  return (
    <div className={styles.allnews}>
      <DataGrid
      sx={{
        '& .css-204u17-MuiDataGrid-main': {
          maxHeight: '543px',
          overflowY: 'scroll'
        }
      }}
        rows={rows}
        autoHeight={true}
        columns={columns}
        components={{
          Toolbar: CustomToolbar
        }}
        disableRowSelectionOnClick
        hideFooter={true}
        density='compact'
        className={styles.newsbar_table} />
      <Modal
        open={toggleForm}
        className={styles.modal}
        onClose={() => setToggleForm(false)}>
        <NewsForm setToggleForm={setToggleForm} />
      </Modal>

      <Modal 
        open={toggleConfirmModal}
        className={styles.modal}
        onClose={() => setConfirmModal(false)}>
          <div className={styles.confirm_modal}>
            <h4>Remover todas as ocorrências?</h4>
            <div>
              <Button 
                onClick={() => setConfirmModal(false)}>Fechar</Button>
              <Button 
  
                className={styles.occurences_button}
                onClick={() => {
                  setNews([])
                  setConfirmModal(false)
                }}>Remover Todos</Button>
            </div>
          </div>
      </Modal>

    </div>
  )
}