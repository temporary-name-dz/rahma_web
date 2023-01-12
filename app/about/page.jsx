"use client";
import Image from "next/image";
import ExternaLink from "@common/ExternaLink";

import {
  TeamWrapper,
  TeamHeader,
  MembersList,
  MemberItem as Item,
} from "./page.styled";
import members from "@public/membres_list.json";

import githubIcon from "@public/icons8-github-200.svg";
import linkedinIcon from "@public/icons8-linkedin-circled.svg";
import resumeIcon from "@public/icons8-resume.svg";

function SocialLink({
  MemberName,
  href,
  platform,
  icon,
  iconWidth = 32,
  iconHeight = 32,
}) {
  return (
    <ExternaLink
      href={href}
      title={`${MemberName}'s ${platform}`}
      name={
        <Image
          src={icon}
          alt={platform}
          width={iconWidth}
          height={iconHeight}
        />
      }
    />
  );
}

function MemberItem({ data }) {
  const { name, title, github, linkedin, resume, status } = data;
  //? should we replace the status with an emoji sad=unemployed happy employed
  return (
    <Item title={status}>
      <div className="img_wrapper">
        <Image
          src={`${github}.png`}
          className="image"
          alt={name}
          width={115}
          height={115}
        />
      </div>
      <h6>{name}</h6>
      <p>{title}</p>
      <div className="socials_wrapper flex-center">
        <SocialLink
          platform="github"
          href={github}
          icon={githubIcon}
          iconWidth={30}
          MemberName={name}
        />

        <SocialLink
          platform="linkedin"
          href={linkedin}
          icon={linkedinIcon}
          MemberName={name}
        />
        <SocialLink
          platform="resume"
          href={resume}
          icon={resumeIcon}
          iconWidth={30}
          iconHeight={30}
          MemberName={name}
        />
      </div>
    </Item>
  );
}

function Team() {
  return (
    <TeamWrapper className="flex-center">
      <TeamHeader>
        <h2>Meet our team</h2>
        <p>
          “ teamwork is essential - it allows you to blame someone else
          &#128516; ”
        </p>
      </TeamHeader>
      <MembersList>
        {members.map((member, index) => (
          <MemberItem key={index + member.name} data={member} />
        ))}
      </MembersList>
    </TeamWrapper>
  );
}

export default function page() {
  return <Team />;
}
