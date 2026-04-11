import Banner from "@/components/global/banner";
import React from "react";
import Form from "@/components/contact/form";

function Contact() {
  return (
    <>
      <Banner
        title={"Contact Us"}
       
        slug={"contact-us"}
      />
      <Form />
      

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.709150303587!2d77.2513417!3d28.548460700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce31cebed1313%3A0x7fd2d1e161b61814!2sImmigration%20Valueadz!5e0!3m2!1sen!2sin!4v1775908853882!5m2!1sen!2sin"
        width="100%"
        height="450"
        allowFullScreen={true}
        
      ></iframe>

    </>
  );
}

export default Contact;
