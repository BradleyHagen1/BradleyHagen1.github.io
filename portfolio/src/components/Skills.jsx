import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w2-4 lg:w3/4 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            neque vel qui nulla aspernatur. Dolorem, nulla suscipit! Accusamus
            soluta voluptatum vel expedita suscipit animi, alias magnam cum
            consequuntur quia enim.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mb-2 -mx-2" class="grid grid-cols-4 gap-3">
          {skills.map((skill, index) => (
              <div key={index} className="p-2 sm:1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <span className="title-font font-medium text-white">
                  {skill.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
