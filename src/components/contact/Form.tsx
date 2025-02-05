import { useState, useEffect, useRef } from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";

const validationSchema = Yup.object().shape({
  message: Yup.string().required("Message is required"),
  user_email: Yup.string().email("Invalid email").required("Email is required"),
});

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef<HTMLFormElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  const sendEmail = () => {
    setError(false);
    setSuccess(false);

    if (!form.current) return;

    const emailServiceId = import.meta.env.VITE_PUBLIC_EMAIL_SERVICE_ID;
    const emailTemplateId = import.meta.env.VITE_PUBLIC_EMAIL_TEMPLATE_ID;
    const emailPublicKey = import.meta.env.VITE_PUBLIC_EMAIL_PUBLIC_KEY;

    emailjs
      .sendForm(emailServiceId || "", emailTemplateId || "", form.current, {
        publicKey: emailPublicKey || "",
      })
      .then(
        () => {
          setSuccess(true);

          form.current?.reset();
        },
        (e) => {
          console.error(e);
          setError(true);
        }
      );
  };

  return (
    <Formik
      initialValues={{ message: "", user_email: "" }}
      validationSchema={validationSchema}
      onSubmit={(_, { setSubmitting }) => {
        sendEmail();
        setSubmitting(false);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form
          ref={form}
          className="flex grow max-w-lg flex-col gap-8  bg-white/80 text-gray-900 shadow-primary-text shadow-md text-xl rounded-xl p-8"
        >
          <span>Dear Anel,</span>
          <div className="flex flex-col gap-1">
            <Field
              as="textarea"
              innerRef={textAreaRef}
              rows={6}
              className="input-field resize-none"
              name="message"
              id="message"
            />

            <ErrorMessage
              name="message"
              component="div"
              className="error-message"
            />
          </div>
          <span>My email address is:</span>
          <div className="flex flex-col gap-1">
            <Field
              type="email"
              className="input-field"
              name="user_email"
              id="user_email"
            />
            <ErrorMessage
              name="user_email"
              component="div"
              className="error-message"
            />
          </div>
          <span>Regards</span>
          <button
            type="submit"
            disabled={
              isSubmitting ||
              Object.keys(touched).length === 0 ||
              Object.keys(errors).length > 0
            }
            className="bg-accent-bg hover:bg-accent-hover disabled:bg-accent-bg/50 shadow-md text-accent-text font-semibold p-4 rounded"
          >
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              There was an error sending your message!
            </span>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
