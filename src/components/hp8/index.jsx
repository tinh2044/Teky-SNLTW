/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const knowledge_content = [
    {
        title: "Science (Khoa học)",
        content: [
            "Tìm hiểu các chủ đề: Lưu trữ đám mây, PowerPoint và JavaScript, Drone, Tử vi, Lịch sử công ty Casio, Ánh sáng và màu sắc trên máy tính, Yahoo 360!, và Album ảnh",
        ]

    },
    {
        title: "Technology (Công nghệ)",
        content: ["Làm quen với JavaScript: Nhúng JS vào HTML, xuất dữ liệu, khai báo biến, kiểu dữ liệu, toán tử, lệnh rẽ nhánh, vòng lặp, hàm, đối tượng, mảng",
            "Tìm hiểu các framework JavaScript",
            "Xử lý sự kiện và lập trình hướng sự kiện trong JS",
        ]
    },
    {
        title: "Engineering",
        content: [
            "Thực hành các dự án như Hello World, hộp thoại thông báo, máy tính cơ bản, kiểm tra dữ liệu, trò chơi may rủi, đổi màu nền, trình chiếu ảnh, và tạo hồ sơ cá nhân."
        ]
    },
    {
        title: "Arts",
        content: [
            "Xử lý sự kiện và lập trình hướng sự kiện trong JS",
            ""
        ]
    },
    {
        title: "Mathematics",
        content: ["Sử dụng toán tử, điều kiện logic và mảng trong các bài toán tính toán và trò chơi",
            "Ứng dụng vòng lặp và cấu trúc điều khiển để xử lý dữ liệu và tối ưu hóa chương trình",
        ]
    }
]

const knowledge_images = [
    "/assets/images/hp8/b1.png",
    "/assets/images/hp8/b2.png",
    "/assets/images/hp8/b3.png",
    "/assets/images/hp8/b4.png",
    "/assets/images/hp8/b5.png",
    "/assets/images/hp8/b6.png",
    "/assets/images/hp8/b7.png",
    "/assets/images/hp8/b8.png",
]
const project_samples = [
    {
        name: "XIN CHÀO JAVASCRIPT",
        path: "/assets/images/hp8/sp_b1.png",
    },
    {
        name: "HỘP THOẠI THÔNG BÁO",
        path: "/assets/images/hp8/sp_b2.png",
    },
    {
        name: "THỬ TÀI TÍNH TOÁN",
        path: "/assets/images/hp8/sp_b3.png",
    },
    {
        name: "TRÒ CHƠI MAY RỦI",
        path: "/assets/images/hp8/sp_b4.png",
    },
    {
        name: "KIỂM TRA TÍNH HỢP LỆ CỦA DỮ LIỆU",
        path: "/assets/images/hp8/sp_b5.png",
    },
    {
        name: "MÀU NỀN YÊU THÍCH",
        path: "/assets/images/hp8/sp_b7.png",
    },
    {
        name: "MY PROFILE",
        path: "/assets/images/hp8/sp_b8.png",
    },
    {
        name: "SLIDE SHOW",
        path: "/assets/images/hp8/sp_b9.png",
    }
]

const HP8 = () => {
    return (
        <section className="w-full py-20">
            <div className="grid w-full grid-cols-12 gap-4 xs:gap-6 md:gap-8">
                <ItemLayout
                    className={
                        " col-span-full lg:col-span-8 row-span-2 flex-col items-start text-accent"
                    }
                >
                    <h2 className="heading-course">
                        LẬP TRÌNH ỨNG DỤNG WEB CƠ BẢN, BẢO MẬT & HACK
                    </h2>
                    <div className="knowledge">

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
                    className={"tool"}>
                    <ItemLayout
                        className={"tool-item"}
                    >
                        <img
                            className="tool-icon"
                            src={"/assets/icons/html.png"}
                            alt="KienThuc"
                            loading="lazy"
                        />
                        <p className="tool-p    ">
                            HTML
                        </p>
                    </ItemLayout>
                    <ItemLayout
                        className={"tool-item"}
                    >
                        <img
                            className="tool-icon"
                            src={"/assets/icons/css3.png"}
                            alt="KienThuc"
                            loading="lazy"
                        />
                        <p className="tool-p    ">
                            CSS
                        </p>
                    </ItemLayout>
                    <ItemLayout
                        className={"tool-item"}
                    >
                        <img
                            className="tool-icon"
                            src={"/assets/icons/javascript.png"}
                            alt="KienThuc"
                            loading="lazy"
                        />
                        <p className="tool-p    ">
                            JavaScript
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
                        <p className="tool-p    ">
                            VS Code
                        </p>
                    </ItemLayout>
                </div>


                <ItemLayout
                    className={" col-span-full text-accent"}
                >
                    <p className="w-full text-2xl font-semibold text-center sm:text-3xl">
                        Kiến thức học phần 8
                    </p>
                </ItemLayout>
                {
                    knowledge_images.map((image_path) => (
                        <ItemLayout className={"col-span-full md:col-span-6 "} key={image_path}>
                            <Link
                                href="/"
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
                                href="/"
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

export default HP8;
