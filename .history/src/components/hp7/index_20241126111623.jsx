/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const knowledge_content = [
    {
        title: "Science (Khoa học)",
        content: [
            "Tìm hiểu về các chủ đề ứng dụng trong thế giới số như: Streamer, Livestreaming, Youtube",
            "Mã Morse, FBI, Kỹ sư bảo mật phần mềm, Virus trong thế giới số, và Bản quyền trong thời đại số"
        ]

    },
    {
        title: "Technology (Công nghệ)",
        content: ["Cài đặt và sử dụng Bootstrap 4, tìm hiểu về các CSS Framework, CSS module, Alert, Button, Breadcrumb, Badges",
            "Tìm hiểu về các  thành phần Slideshow, Card, Carousel, Collapse, Dropdowns, Modal, Pagination trong Bootstrap",
            "Sử dụng Bootstrap để tạo các thành phần như menu, thanh công cụ, form đăng ký kết bạn, hộp thoại, và phân trang"
        ]
    },
    {
        title: "Engineering",
        content: ["Xây dựng các chức năng thông báo thông tin khi chuyển trang",
            "Thiết kế các khu vực slideshow ảnh gia đình, ẩn hiện thông tin về sở thích, tính cách, kỹ năng",
            "Tạo form đăng ký kết bạn bao gồm các thông tin cá nhân",
            "Xây dựng công cụ phân trang chia nhỏ nội dung theo từng trang"
        ]
    },
    {
        title: "Arts",
        content: ["Thiết kế trang chủ website giới thiệu bản thân với các khu vực giới thiệu tên, mô tả và liên hệ",
            "Tạo các hiệu ứng di chuyển qua lại cho slideshow ảnh gia đình",
            "Tạo hộp thoại hiển thị thông tin mới nhất cho người dùng lần đầu vào trang chủ",
        ]
    },
    {
        title: "Mathematics",
        content: ["Áp dụng các lý thuyết về lưới và chuẩn màn hình trong thiết kế web với Bootstrap",
            "Tìm hiểu về các thành phần của Bootstrap liên quan đến phân trang, thanh tiến trình, và các thao tác tương tác với người dùng",
        ]
    }
]

const knowledge_images = [
    "/assets/images/hp7/b1.png",
    "/assets/images/hp7/b2.png",
    "/assets/images/hp7/b3.png",
    "/assets/images/hp7/b4.png",
    "/assets/images/hp7/b5.png",
    "/assets/images/hp7/b6.png",
    "/assets/images/hp7/b7.png",
    "/assets/images/hp7/b8.png",
]
const project_samples = [
    {
        name: "Web giới thiệu khóa học",
        path: "/assets/images/hp7/sp_b1.png",
    },
    {
        name: "Web giới thiệu bản thân",
        path: "/assets/images/hp7/sp_b2.png",
    },
    {
        name: "Trình chiếu ảnh gia đình",
        path: "/assets/images/hp7/sp_b3.png",
    },
    {
        name: "Công cụ xem thông tin",
        path: "/assets/images/hp7/sp_b4.png",
    },
    {
        name: "Menu và thanh công cụ",
        path: "/assets/images/hp7/sp_b5.png",
    },
    {
        name: "Trang đăng nhập đăng ký",
        path: "/assets/images/hp7/sp_b6.png",
    },
    {
        name: "Form đăng ký",
        path: "/assets/images/hp7/sp_b7.png",
    },
    {
        name: "Dashboard",
        path: "/assets/images/hp7/sp_b9.png",
    }
]

const HP7 = () => {
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
                            src={"/assets/icons/html.png"}
                            alt="KienThuc"
                            loading="lazy"
                        />
                        <p className="w-full text-2xl font-semibold text-left sm:text-5xl">
                            HTML
                        </p>
                    </ItemLayout>
                    <ItemLayout
                        className={"my-4"}
                    >
                        <img
                            className="w-20 h-20 rounded-xl object-cover"
                            src={"/assets/icons/css3.png"}
                            alt="KienThuc"
                            loading="lazy"
                        />
                        <p className="w-full text-2xl font-semibold text-left sm:text-5xl">
                            CSS
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
                            src={"/assets/icons/vscode.png"}
                            alt="KienThuc"
                            loading="lazy"
                        />
                        <p className="w-full text-2xl font-semibold text-left sm:text-5xl">
                            VS Code
                        </p>
                    </ItemLayout>
                </div>


                <ItemLayout
                    className={" col-span-full text-accent"}
                >
                    <p className="w-full text-2xl font-semibold text-center sm:text-3xl">
                        Kiến thức học phần 7
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

export default HP7;
