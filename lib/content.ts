// lib/content.ts
export type Lang = "en" | "vi";

export type Localized = {
  en: string;
  vi: string;
};

export type Project = {
  id: number;
  label: Localized;
  title: Localized;
  subtitle: Localized;
  focus: Localized;
  bullets: Localized[];
  stack: string;
  imageName: string;
};

export type Experience = {
  period: string;
  company: string;
  role: string;
  desc: Localized;
};

export type SkillsGroup = {
  title: Localized;
  items: Localized[];
};

export const projects: Project[] = [
  {
    id: 1,
    label: {
      en: "Campaign platform",
      vi: "Nền tảng chiến dịch"
    },
    title: {
      en: "Ganax – Influencer & Brand Campaign Platform",
      vi: "Ganax – Nền tảng chiến dịch cho Influencer & Brand"
    },
    subtitle: {
      en: "A platform that connects influencers and brands to create and manage impactful campaigns with AI-validated requirements.",
      vi: "Nền tảng kết nối influencer và thương hiệu để tạo, quản lý chiến dịch với yêu cầu được AI kiểm tra."
    },
    focus: {
      en: "Frontend development for core features, API integration, deployment and maintenance.",
      vi: "Phát triển frontend cho các chức năng chính, tích hợp API, deploy và bảo trì."
    },
    bullets: [
      {
        en: "Implemented user interfaces and functionalities for the platform based on design and requirements.",
        vi: "Triển khai giao diện và chức năng theo thiết kế và yêu cầu."
      },
      {
        en: "Integrated REST APIs in collaboration with the backend team.",
        vi: "Tích hợp REST API phối hợp với team backend."
      },
      {
        en: "Worked with Jenkins to deploy code to the server.",
        vi: "Sử dụng Jenkins để deploy code lên server."
      },
      {
        en: "Investigated, debugged, and fixed UI and logic issues.",
        vi: "Điều tra, debug và fix các lỗi UI / logic."
      }
    ],
    stack: "ReactJS · Redux · React-Bootstrap · Sass",
    imageName: "ganax.avif"
  },
  {
    id: 2,
    label: {
      en: "Logistics planning tool",
      vi: "Công cụ lập kế hoạch logistics"
    },
    title: {
      en: "Cloud-Based Container Stowage Planning",
      vi: "Cloud-Based Container Stowage Planning"
    },
    subtitle: {
      en: "A cloud-based container stowage planning solution with AI/ML-driven capabilities for logistics and route planning.",
      vi: "Giải pháp cloud cho lập kế hoạch xếp dỡ container với khả năng AI/ML hỗ trợ logistics và tuyến đường."
    },
    focus: {
      en: "Building planning views, forms, and workflows for logistics teams.",
      vi: "Xây dựng giao diện, form và luồng làm việc cho team logistics."
    },
    bullets: [
      {
        en: "Analyzed requirements for new features and enhancements; broke down tasks and estimated effort.",
        vi: "Phân tích yêu cầu, chia nhỏ task và ước lượng effort cho tính năng mới."
      },
      {
        en: "Implemented UI and business logic using React, MobX, and Material UI.",
        vi: "Triển khai UI và business logic với React, MobX, Material UI."
      },
      {
        en: "Integrated APIs with the backend and aligned flows with domain requirements.",
        vi: "Tích hợp API với backend, đảm bảo flow đúng nghiệp vụ."
      },
      {
        en: "Deployed code to the server using Jenkins, handled bugs and answered client questions.",
        vi: "Deploy bằng Jenkins, xử lý bug và trả lời câu hỏi từ khách hàng."
      }
    ],
    stack: "ReactJS · MobX · React Hook Form · Material UI",
    imageName: ""
  },
  {
    id: 3,
    label: {
      en: "Learning platform",
      vi: "Nền tảng học tập"
    },
    title: {
      en: "Learning Management System",
      vi: "Learning Management System"
    },
    subtitle: {
      en: "A multilingual learning platform for organizations such as schools, universities, and companies.",
      vi: "Nền tảng học tập đa ngôn ngữ cho trường học, đại học, doanh nghiệp."
    },
    focus: {
      en: "Developing core learning flows, payment pages, and communication templates.",
      vi: "Phát triển luồng học, trang thanh toán và template email."
    },
    bullets: [
      {
        en: "Analyzed and discussed requirements for new features and improvements with the team.",
        vi: "Phân tích và trao đổi yêu cầu cho tính năng mới với team."
      },
      {
        en: "Created and styled UI for the main learning platform and payment service.",
        vi: "Tạo và style UI cho nền tảng chính và trang thanh toán."
      },
      {
        en: "Implemented responsive Django email templates for notifications and communication.",
        vi: "Tạo template email Django responsive cho thông báo và giao tiếp."
      },
      {
        en: "Integrated APIs, deployed with Jenkins, fixed bugs, and supported client questions.",
        vi: "Tích hợp API, deploy bằng Jenkins, fix bug và hỗ trợ khách hàng."
      }
    ],
    stack: "ReactJS · Redux · Redux Thunk · Formik · React-Bootstrap · Sass",
    imageName: "canopylab.png"
  },
  {
    id: 4,
    label: {
      en: "Enterprise widgets",
      vi: "Công cụ widgets doanh nghiệp"
    },
    title: {
      en: "Microsoft Widgets Tool",
      vi: "Microsoft Widgets Tool"
    },
    subtitle: {
      en: "A platform that helps employees manage information from Outlook, Planner, Teams and other Microsoft services in one place.",
      vi: "Nền tảng giúp nhân viên quản lý thông tin từ Outlook, Planner, Teams… tại một nơi."
    },
    focus: {
      en: "Building reusable widget components and integrating Microsoft Graph API.",
      vi: "Xây dựng components widget tái sử dụng và tích hợp Microsoft Graph API."
    },
    bullets: [
      {
        en: "Analyzed requirements and planned new features for the widgets tool.",
        vi: "Phân tích yêu cầu và lập kế hoạch tính năng mới cho widgets tool."
      },
      {
        en: "Organized and implemented reusable UI components.",
        vi: "Tổ chức và xây dựng các UI component tái sử dụng."
      },
      {
        en: "Developed responsive layouts using React Grid Layout and Tailwind.",
        vi: "Phát triển layout responsive với React Grid Layout và Tailwind."
      },
      {
        en: "Integrated Microsoft Graph API and resolved related issues.",
        vi: "Tích hợp Microsoft Graph API và xử lý các vấn đề liên quan."
      }
    ],
    stack: "ReactJS · Redux Toolkit · TypeScript · React Grid Layout · React Hook Form · Tailwind",
    imageName: "ms-widget-tool.png"
  }
];

export const experiences: Experience[] = [
  {
    period: "Oct 2024 – Jul 2025",
    company: "CanopyLAB International ApS",
    role: "Frontend Developer",
    desc: {
      en: "Worked on Ganax, an influencer and brand campaign platform. Implemented UI, integrated APIs, deployed with Jenkins, and maintained production features.",
      vi: "Tham gia dự án Ganax – nền tảng chiến dịch cho influencer & brand. Triển khai UI, tích hợp API, deploy bằng Jenkins và bảo trì tính năng production."
    }
  },
  {
    period: "Jul 2024 – Sep 2024",
    company: "Cherry Solutions",
    role: "Frontend Developer",
    desc: {
      en: "Developed a cloud-based container stowage planning solution, focusing on planning workflows, UI, and API integration for logistics teams.",
      vi: "Phát triển giải pháp cloud cho lập kế hoạch xếp dỡ container, tập trung vào luồng lập kế hoạch, UI và tích hợp API cho team logistics."
    }
  },
  {
    period: "Feb 2020 – Jun 2023",
    company: "Sutrix Solutions",
    role: "Frontend Developer",
    desc: {
      en: "Contributed to a learning management system and related services, including course creation flows, payment pages, and responsive email templates.",
      vi: "Tham gia xây dựng hệ thống LMS và các dịch vụ liên quan: luồng tạo khóa học, trang thanh toán, email template responsive."
    }
  },
  {
    period: "Oct 2019 – Jan 2020",
    company: "Saigon Lab",
    role: "Frontend Intern",
    desc: {
      en: "Gained initial industry experience building and maintaining user interfaces and collaborating with development teams.",
      vi: "Bắt đầu trải nghiệm thực tế: xây dựng, maintain giao diện và phối hợp với team phát triển."
    }
  }
];

export const skillsGroups: SkillsGroup[] = [
  {
    title: { en: "Frontend & UI", vi: "Frontend & UI" },
    items: [
      { en: "HTML, CSS, SCSS", vi: "HTML, CSS, SCSS" },
      { en: "Responsive web design", vi: "Thiết kế web responsive" },
      { en: "Component-based architecture", vi: "Kiến trúc component-based" },
      {
        en: "Design implementation from mockups",
        vi: "Cắt giao diện từ thiết kế (mockup)"
      }
    ]
  },
  {
    title: { en: "Frameworks & Libraries", vi: "Frameworks & Libraries" },
    items: [
      { en: "ReactJS", vi: "ReactJS" },
      {
        en: "Redux, Redux Thunk, Redux Toolkit",
        vi: "Redux, Redux Thunk, Redux Toolkit"
      },
      {
        en: "TypeScript, JavaScript (ES6+)",
        vi: "TypeScript, JavaScript (ES6+)"
      },
      { en: "React Hook Form, Formik", vi: "React Hook Form, Formik" }
    ]
  },
  {
    title: { en: "Tools & Process", vi: "Tools & Process" },
    items: [
      { en: "GitHub, GitLab", vi: "GitHub, GitLab" },
      { en: "Agile / Scrum", vi: "Agile / Scrum" },
      { en: "Jenkins deployment", vi: "Deploy với Jenkins" },
      {
        en: "Reading technical documents in English",
        vi: "Đọc hiểu tài liệu kỹ thuật tiếng Anh"
      }
    ]
  }
];
