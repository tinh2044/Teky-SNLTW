/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
const HP3 = () => {
  return (
    <section className="w-full py-20">
      <div className="grid w-full grid-cols-12 gap-4 xs:gap-6 md:gap-8">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="w-full text-xl text-left capitalize md:text-2xl">
          Lập trình Giao diện đồ họa cho người dùng
          </h2>
          <p className="text-xs font-light sm:text-sm md:text-base ">

            Mục tiêu: Tạo giao diện người dùng đồ họa (GUI) với Tkinter và hiểu lập trình hướng sự kiện.
            <br/>
            Ứng dụng thực tế: Tạo ứng dụng như máy tính đơn giản (Simple Calculator) hoặc phần mềm vẽ (Simple Painter).
            <br/>

            Kỹ năng đạt được: Tư duy giao diện người dùng, lập trình hướng đối tượng (OOP).
            <br/>

            Công cụ: Python IDLE, Tkinter.
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
            src={`https://skillicons.dev/icons?i=replit,vscode,py`}
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
              src={"/assets/images/pg_hp3_1.png"}
              alt="Kien thuc hp3"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
        <ItemLayout
          className={" col-span-full text-accent"}
        >
          <p className="w-full text-2xl font-semibold text-center sm:text-3xl">
            Kiến thức thư viện Tkinter
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
              src={"/assets/images/pg_hp3_2.png"}
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
              src={"/assets/images/pg_hp3_3.png"}
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
            src={"https://files.realpython.com/media/pycalc.9572fb3104cb.gif"}
            alt="Hình ảnh minh họa cho sản phẩm mẫu"
            loading="lazy"
          />
        </ItemLayout>
        <ItemLayout className={"col-span-full md:col-span-6 text-accent"}>
            <img
            className="w-full h-auto rounded-md"
            src={"https://pythonguides.com/wp-content/uploads/2021/09/python-tkinter-entry-validation-example.gif"}
            alt="Hình ảnh minh họa cho sản phẩm mẫu"
            loading="lazy"
          />
        </ItemLayout>

      </div>
    </section>
  );
};

export default HP3;
