import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import { FlipWords } from "./ui/flip-words";
function HeroSection() {
  const words = ["FullStack", "Frontend", "Backend"];
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          I'm A <FlipWords words={words} /> Developer
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Hi, I'm Pranjal Gangwar, a final-year student at IIIT Nagpur with a
          passion for full-stack development, especially in the backend domain.
          Welcome to my website, your one-stop destination to learn all about me
          and my work.
          <div className="mt-4">
            <Link href={"/projects"}>
              <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800"
              >
                Explore Projects
              </Button>
            </Link>
          </div>
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
