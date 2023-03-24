import { Box, Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from './newsbar.module.css';
import { useNavigate } from 'react-router-dom';
import { useGetNews } from '../../hooks/getNews';

export const NewsBar = () => {
  const navigate = useNavigate();
  const { rows, columns } = useGetNews(false, 365);

  return (
    <Box className={styles.newsbar}>
      <h4>Comunicados</h4>
      <DataGrid
        rows={rows}
        columns={columns}
        disableRowSelectionOnClick
        hideFooter={true}
        density='compact'
        columnHeaderHeight={0}
        className={styles.newsbar_table} />
      <Button 
        variant='contained'
        onClick={() => navigate('/all-news')}>Ver mais <ArrowForwardIosIcon /></Button>
    </Box>
  )
}
