"use client";
import { PharmaciesWrap } from "./page.styled";
import { PharmaciesList } from "../../../component/PharmaciesList/PharmaciesList";

export default function PharmaciesPage({ params }) {
  console.log(params);
  return (
    <PharmaciesWrap>
      <PharmaciesList city={params.city}></PharmaciesList>
    </PharmaciesWrap>
  );
}
