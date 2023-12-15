// import HeadObject from '../components/head'
import { RedVelvet } from "../components/RedVelvet";
import { Vanilla } from "../components/Vanilla";
import Sparkles from "react-sparkle";

export default function Home() {
  return (
    <div className="flex h-screen flex-col justify-between lg:flex-row">
      <a href="https://hackclub.com/">
        <img
          style={{
            position: "absolute",
            top: 0,
            left: 10,
            border: 0,
            height: "10%",
            zIndex: 999,
          }}
          src="https://assets.hackclub.com/flag-orpheus-top.svg"
          alt="Hack Club"
        />
      </a>
      <div className="mx-10 mt-32 flex flex-col items-center justify-center gap-5 lg:mt-0 lg:w-1/2">
        <img src="/SprigLogo.svg" />
        <p className="relative mb-10 rounded-full border-4 border-[#bc2c26] px-4 py-2 text-center text-2xl font-semibold">
          A new drop for both current and new sprigsters.
          <Sparkles
            color="#bc2c26"
            count={20}
            minSize={7}
            maxSize={12}
            overflowPx={20}
            fadeOutSpeed={30}
            flicker={false}
          />
        </p>
        <a
          href="https://sprig.hackclub.com/get"
          className="rounded-lg border-2 border-dashed border-[#bc2c26] px-4 py-8 text-2xl font-medium hover:bg-[#bc2c26] hover:bg-opacity-10"
        >
          <span className="font-bold text-black">Don't have a Sprig?</span> Get
          your limited edition case by submitting your first Sprig game to the
          gallery. Every PR that’s accepted in time, will get the case shipped
          with their Sprig console.
        </a>
        <a
          href="https://hackclub.com/slack/"
          className="rounded-lg border-2 border-dashed border-[#bc2c26] px-4 py-8 text-2xl font-medium hover:bg-[#bc2c26] hover:bg-opacity-10"
        >
          <span className="font-bold text-black">I have a Sprig!</span> Create a
          30 second or longer playthrough video of your game fully running on
          your Sprig device. Post your videos in{" "}
          <span className="text-blue-800">#sprig</span> to get your case! Use
          <span className="text-blue-800"> /address</span> to check and update
          your mailing address.
        </a>
      </div>
      <div className="flex flex-col lg:w-1/2">
        <div className="h-1/4 border-[#bc2c26] bg-[#e9e7db] lg:h-1/2 lg:border-l-4">
          <RedVelvet />
        </div>
        <div className="h-1/4 bg-[#bc2c26] lg:h-1/2">
          <Vanilla />
        </div>
      </div>
    </div>
  );
}