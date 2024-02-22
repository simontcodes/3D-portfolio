import React from "react";
import { skills, experiences } from "../constants/index";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className=" max-container">
      <h1 className=" head-text">
        Hello, I'm{" "}
        <span className=" blue-gradient_text font-semibold drop-shadow">
          Simon
        </span>
      </h1>

      <div className=" mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I have a strong proficiency in various programming languages and
          technologies such as JavaScript, React, HTML, CSS, and more. With
          experience in both frontend and backend development, I am adept at
          creating responsive and dynamic web applications. I am also skilled in
          problem-solving and enjoy learning new technologies to expand my
          skillset further.
        </p>
      </div>

      <div className=" py-10 flex flex-col">
        <h3 className=" subhead-text">My Skills</h3>
      </div>

      <div className=" mt-16 flex flex-wrap gap-12">
        {skills.map((skill) => (
          <div className=" block-container w-20 h-20">
            <div className=" btn-back rounded-xl" />
            <div className=" btn-front rounded-xl flex justify-center items-center">
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className=" w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      <div className=" py-16">
        <h3 className=" subhead-text">Work Experience</h3>
        <div className=" mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            As a Full Stack Web Developer, I've crafted responsive web
            applications utilizing technologies like React and Angular for
            frontend development. For the backend, I've utilized Node.js with
            Express as well as Python, and deployed applications using Azure
            services and AWS.
            <br />
            My diverse work background, ranging from event management to IT help
            desk support, enriches my perspective as a developer, enabling me to
            approach problems creatively and communicate effectively with
            cross-functional teams.
          </p>
        </div>
        <div className=" mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className=" w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
                iconStyle={{ background: experience.iconBg }}
              >
                <div>
                  <h3 className=" text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className=" text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>
                <ul className=" my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className=" text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className=" border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
