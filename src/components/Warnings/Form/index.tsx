//hooks
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
//components
import { Button, FormControl, InputLabel, ListItemText, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { Occurrence } from '../../../interface/Occurrence';
//icons
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutlineOutlined';
import WarningAmberIcon from '@mui/icons-material/WarningAmberOutlined';
import InfoIcon from '@mui/icons-material/InfoOutlined';
//styles
import styles from './occurrenceform.module.css';
//utils
import { v4 } from 'uuid'
import { convertToEnUSDataWithHoursAndMinutes } from '../../../util/convertData';

interface IOccurrenceForm {
  setToggleModalForm: Dispatch<SetStateAction<boolean>>,
  occurrences: Occurrence[],
  setOccurrences: Dispatch<SetStateAction<Occurrence[]>>
}

const OccurenceForm = ({ occurrences, setOccurrences, setToggleModalForm }: IOccurrenceForm) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(new Date());
  const [typeOccurrence, setTypeOccurrence] = useState('');
  const [isAllDataFilled, setIsAllDataFilled] = useState(false);
  const [selectColor, setSelectColor] = useState('');

  const handleSelect = (event: SelectChangeEvent) => {
    setTypeOccurrence(event.target.value as string);
  }

  const handleDate = () => (date: Date | null) => {
    if(date) setDate(date);
  }

  useEffect(() => {
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
      time: date,
      typeOccurrence
    };
    setOccurrences([...occurrences, newOccurrence])
    setToggleModalForm(false)
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
      <input 
        type="datetime-local" 
        onClick={handleDate}
        className={styles.input_datetime}
        value={convertToEnUSDataWithHoursAndMinutes(date)}/>
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
          onClick={() => setToggleModalForm(false)}
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