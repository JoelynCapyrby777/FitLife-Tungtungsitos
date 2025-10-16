import Header from "../../components/layout/Header/Header";
import LandingHero from "../../components/ladings/LandingHero";
import LandingFeatures from "../../components/ladings/LandingFeatures";
import LandingHowItWorks from "../../components/ladings/LandingHowItWorks";
import LandingTestimonials from "../../components/ladings/LandingTestimonials";
import LandingCta from "../../components/ladings/LandingCta";
import Footer from "../../components/layout/Footer/Footer";
import "./home-landing.css";
import React from "react";

const HomeLandingPage: React.FC = () => (
  <div className="landing-root">
    <Header />
    <main>
      <LandingHero />
      <LandingFeatures />
      <LandingHowItWorks />
      <LandingTestimonials />
      <LandingCta />
    </main>
    <Footer />
  </div>
);

export default HomeLandingPage;