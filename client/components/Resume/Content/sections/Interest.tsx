import React from "react";
import { SectionHeading } from "../../components/SectionHeading";
import { SectionWrap } from "../../components/SectionWrap";
import { useResume } from "../../ResumeProvider/ResumeProvider";

export interface InterestProps {
  className?: string;
}

export const Interest = (props: InterestProps) => {
  const { interest } = useResume();
  return (
    <div className={props.className} id="interests">
      <SectionHeading
        withIcon={true}
        heading="Záujmy / Záľuby"
        iconUrl="/img/icon_interests.svg"
        iconAlt="interests icon"
      />
      <div id="interest">
        <SectionWrap className="flex flex-row">
          {interest &&
            interest.map((interest) => (
              <p key={interest.id} className="text-secondary font-thin  mr-2  ">
                {interest.name} <span className="text-dark">|</span>
              </p>
            ))}
        </SectionWrap>
      </div>
    </div>
  );
};
