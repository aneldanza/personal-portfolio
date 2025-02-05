// import { motion } from "motion/react";
import AnimatedPageWrapper from "../common/AnimatedPageWrapper";
import ContactForm from "./Form";
// import ContactMeAnimation from "./contactMeAnimation";

const Contact = () => {
  return (
    <AnimatedPageWrapper>
      <div className="h-full flex flex-col lg:flex-row app-container overflow-scroll">
        <div className="h-1/2 lg:h-full lg:w-1/2 flex lg:flex-col gap-4 items-center justify-center text-6xl ">
          {/* <ContactMeAnimation /> */}
        </div>

        <div className="h-1/2 lg:h-full lg:w-1/2  flex items-start lg:items-center  justify-center">
          <ContactForm />
        </div>
      </div>
    </AnimatedPageWrapper>
  );
};

export default Contact;
