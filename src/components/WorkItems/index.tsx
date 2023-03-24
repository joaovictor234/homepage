import { Card } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import styles from './workitems.module.css'
import Item from './Item';

const WorkItems = () => {
  return (
    <Card className={styles.workitem_container}>
      <div className={styles.header}>
        <h2>Itens de Trabalho</h2>
        <div>
          <p><CircleIcon color='info' /><span>24</span> em atendimento</p>
          <p><CircleIcon color='error' /><span>1</span> bloqueado(s)</p>
          <p><CircleIcon color='action' /><span>25</span> pronto para começar</p>
        </div>
      </div>
      <div className={styles.workitems}>
        <Item
          id={166}
          type="Epic"
          title='Módulo 1 - Manter Cartão BNB/AGRO'
          assignedTo='fulano.silva'
          state='Active'
          tags={['Módulo Agências']}
          status="running" />
        <Item
          id={432}
          type="User Story"
          title='Módulo 2 - Manter Convênio Fundo de Risco: Pesquisar'
          assignedTo='fulano.silva'
          state='Active'
          tags={['Módulo Agências']}
          status="running" />
        <Item
          id={420}
          type="Item Técnico"
          title='Configurar was7'
          assignedTo='...'
          state='Active'
          tags={['Bloqueado']}
          status="blocked" />
        <Item
          id={166}
          type="Epic"
          title='Módulo 1 - Manter Cartão BNB/AGRO'
          assignedTo='fulano.silva'
          state='Active'
          tags={['Módulo Agências']}
          status="running" />
        <Item
          id={175}
          type="User Story"
          title='Módulo 2 - Registro de Menção Adicional'
          assignedTo='...'
          state='New'
          tags={['Módulo Agências', 'Giro Flash', 'new item']}
          status="new" />
        <Item
          id={166}
          type="Epic"
          title='Módulo 1 - Manter Cartão BNB/AGRO'
          assignedTo='fulano.silva'
          state='Active'
          tags={['Módulo Agências']}
          status="running" />
        <Item
          id={432}
          type="User Story"
          title='Módulo 2 - Manter Convênio Fundo de Risco: Pesquisar'
          assignedTo='fulano.silva'
          state='Active'
          tags={['Módulo Agências']}
          status="running" />
        <Item
          id={420}
          type="Item Técnico"
          title='Configurar was7'
          assignedTo='...'
          state='Active'
          tags={['Bloqueado']}
          status="blocked" />
        <Item
          id={166}
          type="Epic"
          title='Módulo 1 - Manter Cartão BNB/AGRO'
          assignedTo='fulano.silva'
          state='Active'
          tags={['Módulo Agências']}
          status="running" />
        <Item
          id={175}
          type="User Story"
          title='Módulo 2 - Registro de Menção Adicional'
          assignedTo='...'
          state='New'
          tags={['Módulo Agências', 'Giro Flash', 'new item']}
          status="new" />
        <Item
          id={166}
          type="Epic"
          title='Módulo 1 - Manter Cartão BNB/AGRO'
          assignedTo='fulano.silva'
          state='Active'
          tags={['Módulo Agências']}
          status="running" />
        <Item
          id={432}
          type="User Story"
          title='Módulo 2 - Manter Convênio Fundo de Risco: Pesquisar'
          assignedTo='fulano.silva'
          state='Active'
          tags={['Módulo Agências']}
          status="running" />
        <Item
          id={420}
          type="Item Técnico"
          title='Configurar was7'
          assignedTo='...'
          state='Active'
          tags={['Bloqueado']}
          status="blocked" />
        <Item
          id={166}
          type="Epic"
          title='Módulo 1 - Manter Cartão BNB/AGRO'
          assignedTo='fulano.silva'
          state='Active'
          tags={['Módulo Agências']}
          status="running" />
        <Item
          id={175}
          type="User Story"
          title='Módulo 2 - Registro de Menção Adicional'
          assignedTo='...'
          state='New'
          tags={['Módulo Agências', 'Giro Flash', 'new item']}
          status="new" />
        <Item
          id={166}
          type="Epic"
          title='Módulo 1 - Manter Cartão BNB/AGRO'
          assignedTo='fulano.silva'
          state='Active'
          tags={['Módulo Agências']}
          status="running" />
        <Item
          id={432}
          type="User Story"
          title='Módulo 2 - Manter Convênio Fundo de Risco: Pesquisar'
          assignedTo='fulano.silva'
          state='Active'
          tags={['Módulo Agências']}
          status="running" />
        <Item
          id={420}
          type="Item Técnico"
          title='Configurar was7'
          assignedTo='...'
          state='Active'
          tags={['Bloqueado']}
          status="blocked" />
        <Item
          id={166}
          type="Epic"
          title='Módulo 1 - Manter Cartão BNB/AGRO'
          assignedTo='fulano.silva'
          state='Active'
          tags={['Módulo Agências']}
          status="running" />
        <Item
          id={175}
          type="User Story"
          title='Módulo 2 - Registro de Menção Adicional'
          assignedTo='...'
          state='New'
          tags={['Módulo Agências', 'Giro Flash', 'new item']}
          status="new" />
        <Item
          id={166}
          type="Epic"
          title='Módulo 1 - Manter Cartão BNB/AGRO'
          assignedTo='fulano.silva'
          state='Active'
          tags={['Módulo Agências']}
          status="running" />
        <Item
          id={432}
          type="User Story"
          title='Módulo 2 - Manter Convênio Fundo de Risco: Pesquisar'
          assignedTo='fulano.silva'
          state='Active'
          tags={['Módulo Agências']}
          status="running" />
        <Item
          id={420}
          type="Item Técnico"
          title='Configurar was7'
          assignedTo='...'
          state='Active'
          tags={['Bloqueado']}
          status="blocked" />
        <Item
          id={166}
          type="Epic"
          title='Módulo 1 - Manter Cartão BNB/AGRO'
          assignedTo='fulano.silva'
          state='Active'
          tags={['Módulo Agências']}
          status="running" />
        <Item
          id={175}
          type="User Story"
          title='Módulo 2 - Registro de Menção Adicional'
          assignedTo='...'
          state='New'
          tags={['Módulo Agências', 'Giro Flash', 'new item']}
          status="new" />
        <Item
          id={166}
          type="Epic"
          title='Módulo 1 - Manter Cartão BNB/AGRO'
          assignedTo='fulano.silva'
          state='Active'
          tags={['Módulo Agências']}
          status="running" />
        <Item
          id={432}
          type="User Story"
          title='Módulo 2 - Manter Convênio Fundo de Risco: Pesquisar'
          assignedTo='fulano.silva'
          state='Active'
          tags={['Módulo Agências']}
          status="running" />
        <Item
          id={420}
          type="Item Técnico"
          title='Configurar was7'
          assignedTo='...'
          state='Active'
          tags={['Bloqueado']}
          status="blocked" />
        <Item
          id={166}
          type="Epic"
          title='Módulo 1 - Manter Cartão BNB/AGRO'
          assignedTo='fulano.silva'
          state='Active'
          tags={['Módulo Agências']}
          status="running" />
        <Item
          id={175}
          type="User Story"
          title='Módulo 2 - Registro de Menção Adicional'
          assignedTo='...'
          state='New'
          tags={['Módulo Agências', 'Giro Flash', 'new item']}
          status="new" />
      </div>
    </Card>
  )
}

export default WorkItems;