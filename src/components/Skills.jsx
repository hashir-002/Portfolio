import React from "react";

// Skill data
const skills = [
  {
    name: "React JS",
    image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
  },
  {
    name: "NodeJS",
    image: "https://cdn.worldvectorlogo.com/logos/nodejs-1.svg",
  },
  {
    name: "Python",
    image: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
  },
  {
    name: "JavaScript",
    image: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
  },
  {
    name: "Django",
    image: "https://cdn.worldvectorlogo.com/logos/django.svg",
  },
  {
    name: "REST API",
    image:
      "https://dfdmyvckxgqn5.cloudfront.net/_app/immutable/assets/building-elegant-rest-apis.d8f4cbc6.jpg",
  },
  {
    name: "SQL",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png",
  },
  {
    name: "MongoDB",
    image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
  },
  {
    name: "Tailwind CSS",
    image: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
  },
  {
    name: "React Native",
    image: "https://cdn.worldvectorlogo.com/logos/react-1.svg",
  },
  {
    name: "DSA",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/41/DSA_Logo.png",
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen p-8">
      {/* Section Heading */}
      <h2
        className="text-4xl font-bold text-center mb-10 text-white"
        id="skills"
      >
        My Skills
      </h2>

      {/* Skills Container */}
      <div className="flex flex-wrap justify-center gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-xl shadow-cyan-700 hover:shadow-2xl transition-transform transform hover:scale-110 flex flex-col items-center w-40 h-40"
          >
            {/* Skill Image */}
            <img
              src={skill.image}
              alt={skill.name}
              className="w-16 h-16 object-contain mb-4"
            />

            {/* Skill Name */}
            <p className="text-lg font-semibold text-center text-gray-700">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
