import React from "react";
import { useInView } from "react-intersection-observer";

const ProjectCard = ({ title, description, imageUrl, reverse, gitlink }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`flex overflow-hidden max-w-screen flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } items-center justify-between my-12 p-6 bg-red-950 text-white rounded-lg transition-all duration-700 ease-out transform ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      }`}
    >
      {/* Image Section */}
      <div
        className={`overflow-hidden w-full lg:w-1/2 transition-all duration-700 ease-out ${
          inView
            ? "translate-x-0"
            : reverse
            ? "-translate-x-20"
            : "translate-x-20"
        }`}
      >
        <img
          src={imageUrl}
          alt={title}
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* Text Section */}
      <div
        className={`w-full overflow-hidden lg:w-1/2 mt-6 lg:mt-0 text-center lg:text-left transition-all duration-700 ease-out ${
          inView
            ? "translate-x-0"
            : reverse
            ? "translate-x-20"
            : "-translate-x-20"
        }`}
      >
        <h2 className="text-3xl mx-3 font-bold mb-4">{title}</h2>
        <p className="mb-6 mx-3 text-lg">{description}</p>
        <button className="px-6 mx-3 py-2 bg-red-900 border-orange-200 border-2 text-white font-semibold rounded-full hover:bg-green-600">
          <a href={gitlink}>View</a>
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Student management App",
      description:
        "This is a preview application that was been built in order to understand the designing and basic setup for building a real life application for my school. This is just a first copy or dummy of original app(the app is coming soon).",
      imageUrl:
        "https://static.javatpoint.com/blog/images/student-management-system.png",
      gitlink: "https://github.com/hashir-002/Student-Management-App",
    },
    {
      title: "Calendar-Fastapi",
      description:
        "This application deals with fast-api as backend and react as frontend, where the calendar, with functionalities like user-defined events on particular dates, like meetings, birthdays etc. overall, these functions make it a dynamic app.",
      imageUrl:
        "https://camo.githubusercontent.com/acff30a88a6465d600e820424a8cd8d038fa28bad931d46ce79d737c04f826ec/68747470733a2f2f70726f6a656374732e776f6a74656b6d616a2e706c2f72656163742d63616c656e6461722f72656163742d63616c656e6461722e6a7067",
      gitlink: "https://github.com/hashir-002/Calendar-app-using-fast-api",
    },
    {
      title: "Employee data management",
      description:
        "Another project of Django explaining simple CRUD operations.",
      imageUrl:
        "https://engagedly.com/wp-content/uploads/2022/09/Employee-Data-Management.jpg",
      gitlink: "https://github.com/hashir-002/Employee-management-app-Django-",
    },
    {
      title: "Recipie record",
      description: "A full stack Django application as a basic crud operation",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1200/1*qL-zgbDa7Tl1dWXJPVUn2Q.png",
      gitlink: "https://github.com/hashir-002/Recipie-Django",
    },
    {
      title: "The TODO list",
      description: "My first app on basics of react js",
      imageUrl:
        "https://images.ctfassets.net/lpvian6u6i39/GtD3qzHrBIgVZJNIJBlO0/8610e2883df2dec28305841aa1ddd2ae/todo-app.png",
      gitlink: "https://github.com/hashir-002/Todo-project",
    },
  ];
  return (
    <div className="container mx-auto px-4" id="projects">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          imageUrl={project.imageUrl}
          gitlink={project.gitlink}
          reverse={index % 2 === 1} // Reverse every second project
        />
      ))}
    </div>
  );
};

export default Projects;
