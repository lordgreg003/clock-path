import Nav from "@/app/ui/component/layoutcomponent/Nav";
import NewPassword from "@/app/ui/component/authcomponent/NewPassword";
const page = () => {
  return (
    <div className="bg-white md:bg-primary-primary50 h-screen">
      <Nav />
      <NewPassword />
    </div>
  );
};

export default page;
