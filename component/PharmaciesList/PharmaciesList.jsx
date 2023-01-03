import { ListWrap, ListTitle, ListContent } from "./pharmaciesList.styled";
import placeholder from "../../public/placeholder.jpg";
import Card from "../Card/Card";
import list from "./pharmList";
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
          {list.map((pharmacy) => (
            <Card key={pharmacy.pharmID} data={pharmacy} city={commune} />
          ))}
        </ListContent>
      </ListWrap>
    );
  }
}
