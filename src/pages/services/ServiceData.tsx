// import Chatbots from "../../assets/images/services/Chatbots.png";
import AiChatbot from "../../assets/images/services/AiChatbot.png";
import WebDevelop from "../../assets/images/services/WebDevelop.png";
import CustomSoftware from "../../assets/images/services/CustomSoftware1.jpg";
import Automation from "../../assets/images/services/automation1.webp";
import Dashboard from "../../assets/images/services/dashboard.jpg";
import UiUx from "../../assets/images/services/UiUx.png";
// import image7 from "../../assets/images/Resourses/blog7.png";
// import image8 from "../../assets/images/Resourses/blog8.png";
// import image9 from "../../assets/images/Resourses/blog9.png";
export interface ServiceSection {
    title: string;
    content: string;
}

export interface ServiceItem {
    id: number;
    slug: string;
    title: string;
    metaTitle?: string;
    metaDescription?: string;
    image: string;
    author: string;
    date: string;
    sections: ServiceSection[];
}

export const servicesData: ServiceItem[] = [
    {
        id: 1,
        slug: "custom-web-platform-development",
        title: "Custom Web and Platform Development Services",
        metaTitle: "Custom Web and Platform Development Services | Full Stack & SaaS Development",
        metaDescription: "Get scalable custom web and platform development services for businesses. We build secure web applications, SaaS platforms, and enterprise solutions tailored to your needs.",
        image: WebDevelop,
        author: "Hariharan",
        date: "February 10, 2026",
        sections: [
            {
                title: "Custom Web and Platform Development Services",
                content: "Our Custom Web and Platform Development Services help businesses build powerful, scalable, and secure digital platforms tailored to their unique needs. Modern organizations require reliable digital systems that can handle growing user demands, complex workflows, and seamless integrations.\nWe design and develop high-performance web applications, SaaS platforms, and enterprise solutions that improve operational efficiency and support long-term business growth. Our development team focuses on delivering flexible, scalable, and future-ready solutions using modern technologies and industry best practices.",
            },
            {
                title: "Full Stack Development Services",
                content: "Our Full Stack Development Services cover both frontend and backend technologies to build complete and scalable web applications. From designing intuitive user interfaces to building powerful backend systems, we provide end-to-end development solutions for businesses of all sizes.\nOur team uses modern frameworks and technologies to ensure high performance, security, and reliability. We create responsive web applications that deliver excellent user experiences across devices while maintaining strong backend architecture for smooth functionality.",
            },
            {
                title: "SaaS Platform Development",
                content: "We provide advanced SaaS Platform Development services to help businesses build and launch scalable cloud-based software products. Software-as-a-Service platforms enable organizations to deliver their services online while supporting multiple users and flexible subscription models.\nOur SaaS solutions are designed with multi-tenant architecture, secure data management, and seamless integrations to ensure reliable performance and scalability. Whether you are launching a new SaaS product or upgrading an existing platform, we develop solutions that support long-term growth.",
            },
            {
                title: "Web Portal Development",
                content: "Our Web Portal Development Services help organizations create centralized digital platforms where users can access information, services, and resources efficiently. Web portals improve communication, collaboration, and workflow management within businesses and institutions.\nWe design customized portals tailored to the specific needs of organizations, ensuring easy navigation, secure access, and scalable functionality.",
            },
            {
                title: "Technologies We Use",
                content: "Our development team uses modern and reliable technologies to build scalable web and platform solutions. By leveraging advanced frameworks and tools, we ensure high performance, security, and flexibility.",
            },
            {
                title: "Benefits of Web and Platform Development",
                content: "Investing in modern web and platform development helps businesses improve efficiency and deliver better digital experiences to customers.",
            },
            {
                title: "Why Choose Our Web and Platform Development Services",
                content: "Choosing the right development partner is essential for building successful digital platforms. Our team combines technical expertise with strategic planning to deliver high-quality solutions that align with business goals.\nWe focus on delivering reliable, scalable, and high-performance platforms that help businesses grow in the digital landscape.",
            },
            {
                title: "Get Started with Our Web and Platform Development Services",
                content: "If you are looking for reliable Web and Platform Development Services, our team is ready to help you build scalable and future-ready digital solutions. We work closely with businesses to understand their requirements and develop customized platforms that drive efficiency and innovation.\nContact our team today to discuss your project and start building a powerful digital platform for your business.",
            },
            {
                title: "FAQ",
                content: "**1: What are Custom Web and Platform Development Services?**\nCustom web and platform development services involve building tailored web applications, portals, and SaaS platforms designed to meet specific business requirements.\n\n**2: What technologies are used in full stack development?**\nFull stack development typically uses technologies like React, Node.js, Express, MongoDB, MySQL, and cloud platforms for scalable web applications.\n\n**3: What is SaaS platform development?**\nSaaS platform development focuses on building cloud-based software applications that users can access through a web browser on a subscription basis.",
            },
        ],
    },
    {
        id: 2,
        slug: "custom-business-application-development",
        title: "Custom Business Application Development Services",
        metaTitle: "Custom Business Application Development | CRM, ERP & Enterprise Software Solutions",
        metaDescription: "Custom Business Application Development services for CRM, ERP, and Web-Based Business Applications. Build scalable enterprise software solutions tailored to your business needs.",
        image: CustomSoftware,
        author: "Hariharan",
        date: "March 06, 2026",
        sections: [
            {
                title: "Custom Business Application Development Services",
                content: "Modern businesses require powerful digital solutions to streamline operations, manage data, and improve productivity. Our Custom Business Application Development services help organizations build scalable software solutions tailored to their unique business processes.\nWe specialize in developing custom CRM systems, ERP platforms, and web-based business applications that help companies automate workflows, improve collaboration, and gain better insights from their data. Our enterprise-grade applications are designed to support long-term growth while maintaining security, scalability, and performance."
            },
            {
                title: "What is Custom Business Application Development?",
                content: "Custom Business Application Development refers to the process of designing and building software solutions specifically tailored to a company's operational requirements. Unlike off-the-shelf software, custom applications are developed with specific features, integrations, and workflows that match the exact needs of a business."
            },
            {
                title: "Our Custom Business Application Development Services",
                content: "We provide comprehensive solutions that help businesses build powerful digital systems that improve operational efficiency and support business growth."
            },
            {
                title: "Custom CRM Development",
                content: "Our Custom CRM Development services help businesses manage customer interactions, track leads, automate sales processes, and improve customer relationships."
            },
            {
                title: "Custom ERP Development",
                content: "Our Custom ERP Development solutions integrate multiple business processes into a unified system that improves operational efficiency and data visibility."
            },
            {
                title: "Web-Based Business Applications",
                content: "We develop web-based business applications that allow organizations to access their systems securely from anywhere. These applications are designed for flexibility, scalability, and multi-user collaboration."
            },
            {
                title: "Enterprise Application Development",
                content: "Our Enterprise Application Development services focus on building large-scale software systems capable of handling complex business processes."
            },
            {
                title: "Benefits of Custom Business Application Development",
                content: "Investing in Custom Business Application Development provides several advantages that help organizations operate more efficiently and remain competitive."
            },
            {
                title: "Get Started with Custom Business Application Development",
                content: "If your business needs a powerful digital system to manage operations efficiently, our Custom Business Application Development services can help.\nWe build custom CRM platforms, ERP systems, web-based business applications, and enterprise software solutions designed to improve productivity, streamline processes, and support business growth."
            },
            {
                title: "FAQ",
                content: "**1. What is Custom Business Application Development?**\nCustom Business Application Development is the process of creating tailored software solutions designed specifically to meet the unique needs of a business.\n\n**2. Why do businesses need custom CRM software?**\nCustom CRM software helps businesses manage customer relationships, automate sales processes, and improve customer engagement.\n\n**3. What is the benefit of custom ERP development?**\nCustom ERP systems integrate multiple business functions into one platform, improving efficiency and reducing manual work.\n\n**4. Are web-based business applications secure?**\nYes, modern web-based applications use secure authentication, encryption, and cloud infrastructure to protect business data."
            }
        ]
    },
    {
        id: 3,
        slug: "ai-chatbot-development",
        title: "Expert AI Chatbot Development Services for Modern Businesses",
        metaTitle: "AI Chatbot Development Services | Custom AI Chatbots & Virtual Assistants for Business",
        metaDescription: "AI Chatbot Development Services for businesses. We build custom AI chatbots, virtual assistants, and AI automation solutions to improve customer support, engagement, and operational efficiency.",
        image: AiChatbot,
        author: "Hariharan",
        date: "March 06, 2026",
        sections: [
            {
                title: "Expert AI Chatbot Development Services for Modern Businesses",
                content: "In today’s digital-first economy, efficiency is everything. Our AI Chatbot Development Services empower businesses to engage customers 24/7, streamline operations, and scale without increasing overhead. Whether you need Custom AI Chatbots or sophisticated Virtual Assistant Development, our solutions bridge the gap between human expertise and machine speed."
            },
            {
                title: "Comprehensive AI Automation Services for Growth",
                content: "To stay competitive, companies are turning to AI Automation Services to handle repetitive tasks. We build intelligent systems that don’t just \"chat\"—they solve problems."
            },
            {
                title: "Get Started with AI Chatbot Development Services",
                content: "If you are looking to automate customer interactions and improve business efficiency, our AI Chatbot Development Services can help you build powerful chatbot solutions tailored to your needs.\nContact our team today to discuss how Custom AI Chatbots, Virtual Assistant Development, and AI Automation Services can transform your business operations."
            },
            {
                title: "FAQ",
                content: "**1. What are AI Chatbot Development Services?**\nAI Chatbot Development Services involve building intelligent chatbots that automate conversations and assist users through natural language interactions.\n\n**2. Can AI chatbots integrate with websites and apps?**\nYes. AI chatbots can be integrated into websites, mobile apps, CRM systems, and messaging platforms.\n\n**3. How do AI chatbots improve customer support?**\nAI chatbots provide instant responses, automate common queries, and offer 24/7 customer assistance.\n\n**4. custom AI chatbots better for businesses?**\nYes. Custom AI Chatbots are designed specifically for business needs and workflows, making them more effective."
            }
        ]
    },
    {
        id: 4,
        slug: "process-automation-system-integration",
        title: "Scalable Process Automation and System Integration Services",
        metaTitle: "Process Automation and System Integration Services | Scale Efficiently",
        metaDescription: "Drive efficiency with Process Automation and System Integration Services. From workflow automation solutions to enterprise system integration, we unify your IT ecosystem.",
        image: Automation,
        author: "Hariharan",
        date: "March 06, 2026",
        sections: [
            {
                title: "Scalable Process Automation and System Integration Services",
                content: "In an era where data silos and manual repetitive tasks hinder growth, businesses need a unified digital backbone. Our Process Automation and System Integration Services are designed to connect your disparate software, automate complex workflows, and eliminate operational bottlenecks. By aligning your technology with your business goals, we help you achieve peak performance."
            },
            {
                title: "Streamline Operations with Business Process Automation",
                content: "Modernizing your operations starts with Business Process Automation (BPA). We look at your manual daily tasks and replace them with intelligent, automated routines that reduce human error and save thousands of man-hours."
            },
            {
                title: "Custom Workflow Automation Solutions for Every Department",
                content: "One-size-fits-all software rarely works. We build bespoke Workflow Automation Solutions tailored to the specific logic of your HR, Sales, and Operations departments."
            },
            {
                title: "Expert IT System Integration Services",
                content: "Beyond software, our IT System Integration Services focus on the technical architecture. We ensure your hardware, networking, and software components function as a single, cohesive unit. This holistic approach ensures that your infrastructure doesn’t just support your business—it accelerates it."
            },
            {
                title: "FAQs",
                content: "**Q: What is the difference between Process Automation and System Integration?**\nA: Process Automation focuses on making a specific series of tasks happen automatically (e.g., sending an email when a form is filled). System Integration is the technical process of connecting different software applications so they can share data and work together.\n\n**Q: How do Workflow Automation Solutions benefit small businesses?**\nA: They allow small teams to handle the workload of much larger organizations by removing the need for manual data management, letting staff focus on high-value strategy and customer service.\n\n**Q: Is Enterprise System Integration secure?**\nA: Yes. We implement high-level encryption, secure API protocols, and identity management to ensure that data moving between integrated systems remains protected and compliant with industry standards."
            }
        ]
    },
    {
        id: 5,
        slug: "business-intelligence-dashboard-development",
        title: "Transform Your Raw Data into Strategic Gold with Business Intelligence Services",
        metaTitle: "Business Intelligence Services & Custom Dashboard Development",
        metaDescription: "Unlock growth with expert Business Intelligence Services. We offer custom dashboard development and data reporting solutions to turn complex data into clear action.",
        image: Dashboard,
        author: "Hariharan",
        date: "March 06, 2026",
        sections: [
            {
                title: "Transform Your Raw Data into Strategic Gold with Business Intelligence Services",
                content: "In the modern market, data is the most valuable asset you own, but only if you can read the map. If your team is still spending hours manually stitching together reports or arguing over which spreadsheet is the \"latest version,\" you aren't just losing time; you’re losing your competitive edge.\nAt Coirei, we provide end-to-end Business Intelligence services that turn chaotic data streams into clear, actionable narratives. We don’t just give you numbers; we give you the \"why\" behind them."
            },
            {
                title: "Custom Dashboard Development for Real-Time Clarity",
                content: "Static reports are obsolete the moment they’re printed. Our approach to custom dashboard development focuses on creating living, breathing Command Centers for your business.\nWhether you’re a CEO needing a high-level bird’s-eye view or an Ops Manager tracking hourly throughput, we build interfaces that matter."
            },
            {
                title: "Scalable Data Reporting Solutions",
                content: "Reliable decisions require a \"Single Source of Truth.\" Our data reporting solutions eliminate silos and ensure that every department is looking at the same accurate metrics."
            },
            {
                title: "Automated Data Integration (ETL)",
                content: "We automate the heavy lifting. We pull data from your CRM, ERP, and marketing platforms, clean it, and pipe it directly into your reporting suite. No more \"Death by Manual Entry.\""
            },
            {
                title: "Visual Storytelling & Analytics",
                content: "Data shouldn't be boring. We use advanced data visualization techniques to highlight trends, outliers, and opportunities that would be invisible in a standard table."
            },
            {
                title: "Stop Guessing. Start Growing.",
                content: "The difference between a \"good\" year and a \"great\" year is often found in the data you already have. Let us help you find it. From custom dashboard development to comprehensive data reporting solutions, we are your partners in precision."
            }
        ]
    },
    {
        id: 6,
        slug: "ui-ux-branding-product-design",
        title: "Elevate Your Digital Presence with Strategic UI/UX, Branding & Product Design",
        metaTitle: "UI/UX Design Services, Branding & Strategic Product Design",
        metaDescription: "Transform your digital presence with expert UI/UX design services, cohesive brand identity, and user-centric product design strategy.",
        image: UiUx,
        author: "Hariharan",
        date: "March 06, 2026",
        sections: [
            {
                title: "Elevate Your Digital Presence with Strategic UI/UX, Branding & Product Design",
                content: "In a crowded digital marketplace, \"average\" is invisible. If your brand doesn't tell a story and your product isn't easy to use, your customers will find someone else who is.\nAt coirei, we don't just design interfaces; we create experiences. By blending brand identity design with high-performance UI/UX design services, we ensure your business doesn't just look better, it performs better."
            },
            {
                title: "UI/UX Design Services: Where Friction Goes to Die",
                content: "A beautiful app that no one can navigate is a failure. Our UI/UX design services focus on the intersection of human psychology and digital functionality. We build products that feel intuitive, not instructional."
            },
            {
                title: "User Research & Journey Mapping",
                content: "We start by asking who your users are and what they actually want. By mapping out the user journey, we eliminate bottlenecks before a single pixel is drawn."
            },
            {
                title: "Wireframing & Rapid Prototyping",
                content: "We believe in \"failing fast\" to succeed sooner. Our low-fidelity wireframes and high-fidelity prototypes allow you to test functionality and flow early in the process, saving you time and development costs."
            },
            {
                title: "Brand Identity Design: More Than Just a Logo",
                content: "Your brand is the gut feeling someone has about your business. It’s your promise, your personality, and your reputation. Our brand identity design process ensures that every touchpoint, from your website to your social media, speaks with one cohesive voice."
            },
            {
                title: "Holistic Product Design Strategy",
                content: "Great products aren't built in a vacuum. Our product design strategy bridges the gap between your business goals and your users’ pain points. We look at the big picture to ensure your product is viable, feasible, and deeply desirable."
            },
            {
                title: "Ready to Build Something Remarkable?",
                content: "Don't let poor design be the reason your great idea fails. Whether you need a complete brand identity design or a specialized product design strategy, our team is ready to bring your vision to life."
            }
        ]
    }
];
