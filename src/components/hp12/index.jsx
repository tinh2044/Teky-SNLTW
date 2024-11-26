/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import HP3Roblox from "@/components/hp12";

const knowledge_content = [
    {
        title: "Science (Khoa học)",
        content: [
            "Tìm hiểu quy tắc hoạt động của thương mại điện tử",
            "Phòng chống SQL Injection: Áp dụng kiến thức bảo mật trong lập trình",
        ]

    },
    {
        title: "Technology (Công nghệ)",
        content: [
            "Công cụ: Sử dụng Visual Studio Code, Django Framework, và các API đăng nhập (Google, Facebook)",
            "Ôn tập HTML, CSS",
            "Triển khai website lên server: Hiểu quy trình đưa website lên mạng"
        ]
    },
    {
        title: "Engineering",
        content: [
            "Thiết kế giao diện và cơ sở dữ liệu",
            "Kết nối các thành phần frontend và backend, đảm bảo luồng dữ liệu liền mạch"
        ]
    },
    {
        title: "Arts",
        content: [
            "Tạo trải nghiệm người dùng (UX/UI) thân thiện và trực quan trên trang chủ, trang chi tiết sản phẩm và các trang phụ khác",
            "Sắp xếp bố cục nội dung hợp lý (menu, danh mục, hình ảnh sản phẩm)"
        ]
    },
    {
        title: "Mathematics",
        content: ["Xử lý dữ liệu thanh toán",
            "Sử dụng mô hình quan hệ (Relational Model) trong thiết kế cơ sở dữ liệu"
        ]
    }
]

const knowledge_images = [
    "/assets/images/hp12/b1.png",
    "/assets/images/hp12/b2.avif",
    "/assets/images/hp12/b3.png",
    "/assets/images/hp12/b4.png",
]

const HP12 = () => {
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
                            {knowledge_content.map(({ title, content }) => (
                                <li key={{ title }}>
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
                <ItemLayout className={"col-span-full md:col-span-full "}>
                    <Link
                        href="/"
                        target="_blank"
                        className="w-full"
                    >
                        <p className="w-full text-2xl font-semibold text-center sm:text-xl my-2 text-accent">WEB BÁN HÀNG</p>
                        <img

                            className="w-full h-auto rounded-xl"
                            src={"/assets/images/hp12/sp_b1.jpg"}
                            alt="SanPham"
                            loading="lazy"
                        />
                    </Link>
                </ItemLayout>

            </div>
        </section>
    );
};

export default HP12;
