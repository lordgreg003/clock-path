import LoginPage from "../ui/component/authcomponent/Login";
import Nav from "../ui/component/layoutcomponent/Nav";

export default function Page() {
  return (
    <div className="bg-white w-full md:bg-primary-primary50 ">
      <Nav />
      <LoginPage />
    </div>
  );
}
