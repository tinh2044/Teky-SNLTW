/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const knowledge_content = [
    {
        title: "Science (Khoa học)",
        content: [
            "BodyForce, VectorForce, và Attachment: Giải thích lực đẩy và động học trong môi trường ảo",
            "Động cơ i-on hoạt động như thế nào: Khái niệm về lực đẩy trong thực tế và mô phỏng trong trò chơi",
            "Động cơ i-on hoạt động như thế nào: Khái niệm về lực đẩy trong thực tế và mô phỏng trong trò chơi"
        ]

    },
    {
        title: "Technology (Công nghệ)",
        content: [
            "Sử dụng Light Service và các thành phần GUI như ScreenGui, Frame, TextLabel, ImageLabel",
            "Camera: Thuộc tính CameraType, FieldOfView, và cách lập trình Top-Down Camera",
            "Remote Event: Truyền dữ liệu giữa Client và Server",
            "Remote Function: Tối ưu hóa giao tiếp giữa Client và Server để giảm lag",
        ]
    },
    {
        title: "Engineering",
        content: [
            "So sánh Model và Union, Weld vs Weld Constraint: Các kỹ thuật kết nối vật thể",
            "Thiết kế nhân dạng phi thuyền: Ứng dụng StarterCharacter và LocalScript",
            "Gắn sự kiện điều khiển phi thuyền qua ContextActionService",
            "Xử lý sự kiện va chạm: Sử dụng Touch và quản lý Leaderboard",

        ]
    },
    {
        title: "Arts",
        content: [
            "Thiết kế màn hình chào mừng và giới thiệu: Sử dụng GUI để tạo trải nghiệm hấp dẫn",
            "Thiết kế phi thuyền và đạn: Tập trung vào tính thẩm mỹ và sáng tạo cá nhân",
            "Tạo nhân dạng phi thuyền: Thể hiện cá tính người chơi qua thiết kế độc đáo"
        ]

    },
    {
        title: "Mathematics",
        content: [
            "VectorForce: Các phép tính vectơ liên quan đến lực",
            "Tính toán độ trễ (latency): Sử dụng thời gian thực (tick()) để tối ưu hóa",
            "Điều chỉnh vị trí viên đạn: Tính toán chính xác vị trí để đảm bảo công bằng"
        ]
    }
]

const knowledge_images = [
    "/assets/images/hp4roblox/b1.png",
    "/assets/images/hp4roblox/b2.png",
    "/assets/images/hp4roblox/b3.png",
    "/assets/images/hp4roblox/b4.png",
    "/assets/images/hp4roblox/b5.png",
    "/assets/images/hp4roblox/b6.png",
    "/assets/images/hp4roblox/b7.png",
    "/assets/images/hp4roblox/b8.png",
]
const project_samples = [
    {
        name: "Phi thuyền không gian",
        path: "/assets/images/hp4roblox/sp_b1.png",
    },
    {
        name: "Đại chiến không gian",
        path: "/assets/images/hp4roblox/sp_b2.webp",
    }
]
const HP4Roblox = () => {
    return (
        <section className="w-full py-20">
            <div className="grid w-full grid-cols-12 gap-4 xs:gap-6 md:gap-8">
                <ItemLayout
                    className={
                        " col-span-full lg:col-span-8 row-span-2 flex-col items-start text-accent"
                    }
                >
                    <h2 className="heading-course">
                        SIÊU NHÂN LÀM GAME - LEVEL 4
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
                            src={"/assets/icons/rb_studio.png"}
                            alt="KienThuc"
                            loading="lazy"
                        />
                        <p className="tool-p">
                            Roblox Studio
                        </p>
                    </ItemLayout>
                    <ItemLayout
                        className={"tool-item"}
                    >
                        <img
                            className="tool-icon"
                            src={"/assets/icons/lua.png"}
                            alt="KienThuc"
                            loading="lazy"
                        />
                        <p className="tool-p">
                            Lua
                        </p>
                    </ItemLayout>
                    <ItemLayout
                        className={"tool-item"}
                    >
                        <img
                            className="tool-icon"
                            src={"/assets/icons/client.png"}
                            alt="KienThuc"
                            loading="lazy"
                        />
                        <p className="tool-p">
                            Client
                        </p>
                    </ItemLayout>
                    <ItemLayout
                        className={"tool-item"}
                    >
                        <img
                            className="tool-icon"
                            src={"/assets/icons/server.png"}
                            alt="KienThuc"
                            loading="lazy"
                        />
                        <p className="tool-p">
                            Server
                        </p>
                    </ItemLayout>
                </div>


                <ItemLayout
                    className={" col-span-full text-accent"}
                >
                    <p className="knowledge-2">
                        Kiến thức
                    </p>
                </ItemLayout>
                {
                    knowledge_images.map((image_path) => (
                        <ItemLayout className={"col-span-full md:col-span-6"} key={image_path}>
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
                        <ItemLayout className={"col-span-full md:col-span-6"} key={name}>
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

export default HP4Roblox;
