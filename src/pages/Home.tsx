import {
  Cards,
  Contact,
  CourseVideoPresentation,
  DescriptionSection,
  InstructorSection,
  RegistrationForm,
} from "../components";

const Home = () => {
  return (
    <>
      <RegistrationForm />
      <InstructorSection />
      <DescriptionSection />
      <CourseVideoPresentation />
      <Cards />
      <Contact />
    </>
  );
};

export default Home;
