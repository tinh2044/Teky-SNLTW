/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const knowledge_content = [
  {
    title: "Mục tiêu khóa học",
    content: [
      "Tạo giao diện người dùng đồ họa (GUI) với Tkinter và hiểu lập trình hướng sự kiện",
      "Hiểu và áp dụng lập trình hướng đối tượng (OOP): sử dụng Class, Object để xây dựng các ứng dụng thực tiễn",
      "Xây dựng các ứng dụng cơ bản như form đăng ký, form đăng nhập, máy tính bỏ túi",
      "Kích thích tư duy thiết kế và sáng tạo qua việc tạo giao diện và tính năng cho sản phẩm"
    ],
  },
  {
    title: "Ứng dụng thực tế",
    content: [
      "Tạo ứng dụng như máy tính đơn giản (Simple Calculator) hoặc phần mềm vẽ (Simple Painter)",
      "Kích thích tư duy thiết kế và sáng tạo qua việc tạo giao diện và tính năng cho sản phẩm",
      "Nắm vững các bước phát triển một sản phẩm lập trình từ phân tích, thiết kế, lập trình, đến đánh giá và cải thiện"
    ],
  },
  {
    title: "Kỹ năng đạt được",
    content: [
      "Tư duy giao diện người dùng",
      "Lập trình hướng đối tượng (OOP): phân tích, thiết kế, và triển khai Class và Object",
      "Tkinter: thiết kế và lập trình giao diện người dùng",
      "Tích hợp các thư viện Python vào ứng dụng thực tiễn",
      "Phân chia và tổ chức mã nguồn hợp lý"
    ],
  },
  {
    title: "Công cụ",
    content: ["Python IDLE, Tkinter."],
  },
];

const knowledge_images = [
  "/assets/images/hp3web/b1.png",
  "/assets/images/hp3web/b2.png",
  "/assets/images/hp3web/b3.png",
  "/assets/images/hp3web/b4.png",
  "/assets/images/hp3web/b5.png",
  "/assets/images/hp3web/b6.png",
];

const project_samples = [
  {
    name: "Máy tính đơn giản",
    path: "https://files.realpython.com/media/pycalc.9572fb3104cb.gif",
  },
  {
    name: "Form đăng ký/đăng nhập",
    path: "https://pythonguides.com/wp-content/uploads/2021/09/python-tkinter-entry-validation-example.gif",
  },
];

const HP3Web = () => {
  return (
    <section className="w-full py-20">
      <div className="grid w-full grid-cols-12 gap-4 xs:gap-6 md:gap-8">
        <ItemLayout className="flex-col items-start row-span-2 col-span-full lg:col-span-8 text-accent">
          <h2 className="heading-course">
            Lập trình Giao diện đồ họa cho người dùng
          </h2>
          <div className="knowledge">
            <ul>
              {knowledge_content.map(({ title, content }) => (
                <li key={title}>
                  <span className="font-semibold text-foreground">{title}:</span>
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
        <div
          className={"tool"}>
          <ItemLayout
            className={"tool-item"}
          >
            <img
              className="tool-icon"
              src={"/assets/icons/python.png"}
              alt="KienThuc"
              loading="lazy"
            />
            <p className="tool-p">
              Python
            </p>
          </ItemLayout>
          <ItemLayout
            className={"tool-item"}
          >
            <img
              className="tool-icon"
              src={"/assets/icons/vscode.png"}
              alt="KienThuc"
              loading="lazy"
            />
            <p className="tool-p">
              VS code
            </p>
          </ItemLayout>
          <ItemLayout
            className={"tool-item"}
          >
            <img
              className="tool-icon"
              src={"/assets/icons/replit.png"}
              alt="KienThuc"
              loading="lazy"
            />
            <p className="tool-p">
              Replit
            </p>
          </ItemLayout>

        </div>

        <ItemLayout className="col-span-full text-accent">
          <p className="knowledge-2">
            Kiến thức học phần 3
          </p>
        </ItemLayout>

        {knowledge_images.map((image_path) => (
          <ItemLayout className="col-span-6" key={image_path}>
            <Link
              href="/"
              target="_blank"
              className="w-full"
            >
              <img
                className="object-cover w-full h-auto rounded-xl"
                src={image_path}
                alt="KienThuc"
                loading="lazy"
              />
            </Link>
          </ItemLayout>
        ))}
        <ItemLayout className="col-span-full">
          <Link
            href="/"
            target="_blank"
            className="w-full"
          >
            <img
              className="object-cover w-full h-auto rounded-xl"
              src={"/assets/images/pg_hp3_1.png"}
              alt="KienThuc"
              loading="lazy"
            />
          </Link>
        </ItemLayout>

        <ItemLayout className="col-span-full text-accent">
          <p className="w-full text-2xl font-semibold text-center sm:text-3xl">
            Sản phẩm mẫu
          </p>
        </ItemLayout>

        {project_samples.map(({ name, path }) => (
          <ItemLayout className="col-span-full md:col-span-6" key={name}>
            <Link
              href="/"
              target="_blank"
              className="w-full"
            >
              <p className="w-full my-2 text-2xl font-semibold text-center sm:text-xl text-accent">
                {name}
              </p>
              <img
                className="object-cover w-full h-auto rounded-md"
                src={path}
                alt={name}
                loading="lazy"
              />
            </Link>
          </ItemLayout>
        ))}
      </div>
    </section>
  );
};

export default HP3Web;
