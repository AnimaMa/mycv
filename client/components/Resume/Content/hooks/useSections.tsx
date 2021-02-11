import React, { ReactNode } from "react";
import { useResume } from "../../ResumeProvider/ResumeProvider";
import { Courses } from "../sections/Courses/Courses";
import { Education } from "../sections/Education";
import { Interest } from "../sections/Interest";
import { Languages } from "../sections/Languages/Languages";
import { References } from "../sections/References/References";
import { Skills } from "../sections/Skills";
import { WorkExperiences } from "../sections/WorkExperiences";

export interface Section {
  name: string;
  section: any[];
  link: string;
  component: ReactNode;
}

export const useSections = (): Section[] => {
  const { workExperience, education, language, interest, skill, course, reference } = useResume();

  return [
    {
      name: "Práca",
      section: workExperience,
      link: "workExperiences",
      component: <WorkExperiences />,
    },
    {
      name: "Vzdelanie",
      section: education,
      link: "education",
      component: <Education />,
    },
    {
      name: "Referencie",
      section: reference,
      link: "references",
      component: <References />,
    },
    {
      name: "Kurzy",
      section: course,
      link: "courses",
      component: <Courses />,
    },
    {
      name: "Jazyky",
      section: language,
      link: "languages",
      component: <Languages />,
    },
    {
      name: "Zručnosti",
      section: skill,
      link: "skills",
      component: <Skills />,
    },
    {
      name: "Záujmy",
      section: interest,
      link: "interests",
      component: <Interest />,
    },
  ];
};
