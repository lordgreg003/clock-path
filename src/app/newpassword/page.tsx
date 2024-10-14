import NewPassword from "@/app/ui/component/authcomponent/NewPassword";
import Nav from "@/app/ui/component/layoutcomponent/Nav";

const page = () => {
  return (
    <div className="bg-white md:bg-primary-primary50 h-screen">
      <Nav />
      <NewPassword />
    </div>
  );
};

export default page;
