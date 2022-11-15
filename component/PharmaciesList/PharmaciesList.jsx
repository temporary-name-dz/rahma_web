import Pharmacies from "./test.json";
import { ListWrap } from "./pharmaciesList.styled";

async function getPharmacies(city) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${city}`, {
    next: { revalidate: 10 }, // this tells fetch to regenerate page on server if it is older then 10 seconds !!!
  });

  const data = res.json();
  return data;
}
export default function PharmaciesList(city) {
  // const Pharmacies = await getPharmacies(params.city);

  return (
    <ListWrap>
      <h1>pharmacies list</h1>
    </ListWrap>
  );
}
