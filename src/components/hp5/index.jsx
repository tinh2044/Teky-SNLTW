/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
const HP5 = () => {
  return (
    <section className="w-full py-20">
      <div className="grid w-full grid-cols-12 gap-4 xs:gap-6 md:gap-8">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="w-full text-xl text-left capitalize md:text-2xl">
          Thiết kế web với Wordpress
          </h2>
          <p className="text-xs font-light sm:text-sm md:text-base ">

            Mục tiêu: Hiểu hệ quản trị nội dung (CMS), tạo và quản lý website tin tức.
            <br/>
            Ứng dụng thực tế: Xây dựng website tin tức hoàn chỉnh với menu, chuyên mục, và bài viết.
            <br/>

            Kỹ năng đạt được: Thiết kế giao diện web cơ bản, sáng tạo nội dung.
            <br/>

            Công cụ: Wordpress.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="w-full text-2xl font-semibold text-left sm:text-5xl">
            Wordpress <sub className="text-base font-semibold">Open-source</sub>
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
            src={`https://skillicons.dev/icons?i=wordpress,php,mysql`}
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
              src={"https://help.semplice.com/hc/article_attachments/360026735752/navigating-themes.gif"}
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
              src={"https://hotro.tiki.vn/servlet/rtaImage?eid=ka05h000000eXF3&feoid=00N5Y00000TZwdJ&refid=0EM5h000009lsB1"}
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
              src={"https://gobranding.com.vn/wp-content/uploads/2017/04/website-can-toi-uu-giao-dien-2.gif"}
              alt="CodeBucks"
              loading="lazy"
            />
            </Link>
        </ItemLayout>
       

      </div>
    </section>
  );
};

export default HP5;
