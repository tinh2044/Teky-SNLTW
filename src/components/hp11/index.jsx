/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const knowledge_content = [
    {
        title: "Science (Khoa học)",
        content: [
            "Hiểu mô hình MVC, SQL Injection, hệ thống CMS, phân quyền và quản trị tài khoản, cùng các khái niệm như Generic Views, cache.",
        ]

    },
    {
        title: "Technology (Công nghệ)",
        content: ["Sử dụng Django framework, xây dựng form, quản lý user login/logout, quản trị bình luận, tối ưu tốc độ website bằng cache.",
        ]
    },
    {
        title: "Engineering",
        content: [
            " Thiết kế và triển khai mô hình MVC, form đăng ký tài khoản, hệ thống hiển thị và bình luận, tối ưu hóa quản trị website"
        ]
    },
    {
        title: "Arts",
        content: [
            "Thiết kế template trang web, hiển thị nội dung trực quan, tối ưu trải nghiệm người dùng",
        ]
    },
    {
        title: "Mathematics",
        content: ["Ứng dụng logic trong phân quyền, quản trị dữ liệu, và tối ưu hóa lưu trữ với các bảng dữ liệu (Comment, User)",
        ]
    }
]

const knowledge_images = [
    "/assets/images/hp11/b1.jpg",
    "/assets/images/hp11/b2.jpg",
    "/assets/images/hp11/b3.png",
    "/assets/images/hp11/b4.webp",
    "/assets/images/hp11/b5.webp",
    "/assets/images/hp11/b6.png",
]
const project_samples = [
    {
        name: "HỆ THỐNG QUẢN LÝ HỌC TẬP",
        path: "/assets/images/hp11/sp_b1.avif",
    },
    {
        name: "MẠNG XÃ HỘI ĐƠN GIẢN",
        path: "/assets/images/hp11/sp_b2.png",
    }
]

const HP11 = () => {
    return (
        <section className="w-full py-20">
            <div className="grid w-full grid-cols-12 gap-4 xs:gap-6 md:gap-8">
                <ItemLayout
                    className={
                        " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
                    }
                >
                    <h2 className="w-full text-xl text-left capitalize md:text-2xl mt-4">
                        LẬP TRÌNH ỨNG DỤNG WEB NÂNG CAO, BẢO MẬT & HACK
                    </h2>
                    <div className="text-xs font-light sm:text-sm md:text-base ">

                        <ul>
                            {knowledge_content.map(({title, content}) => (
                                <li key={{title}}>
                                    <span className="font-semibold text-accent">{title}:</span>
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
                            src={"/assets/icons/django.png"}
                            alt="KienThuc"
                            loading="lazy"
                        />
                        <p className="w-full text-2xl font-semibold text-left sm:text-5xl">
                            Django
                        </p>
                    </ItemLayout>
                    <ItemLayout
                        className={"my-4"}
                    >
                        <img
                            className="w-20 h-20 rounded-xl object-cover"
                            src={"/assets/icons/sql.png"}
                            alt="KienThuc"
                            loading="lazy"
                        />
                        <p className="w-full text-2xl font-semibold text-left sm:text-5xl">
                            SQL
                        </p>
                    </ItemLayout>
                    <ItemLayout
                        className={"my-4"}
                    >
                        <img
                            className="w-20 h-20 rounded-xl object-cover"
                            src={"/assets/icons/redis.png"}
                            alt="KienThuc"
                            loading="lazy"
                        />
                        <p className="w-full text-2xl font-semibold text-left sm:text-5xl">
                            Redis
                        </p>
                    </ItemLayout>
                </div>


                <ItemLayout
                    className={" col-span-full text-accent"}
                >
                    <p className="w-full text-2xl font-semibold text-center sm:text-3xl">
                        Kiến thức về Backend
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
                    project_samples.map(({path, name}) => (
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

export default HP11;
