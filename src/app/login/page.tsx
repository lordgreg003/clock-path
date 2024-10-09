import LoginPage from "@/ui/component/authcomponent/login";
import Nav from "@/ui/component/layoutcomponent/Nav";

export default function Page() {
  return (
    <div className="bg-white md:bg-primary-primary500 h-screen">
      <Nav />
      <LoginPage />
    </div>
  );
}
