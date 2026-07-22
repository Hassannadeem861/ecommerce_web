import Banner from "./components/HeroSection/Banner";
import HomeData from "./utils/data";
export default function Home() {
  const data = HomeData["home"];
  console.log("data: ", data);
  return (
    <>
      <Banner
        heading={data.heading}
        description={data.description}
        btnText={data.btnText}
        image={data.image}
      />
    </>
  );
}
