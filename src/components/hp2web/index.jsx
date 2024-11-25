/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
const HP2Web = () => {
  return (
    <section className="w-full py-20">
      <div className="grid w-full grid-cols-12 gap-4 xs:gap-6 md:gap-8 text-accent">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="w-full text-xl font-bold text-left text-blue-500 capitalize md:text-2xl">
          Lập trình đồ họa
          </h2>
          <p className="text-xs font-light sm:text-sm md:text-base ">

          Mục tiêu: Làm quen với lập trình đồ họa và thư viện Turtle, thiết kế các trò chơi cơ bản có nền tảng đồ họa.
          <br/>
          Ứng dụng thực tế: Xây dựng các trò chơi như Snake, Chiến binh không gian với kịch bản tương tác bàn phím và chuột.
          <br/>
          Kỹ năng đạt được: Sáng tạo, phân tích, xây dựng kịch bản trò chơi.
          <br/>
          Công cụ: Python IDLE, Turtle.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="w-full text-2xl font-semibold text-left sm:text-5xl">
            Python <sub className="text-base font-semibold ">programming
            
            </sub>
            
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="w-full text-2xl font-semibold text-left sm:text-5xl">
            IDE+{" "}
            {/* <sub className="text-base font-semibold">years of experience</sub> */}
          </p>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=py,replit,vscode`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 "}>
        <Link
            href="https://teky.edu.vn/v2/khoa-hoc/sieu-nhan-lap-trinh-web-870"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={"/assets/images/pg_hp2_1.png"}
              alt="CodeBucks"
              loading="lazy"
            />
          </Link>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 "}>
          <Link
            href="https://teky.edu.vn/v2/khoa-hoc/sieu-nhan-lap-trinh-web-870"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={"/assets/images/pg_hp2_2.png"}
              alt="CodeBucks"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
         <iframe
            className="w-full aspect-video"
            src="https://player.vimeo.com/video/716728189?h=d9136ee05a"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo Video"
          ></iframe>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 text-accent"}>
          <p className="w-full text-2xl font-semibold text-center text-blue-500 sm:text-4xl">Sản phẩm mẫu
            <img
            className="w-full rounded-md h-[400px]"
            src={"https://digiunivietnam.com/wp-content/uploads/2021/08/Python-game_3-Space-Invaders.gif"}
            alt="Hình ảnh minh họa cho sản phẩm mẫu"
            loading="lazy"
          />
          </p>
        </ItemLayout>

      </div>
    </section>
  );
};

export default HP2Web;
