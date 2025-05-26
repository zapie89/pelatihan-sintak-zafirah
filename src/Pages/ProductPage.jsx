import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { MdFunctions } from "react-icons/md";
import { IoIosArrowRoundForward } from "react-icons/io";

function ProductPage() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Section2 />
      <Footer />
    </>
  );
}

export default ProductPage;

function HeroSection() {
  return (
    <>
      <div
        className="hero h-[550px]"
        style={{
          backgroundImage: "url(src/assets/kopi2.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Our Coffee Product</h1>
            <p className="mb-5 text-2xl font-bold">
              Premium Arabika and Robusta beans from Indonesia's finest growing
              regions
            </p>
            <button className="btn btn-primary">
              Request Sampler <IoIosArrowRoundForward />
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
      <div>
        <h2 className="flex justify-center items-center mt-7 text-4xl font-bold">
          Product
        </h2>
      </div>
      <div className="flex justify-center gap-4 mt-5">
        <div className="card bg-base-100 w-96 shadow-sm  ">
          <figure className="px-10 pt-10">
            <img
              src="src/assets/latte.jpg"
              alt="Latte"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Coffee Latte</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions ">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm  ">
          <figure className="px-10 pt-10">
            <img
              src="src/assets/matcha.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Matcha Latte</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm  ">
          <figure className="px-10 pt-10">
            <img
              src="src\assets\american.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Americano</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4 mt-5">
        <div className="card bg-base-100 w-96 shadow-sm  ">
          <figure className="px-10 pt-10">
            <img src="src/assets/aren.jpg" alt="Latte" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Aren Latte</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions ">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm  ">
          <figure className="px-10 pt-10">
            <img
              src="src\assets\matchiato.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Latte Macchiato</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 w-96 shadow-sm  ">
          <figure className="px-10 pt-10">
            <img
              src="src\assets\american.jpg"
              alt="Shoes"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Americano</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
