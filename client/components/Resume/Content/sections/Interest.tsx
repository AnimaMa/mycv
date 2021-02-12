import React from "react";
import { SectionHeading } from "../../components/SectionHeading";
import { SectionWrap } from "../../components/SectionWrap";
import { useResume } from "../../ResumeProvider/ResumeProvider";

export interface InterestProps {
  className?: string;
}

const chunk = (arr, len) => {
  var chunks = [],
    i = 0,
    n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }

  return chunks;
};

export const Interest = (props: InterestProps) => {
  const { interest } = useResume();
  const columns = interest.length;
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
          <div className={`space-y-5 w-full`}>
            {interest &&
              chunk(interest, 4).map((chunk, index) => (
                <div key={index} className="grid grid-cols-4 divide-x divide-indigo-800 gap-y-3 text-center">
                  {chunk.map((interest) => (
                    <p key={interest.id} className="text-secondary font-thin ">
                      {interest.name}
                    </p>
                  ))}
                </div>
              ))}
          </div>
        </SectionWrap>
      </div>
    </div>
  );
};
