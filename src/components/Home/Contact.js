import React, { useEffect } from "react";
import { contact } from "../../assets";
import Section from '../Reusable_Components/Section';
const Contact = () => {
  useEffect(() => {
    // Load the HubSpot form script dynamically
    const script = document.createElement("script");
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    // script.async = true;

    // Set up form configuration
    const config = {
      region: "na1",
      portalId: "39660215",
      formId: "a30f8cb2-7ec5-4e39-ae61-4d58374067de",
    };

    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          ...config,
          target: "#hubspot-form", // Specify the target div
        });
      }
    };

    document.body.appendChild(script);

    // Cleanup: remove the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container grid grid-cols-3 max-w-full bg-col6 my-16" id="contactUs">
  {/* HubSpot Contact Form (3/4 width) */}
  <div className="col-span-3 lg:col-span-2">
      <Section
      title={null} head='Get a quote' desc={null}
        button={null}
      />
      <div id="hubspot-form" className="px-8">
      </div>
  </div>

  {/* Image (1/4 width) */}
  <div className="col-span-3 lg:col-span-1 ">
    <img src={contact} alt="contactimage" className="container max-w-full h-full" />
  </div>
</div>
  );
};

export default Contact;


