import { useEffect, useState } from "react";
import { PaginateWrapper as Wrapper } from "./Common.styled";
// import { useGlobaleContext } from "../context";

export default function Paginate({
  itemsList,
  setPaginatedItems,
  showPerPage,
}) {
  // const { featured_projects, setPaginated_projects, showPerPage } =
  //   useGlobaleContext();
  const [page, setPage] = useState(0);
  const [pageBtns, setPageBtns] = useState([]);

  //Getting the total items number
  const number_of_items = itemsList.length;

  //Calculate the number of pages we are going to have
  const number_of_pages = Math.ceil(number_of_items / showPerPage);

  //Display new page project
  useEffect(() => {
    const start_from = page * showPerPage;
    const end_on = start_from + showPerPage;
    const tmp = itemsList.slice(start_from, end_on);

    setPaginatedItems(tmp);
    // eslint-disable-next-line
  }, [page]);

  const handlePage = (index) => {
    setPage(index);
  };
  const prevPage = () => {
    setPage(() =>
      page === 0 ? number_of_pages - 1 : (page - 1) % (number_of_pages - 1)
    );
  };
  const nextPage = () => {
    setPage(() => (page + 1) % number_of_pages);
  };

  // display pagination btns

  useEffect(() => {
    const tmp = [];
    for (
      let currentLink = 0;
      currentLink < Math.ceil(itemsList.length / showPerPage);
      currentLink++
    ) {
      tmp.push(
        <button
          key={currentLink}
          className={currentLink === page ? "active" : ""}
          onClick={() => handlePage(currentLink)}
        >
          {currentLink + 1}
        </button>
      );
    }

    setPageBtns(tmp);
  }, [itemsList, page, showPerPage]);

  return (
    <Wrapper>
      <button onClick={prevPage}>&lt;</button>
      {pageBtns}
      <button onClick={nextPage}>&gt;</button>
    </Wrapper>
  );
}
