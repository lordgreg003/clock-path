"use client";

import ForgottenPassword from "@/ui/component/authcomponent/ForgottenPassword";
import Nav from "@/ui/component/layoutcomponent/Nav";

 ;
const page = () => {
  return (
    <div className="bg-white md:bg-primary-primary50 h-screen">
      <Nav />
      <ForgottenPassword />
    </div>
  );
};

export default page;
