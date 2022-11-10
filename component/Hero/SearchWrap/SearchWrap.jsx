"use client";
import Image from "next/image";
import React, { useState } from "react";

import Select from "react-select";
import { SearchContainer } from "./search.styled";

import algeriaCities from "./algeria_cities";
import locationIcon from "./icons8-location.gif";
import locationIconStatic from "./icons8-location.svg";
// import accuracyIconStatic from "../../../public/icons8-accuracy.svg";
// import accuracyIcon from "../../../public/icons8-accuracy.gif";

import searchIconStatic from "../../../public/icons8-search.svg";

export default function SearchWrap(params) {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = algeriaCities.map(
    ({ commune_name_ascii, wilaya_name_ascii, ...tmp }) => {
      return {
        value: `${commune_name_ascii}, ${wilaya_name_ascii}`,
        label: `${commune_name_ascii}, ${wilaya_name_ascii}`,
      };
    }
  );

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

      <form className="form" action="/route" method="post">
        <div className="input-container">
          <Select
            className="react-select-container"
            classNamePrefix="react-select"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          ></Select>

          {/* FIXME  google geocoding API ask for billing account */}
          {/* <button
            type="button"
            className="btn btn-locate"
            title="Locate Me!"
            onClick={() => getLocation()}
          >
            <div className="accuracy-container">
              <Image
                className="static"
                alt="icon"
                src={accuracyIconStatic}
                width={20}
                height={20}
              />
              <Image alt="icon" src={accuracyIcon} width={20} height={20} />
            </div>
          </button> */}
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
