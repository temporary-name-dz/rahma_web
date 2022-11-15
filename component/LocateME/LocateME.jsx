"use client";
// TODO: this component has  event listeners (onClick(), onChange(), etc) && Fetch data
// https://beta.nextjs.org/docs/rendering/server-and-client-components

import Image from "next/image";
import { LocateMeBtn } from "./locateMe.styled";
import accuracyIconStatic from "../../public/icons8-accuracy.svg";
import accuracyIcon from "../../public/icons8-accuracy.gif";

// async function getLocation() {
//   return;
//   navigator.geolocation.getCurrentPosition(async function (position) {
//     console.log("Latitude is :", position.coords.latitude);
//     console.log("Longitude is :", position.coords.longitude);

//     await fetchLocationName(
//       position.coords.latitude,
//       position.coords.longitude
//     );
//   });
// }

// const fetchLocationName = async (lat, lng) => {
//     return
//   await fetch(
//     `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`
//   )
//     .then((response) => response.json())
//     .then((responseJson) => {
//       console.log(
//         "ADDRESS GEOCODE is BACK!! => " + JSON.stringify(responseJson)
//       );
//       //TODO: adapt the geocoder  response  to setSelectedOption & redirect to pharmacies/[city] page...
//     });
// };

export default function LocateME() {
  {
    /* FIXME  google geocoding API ask for billing account */
  }
  return (
    <LocateMeBtn
      type="button"
      className="btn"
      title="Locate Me!"
      //   onClick={() => getLocation()}
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
    </LocateMeBtn>
  );
}