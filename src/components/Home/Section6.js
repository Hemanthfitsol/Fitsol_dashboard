import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { c1, c2, c3 } from "../../assets";
const options = {
  items: 4,
  dots: false,
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause: true,
  smartSpeed: 400,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },

};
const items = [
  {
    name: "Green packaging",
    image: c1,
    content:
      "Our eco-friendly packaging solution addresses the increasing need for sustainable packaging options, providing cost savings and environmental benefits. Key features include reusable packaging materials, optimized vehicle usage, intelligent packaging, and recyclability at the end of their lifespan",
  },
  {
    name: "Green Transportation",
    image: c2,
    content:
      "FITSOL's Green logistics service aims to offer businesses sustainable transportation options, including carbon-efficient vehicles like CNG and electric, optimized vehicle usage to reduce trips, and AI-powered suggestions for routes, drivers, vehicles, loading strategies, and packaging choices.",
  },
  {
    name: "Carbon Management",
    image: c3,
    content:
      "FITSOL SaaS is an AI-powered software that helps companies track and minimize carbon emissions in logistics, empowering them to contribute to sustainability and combat climate change effectively",
  },
  {
    name: "Green Warehousing",
    image: c2,
    content: "Our customizable green Warehouse solutions help clients reduce time, costs, and achieve sustainability goals by offering services such as sustainability assessment, energy-efficient system upgrades, adoption of sustainable energy source",
  },
];

const CarouselItem = ({ name, image, content }) => (
  <div className="item px-3 ">
    <div className="rounded-lg h-[430px] md:h-[500px] lg:h-[430px] shadow-md border border-gray-200">
    <div className="p-4 ">
      <div className="relative aspect-w-16 aspect-h-9">
        <h2 className="text-lg font-bold text-gray-800">{name}</h2>
        <img src={image} alt={name} className="object-cover" />
      </div>
      <div className="mt-4">
        <p className="text-gray-600 text-left whitespace-normal break-words">{content}</p>
      </div>
    </div>
    </div>
  </div>
);

const Carousel = () => {
  return (
    <div className="container max-w-full text-center lg:text-start pl-4 mx-auto ">
      <OwlCarousel className="owl-theme" {...options} 
      
      // style={{
      //   "-webkit-transition-timing-function": "linear",
      //   "-o-transition-timing-function": "linear",
      //   "transition-timing-function": "linear",
      // }}
      >
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            name={item.name}
            image={item.image}
            content={item.content}
          />
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Carousel;
