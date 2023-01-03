"use client";
import { PharmaciesWrap } from "./page.styled";
import PharmaciesList from "../../component/PharmaciesList/PharmaciesList";

export default function PharmaciesPage({ params }) {
  return (
    <PharmaciesWrap>
      <PharmaciesList city={params.city}></PharmaciesList>
    </PharmaciesWrap>
  );
}
