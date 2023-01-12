import Image from "next/image";
import avatar from "@public/icons8-customer-48.png";
import directionsIconStatic from "@public/icons8-data-transfer-96.svg";
import locationIconOrangeStatic from "@public/icons8-location-orange.svg";
import locationIconStatic from "@public/icons8-location.svg";
import mapIconStatic from "@public/icons8-map-marker.svg";
import placeholder from "@public/placeholder.jpg";
import Overlay from "../Common/Overlay";
import {
  Avatar,
  CardBody,
  CardCTA,
  CardHeader,
  CardWrap,
  CtaTooltip,
  Status,
  Tooltip,
} from "./Card.styled";

function Header({ ownerId, status }) {
  return (
    <CardHeader>
      {/* FIXME: the width and heght should be set here not css  https://youtu.be/eFzNekhVhmM?t=1487*/}
      <Image
        className="card--image grow"
        alt="Pharmacy Image"
        src={placeholder}
        width={800}
        height={533}
      />
      <Avatar className="grow">
        <Image
          className="image"
          alt="Owner Avatar"
          src={avatar}
          width={34}
          height={34}
        />
        <Tooltip className="tooltip">
          {/* TODO: is this used? */}
          Added By <a href={ownerId}>{ownerId}</a>
        </Tooltip>
      </Avatar>
      <Status isItOpen={status}>{status}</Status>
    </CardHeader>
  );
}

function Body({ pharmacyGoogleMapsLink, name, address }) {
  return (
    <CardBody>
      <a
        className="name-wrap"
        target="_blank"
        rel="noopener noreferrer"
        href={pharmacyGoogleMapsLink}
        aria-label={name + "google maps"}
        title={name + "google maps"}
      >
        <h3>{name}</h3>
        <Image
          className="img"
          alt="icon"
          src={mapIconStatic}
          width={20}
          height={20}
        />
      </a>
      <a
        className="location-wrap"
        target="_blank"
        rel="noopener noreferrer"
        href={pharmacyGoogleMapsLink}
        aria-label={name + "google maps"}
        title={name + "google maps"}
      >
        <Image
          className="img"
          alt="icon"
          src={locationIconOrangeStatic}
          width={15}
          height={15}
        />
        <p>{address}</p>
      </a>
    </CardBody>
  );
}

function CTA({ name, hour, days, pharmacyGoogleMapsLink, directionLink }) {
  <CardCTA>
    <div className="hours">
      <span>
        {days}
        <strong>{hour}</strong>
      </span>
    </div>
    <div className="cta-wrap">
      <a
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name + "'s maps directions"}
        title={name + "maps directions"}
        href={directionLink}
      >
        <Image
          className="img"
          alt="direction"
          src={directionsIconStatic}
          width={15}
          height={15}
          title={name + "maps directions"}
          href={directionLink}
        />
        <CtaTooltip className="tooltip">find directions</CtaTooltip>
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={pharmacyGoogleMapsLink}
        aria-label={name + "google maps"}
        title={name + "google maps"}
      >
        <Image
          className="img"
          alt="place"
          src={locationIconStatic}
          width={15}
          height={15}
          aria-label={name + "google maps"}
          title={name + "google maps"}
        />
        <CtaTooltip className="tooltip">on the map</CtaTooltip>
      </a>
    </div>
  </CardCTA>;
}
export default function Card({ data, city }) {
  const {
    pharmID,
    name,
    address,
    latitude: pharmacyLatitude,
    longitude: pharmacyLongitude,
    status,
    ownerId,
    hours,
  } = data;
  // TODO: format closing time like google does (closing soon 9pm, closed 30 min ago)
  const [days, hour] = hours.split(",");
  // TODO get the OWNER data
  //? is it better to format the data & generate direction and google maps link in the parent
  //? and  send only data to this component
  //? i guess if we used this component in other parent then the pharmacies list a refactor is needed

  // TODO: after adding the global stat if the users didn't clicked locate me in the home page this component will ask for location
  const locateME = [34.95238737940395, -1.3723375517557257];
  const [userLatitude, userLongitude] = locateME;

  // TODO add me to the globale STAte
  city = "hennaya";
  const directionLink = `https://www.google.com/maps/dir/?api=1&origin=${userLatitude},${userLongitude}&destination=${pharmacyLatitude},${pharmacyLongitude}&travelmode=driving&map_action=map&zoom=15`;
  const pharmacyGoogleMapsLink = `https://www.google.com/maps/search/?api=1&query=${name.replaceAll(
    /\s/g,
    "+"
  )}+${city}&map_action=map&zoom=15`;
  //
  return (
    <CardWrap key={pharmID}>
      <Header ownerId={ownerId} status={status} />
      <Body
        name={name}
        address={address}
        pharmacyGoogleMapsLink={pharmacyGoogleMapsLink}
      />
      <CTA
        name={name}
        hour={hour}
        days={days}
        pharmacyGoogleMapsLink={pharmacyGoogleMapsLink}
        directionLink={directionLink}
      />

      {status && status != "Open" ? <Overlay /> : null}
    </CardWrap>
  );
}

//  direction link
// docs link : https://developers.google.com/maps/documentation/urls/get-started#directions-action
// travelmode : driving, walking , transit
// https://www.google.com/maps/dir/?api=1&origin=34.95238737940395,-1.3723375517557257&destination=34.94867637148608,-1.3711359221871975
// &travelmode=driving&map_action=map&zoom=15
// latitude,longitude
