import Image from "next/image";
import bg from "../../../../public/background/bg_10.png";
import RenderModel from "@/components/RenderModel";
import HP7 from "@/components/hp7";

import dynamic from "next/dynamic";
import BookModel from "@/components/models/BookModel";

export const metadata = {
  title: "Học phần 7",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-80"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <BookModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="course-h1">
            Học phần 7
          </h1>
          <p className="course-p">
            Siêu nhân lập trình Web
          </p>
        </div>
      </div>

      <HP7 />
    </>
  );
}
