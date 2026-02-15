export const portfolioData = {
    personal: {
        name: "Abhijeet Priyankar",
        title: "DevOps Engineer & Site Reliability Engineer",
        location: "New Delhi, India",
        email: "abhijeet9.sh@gmail.com",
        contact: "+91-9873625962",
        summary: "Hi, I’m Abhijeet Priyankar, a DevOps Engineer with 3 years of hands-on experience automating cloud infrastructure and deployment pipelines across Azure and Oracle Cloud environments. I specialize in GitOps, CI/CD automation, Infrastructure as Code (Terraform), and Kubernetes orchestration, enabling scalable and reliable microservices infrastructure. I’m passionate about applying AI-powered automation and predictive observability to build resilient cloud systems. In my current role, I’ve delivered 70% faster deployments by optimizing CI/CD pipelines, reduced cloud infrastructure cost by 60% through automation and resource-efficiency design, and automated provisioning for 50+ VMs. I’m continuously upgrading my skills and hold multiple certifications across Microsoft Azure and Oracle Cloud.",
        socials: {
            github: "https://github.com/abhijeet9sh",
            linkedin: "https://www.linkedin.com/in/abhijeet-priyankar-4a60566b/"
        }
    },
    skills: [
        { category: "Containerization", items: ["Kubernetes", "Docker", "Helm", "Vault", "OpenBao"] },
        { category: "CI/CD & GitOps", items: ["Jenkins", "ArgoCD", "GitLab CI", "GitHub Actions"] },
        { category: "Cloud Platforms", items: ["Azure", "Oracle Cloud", "AWS"] },
        { category: "IaC & Automation", items: ["Terraform", "OpenTofu", "Ansible", "ARM Templates"] },
        { category: "Monitoring & AI", items: ["Zabbix", "Azure Monitor", "GenAI", "Prometheus", "Grafana"] },
        { category: "Scripting", items: ["Bash", "PowerShell", "Python"] },
        { category: "Networking & Infrastructure", items: ["LAN/WAN", "DNS", "DHCP", "VPN", "VLAN", "BGP", "OSPF"] },
        { category: "Security & Compliance", items: ["VAPT", "Trellix EPO", "InfoSec", "Threat Management", "Active Directory"] }
    ],
    experience: [
        {
            company: "STJ Electronics Pvt. Ltd",
            role: "DevOps Engineer",
            period: "June 2023 – Present",
            achievements: [
                "Migrated to open-source tooling (GitLab, Taiga, Harbor, ArgoCD, SonarQube) reducing cost by 60%",
                "Built ArgoCD GitOps pipelines cutting provisioning time by 50%",
                "Automated 30+ deployments via PowerShell & Bash",
                "Managed MicroK8s & AKS for 30+ microservices",
                "Reduced infra utilization cost by 45%"
            ]
        },
        {
            company: "STJ Electronics Pvt. Ltd",
            role: "System Administrator",
            period: "Feb 2023 – May 2023",
            achievements: [
                "Managed Ubuntu servers & Azure–Harvester hybrid cloud",
                "Improved incident workflows (15% faster resolution)",
                "Automated patching with ManageEngine"
            ]
        }
    ],
    education: [
        {
            degree: "PGDIT (Post Graduate Diploma in Information Technology)",
            institution: "Symbiosis Centre for Distance Learning",
            period: "2023 – 2025",
            description: "Specialization in IT Management and Operations."
        },
        {
            degree: "BCA (Bachelor of Computer Applications)",
            institution: "Maharaja Agrasen Himalayan Garhwal University",
            period: "2019 – 2023",
            description: "Foundation in Computer Science, Programming, and Database Management."
        }
    ],
    jobPreferences: {
        roles: ["Cloud Administrator", "DevOps Engineer", "Site Reliability Engineer"],
        locations: ["Bengaluru", "Delhi NCR", "Hyderabad", "Pune", "Chandigarh"],
        types: ["On-site", "Hybrid", "Remote"],
        noticePeriod: "30 days",
        salary: "₹10+ Lakhs/year"
    },
    projects: {
        job: [
            {
                title: "DevOps Infrastructure Modernization & Secure CI/CD",
                description: "Led full-scale DevOps transformation for DCD & BSP teams. Designed modern infrastructure, migrated from JIRA to Taiga, replaced Bitbucket/Jenkins with GitLab CE, and implemented secure CI/CD pipelines with VAPT scans, Vault secrets management, and IDM authentication. Reduced deployment times by 40% and infrastructure costs by 60%.",
                tags: ["GitLab CE", "GitLab CI/CD", "Docker", "Kubernetes", "Vault", "Terraform", "VAPT", "Sonarqube"],
                link: "https://www.linkedin.com/in/abhijeet-priyankar-4a60566b/details/projects/",
                duration: "Jan 2025 – Present"
            },
            {
                title: "Migration from McAfee to Trellix SaaS EPO",
                description: "Led seamless migration of endpoint security from McAfee On-Premises to Trellix SaaS EPO. Eliminated on-premises server costs, enhanced security management with centralized control, modified DLP and firewall policies, and leveraged automated policy enforcement for improved threat detection and compliance.",
                tags: ["McAfee", "Trellix EPO", "Security Management", "DLP", "Cloud Migration"],
                link: "https://www.linkedin.com/in/abhijeet-priyankar-4a60566b/details/projects/",
                duration: "May 2024 – Jul 2024"
            }
        ],
        sideHustle: [
            {
                title: "Network Design for Small Office with Fire Alarm System",
                description: "Designed complete network infrastructure for 500-staff support center relocating to new 3-floor building. Implemented departmental network segmentation, VLAN configuration, routing protocols (OSPF, BGP), and integrated physical security with motion sensors in server room and fire alarm systems on each floor.",
                tags: ["NAT", "LAN-WAN", "DNS", "VLAN", "OSPF", "DHCP", "BGP", "Cisco Packet Tracer"],
                link: "https://drive.google.com/drive/folders/1yEmMUENekZcP0C-rf0GNUzlb9_smbn5V",
                duration: "Jan 2023 – Feb 2023"
            },
            {
                title: "DevOps Portfolio Website",
                description: "Modern, dark-themed portfolio built with React, Vite, TailwindCSS, and Framer Motion. Features bento-grid layout, dynamic project tabs, mobile-responsive navigation, and comprehensive SEO optimization.",
                tags: ["React", "Vite", "TailwindCSS", "Framer Motion", "SEO"],
                link: "https://github.com/abhijeet9sh"
            }
        ]
    },
    certifications: [
        {
            name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
            issuer: "Oracle",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
            date: "Oct 2025",
            credentialId: "323108745OCI25AICFA",
            credentialUrl: "https://www.linkedin.com/in/abhijeet-priyankar-4a60566b/details/certifications/"
        },
        {
            name: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
            issuer: "Oracle",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
            date: "Oct 2025",
            credentialId: "323108745OCI25DOPOCP",
            credentialUrl: "https://www.linkedin.com/in/abhijeet-priyankar-4a60566b/details/certifications/"
        },
        {
            name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
            issuer: "Oracle",
            logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg",
            date: "Oct 2025",
            credentialId: "323108745OCI25GAIOCP",
            credentialUrl: "https://www.linkedin.com/in/abhijeet-priyankar-4a60566b/details/certifications/"
        },
        {
            name: "Generative AI Foundations Certificate Program",
            issuer: "upGrad",
            logo: "/assets/images/upgrad-logo.png",
            date: "Jun 2025",
            credentialId: "h5zPhKWeM2w66u9b",
            credentialUrl: "https://www.linkedin.com/in/abhijeet-priyankar-4a60566b/details/certifications/"
        },
        {
            name: "UEMS Product Training Certificate (EndpointCentral)",
            issuer: "Zoho",
            logo: "/assets/images/zoho-logo.png",
            date: "Jul 2024",
            credentialId: "18PBYZYB6Q5VE",
            credentialUrl: "https://www.linkedin.com/in/abhijeet-priyankar-4a60566b/details/certifications/"
        },
        {
            name: "Microsoft Certified: Azure Administrator Associate",
            issuer: "Microsoft",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            date: "Oct 2023",
            expiryDate: "Oct 2026",
            credentialId: "2B7CF6C3C7FD1F91",
            credentialUrl: "https://www.linkedin.com/in/abhijeet-priyankar-4a60566b/details/certifications/"
        },
        {
            name: "Microsoft 365 Certified: Fundamentals",
            issuer: "Microsoft",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            date: "Jul 2023",
            credentialId: "3CQD-sFKA",
            credentialUrl: "https://www.linkedin.com/in/abhijeet-priyankar-4a60566b/details/certifications/"
        },
        {
            name: "Microsoft Certified: Azure Fundamentals",
            issuer: "Microsoft",
            logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
            date: "Jul 2023",
            credentialId: "6pxe-uTbx",
            credentialUrl: "https://www.linkedin.com/in/abhijeet-priyankar-4a60566b/details/certifications/"
        }
    ]
};
