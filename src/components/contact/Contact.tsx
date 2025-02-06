// import { motion } from "motion/react";
import AnimatedPageWrapper from "../common/AnimatedPageWrapper";
import ContactForm from "./Form";
import ContactMeAnimation from "./ContactMeAnimation";

const Contact = () => {
  return (
    <AnimatedPageWrapper>
      <div className="h-full flex flex-col lg:flex-row app-container overflow-scroll relative">
        <div className="h-1/5 md:h-1/4 lg:h-full lg:w-1/2 flex lg:flex-col gap-4 items-center justify-center text-6xl">
          <ContactMeAnimation />
        </div>

        <div className="h-5/6 md:h-3/4 lg:h-full lg:w-1/2  flex items-start lg:items-center  justify-center sticky top-0">
          <ContactForm />
        </div>
      </div>
    </AnimatedPageWrapper>
  );
};

export default Contact;
