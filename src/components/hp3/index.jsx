/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const knowledge_content = [
  {
    title: "Mục tiêu",
    content: [
      "Tạo giao diện người dùng đồ họa (GUI) với Tkinter và hiểu lập trình hướng sự kiện.",
    ],
  },
  {
    title: "Ứng dụng thực tế",
    content: [
      "Tạo ứng dụng như máy tính đơn giản (Simple Calculator) hoặc phần mềm vẽ (Simple Painter).",
    ],
  },
  {
    title: "Kỹ năng đạt được",
    content: [
      "Tư duy giao diện người dùng.",
      "Lập trình hướng đối tượng (OOP).",
    ],
  },
  {
    title: "Công cụ",
    content: ["Python IDLE, Tkinter."],
  },
];

const knowledge_images = [
  "/assets/images/pg_hp3_2.png",
  "/assets/images/pg_hp3_3.png",
];

const project_samples = [
  {
    name: "Máy tính đơn giản (Simple Calculator)",
    path: "https://files.realpython.com/media/pycalc.9572fb3104cb.gif",
  },
  {
    name: "Phần mềm vẽ đơn giản (Simple Painter)",
    path: "https://pythonguides.com/wp-content/uploads/2021/09/python-tkinter-entry-validation-example.gif",
  },
];

const HP3 = () => {
  return (
    <section className="w-full py-20">
      <div className="grid w-full grid-cols-12 gap-4 xs:gap-6 md:gap-8">
        <ItemLayout className="flex-col items-start row-span-2 col-span-full lg:col-span-8">
          <h2 className="w-full text-xl font-bold text-left text-blue-500 capitalize md:text-2xl">
            Lập trình Giao diện đồ họa cho người dùng
          </h2>
          <div className="text-xs font-light sm:text-sm md:text-base">
            <ul>
              {knowledge_content.map(({ title, content }) => (
                <li key={title}>
                  <span className="font-semibold text-blue-500">{title}:</span>
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
        <ItemLayout className="col-span-full text-accent">
          <p className="w-full text-2xl font-semibold text-center sm:text-3xl">
            Kiến thức thư viện Tkinter
          </p>
        </ItemLayout>

        {knowledge_images.map((image_path) => (
          <ItemLayout className="col-span-full md:col-span-6" key={image_path}>
            <Link
              href="https://teky.edu.vn/v2/khoa-hoc/sieu-nhan-lap-trinh-web-870"
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
              href="https://teky.edu.vn/v2/khoa-hoc/sieu-nhan-lap-trinh-web-870"
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
              href="https://teky.edu.vn/v2/khoa-hoc/sieu-nhan-lap-trinh-web-870"
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

export default HP3;
