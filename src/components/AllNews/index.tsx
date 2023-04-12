import { Modal } from '@mui/material';
import { DataGrid, GridToolbarContainer } from '@mui/x-data-grid';
import { useContext, useState } from 'react';
import { useGetNews } from '../../hooks/getNews';
import styles from './allnews.module.css';
import NewsForm from '../NewsBar/Form';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ClearIcon from '@mui/icons-material/Clear';
import SettingsIcon from '@mui/icons-material/Settings';
import { NewsContext } from '../../context/NewsContext';
import { NewsContextType } from '../../@types/NewsContextType';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';

export const AllNews = () => {
  const navigate = useNavigate();
  const [toggleOptions, setToggleOptions] = useState(false);
  const { rows, columns } = useGetNews(toggleOptions, 720);
  const { setNews } = useContext(NewsContext) as NewsContextType;
  const [toggleForm, setToggleForm] = useState(false);
  const [toggleConfirmModal, setConfirmModal] = useState(false);

  const CustomToolbar = () =>
    <GridToolbarContainer className={styles.grid_toolbar}>
      <h4>Todos os comunicados</h4>
      {
        toggleOptions ?
          <div>
            <Button
              className={styles.button}
              onClick={() => setToggleOptions(false)}>
              <ArrowBackIcon />Retornar
            </Button>
            <Button
              onClick={() => setConfirmModal(true)}
              className={styles.button}>
              <ClearIcon />Remover todos
            </Button>
            <Button
              className={styles.button}
              onClick={() => setToggleForm(true)}>
              Adicionar<AddIcon />
            </Button>
          </div> :
          <Button
            className={styles.button}
            onClick={() => setToggleOptions(true)}>
            <SettingsIcon />Opções
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
        autoHeight
        columns={columns}
        components={{
          Toolbar: CustomToolbar
        }}
        disableVirtualization
        disableRowSelectionOnClick
        disableColumnSelector
        rowSelection={false}
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
              className={styles.outlined_button}
              onClick={() => setConfirmModal(false)}>Fechar</Button>
            <Button
              className={styles.button}
              onClick={() => {
                setNews([])
                setConfirmModal(false)
              }}>Remover Todos</Button>
          </div>
        </div>
      </Modal>
      <Button
        onClick={() => navigate('/')}
        className={styles.button}>
        <ArrowBackIcon />Retornar
      </Button>
    </div>
  )
}