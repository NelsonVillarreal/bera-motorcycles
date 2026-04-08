import Link from "next/link";
import Carousel from "./components/carousel";
import ServicesHeroGrid from "./components/financial-services";
import FeaturedMotorcycles from "./components/featured-motorcycles";
import SocialPosts from "./components/social-posts";

export default function Home() {
  return (
    <>
      <Carousel />
      <FeaturedMotorcycles />
      <ServicesHeroGrid />
      <SocialPosts />
    </>
  );
}
