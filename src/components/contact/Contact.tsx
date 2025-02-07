// import { motion } from "motion/react";
import AnimatedPageWrapper from "../common/AnimatedPageWrapper";
import ContactForm from "./Form";
import ContactMeAnimation from "./ContactMeAnimation";

const Contact = () => {
  return (
    <AnimatedPageWrapper>
      <div className="h-full min-h-screen flex flex-col gap-4 lg:flex-row   lg:items-center app-container overflow-scroll pb-24 pt-10 lg:pt-0">
        <div className="lg:h-full lg:w-1/2 flex lg:flex-col gap-4 items-center justify-center text-2xl lg:text-6xl">
          <ContactMeAnimation />
        </div>

        <div className="lg:h-full lg:w-1/2  flex flex-grow items-start lg:items-center  justify-center">
          <ContactForm />
        </div>
      </div>
    </AnimatedPageWrapper>
  );
};

export default Contact;
