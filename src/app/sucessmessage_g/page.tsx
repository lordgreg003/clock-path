import React from "react";
import Nav from "../ui/component/layoutcomponent/Nav";
import EmailSucessMessage from "../ui/component/authcomponent/EmailSucessMessage";
const page = () => {
  return (
    <div className="bg-white md:bg-primary-primary50 h-screen">
      <Nav />
      <EmailSucessMessage />
    </div>
  );
};

export default page;
