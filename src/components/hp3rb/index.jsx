/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const knowledge_content = [
    {
        title: "Science (Khoa học)",
        content: [
            "Hiểu cách các hiệu ứng như ánh sáng, hạt (particles), và sương mù hoạt động, có thể liên quan đến mô phỏng các hiện tượng vật lý tự nhiên trong game",
            "Ứng dụng các khái niệm khoa học về ánh sáng và không gian để tạo môi trường huyền ảo (liên quan đến vật lý và khí quyển)"
        ]

    },
    {
        title: "Technology (Công nghệ)",
        content: [
            "Sử dụng ScreenGui, Frame, TextLabel, ImageLabel để xây dựng giao diện",
            "Tinh chỉnh Terrain bằng TerrainEditor",
            "Tạo NPC và quản lý thông tin qua Arra",
            "Sử dụng HumanoidDescription để điều chỉnh ngoại hình và tặng quà ngẫu nhiên",
            "Lấy danh sách người chơi qua lệnh GetPlayers và tạo bảng xếp hạng bằng vòng lặp For",
            "Thay đổi năng lực người chơi qua các property và function của Humanoid Instance"
        ]
    },
    {
        title: "Engineering",
        content: [
            "Tìm hiểu Frame-by-Frame Animation, sử dụng FlipAnim để tạo chuyển động thủ công",
            "Tạo Tweened Animation với Keyframe, Easing Style và áp dụng các nguyên tắc thiết kế Animation (Squash and Stretch, Anticipation, Slow In Slow Out)",
            "Tạo và gắn hiệu ứng động vào nhân vật thông qua Particle Emitters và ServerStorage"

        ]
    },
    {
        title: "Arts",
        content: [
            "Tạo không gian sống động với hiệu ứng ánh sáng, sương mù, và Skybox",
            "Thiết kế hoạt ảnh sống động cho nhân vật dựa trên các nguyên tắc Animation",
            "Tạo hiệu ứng đặc biệt thu hút qua việc điều chỉnh Particle Emitters"

        ]

    },
    {
        title: "Mathematics",
        content: [
            "Sử dụng kích thước Array để lặp qua các phần tử",
            "Sắp xếp và hiển thị kết quả dựa trên thời gian về đích của người chơi",
            "Sử dụng lệnh random để chọn quà ngẫu nhiên",

        ]
    }
]

const knowledge_images = [
    "/assets/images/hp3roblox/b1.png",
    "/assets/images/hp3roblox/b2.png",
    "/assets/images/hp3roblox/b3.png",
    "/assets/images/hp3roblox/b4.png",
    "/assets/images/hp3roblox/b5.png",
    "/assets/images/hp3roblox/b6.png",
    "/assets/images/hp3roblox/b7.png",
    "/assets/images/hp3roblox/b8.png",
]
const project_samples = [
    {
        name: "Hiệu chỉnh thiên nhiên",
        path: "/assets/images/hp3roblox/sp_b1.jpg",
    },
    {
        name: "Endless Runner",
        path: "/assets/images/hp3roblox/sp_b2.webp",
    }
]
const HP3Roblox = () => {
    return (
        <section className="w-full py-20">
            <div className="grid w-full grid-cols-12 gap-4 xs:gap-6 md:gap-8">
                <ItemLayout
                    className={
                        " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
                    }
                >
                    <h2 className="w-full text-xl text-left capitalize md:text-2xl mt-4">
                        SIÊU NHÂN LÀM GAME - LEVEL 3
                    </h2>
                    <div className="text-xs font-light sm:text-sm md:text-base text-accent">

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
                    className={"h-full col-span-full xs:col-span-6 lg:col-span-4 text-sky-50 flex flex-col justify-between"}>
                    <ItemLayout
                        className={"my-4"}
                    >
                        <img
                            className="w-20 h-20 rounded-xl object-cover"
                            src={"/assets/icons/rb_studio.png"}
                            alt="KienThuc"
                            loading="lazy"
                        />
                        <p className="w-full text-2xl font-semibold text-left sm:text-5xl">
                            Roblox Studio
                        </p>
                    </ItemLayout>
                    <ItemLayout
                        className={"my-4"}
                    >
                        <img
                            className="w-20 h-20 rounded-xl object-cover"
                            src={"/assets/icons/lua.png"}
                            alt="KienThuc"
                            loading="lazy"
                        />
                        <p className="w-full text-2xl font-semibold text-left sm:text-5xl">
                            Lua
                        </p>
                    </ItemLayout>
                    <ItemLayout
                        className={"my-4"}
                    >
                        <img
                            className="w-20 h-20 rounded-xl object-cover"
                            src={"/assets/icons/animation.png"}
                            alt="KienThuc"
                            loading="lazy"
                        />
                        <p className="w-full text-2xl font-semibold text-left sm:text-5xl">
                            Animation
                        </p>
                    </ItemLayout>
                </div>


                <ItemLayout
                    className={" col-span-full text-sky-50"}
                >
                    <p className="w-full text-2xl font-semibold text-center sm:text-3xl">
                        Kiến thức
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

export default HP3Roblox;
