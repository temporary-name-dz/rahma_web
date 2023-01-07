"use client";
import Image from "next/image";
import { useId, useState } from "react";
import Select from "react-select";
import locationIcon from "../../../public/icons8-location.gif";
import locationIconStatic from "../../../public/icons8-location.svg";
import searchIconStatic from "../../../public/icons8-search.svg";
import LocateME from "../../LocateME/LocateME";
import algeriaCitiesJSON from "./algeria_cities.json";
import { SearchContainer } from "./search.styled";
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

  // to fix: Warning: Prop `id` did not match. Server: "react-select-2-live-region" Client: "react-select-3-live-region"
  const id = useId();

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
            instanceId={id}
            className="react-select-container"
            classNamePrefix="react-select"
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={algeriaCitiesJSON}
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
