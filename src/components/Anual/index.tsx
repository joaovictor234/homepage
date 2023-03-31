import { useState } from "react";

import { Carousel } from "react-bootstrap"
import AnualForm from "./Form";
import { Yearly } from "../../interface/Yearly";
import Info from "./Info";
import Box from "../Box";

import { v4 } from "uuid";

import CloseIcon from '@mui/icons-material/Close';

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './anual.module.css';

const Anual = () => {
  const [index, setIndex] = useState(0);
  const [doYouKnowList, setDoYouKnowList] = useState<Yearly[]>([
    {
      id: v4(),
      title: 'Cartão BNB - Consulta de Restrições',
      content: 'O S562 realiza consulta de restrições no momento da pré-autprização de compra (geração de token) e na pré-autorização de venda, logo não há necessidade de realizar consultas de restrições manuais na ocasião da aprovação da nota fiscal'
    },
    {
      id: v4(),
      title: 'Planejamento Estratégico, RAS e Plano de Capital',
      content: 'Um incidente de segurança com dados pessoais é qualquer evento adverso, confirmado ou sob suspeita, relacionado à violação na segurança de dados pessoais, tais como acesso não autorizado, situações acidentais ou ilícitas de destruição, perda, alteração, comunicação, vazamento ou, ainda, qualquer forma de tratamento de dados pessoais inadequado ou ilícito, os quais possam ocasionar risco ou dano aos direitos e liberdades do titular dos dados pessoais.'
    },
    {
      id: v4(),
      title: 'Gestão de Riscos é papel de todos',
      content: 'Você sabe o que é gestão de riscos? A expressão pode parecer pomposa e até causar aversão ao escutá-la, mas a gestão de riscos está presente na vida de todos. Viver é gerenciar riscos: se você, para não se atrasar, coloca seu despertador para acordar no horário adequado; olha para os lados da rua antes de atravessar; ou coloca o cinto de segurança ao entrar em um carro, a resposta é “sim”, você sabe e está gerenciando riscos, ainda que “inconscientemente”.'
    }
  ])
  const [editMode, setEditMode] = useState(false);
  const [toggleModalForm, setToggleModalForm] = useState(false);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  }

  const deleteYearlyById = (id: string) => {
    const updatedYearlies: Yearly[] = doYouKnowList.filter(yearly => yearly.id !== id);
    setDoYouKnowList(updatedYearlies);
  }

  return (
    <div className={styles.anual_container}>
      <Box
        title="Anual"
        editMode={editMode}
        setEditMode={setEditMode}
        toggleModalForm={toggleModalForm}
        setToggleModalForm={setToggleModalForm}
        list={doYouKnowList}
        setList={setDoYouKnowList}
        children={
          <>
            {
              editMode &&
              doYouKnowList.length > 0 &&
              <div className={styles.delete_buttons}>
                <h6>Clique em um dos botões para deletar um anual</h6>
                <div>
                  {
                    doYouKnowList && doYouKnowList.map((yearly, i) => <button
                      key={i}
                      onClick={() => deleteYearlyById(yearly.id)}
                      className={index === i ? styles.activeIndex : ''}>{i + 1} <CloseIcon /></button>)
                  }
                </div>
              </div>
            }
            <div className={styles.anual}>
              <div>
                <img src='./images/voce_sabia.png' alt="" className={styles.anual_img} />
              </div>
              <Carousel
                className={styles.carousel}
                activeIndex={index}
                onSelect={handleSelect}
                variant="dark"
                interval={null}>
                {
                  doYouKnowList && doYouKnowList.map(item =>
                    <Carousel.Item key={item.id}>
                      <Info
                        title={item.title}
                        content={item.content} />
                    </Carousel.Item>
                  )
                }
              </Carousel>
            </div>
          </>
        }
        formChildren={
          <AnualForm
            doYouKnowList={doYouKnowList}
            setDoYouKnowList={setDoYouKnowList}
            setOpenModalForm={setToggleModalForm} />
        } />
    </div>
  )
}

export default Anual