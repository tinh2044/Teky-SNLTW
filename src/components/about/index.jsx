import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const knowlegde_content = [
  {
    title: "Science (Khoa học)",
    content: [
        "Tìm hiểu về các chủ đề ứng dụng trong thế giới số như: Streamer, Livestreaming, Youtube",
        "Mã Morse, FBI, Kỹ sư bảo mật phần mềm, Virus trong thế giới số, và Bản quyền trong thời đại số"
    ]

  },
    {
    title: "Technology (Công nghệ)",
    content: [ "Cài đặt và sử dụng Bootstrap 4, tìm hiểu về các CSS Framework, CSS module, Alert, Button, Breadcrumb, Badges",
      "Tìm hiểu về các  thành phần Slideshow, Card, Carousel, Collapse, Dropdowns, Modal, Pagination trong Bootstrap",
      "Sử dụng Bootstrap để tạo các thành phần như menu, thanh công cụ, form đăng ký kết bạn, hộp thoại, và phân trang"
    ]
  },
    {
    title: "Engineering",
    content: [ "Xây dựng các chức năng thông báo thông tin khi chuyển trang",
      "Thiết kế các khu vực slideshow ảnh gia đình, ẩn hiện thông tin về sở thích, tính cách, kỹ năng",
      "Tạo form đăng ký kết bạn bao gồm các thông tin cá nhân",
      "Xây dựng công cụ phân trang chia nhỏ nội dung theo từng trang"
    ]
  },
    {
    title: "Arts",
    content: [ "Thiết kế trang chủ website giới thiệu bản thân với các khu vực giới thiệu tên, mô tả và liên hệ",
      "Tạo các hiệu ứng di chuyển qua lại cho slideshow ảnh gia đình",
      "Tạo hộp thoại hiển thị thông tin mới nhất cho người dùng lần đầu vào trang chủ",
    ]
  },
    {
    title: "Mathematics",
    content: [ "Áp dụng các lý thuyết về lưới và chuẩn màn hình trong thiết kế web với Bootstrap",
      "Tìm hiểu về các thành phần của Bootstrap liên quan đến phân trang, thanh tiến trình, và các thao tác tương tác với người dùng",
    ]
  }
]

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Kiến thức
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            <ul>
              {knowlegde_content.map(({title, content}) => (
                <li key={{title}} >
                  <span className="font-semibold text-accent">{title}:</span>
                    <ul className="pl-4">
                    {content.map((item, index) => (
                      <li key={index}>- {item}.</li>
                  ))}
                    </ul>
                </li>
              ))}
            </ul>
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/top-langs?username=codebucks27&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api?username=codebucks27&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <img
            className="w-full h-auto"
            src={`https://skillicons.dev/icons?i=appwrite,aws,babel,bootstrap,cloudflare,css,d3,docker,figma,firebase,gatsby,git,github,graphql,html,ipfs,js,jquery,kubernetes,linux,mongodb,mysql,netlify,nextjs,nodejs,npm,postgres,react,redux,replit,sass,supabase,tailwind,threejs,vercel,vite,vscode,yarn`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`${process.env.NEXT_PUBLIC_GITHUB_STREAK_STATS_URL}?user=codebucks27&theme=dark&hide_border=true&type=svg&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B`}
            alt="CodeBucks"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://github.com/codebucks27/Nextjs-contentlayer-blog"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src={`${process.env.NEXT_PUBLIC_GITHUB_STATS_URL}/api/pin/?username=codebucks27&repo=Nextjs-contentlayer-blog&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2`}
              alt="CodeBucks"
              loading="lazy"
            />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
