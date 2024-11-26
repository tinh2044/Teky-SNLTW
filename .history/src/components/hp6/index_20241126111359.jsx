/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";


const knowledge_content = [
  {
    title: "Mục tiêu",
    content: [
      "Học lập trình website với HTML, CSS và cập nhật website lên server ảo.",
    ],
  },
  {
    title: "Ứng dụng thực tế",
    content: [
      "Xây dựng trang web giới thiệu Teky với thanh điều hướng và giao diện cơ bản.",
    ],
  },
  {
    title: "Ứng dụng thực tế",
    content: [
      "Xây dựng trò chơi như Flappy Bird, Xếp gạch (Tetrix)."
    ],
  },
  {
    title: "Kỹ năng đạt được",
    content: ["Tư duy lập trình web, tổ chức nội dung."],
  },
  {
    title: "Công cụ",
    content: ["Visual Studio."],
  },
];
const HP6 = () => {
  return (
    <section className="w-full py-20">
      <div className="grid w-full grid-cols-12 gap-4 xs:gap-6 md:gap-8">

        <ItemLayout className="flex-col items-start row-span-2 col-span-full lg:col-span-8 text-accent">
          <h2 className="w-full text-xl font-bold text-left text-blue-500 capitalize md:text-2xl">
            Lập trình web tĩnh (HTML, CSS)
          </h2>
          <div className="text-xs font-light sm:text-sm md:text-base">
            <ul>
              {knowledge_content.map(({ title, content }) => (
                <li key={title}>
                  <span className="font-semibold ">{title}:</span>
                  <ul className="pl-4 text-sky-50">
                    {content.map((item, index) => (
                      <li key={index}>- {item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="w-full text-2xl font-semibold text-left sm:text-5xl">
            HTML, CSS
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
            src={`https://skillicons.dev/icons?i=vscode,html,css`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout
          className={" col-span-full text-accent"}
        >
          <p className="w-full text-2xl font-semibold text-center sm:text-3xl">
            Công cụ hỗ trợ thiết kế
          </p>
        </ItemLayout>
        <ItemLayout className={"col-span-full  "}>
          <Link
            href="https://teky.edu.vn/v2/khoa-hoc/sieu-nhan-lap-trinh-web-870"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={"https://i.ytimg.com/vi/Dwgqyn05hL4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCtRLGaIs6_vMWFNGIHhHeMV54okg"}
              alt="Kien thuc hp3"
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
        <ItemLayout className={"col-span-full md:col-span-6 "}>
          <Link
            href="https://teky.edu.vn/v2/khoa-hoc/sieu-nhan-lap-trinh-web-870"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={"/assets/images/dem_hp6_1.png"}
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
              src={"https://1boss.vn/uploads/details/cach-tao-form-dang-ky-thong-tin-3.png"}
              alt="CodeBucks"
              loading="lazy"
            />
          </Link>
        </ItemLayout>


      </div>
    </section>
  );
};

export default HP6;
