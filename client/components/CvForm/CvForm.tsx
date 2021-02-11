import { CircularProgress } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useRouter } from "next/router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { api } from "../../lib/api/api";
import { generateResumeRoute } from "../../lib/routes";
import { BasicsSection } from "./components/BasicsSection/BasicsSection";
import { CoursesSection } from "./components/CoursesSection/CoursesSection";
import { EducationSection } from "./components/EducationSection/EducationSection";
import { InterestsSection } from "./components/InterestsSection/InterestsSection";
import { LanguagesSection } from "./components/LanguagesSection/LanguagesSection";
import { ReferencesSection } from "./components/ReferencesSection/ReferencesSection";
import { SkillsSection } from "./components/SkillsSection/SkillsSection";
import { WorkExperiences } from "./components/WorkExperiences/WorkExperiences";
import { useGeneratedUid } from "./hooks/useGeneratedUid";

export interface CvFormProps {
  className?: string;
}

const CvFormInner = (props: CvFormProps) => {
  const { uid } = useGeneratedUid();
  const router = useRouter();

  const rhfMethods = useForm();
  const { handleSubmit, errors } = rhfMethods;

  const { mutate, isLoading } = useMutation(
    (values: any) => api({ url: `/resumes`, data: { ...values, uid: uid }, method: "POST" }),
    {
      onSuccess: () => {
        router.push(generateResumeRoute(uid));
      },
    }
  );

  const onSubmit = (values) => mutate(values);

  return (
    <div className={props.className}>
      {JSON.stringify(errors, null, 2)}
      <FormProvider {...rhfMethods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <BasicsSection />
          <WorkExperiences />
          <LanguagesSection />
          <EducationSection />
          <SkillsSection />
          <CoursesSection />
          <InterestsSection />
          <ReferencesSection />

          <Grid container justify="center">
            <Button
              disabled={isLoading}
              variant="contained"
              color="primary"
              onClick={() => {
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                });
              }}
              type="submit"
              className="btn btn-primary"
            >
              {isLoading ? (
                <div>
                  <CircularProgress size={20} color="secondary" />
                  Vytvaram CV
                </div>
              ) : (
                <div>Vytvoriť</div>
              )}
            </Button>
          </Grid>
        </form>
      </FormProvider>
    </div>
  );
};

export const CvForm = CvFormInner;
