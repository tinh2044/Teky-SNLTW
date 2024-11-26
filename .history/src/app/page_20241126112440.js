import Image from "next/image";
import bg from "../../public/background/testing_1.png";
import Navigation from "@/components/navigation";

import dynamic from "next/dynamic";
import RobotModel from "@/components/models/RobotModel";
// const renderer = await ReactThreeTestRenderer.create(<mesh />)
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-70"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RobotModel />
      </div>
    </main>
  );
}
