import EmailSucessMessage from "@/app/ui/component/authcomponent/EmailSucessMessage";
import Nav from "@/app/ui/component/layoutcomponent/Nav";
import React from "react";

const page = () => {
  return (
    <div className="bg-white md:bg-primary-primary50 h-screen">
      <Nav />
      <EmailSucessMessage />
    </div>
  );
};

export default page;
