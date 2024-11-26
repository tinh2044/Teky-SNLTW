/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const knowledge_content = [
    {
        title: "Science (Khoa học)",
        content: [
            "Bảo mật form với CSRF Token: Hiểu cách Django bảo vệ người dùng khỏi các cuộc tấn công CSRF (Cross-Site Request Forgery)",
            "Quản lý dữ liệu người dùng: Áp dụng Custom User Model để xử lý thông tin người dùng một cách an toàn và hiệu quả",
            "Cách gửi email khôi phục mật khẩu: Tìm hiểu các giao thức gửi email như SMTP, SendGrid, Amazon SES"
        ]

    },
    {
        title: "Technology (Công nghệ)",
        content: ["Django Framework: Sử dụng các tính năng mạnh mẽ của Django như form validation, Custom User Model, và phân quyền",
            "Giao diện Bootstrap: Tích hợp và thiết kế các trang web hiện đại với framework Bootstrap",
            "Tạo ứng dụng Articles và Comments: Xây dựng ứng dụng quản lý bài viết và bình luận với Django",

        ]
    },
    {
        title: "Engineering",
        content: [
            "Thiết kế form đăng ký, đăng nhập, thay đổi mật khẩu",
            "Xử lý logic backend để lưu và kiểm tra thông tin nhập liệu",
            "Tích hợp hệ thống email vào ứng dụng để hỗ trợ người dùng lấy lại mật khẩu",
            "Xử lý mã OTP hoặc link bảo mật cho người dùng"
        ]
    },
    {
        title: "Arts",
        content: [
            "Sử dụng Bootstrap để làm đẹp các trang web (trang đăng nhập, đăng ký, bài viết, và bình luận)",
            "Cải thiện trải nghiệm người dùng qua giao diện trực quan và dễ sử dụng"
        ]
    },
    {
        title: "Mathematics",
        content: ["Làm việc với cơ sở dữ liệu (mô hình Articles và Comments)",
            "Tính toán các thông số liên quan (số lượng bình luận, ngày giờ bài viết)."
        ]
    }
]

const knowledge_images = [
    "/assets/images/hp10/b1.png",
    "/assets/images/hp10/b2.jpg",
    "/assets/images/hp10/b3.png",
    "/assets/images/hp10/b4.jpg",
]
const project_samples = [
    {
        name: "News Website",
        path: "/assets/images/hp10/sp_b1.jpeg",
    },
    {
        name: "Blob Website",
        path: "/assets/images/hp10/sp_b2.png",
    }
]

const HP10 = () => {
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

export default HP10;
