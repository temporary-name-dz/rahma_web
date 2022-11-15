"use client";
import Image from "next/image";
import React, { useState } from "react";

import Select from "react-select";
import { SearchContainer } from "./search.styled";
import LocateME from "../../LocateME/LocateME";

import algeriaCities from "./algeria_cities";
import locationIcon from "./icons8-location.gif";
import locationIconStatic from "./icons8-location.svg";

import searchIconStatic from "../../../public/icons8-search.svg";

const options = algeriaCities.map(
  ({ commune_name_ascii, wilaya_name_ascii, ...tmp }) => {
    return {
      value: `${commune_name_ascii}_${wilaya_name_ascii}`,
      label: `${commune_name_ascii}, ${wilaya_name_ascii}`,
    };
  }
);

export default function SearchWrap(params) {
  const [selectedOption, setSelectedOption] = useState(null);
  const redirectToPharmaciesPage = (e) => {
    e.preventDefault();
    // FIXME handel null value
    if (selectedOption) {
      // redirect To Pharmacies Page
      window.location.href = `/pharmacies/${selectedOption.value}`;
    } else {
      alert("Please select a City !!");
    }
  };

  return (
    <SearchContainer>
      <div className="input-desc" title="locate Me!">
        <Image
          className="static"
          alt="icon"
          src={locationIconStatic}
          width={20}
          height={20}
        />
        <Image alt="icon" src={locationIcon} width={20} height={20} />
      </div>

      <form className="form" onSubmit={(e) => redirectToPharmaciesPage(e)}>
        <div className="input-container">
          <Select
            className="react-select-container"
            classNamePrefix="react-select"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          ></Select>
          <LocateME />
        </div>
        <button className="btn btn-search" type="submit">
          Search
          <Image
            className="btn-img"
            alt="icon"
            src={searchIconStatic}
            width={20}
            height={20}
          />
        </button>
      </form>
    </SearchContainer>
  );
}
