import externaLinks from "@public/external_links.json";
import navLinks from "@public/navigation.json";
import Image from "next/image";
import Link from "next/link";
import {
  FooterCopyright,
  FooterNavigation,
  FooterWrapper,
  FooterLinks,
  LogoBox,
} from "./Common.styled";
function ExternalLink({ href, name }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {name}
    </a>
  );
}

function HearthIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      fill="#ff5555"
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
    >
      <path fill="none" d="M0 0h24v24H0z"></path>
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
    </svg>
  );
}
function VercelIcon() {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
    >
      <title>Vercel</title>
      <path d="M24 22.525H0l12-21.05 12 21.05z" />
    </svg>
  );
}
function Logo() {
  return (
    <LogoBox>
      <Image src="/logoipsum-264.svg" alt="logo" width={148} height={31} />
      <p>Thanks for reading!</p>
    </LogoBox>
  );
}

function CopyRights() {
  return (
    <FooterCopyright className="flex-column">
      <div>
        Made with by&nbsp;
        <HearthIcon />
        &nbsp;
        <ExternalLink
          href="https://github.com/abdelghanyMh"
          name="@abdelghanyMh"
        />
      </div>
      <div>
        icons: <ExternalLink href="https://icons8.com/" name="icons8" />
      </div>
      <div>
        Hosted on <ExternalLink href="https://vercel.com/" name="vercel" />
        <VercelIcon />
      </div>
    </FooterCopyright>
  );
}

function Navigation() {
  return (
    <FooterNavigation className="flex-column">
      <p>navigation</p>
      {navLinks.map(({ name, href }, index) => {
        return (
          <Link key={index + href + "_footer"} href={href} className="truncate">
            {name}
          </Link>
        );
      })}
    </FooterNavigation>
  );
}
function Links() {
  return (
    <FooterLinks className="flex-column">
      <p>Links</p>
      {externaLinks.map(({ href, name }, index) => {
        return (
          <ExternalLink key={name + index + "footer"} href={href} name={name} />
        );
      })}
    </FooterLinks>
  );
}
export default function Footer() {
  return (
    <FooterWrapper>
      <Logo />
      <Navigation />
      <CopyRights />
      <Links />
    </FooterWrapper>
  );
}
