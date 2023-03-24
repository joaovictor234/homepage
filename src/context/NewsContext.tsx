import { createContext, useState } from "react";
import { v4 } from "uuid";
import { NewsContextType } from "../@types/NewsContextType";
import { INews } from "../interface/INews";

export const NewsContext = createContext<NewsContextType | null>(null);

interface IProps {
  children: JSX.Element
}

const NewsContextProvider = ({children}: IProps) => {
  const [news, setNews] = useState<INews[]>([
    {
      id: v4(),
      data: new Date('2020-01-02'),
      description: 'Revisão de Baseline LEGADO de Produção do S562',
    },
    {
      id: v4(),
      data: new Date('2020-02-02'),
      description: 'Atualização de informações WIKI - Azure',
    },
    {
      id: v4(),
      data: new Date('2020-03-02'),
      description: 'Mapeamento dos endpoints da aplicação legada do S562 em cada funcionalidade da aplicação',
    },
    {
      id: v4(),
      data: new Date('2020-04-02'),
      description: 'Sugestão de criação de cubos BI para o cartão BNB e GIRO FLASH',
    },
    {
      id: v4(),
      data: new Date('2020-05-02'),
      description: 'Realizar o mapeamento de todos os endpoints chamados nas páginas ASP do NEL para o Cartão BNB',
    },
    {
      id: v4(),
      data: new Date(),
      description: 'Iskey Aprovar Not fiscal',
    },
    {
      id: v4(),
      data: new Date(),
      description: 'Testar a API do GateWay e verificar problemas',
    },
    {
      id: v4(),
      data: new Date(),
      description: 'Teste de compra e tipos de taxas',
    },
    {
      id: v4(),
      data: new Date(),
      description: 'Retirar a pendência da Atividade 836926',
    },
    {
      id: v4(),
      data: new Date('2020-01-02'),
      description: 'Revisão de Baseline LEGADO de Produção do S562',
    },
    {
      id: v4(),
      data: new Date('2020-02-02'),
      description: 'Atualização de informações WIKI - Azure',
    },
    {
      id: v4(),
      data: new Date('2020-03-02'),
      description: 'Mapeamento dos endpoints da aplicação legada do S562 em cada funcionalidade da aplicação',
    },
    {
      id: v4(),
      data: new Date('2020-04-02'),
      description: 'Sugestão de criação de cubos BI para o cartão BNB e GIRO FLASH',
    },
    {
      id: v4(),
      data: new Date('2020-05-02'),
      description: 'Realizar o mapeamento de todos os endpoints chamados nas páginas ASP do NEL para o Cartão BNB',
    },
  ])

  return <NewsContext.Provider value={{news, setNews}}>
    {children}
  </NewsContext.Provider>
}

export default NewsContextProvider;