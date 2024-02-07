import { redirect } from "next/navigation";

const HomePage = () => {
  return redirect("/login");
};

export default HomePage;
