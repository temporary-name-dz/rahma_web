"use client";
import { PharmaciesWrap } from "./page.styled";
import PharmaciesList from "../../../component/PharmaciesList/PharmaciesList";
import MapContainer from "../../../component/MapContainer/MapContainer";

export default function PharmaciesPage({ params }) {
  return (
    <PharmaciesWrap>
      <PharmaciesList city={params.city}></PharmaciesList>
      <MapContainer></MapContainer>
    </PharmaciesWrap>
  );
}
