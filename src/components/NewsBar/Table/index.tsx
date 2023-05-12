import { INews } from "../../../interface/INews";
import { useStyles } from "./newsBarTableStyle";

import { convertToBRLData } from "../../../util/convertData";

interface INewsBarTable {
  news: INews[];
}

const NewsBarTable = ({ news }: INewsBarTable) => {
  const classes = useStyles();

  return (
    <div className={classes.table}>
      <div className={`${classes.header} ${classes.headerDefault}`}>
        <>
          <p>Data</p>
          <p>Descrição</p>
        </>
      </div>
      <div>
        {news &&
          news.map((n) => (
            <div key={n.id} className={`${classes.row} ${classes.rowDefault}`}>
              <div className={`${classes.rowValue} ${classes.rowData}`}>
                {convertToBRLData(n.data)}
              </div>
              <div className={classes.rowValue}>
                <p>{n.description}</p>
              </div>
            </div>
          ))}
        {news && news.length === 0 && (
          <p className={classes.noRows}>Não há comunicados...</p>
        )}
      </div>
    </div>
  );
};

export default NewsBarTable;
