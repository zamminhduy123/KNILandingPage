export const metadata = {
  title: "Home - Simple",
  description: "Page description",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import WhatIsTestAS from "@/components/whatistestas";
import Preparation from "@/components/preparation";
import Tutor from "@/components/tutor";
import RoadMap from "@/components/roadmap";
import CustomerReviews from "@/components/reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIsTestAS/>
      {/* <BusinessCategories /> */}
      <Preparation/>
      <Tutor/>
      <RoadMap />
      {/* <FeaturesPlanet /> */}
      <CustomerReviews/>
      <LargeTestimonial />
      <Cta />
    </>
  );
}
