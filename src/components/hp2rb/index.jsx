/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const knowledge_content = [
    {
        title: "Mục tiêu",
        content: [
            "Sử dụng Terrain Editor/Region để tạo và chỉnh sửa cảnh quan.",
            "Tạo giao diện cơ bản với Frame, Label, Button.",
            "Hiệu chỉnh giao diện phù hợp với các thiết bị khác nhau.",
            "Chia sẻ thông tin giữa các script bằng ValueObject.",
            "Quản lý thông tin người chơi qua Player Service.",
            "Thiết kế 3D cơ bản với TinkerCad và thêm vào Roblox.",
            "Lập trình Lua nâng cao: function, vòng lặp For, sự kiện chạm và xử lý."
        ]

    },
    {
        title: "Kỹ năng phát triển",
        content: [
            "Hợp tác: Cởi mở và tiếp thu ý kiến.",
            "Giao tiếp: Diễn giải rõ ràng, tự tin trình bày, góp ý tích cực.",
            "Phản biện: Sắp xếp ý tưởng, phân tích dữ kiện.",
            "Tư duy sáng tạo: Thiết kế trò chơi trên giấy, brainstorm ý tưởng."
        ]
    },
    {
        title: "Công cụ",
        content: [
            "Roblox Studio, TinkerCad."

        ]
    },
    {
        title: "Ứng dụng",
        content: [
            "Treasure Hunting Game - Người chơi thi tìm kho báu trong thời gian giới hạn."

        ]

    },
]
const knowledge_images = [
    "/assets/images/hp2roblox/Terrain.png",
    "/assets/images/hp2roblox/Frame.jpg",
    "/assets/images/hp2roblox/3d.png",
    "/assets/images/hp2roblox/lua.jpg",
]
const project_samples = [
    {
        name: "Săn kho báu (TREASURE HUNTING GAME)",
        path: "/assets/images/hp2roblox/treasure.png",
    }

]
const HP2Roblox = () => {
    return (
        <section className="w-full py-20">
            <div className="grid w-full grid-cols-12 gap-4 xs:gap-6 md:gap-8 text-accent">
                <ItemLayout
                    className={
                        " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
                    }
                >
                    <h2 className="heading-course">
                        TRAU DỒI KỸ NĂNG THIẾT KẾ GAME - TREASURE HUNTING GAME
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
                            src={"/assets/icons/tinkercad.png"}
                            alt="KienThuc"
                            loading="lazy"
                        />
                        <p className="tool-p">
                            TinkerCad
                        </p>
                    </ItemLayout>
                </div>


                <ItemLayout
                    className={"col-span-full text-sky-50"}
                >
                    <p className="knowledge-2">
                        Kiến thức
                    </p>
                </ItemLayout>
                {
                    knowledge_images.map((image_path) => (
                        <ItemLayout className={"col-span-6 "} key={image_path}>
                            <Link
                                href="/"
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
                        <ItemLayout className={"col-span-full "} key={name}>
                            <Link
                                href="/"
                                target="_blank"
                                className="w-full"
                            >
                                <p className="w-full my-2 text-2xl font-semibold text-center sm:text-xl text-accent">{name}</p>
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

export default HP2Roblox;
