"use client";
import Image from "next/image";
import herobg from "./22.jpg";
import hospitalIcon from "./icons8-hospital-96.png";
import { HeroContainer } from "./hero.styled";
import Overlay from "@common/Overlay";
import SearchWrap from "@common/SearchWrap";

function Hero(params) {
  return (
    <HeroContainer>
      <Image
        className="hero-bg image "
        alt="hero bg"
        src={herobg}
        width={1910}
        height={670}
      />
      <div className="header">
        <Overlay />
        <Image
          alt="icon"
          className="hero-icon"
          src={hospitalIcon}
          width={96}
          height={96}
        />
        <div className="textbox">
          <h1 className="heading-primary">Rahma pharmacy finder</h1>
          <h6>locate and contact pharmacies on duty easily.</h6>
        </div>
        <SearchWrap key="hero-SearchWrap" modal={false} />
      </div>
    </HeroContainer>
  );
}

export default Hero;
