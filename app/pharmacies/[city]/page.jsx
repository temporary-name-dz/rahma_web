"use client";
import { PharmaciesWrap } from "./page.styled";
import PharmaciesList from "../../../component/PharmaciesList/PharmaciesList";
import MapContainer from "../../../component/MapContainer/MapContainer";

export default function PharmaciesPage({ params }) {
  console.log(params);
  return (
    <PharmaciesWrap>
      <PharmaciesList list={params.city}></PharmaciesList>
      <MapContainer></MapContainer>
    </PharmaciesWrap>
  );
}
