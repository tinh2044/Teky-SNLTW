/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
const knowledge_content = [
  {
    title: "Science (Khoa học)",
    content: [
      "Tìm hiểu về giao tiếp giữa người và máy tính",
      "Hiểu cách hoạt động của chương trình máy tính",
      "Ứng dụng kiến thức khoa học vào xử lý dữ liệu (ví dụ: phân tích dữ liệu SEA Games, quỹ đạo Trái đất) "
    ]

  },
  {
    title: "Technology (Công nghệ)",
    content: [
      "Học cách sử dụng Python và các công cụ lập trình",
      "Sử dụng ngôn ngữ lập trình để xây dựng phần mềm thực tế như tính điểm, xếp loại học sinh, hoặc xử lý văn bản",
      "Ứng dụng công nghệ vào quản lý thông tin học sinh bằng danh sách (List)"
    ]
  },
  {
    title: "Engineering",
    content: [
      "Thiết kế và phát triển phần mềm từ ý tưởng đến thực thi",
      "Ứng dụng cấu trúc vòng lặp, rẽ nhánh để giải quyết vấn đề thực tế (xếp loại học sinh, tạo giao diện sao)",
      "Xây dựng thuật toán xử lý dữ liệu và vận dụng để giải quyết bài toán cụ thể",
    ]
  },
  {
    title: "Arts",
    content: [
      "Sáng tạo giao diện hoặc biểu diễn dữ liệu qua các chương trình như \"Bầu trời đầy sao\"",
      "Cá nhân hóa nội dung (chương trình tự giới thiệu bản thân, xử lý văn bản).",
      "Tạo sự hấp dẫn thông qua lập trình hình ảnh và cấu trúc mã"
    ]
  },
  {
    title: "Mathematics",
    content: [
      "Sử dụng các toán tử để tính toán điểm trung bình, xử lý số liệu",
      "Áp dụng logic toán học trong lập trình rẽ nhánh, vòng lặp",
      "Phân loại và tổ chức dữ liệu (ví dụ: xếp hạng, tính toán thống kê)"
    ]
  }
]

const knowledge_images = [
  "/assets/images/hp1web/b1.png",
  "/assets/images/hp1web/b2.png",
  "/assets/images/hp1web/b3.png",
  "/assets/images/hp1web/b4.png",
  "/assets/images/hp1web/b5.png",
  "/assets/images/hp1web/b6.png",
  "/assets/images/hp1web/b7.png",
  "/assets/images/hp1web/b8.png",
]
const project_samples = [
  {
    name: "Máy tính cá nhân",
    path: "/assets/images/hp1web/sp_b1.png",
  },
  {
    name: "Luyện code",
    path: "/assets/images/hp1web/sp_b2.png",
  },
  {
    name: "Tính điểm trung bình",
    path: "/assets/images/hp1web/sp_b3.png",
  },
  {
    name: "Bầu trời đầy sao",
    path: "/assets/images/hp1web/sp_b4.png",
  },
  {
    name: "Thử tài máy tính",
    path: "/assets/images/hp1web/sp_b5.png",
  },
  {
    name: "Xếp loại học sinh",
    path: "/assets/images/hp1web/sp_b6.png",
  }
]

const HP1Web = () => {
  return (
    <section className="w-full py-20">
      <div className="grid w-full grid-cols-12 gap-4 xs:gap-6 md:gap-8 text-accent">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="w-full text-xl text-left capitalize md:text-2xl mt-4">
            LẬP TRÌNH ỨNG DỤNG WEB CƠ BẢN, BẢO MẬT & HACK
          </h2>
          <div className="text-xs font-light sm:text-sm md:text-base ">

            <ul>
              {knowledge_content.map(({ title, content }) => (
                <li key={{ title }}>
                  <span className="font-semibold text-foreground">{title}:</span>
                  <ul className="pl-4">
                    {content.map((item, index) => (
                      <li key={index}>- {item}.</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </ItemLayout>

        <div
          className={"h-full col-span-full xs:col-span-6 lg:col-span-4 text-accent flex flex-col justify-between"}>
          <ItemLayout
            className={"my-4"}
          >
            <img
              className="w-20 h-20 rounded-xl object-cover"
              src={"/assets/icons/python.png"}
              alt="KienThuc"
              loading="lazy"
            />
            <p className="w-full text-2xl font-semibold text-left sm:text-5xl">
              Python
            </p>
          </ItemLayout>
          <ItemLayout
            className={"my-4"}
          >
            <img
              className="w-20 h-20 rounded-xl object-cover"
              src={"/assets/icons/vscode.png"}
              alt="KienThuc"
              loading="lazy"
            />
            <p className="w-full text-2xl font-semibold text-left sm:text-5xl">
              VS code
            </p>
          </ItemLayout>
          <ItemLayout
            className={"my-4"}
          >
            <img
              className="w-20 h-20 rounded-xl object-cover"
              src={"/assets/icons/replit.png"}
              alt="KienThuc"
              loading="lazy"
            />
            <p className="w-full text-2xl font-semibold text-left sm:text-5xl">
              Replit
            </p>
          </ItemLayout>
        </div>


        <ItemLayout
          className={" col-span-full text-accent"}
        >
          <p className="w-full text-2xl font-semibold text-center sm:text-3xl">
            Kiến thức Học phần 1
          </p>
        </ItemLayout>
        {
          knowledge_images.map((image_path) => (
            <ItemLayout className={"col-span-full md:col-span-6 "} key={image_path}>
              <Link
                href="https://teky.edu.vn/v2/khoa-hoc/sieu-nhan-lap-trinh-web-870"
                target="_blank"
                className="w-full"
              >
                <img
                  className="w-full h-auto rounded-xl object-cover"
                  src={image_path}
                  alt="KienThuc"
                  loading="lazy"
                />
              </Link>
            </ItemLayout>))
        }
        <ItemLayout
          className={" col-span-full text-accent"}
        >
          <p className="w-full text-2xl font-semibold text-center sm:text-3xl">
            Sản phẩm mẫu
          </p>
        </ItemLayout>
        {
          project_samples.map(({ path, name }) => (
            <ItemLayout className={"col-span-full md:col-span-6 "} key={name}>
              <Link
                href="https://teky.edu.vn/v2/khoa-hoc/sieu-nhan-lap-trinh-web-870"
                target="_blank"
                className="w-full"
              >
                <p className="w-full text-2xl font-semibold text-center sm:text-xl my-2 text-accent">{name}</p>
                <img

                  className="w-full h-auto rounded-xl"
                  src={path}
                  alt="SanPham"
                  loading="lazy"
                />
              </Link>
            </ItemLayout>))
        }

      </div>
    </section>
  );
};
export default HP1Web;
