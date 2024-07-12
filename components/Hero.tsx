import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div
        className="h-screen w-full dark:bg-black-100 bg-white
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      <div className="logo absolute top-0 left-0">
        <img src="/CyberSpartan.jpeg" alt="logo.png" className="block mx-auto h-20" style={{ maxWidth: "auto" }} />
        <div className="absolute relative z-[-1]" style={{ backgroundImage: 'url("/public/CyberSpartan.jpeg")' }}>
        </div>
      </div>
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Magic with Next.js
          </p>
          <TextGenerateEffect
            words="WANNA SHAKE HANDS WITH MY THOUGHTS"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center font-family:serif md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi! I&apos;m Kalyan, an Ethical Hacker and Developer.
          </p>

          <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
