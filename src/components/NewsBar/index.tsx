import { ChangeEvent, useContext, useEffect, useState } from "react";
import { NewsContextType } from "../../@types/NewsContextType";
import { NewsContext } from "../../context/NewsContext";
import { INews } from "../../interface/INews";
import { IOption } from "../../interface/IOption";
import HomeBox from "../Box";
import NewsBarFooter from "./Footer";
import { useStyles } from "./newsBarStyle";
import NewsBarTable from "./Table";

const NewsBar = () => {
  const classes = useStyles();
  const { news } = useContext(NewsContext) as NewsContextType;
  const [rowsPerPageOptions, setRowsPerPageOptions] = useState<
    (number | IOption)[]
  >([]);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [numberPages, setNumberPages] = useState(0);
  const [page, setPage] = useState(0);
  const [filteredNews, setFilteredNews] = useState<INews[]>([]);

  const handlePagination = (value: number) => (event: ChangeEvent<unknown>) => {
    setPage(page + value);
  };

  useEffect(() => {
    setRowsPerPageOptions([]);
    const rowsOptions: (number | IOption)[] = [];
    rowsOptions.push(new IOption(news.length, "Todos"));
    if (news.length > 50) rowsOptions.unshift(50);
    if (news.length > 25) rowsOptions.unshift(25);
    if (news.length > 15) rowsOptions.unshift(15);
    if (news.length > 5) rowsOptions.unshift(5);
    setRowsPerPageOptions(rowsOptions);
  }, [news.length]);

  useEffect(() => {
    setNumberPages(Math.ceil(news.length / rowsPerPage));
  }, [news.length, rowsPerPage]);

  useEffect(() => {
    let n = news.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    setFilteredNews(n);
  }, [page, rowsPerPage, news]);

  return (
    <HomeBox title="Notícias">
      <div className={classes.newsBarTable}>
        <NewsBarTable news={filteredNews} />
        <NewsBarFooter
          page={page}
          setPage={setPage}
          numberPages={numberPages}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          handlePagination={handlePagination}
          rowsperPageOptions={rowsPerPageOptions}
        />
      </div>
    </HomeBox>
  );
};

export default NewsBar;
