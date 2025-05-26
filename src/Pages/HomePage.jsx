import React from "react";
import NavBar from "./NavBar";
import { MdFunctions } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";
import Footer from "./Footer";

function HomePage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Section2 />
      <Footer />
    </>
  );
}

export default HomePage;

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[550px]"
        style={{
          backgroundImage: "url(kopii.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Aroma Sriwijaya</h1>
            <p className="mb-5 text-2xl font-bold">
              Premium Indonesian Coffe Beans for Global Markets
            </p>
            <button className="btn btn-primary">
              View Catalog Coffe <IoIosArrowRoundForward />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

function Section2() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
