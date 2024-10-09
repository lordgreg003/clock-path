import One_time_Verification from "@/ui/component/authcomponent/One_time_Verification";
import Nav from "@/ui/component/layoutcomponent/Nav";

const page = () => {
  return (
    <div className="bg-white md:bg-primary-primary50 h-screen">
      <Nav />
      <One_time_Verification />
    </div>
  );
};

export default page;
