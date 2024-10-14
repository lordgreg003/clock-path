import Nav from "@/app/ui/component/layoutcomponent/Nav";
import One_time_Verification from "../ui/component/authcomponent/One_time_Verification";

const page = () => {
  return (
    <div className="bg-white md:bg-primary-primary50 h-screen">
      <Nav />
      <One_time_Verification />
    </div>
  );
};

export default page;
