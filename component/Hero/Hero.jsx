"use client";
import Image from "next/image";
import herobg from "./22.jpg";
import hospitalIcon from "./icons8-hospital-96.png";
import { HeroContainer } from "./hero.styled";
import SearchWrap from "./SearchWrap/SearchWrap";
function Hero(params) {
  return (
    <HeroContainer>
      <Image className="hero-bg" alt="hero bg" src={herobg} />
      <div className="header">
        <div className="overlay"></div>
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
      <SearchWrap />
      </div>
    </HeroContainer>
  );
}

export default Hero;
