/* eslint-disable @next/next/no-img-element */
import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const knowledge_content = [
    {
        title: "Mục tiêu",
        content: [
            "Điều khiển nhân vật và camera: Hiểu cách điều khiển nhân vật và góc nhìn camera trong trò chơi.",
            "Xây dựng cơ bản: Làm quen Roblox Studio, hệ trục tọa độ Oxyz và công cụ cơ bản.",
            "Vật lý: Áp dụng BodyVelocity, BodyGyro để di chuyển vật thể.",
            "Hiệu ứng: Thêm Fire, Smoke, SpotLight, SurfaceLight, Sparkles, ParticleEmitter.",
            "Lua cơ bản: Học các kiểu dữ liệu, lệnh, vòng lặp, hàm cơ bản trong Lua.",
            "Checkpoint: Tạo hệ thống checkpoint theo dõi tiến độ.",
            "Publish trò chơi: Đưa trò chơi lên Roblox.com."
        ]

    },
    {
        title: "Kỹ năng phát triển",
        content: [
            "Kỹ năng hợp tác: Học cách lắng nghe, phân chia công việc và phản hồi xây dựng trong môi trường nhóm.",
            "Kỹ năng giao tiếp: Diễn giải rõ ràng, tự tin trong trình bày và thể hiện sự tôn trọng đối với người khác.",
            "Kỹ năng phản biện: Quan sát, lắng nghe và đặt câu hỏi hợp lý để cải thiện công việc.",
            "Kỹ năng tư duy sáng tạo: Thiết kế trò chơi trên giấy và áp dụng vào thực tế trong Roblox Studio."
        ]
    },
    {
        title: "Công cụ",
        content: [
            "Roblox Studio – Công cụ xây dựng và lập trình trò chơi."

        ]
    },
    {
        title: "Ứng dụng",
        content: [
            "Obby Game (Vượt chướng ngại vật) – Trò chơi phổ biến trong Roblox yêu cầu người chơi vượt qua các chướng ngại vật để đạt được mục tiêu."

        ]

    },
]
const knowledge_images = [
    "/assets/images/hp1roblox/hp1rb_1.png",
    "/assets/images/hp1roblox/hp1rb_2.png",
    "/assets/images/hp1roblox/move.jpg",
    "/assets/images/hp1roblox/full_interface.png",
    "/assets/images/hp1roblox/effect.jpeg",
    "/assets/images/hp1roblox/checkpoint.jpeg",
]
const project_samples = [
    {
        name: "Vượt chướng ngại vật (Obby Game)",
        path: "/assets/images/hp1roblox/obby.jpg",
    }

]
const HP1Roblox = () => {
    return (
        <section className="w-full py-20">
            <div className="grid w-full grid-cols-12 gap-4 xs:gap-6 md:gap-8 text-accent">
                <ItemLayout
                    className={"col-span-full lg:col-span-8 row-span-2 flex-col items-start"}
                >
                    <h2 className="heading-course">
                        LÀM QUEN VỚI THIẾT KẾ VÀ LẬP TRÌNH GAME - OBBY GAME
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
                        <p className="tool-p ">
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
                        <p className="tool-p ">
                            Lua
                        </p>
                    </ItemLayout>
                    <ItemLayout
                        className={"tool-item"}
                    >
                        <img
                            className="tool-icon"
                            src={"/assets/icons/animation.png"}
                            alt="KienThuc"
                            loading="lazy"
                        />
                        <p className="tool-p ">
                            Animation
                        </p>
                    </ItemLayout>
                </div>


                <ItemLayout
                    className={"col-span-full text-accent"}
                >
                    <p className="knowledge-2">
                        Kiến thức học phần 1
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
                                <p className="w-full my-2 text-xl font-semibold text-center sm:text-2xl text-accent">{name}</p>
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

export default HP1Roblox;
