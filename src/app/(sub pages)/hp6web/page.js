import Image from "next/image";
import bg from "../../../../public/background/bg_hp6web.png";
import RenderModel from "@/components/RenderModel";
// import HatModel from "@/components/models/HatModel";
import HP6 from "@/components/hp6";
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
        className="fixed top-0 left-0 object-cover object-center w-full h-full opacity-50 -z-50"
      />

      <div className="absolute left-0 z-10 w-full -translate-y-1/2 h-3/5 xs:h-3/4 sm:h-screen top-1/2">
        <RenderModel>
          <BookModel />
        </RenderModel>
      </div>

      <div className="relative flex flex-col items-center justify-center w-full h-screen">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="course-h1">
            Học phần 6
          </h1>
          <p className="course-p">
            Siêu nhân lập trình Web
          </p>
        </div>
      </div>

      <HP6 />
    </>
  );
}
