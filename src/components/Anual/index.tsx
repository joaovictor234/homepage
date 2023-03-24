import { Carousel } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './anual.module.css';
import { useState } from "react";

const Anual = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any) => {
    setIndex(selectedIndex);
  }

  return (
    <div className={styles.anual}>
      <div>
        <img src='./images/voce_sabia.png' alt="" className={styles.anual_img}/>
      </div>
      <Carousel 
        className={styles.carousel}
        activeIndex={index}
        onSelect={handleSelect}
        variant="dark"
        interval={null}>
        <Carousel.Item>
          <h3>Cartão BNB - Consulta de Restrições</h3>
          <p>O S562 realiza consulta de restrições no momento da pré-autprização de compra (geração de token) e na pré-autorização de venda, logo não há necessidade de realizar consultas de restrições manuais na ocasião da aprovação da nota fiscal</p>
        </Carousel.Item>
        <Carousel.Item>
          <h3>Planejamento Estratégico, RAS e Plano de Capital</h3>
          <p>Um incidente de segurança com dados pessoais é qualquer evento adverso, confirmado ou sob suspeita, relacionado à violação na segurança de dados pessoais, tais como acesso não autorizado, situações acidentais ou ilícitas de destruição, perda, alteração, comunicação, vazamento ou, ainda, qualquer forma de tratamento de dados pessoais inadequado ou ilícito, os quais possam ocasionar risco ou dano aos direitos e liberdades do titular dos dados pessoais.</p>
        </Carousel.Item>
        <Carousel.Item>
          <h3>Gestão de Riscos é papel de todos</h3>
          <p>Você sabe o que é gestão de riscos? A expressão pode parecer pomposa e até causar aversão ao escutá-la, mas a gestão de riscos está presente na vida de todos. Viver é gerenciar riscos: se você, para não se atrasar, coloca seu despertador para acordar no horário adequado; olha para os lados da rua antes de atravessar; ou coloca o cinto de segurança ao entrar em um carro, a resposta é “sim”, você sabe e está gerenciando riscos, ainda que “inconscientemente”.</p>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default Anual