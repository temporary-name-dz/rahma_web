import { useState } from "react";
import Card from "../Card/Card";
import ListPaginate from "../Common/Paginate";
import { ListContent, ListTitle, ListWrap } from "./pharmaciesList.styled";
import listPharm from "./pharmList";

async function getPharmacies(city) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${city}`, {
    next: { revalidate: 10 }, // this tells fetch to regenerate page on server if it is older then 10 seconds !!!
  });

  const data = res.json();
  return data;
}
// TODO: get user's current location. lan & lat to add them in &destination=

export default function PharmaciesList({ city }) {
  // const Pharmacies = await getPharmacies(params.city);
  const [commune, daira] = city.split("_");

  // TODO: Add me to the global state
  const [list, setList] = useState(listPharm);
  const [paginatedList, setPaginatedList] = useState(list);

  // TODO: decide if we give the user the right to set how much we show pharmacies per page
  // TODO: Add me to the global state
  const perPage = 6;

  if (!list) {
    return (
      <ListWrap className="flex-center">
        <h1>
          Results For :<span> {commune}</span>
        </h1>
        <p>NO PHARMACIES FOUND...(-_-)</p>
      </ListWrap>
    );
  } else {
    return (
      <ListWrap>
        <ListTitle>
          <h1>
            Results For&nbsp;:&nbsp;<span>{commune}</span>
          </h1>
        </ListTitle>
        <ListContent>
          {paginatedList.map((pharmacy, index) => (
            <Card
              key={`${pharmacy.pharmID}${index}`}
              data={pharmacy}
              city={commune}
            />
          ))}
        </ListContent>
        <ListPaginate
          itemsList={list}
          setPaginatedItems={setPaginatedList}
          showPerPage={perPage}
        />
      </ListWrap>
    );
  }
}
