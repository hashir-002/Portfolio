import React, { useState } from "react";

const Preview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Sample data (you can replace it with your actual data)
  const slides = [
    {
      title: "Front-End Design",
      description: "Best website designs with latest technologies used ",
      image:
        "https://i.pinimg.com/736x/de/62/a9/de62a958074e66b6bfd09296d0d42ed1.jpg",
    },
    {
      title: "Backend/API services",
      description:
        "Optimal and strong hold of backend for websites and APIs for APP Development",
      image:
        "https://media.licdn.com/dms/image/D4D12AQFnxb2cyB4ExQ/article-cover_image-shrink_600_2000/0/1669297731190?e=2147483647&v=beta&t=T2lOnIsN3NmSEfGUmWqxYnUvk53zOGf-vJac7g-hqCc",
    },
    {
      title: "UI/UX",
      description:
        "Using React Native we build the best crossplatform ui designs for both Android and IOS",
      image:
        "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104516.jpg?w=1380&t=st=1726242392~exp=1726242992~hmac=7ee9c2857cf9cd6d0ad751675621c8dcf8d77dd9bb0dc3a5eed72b0d57baf3ec",
    },
    {
      title: "Data Security",
      description:
        "Your Data will be safeguarded as we follow Devops architecture",
      image:
        "https://res.cloudinary.com/hilnmyskv/image/upload/q_70,f_auto/v1718389030/Algolia_com_Blog_assets/Featured_images/product/what-are-data-privacy-and-data-security-why-are-they-critical-for-an-organization/udz45c2bizidaosiciuh.jpg",
    },
  ];

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="relative max-w-full overflow-hidden p-8 z-50">
      <h1 className="text-white text-center text-lg font-bold mb-4">
        What We Offer
      </h1>
      <div
        className="flex transition-transform duration-500 ease-in-out shadow-2xl"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 p-6 border-white rounded-lg border-4 mx-2 shadow-lg shadow-slate-400"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
              opacity: 1,
            }}
            onClick={nextSlide} // Slide to the next one on click
          >
            <div className="bg-black bg-opacity-50 p-4 rounded-md text-white">
              <h2 className="text-2xl font-bold">{slide.title}</h2>
              <p className="mt-2">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots for slide indication */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Preview;
