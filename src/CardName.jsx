import React from "react";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

function CardName() {
  return (
    <>
      <div className="bg-grey-200 flex items-center justify-center h-screen text-center">
        <div className="w-94 h-auto border-2 bg-white p-4">
          <div className="flex items-center justify-center flex-col">
            <img
              src="src\assets\billie.jpg"
              alt=" "
              className="w-30 rounded-full shadow- border-2"
            />
            <h1 className="text-xl font-bold">BILLIE SYAHPUTRA</h1>
            <p className="text-gray-500">Singer</p>
          </div>

          <div className="mt-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              voluptatibus nam assumenda reprehenderit consectetur saepe ratione
              sequi accusantium a reiciendis earum id autem repudiandae quod,
              animi ducimus ex, recusandae blanditiis?
            </p>
          </div>
          <LinkSocial
            text="Instagram"
            icon={
              <FaInstagram
                className="mr-2"
                link="https://www.instagram.com/billieeilish/"
              />
            }
          />

          <LinkSocial
            text="Twitter"
            icon={
              <BsTwitterX className="mr-2" link="https://x.com/billieeilish" />
            }
          />
        </div>
      </div>
    </>
  );
}

export default CardName;

function LinkSocial(props) {
  return (
    <>
      <div className="mt-4">
        <a
          className="bg-black text-white p-2 w-full rounded-lg flex items-center justify-center"
          href={props.link}
          target="blank"
        >
          {props.icon}
          {props.text}
        </a>
      </div>
    </>
  );
}
