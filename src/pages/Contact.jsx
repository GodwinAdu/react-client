
import Breadcrumbs from "../components/commons/Breadcrumbs";
import ScrollUp from "../components/commons/ScrollUp";
import Contact from "../components/contact/Contact";
import ContactUs from "../components/contact/ContactUs";

const ContactPage = () => {
  return (
    <>
    <ScrollUp />
      <Breadcrumbs
        pageName="Contact Us"
        description="We would love to hear from you! If you have any questions, feedback, or simply want to connect with us,"
      />
      <ContactUs />

      <Contact />
    </>
  );
};

export default ContactPage;
