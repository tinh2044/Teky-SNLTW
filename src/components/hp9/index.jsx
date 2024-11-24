/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const knowledge_content = [
    {
        title: "Science (Khoa học)",
        content: [
            "Hiểu cách hoạt động của Django (mô hình MVC, xử lý request-response), logic lập trình cơ bản (if, for, OOP)",
        ]

    },
    {
        title: "Technology (Công nghệ)",
        content: ["Sử dụng framework Django, tích hợp Bootstrap, làm việc với template engine Jinja, tạo hệ thống admin",
        ]
    },
    {
        title: "Engineering",
        content: [
            "Thiết kế và quản lý cấu trúc dự án Django, phân chia file/template để tối ưu hóa quản lý"
        ]
    },
    {
        title: "Arts",
        content: [
            "Ứng dụng HTML/CSS và Bootstrap để tạo giao diện người dùng đẹp, trực quan trong template Django",
        ]
    },
    {
        title: "Mathematics",
        content: ["Hiểu mối quan hệ giữa các bảng dữ liệu thông qua khóa chính (Primary Key) và khóa ngoại (Foreign Key)",
        ]
    }
]

const knowledge_images = [
    "/assets/images/hp9/b1.png",
    "/assets/images/hp9/b2.png",
    "/assets/images/hp9/b3.png",
    "/assets/images/hp9/b4.png",
]
const project_samples = [
    {
        name: "Django Admin",
        path: "/assets/images/hp9/sp_b1.png",
    },
    {
        name: "Boostrap and Django",
        path: "/assets/images/hp9/sp_b2.png",
    }
]

const HP9 = () => {
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
                            src={"/assets/icons/bootstrap.png"}
                            alt="KienThuc"
                            loading="lazy"
                        />
                        <p className="w-full text-2xl font-semibold text-left sm:text-5xl">
                            Bootstrap
                        </p>
                    </ItemLayout>
                    <ItemLayout
                        className={"my-4"}
                    >
                        <img
                            className="w-20 h-20 rounded-xl object-cover"
                            src={"/assets/icons/jinja.png"}
                            alt="KienThuc"
                            loading="lazy"
                        />
                        <p className="w-full text-2xl font-semibold text-left sm:text-5xl">
                            Jinja
                        </p>
                    </ItemLayout>
                </div>


                <ItemLayout
                    className={" col-span-full text-accent"}
                >
                    <p className="w-full text-2xl font-semibold text-center sm:text-3xl">
                        Kiến thức Django Framework
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

export default HP9;
