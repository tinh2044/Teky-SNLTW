import Image from "next/image";
import bg from "../../../../public/background/bg_8.png";
import RenderModel from "@/components/RenderModel";

import dynamic from "next/dynamic";
import HP4Roblox from "@/components/hp4rb";
const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

export const metadata = {
  title: "HP 4 Roblox",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="fixed top-0 left-0 object-cover object-center w-full h-full opacity-50 -z-50"
      />

      <div className="absolute left-0 z-10 w-full -translate-y-1/2 h-3/5 xs:h-3/4 sm:h-screen top-1/2">
        <RenderModel>
          <HatModel />
        </RenderModel>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full h-screen">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="course-h1">
            Học phần 4
          </h1>
          <p className="course-p">
            Siêu nhân làm game
          </p>
        </div>
      </div>

      <HP4Roblox />
    </>
  );
}
