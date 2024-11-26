import Image from "next/image";
import bg from "../../../../public/background/bg_hp5web.png";
import RenderModel from "@/components/RenderModel";
// import HatModel from "@/components/models/HatModel";
import HP5 from "@/components/hp5";
import dynamic from "next/dynamic";
const BookModel = dynamic(() => import("@/components/models/BookModel"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <BookModel />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="text-5xl font-bold xs:text-6xl sm:text-7xl lg:text-8xl text-accent">
            Học phần 5
          </h1>
          <p className="font-light text-foreground text-lg">
          Siêu nhân lập trình Web
          </p>
        </div>
      </div>

      <HP5 />
    </>
  );
}
