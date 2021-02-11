import { Section } from "../Resume/Content/hooks/useSections";

export const filterEmptySections = (section: Section) => section.section.length > 0;
