/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
const HP1Web = () => {
  return (
    <section className="w-full py-20">
      <div className="grid w-full grid-cols-12 gap-4 xs:gap-6 md:gap-8">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="w-full text-xl text-left capitalize md:text-2xl">
          Các khái niệm lập trình cơ bản
          </h2>
          <p className="text-xs font-light sm:text-sm md:text-base ">

            Mục tiêu: Làm quen với các khái niệm cơ bản trong lập trình Python. Hiểu cách sử dụng biến, kiểu dữ liệu, vòng lặp, cấu trúc điều kiện, và danh sách.
            <br/>
            Ứng dụng thực tế: Xây dựng các chương trình đơn giản như phần mềm quản lý học sinh hoặc trò chơi đoán số.
            <br/>

            Kỹ năng đạt được: Giải quyết vấn đề, hợp tác, giao tiếp và phản biện.
            <br/>

            Công cụ: Python IDLE.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-sky-50"}
        >
          <p className="w-full text-2xl font-semibold text-left sm:text-5xl">
            Python <sub className="text-base font-semibold">programming</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-sky-50"}
        >
          <p className="w-full text-2xl font-semibold text-left sm:text-5xl">
            IDE+{" "}
            {/* <sub className="text-base font-semibold">years of experience</sub> */}
          </p>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=replit,vscode,`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout
          className={" col-span-full text-accent"}
        >
          <p className="w-full text-2xl font-semibold text-center sm:text-3xl">
          Kiến thức
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
              src={"/assets/images/pg_hp1_1.png"}
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
              src={"/assets/images/pg_hp1_2.png"}
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

        <ItemLayout className={"col-span-full md:col-span-8 text-sky-50"}>
          <p className="w-full text-2xl font-semibold text-center sm:text-5xl">Sản phẩm mẫu
            <img
            className="w-full h-auto rounded-md"
            src={"https://viettuts.vn/images/python/bai-tap-python/bai-tap-quan-ly-sinh-vien-trong-python-3.png"}
            alt="Hình ảnh minh họa cho sản phẩm mẫu"
            loading="lazy"
          />
          </p>
        </ItemLayout>

      </div>
    </section>
  );
};

export default HP1Web;
