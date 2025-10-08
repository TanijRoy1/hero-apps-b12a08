import React from "react";
import PlayStore from "../../assets/playSore.png";
import AppStore from "../../assets/appStore.png";
import Hero from "../../assets/hero.png";

const Banner = () => {
  return (
    <div className="px-4">
      <div className="container mx-auto text-center">
      <div className="flex flex-col gap-5 py-10">
        <h1 className="sm:text-6xl text-4xl text-blue-950 font-bold">We Build <br /> <span className="font-black bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">Productive</span> Apps</h1>
        <p className="max-w-xl mx-auto text-blue-950">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
         <div className="flex items-center justify-center gap-6">
          <a href="https://play.google.com/store" target="_blank" className="flex items-center gap-2 font-semibold text-blue-950 cursor-pointer border border-gray-400 sm:px-5 px-3 py-1.5 rounded-md shadow">
            <img src={PlayStore} alt="Play Store" />
            App Store
          </a>
          <a href="https://www.apple.com/app-store/" target="_blank" className="flex items-center gap-2 font-semibold text-blue-950 cursor-pointer border border-gray-400 sm:px-5 px-3 py-1.5 rounded-md shadow">
            <img src={AppStore} alt="App Store" />
            Google Play
          </a>
         </div>
      </div>
      <div className="flex items-center justify-center max-w-2xl mx-auto">
        <img src={Hero} className="w-full" alt="Hero" />
      </div>
    </div>
    </div>
  );
};

export default Banner;
