import SucessMessage from "@/app/ui/component/authcomponent/SucessMessage";
import Nav from "@/app/ui/component/layoutcomponent/Nav";
import React from "react";

const page = () => {
  return (
    <div className="bg-white md:bg-primary-primary50 h-screen">
      <Nav />
      <SucessMessage />
    </div>
  );
};

export default page;
