"use client";
import Nav from "@/app/ui/component/layoutcomponent/Nav";
import ForgottenPassword from "@/app/ui/component/authcomponent/ForgottenPassword";
const page = () => {
  return (
    <div className="bg-white md:bg-primary-primary50 h-screen">
      <Nav />
      <ForgottenPassword />
    </div>
  );
};

export default page;
