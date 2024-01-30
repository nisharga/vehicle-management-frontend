import Head from "next/head";
import Banner from "../components/Banner/Banner";
import Service from "../components/UI/service/Service";
import ToggleMenus from "../components/UI/service/ToggleMenus";
const HomePage = () => {
  return (
    <div>
      <Head>
        <title>VT-Home</title>
      </Head>
      <Banner />
      <Service />
      <ToggleMenus />
    </div>
  );
};

export default HomePage;
