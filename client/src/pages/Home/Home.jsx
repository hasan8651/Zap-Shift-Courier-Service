import Services from "../Services/Services";
import Banner from "./sections/Banner";
import Brands from "./sections/Brands";
import HowItWorks from "./sections/HowItWorks";
import Testimonials from "./sections/Testimonials/Testimonials";

const testimonialsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <Services />
      <Brands />
      <Testimonials testimonialsPromise={testimonialsPromise} />
    </div>
  );
};

export default Home;
