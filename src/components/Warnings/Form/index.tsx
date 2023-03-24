import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Button, FormControl, InputLabel, ListItemText, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutlineOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmberOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
import styles from './occurrenceform.module.css';
import { Occurrence } from '../../../interface/Occurrence';
import { v4 } from 'uuid'

interface IOccurrenceForm {
  setOpenModal: Dispatch<SetStateAction<boolean>>,
  occurrences: Occurrence[],
  setOccurrences: Dispatch<SetStateAction<Occurrence[]>>
}

const OccurenceForm = ({ occurrences, setOccurrences, setOpenModal }: IOccurrenceForm) => {
  const [title, setTitle] = useState('');
  const [typeOccurrence, setTypeOccurrence] = useState('');
  const [isAllDataFilled, setIsAllDataFilled] = useState(false);
  const [selectColor, setSelectColor] = useState('');

  const handleSelect = (event: SelectChangeEvent) => {
    setTypeOccurrence(event.target.value as string);
  }

  useEffect(() => {
    console.log("descripition: ", title)
    console.log("type: ", typeOccurrence)
    if (title && typeOccurrence)
      setIsAllDataFilled(true);
    else setIsAllDataFilled(false);
  }, [title, typeOccurrence])

  useEffect(() => {
    switch (typeOccurrence) {
      case 'alert':
        setSelectColor('#EF4444')
        break;
      case 'info':
        setSelectColor('#08678c')
        break;
      case 'warning':
        setSelectColor('#F2A30F')
        break;
      default:
        setSelectColor('')
    }
  }, [typeOccurrence])

  const addOccurrence = () => {
    const newOccurrence = {
      id: v4(),
      title,
      time: new Date(),
      typeOccurrence
    };
    setOccurrences([...occurrences, newOccurrence])
    setOpenModal(false)
  }

  return (
    <form className={styles.form}>
      <h3>Adicionar uma ocorrência</h3>
      <TextField
        label='Descrição'
        multiline
        rows={4}
        className={styles.input}
        onChange={e => setTitle(e.target.value)}></TextField>
      <FormControl
        className={styles.input}
        style={{ margin: '10px 0' }}>
        <InputLabel>Tipo da ocorrência</InputLabel>
        <Select
          value={typeOccurrence}
          onChange={handleSelect}
          sx={{
            '& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input.css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input': {
              display: 'flex',
              alignItems: 'center',
              backgroundColor: selectColor,
              margin: 1,
              padding: '5px',
              color: selectColor ? '#fff' : ''
            },
            '& svg': {
              marginRight: 1
            }
          }}>
          <MenuItem value=''>
            <ListItemText primary='Selecione o tipo' />
          </MenuItem>
          <MenuItem
            value='alert'
            className={styles.select_item}
            style={{
              backgroundColor: '#EF4444',
              margin: '5px',
              borderRadius: '5px',
              color: '#fff'
            }}>
            <ErrorOutlineIcon />
            <ListItemText primary='Alerta' />
          </MenuItem>
          <MenuItem
            value='warning'
            className={styles.select_item}
            style={{
              backgroundColor: '#F2A30F',
              margin: '5px',
              borderRadius: '5px',
              color: '#fff'
            }}>
            <WarningAmberIcon />
            <ListItemText primary='Aviso' />
          </MenuItem>
          <MenuItem
            value='info'
            className={styles.select_item}
            style={{
              backgroundColor: '#08678c',
              margin: '5px',
              borderRadius: '5px',
              color: '#fff'
            }}>
            <InfoIcon />
            <ListItemText primary='Informação' />
          </MenuItem>
        </Select>
      </FormControl>
      <div className={styles.group_buttons}>
        <Button
          variant='outlined'
          onClick={() => setOpenModal(false)}
        >Fechar</Button>
        <Button 
          variant={isAllDataFilled ? 'contained' : 'text'} 
          style={{backgroundColor: !isAllDataFilled ? '#eee': ''}}
          disabled={!isAllDataFilled} 
          onClick={isAllDataFilled ? addOccurrence : () => { }}>Adicionar</Button>
      </div>
    </form>
  )
}

export default OccurenceForm;