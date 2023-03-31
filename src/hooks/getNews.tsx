import { GridColDef, GridRenderCellParams } from "@mui/x-data-grid"
import { ChangeEvent, useContext, useEffect, useState } from "react"
import { NewsContextType } from "../@types/NewsContextType"
import { NewsContext } from "../context/NewsContext"
import { convertToBRLData } from "../util/convertData";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "../styles/iconButton";
import CheckIcon from '@mui/icons-material/Check';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const useGetNews = (editMode: boolean, descriptionWidth: number) => {
  const { news, setNews } = useContext(NewsContext) as NewsContextType;
  const [selectedRowIdEdit, setSelectedRowIdEdit] = useState('');
  const [selectedRowDescription, setSelectedRowDescription] = useState('');

  const columns: GridColDef[] = [
    { field: 'data', headerName: "Data", disableColumnMenu: true, sortable: false, width: 100 },
    {
      field: 'description', headerName: "Descrição", disableColumnMenu: true, sortable: false, width: 1000, renderCell: (params: GridRenderCellParams) => (
        params.row.id === selectedRowIdEdit ?
          <input
            type="text"
            style={{ width: '100%' }}
            onChange={handleRowChange}
            value={selectedRowDescription} /> :
          <p
            style={{ margin: 0, padding: 0 }}>
            {params.row.description}
          </p>
      )
    }
  ]

  const handleRowChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedRowDescription(e.target.value);
  }

  const deleteNews = (id: string) => {
    const updatedNews = news.filter(n => n.id !== id);
    setNews(updatedNews);
  }

  const editRow = (id: string) => {
    /* setSelectedRowDescription(''); */
    setSelectedRowIdEdit(id);
  }

  const updateRow = () => {
    const updatedNews = news.map(n => {
      if (n.id === selectedRowIdEdit) {
        return {
          ...n,
          description: selectedRowDescription
        }
      }
      return n;
    })
    setNews(updatedNews);
    setSelectedRowIdEdit('');
    setSelectedRowDescription('');
  }

  if (editMode) {
    columns[0].headerName = 'Data';
    columns[1].headerName = 'Descrição'
    columns.push({
      field: 'options', headerName: 'Opções',
      headerAlign: 'center', disableColumnMenu: true, sortable: false, width: 100,
      renderCell: (params: GridRenderCellParams) => (
        <div style={{
          opacity: 0.6
        }}>
          {
            params.row.id === selectedRowIdEdit ?
              <>
                <IconButton onClick={() => setSelectedRowIdEdit('')} title='retornar'>
                  <ArrowBackIcon />
                </IconButton>
                <IconButton onClick={updateRow} title='salvar'>
                  <CheckIcon />
                </IconButton>
              </> :
              <>
                <IconButton onClick={() => editRow(params.row.id)} title='editar'>
                  <ModeEditIcon />
                </IconButton>
                <IconButton onClick={() => deleteNews(params.row.id)} title='apagar'>
                  <CloseIcon />
                </IconButton>
              </>
          }
        </div>
      )
    })
  }

  useEffect(() => {
    if (selectedRowIdEdit) {
      const [{ description }] = news.filter(n => n.id === selectedRowIdEdit);
      setSelectedRowDescription(description);
    }
  }, [selectedRowIdEdit, news]);

  const rows = news.map(n => ({
    id: n.id,
    description: n.description,
    data: convertToBRLData(n.data)
  }))

  return { rows, columns };
}