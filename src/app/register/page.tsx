import Nav from "../ui/component/layoutcomponent/Nav";
import Register from "../ui/component/authcomponent/Register";

const page = () => {
  return (
    <div className="bg-white md:bg-primary-primary50 h-screen">
      <Nav />
      <Register />
    </div>
  );
};

export default page;
