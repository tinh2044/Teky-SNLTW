/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
const HP4 = () => {
  return (
    <section className="w-full py-20">
      <div className="grid w-full grid-cols-12 gap-4 xs:gap-6 md:gap-8">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="w-full text-xl text-left capitalize md:text-2xl">
          Lập trình Game
          </h2>
          <p className="text-xs font-light sm:text-sm md:text-base ">

            Mục tiêu: Sử dụng PyGame để phát triển các trò chơi phức tạp hơn với hoạt ảnh, sự kiện, và tương tác.
            <br/>
            Ứng dụng thực tế: Xây dựng trò chơi như Flappy Bird, Xếp gạch (Tetrix).
            <br/>

            Kỹ năng đạt được: Sáng tạo, giải quyết vấn đề, tư duy thuật toán.
            <br/>

            Công cụ: Python IDLE, PyCharm, PyGame.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="w-full text-2xl font-semibold text-left sm:text-5xl">
            Python <sub className="text-base font-semibold">programming</sub>
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
            src={`https://skillicons.dev/icons?i=replit,vscode,pycharm`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full  "}>
        <Link
            href="https://teky.edu.vn/v2/khoa-hoc/sieu-nhan-lap-trinh-web-870"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={"/assets/images/pg_hp4_1.png"}
              alt="Kien thuc hp3"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
        <ItemLayout
          className={" col-span-full text-accent"}
        >
          <p className="w-full text-2xl font-semibold text-center sm:text-3xl">
            Kiến thức thư viện Pygame
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 "}>
          <Link
            href="https://teky.edu.vn/v2/khoa-hoc/sieu-nhan-lap-trinh-web-870"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={"/assets/images/pg_hp4_2.png"}
              alt="CodeBucks"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
        <ItemLayout
          className={"col-span-full sm:col-span-6 "}
        >
        <Link
            href="https://teky.edu.vn/v2/khoa-hoc/sieu-nhan-lap-trinh-web-870"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={"/assets/images/pg_hp4_3.png"}
              alt="CodeBucks"
              loading="lazy"
            />
            </Link>
        </ItemLayout>
        <ItemLayout
          className={" col-span-full text-accent"}
        >
          <p className="w-full text-2xl font-semibold text-center sm:text-3xl">
          Sản phẩm mẫu
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 text-accent"}>
            <img
            className="w-full h-auto rounded-md"
            src={"/assets/images/demo_hp4_1.gif"}
            alt="Hình ảnh minh họa cho sản phẩm mẫu"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 text-accent "}>
            <img
            className="w-full rounded-md h-[450px]"
            src={"/assets/images/demo_hp4_2.gif"}
            alt="Hình ảnh minh họa cho sản phẩm mẫu"
            loading="lazy"
          />
        </ItemLayout>

      </div>
    </section>
  );
};

export default HP4;
