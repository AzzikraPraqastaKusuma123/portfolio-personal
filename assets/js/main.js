/* ============================================================

   AZZIKRA PORTFOLIO - MAIN JAVASCRIPT

   Fitur: Bilingual (ID/EN), Dark/Light Theme, Particles,

          Typewriter, ScrollReveal, Smooth Interactions

   ============================================================ */

// ===== i18n TRANSLATIONS =====

const translations = {

    id: {

        // Navigasi

        nav_home: "Beranda",

        nav_about: "Tentang",

        nav_skills: "Keahlian",

        nav_projects: "Proyek",

        nav_experience: "Pengalaman",

        nav_education: "Pendidikan",

        nav_contact: "Kontak",

        // Hero

        hero_badge: "Terbuka untuk peluang baru",

        hero_greeting: "Halo, saya",

        hero_description: "Insinyur perangkat lunak & IT Support dengan 3+ tahun membangun solusi web full stack, mengelola infrastruktur server, dan merancang pengalaman digital yang intuitif. Dari baris kode hingga kabel jaringan, saya hadir untuk membuat teknologi bekerja lebih baik.",

        hero_contact: "Hubungi Saya",

        hero_scroll: "Gulir ke bawah",

        // About

        about_subtitle: "Tech Enthusiast",

        about_title: "Siapa Saya?",

        about_stat_years: "Tahun Pengalaman",

        about_stat_projects: "Proyek Selesai",

        about_stat_certs: "Sertifikasi",

        about_role: "Full Stack Web Developer",

        about_text_1: "Lulusan S1 Sistem Informasi Universitas Mercu Buana (IPK 3.57/4.00) yang adaptif, cepat belajar, dan memiliki ketertarikan kuat pada pemecahan masalah melalui teknologi. Berpengalaman lebih dari 3 tahun di pengembangan aplikasi web full stack dengan Node.js, Express.js, React.js, serta integrasi database MySQL/SQL dan RESTful API.",

        about_text_2: "Selain pengembangan perangkat lunak, saya juga berpengalaman sebagai IT Support dan System Administrator. Terbiasa mengelola server virtualisasi (Proxmox, Docker), infrastruktur jaringan, serta menjembatani kebutuhan bisnis antara pengguna non-teknis dengan solusi teknis yang efisien.",

        about_gpa: "IPK 3.57 / 4.00",

        // Skills

        skills_subtitle: "Apa yang saya kuasai",

        skills_title: "Keahlian & Teknologi",

        skill_soft_2: "Komunikasi dan Public Speaking",

        skill_soft_3: "Kreativitas & Critical Thinking",

        skill_soft_4: "Kolaborasi Tim & Kepemimpinan",

        skill_soft_5: "Manajemen Waktu & Manajemen Proyek",

        // Projects

        projects_subtitle: "Karya Saya",

        projects_title: "Proyek Terbaru",

        other_projects_title: "Proyek Lainnya",

        project_1_desc: "Project manajemen & fullstack development aplikasi konsultasi hukum daring antara klien dan pengacara.",

        project_1_details: "Membangun arsitektur end-to-end menggunakan Node.js, React.js, dan MySQL, merancang RESTful API, autentikasi multi peran berbasis JWT, integrasi pembayaran Midtrans, live chat real time dengan Socket.io, serta dashboard responsif. Mengelola siklus pengembangan dengan Trello dan GitHub, serta melakukan pengujian API menggunakan Postman. Proyek ini meraih Juara 2 PHKM 2025 dan Silver Medal Pekan Inovasi Nasional UMB.",

        project_2_desc: "Backend development sistem manajemen IP Address internal perusahaan berbasis RESTful API.",

        project_2_details: "Mengembangkan layanan backend menggunakan Node.js dan MySQL untuk monitoring, pencarian, dan pengelolaan data IP secara real-time. Merancang arsitektur database yang efisien, melakukan pengujian API dengan Postman, dan mengelola alur kerja proyek melalui GitHub. Berkolaborasi dengan tim untuk memastikan integrasi backend–frontend berjalan lancar dan siap dioperasikan dalam lingkungan produksi.",

        project_oop_title: "Tugas Object-Oriented Programming (OOP)",

        project_oop_desc: "Mengembangkan aplikasi e-commerce berbasis web untuk Level Up Computer menggunakan Java dan NetBeans.",

        project_oop_details: "Fokus pada pengembangan frontend dan backend. Dibangun menggunakan Java dengan IDE NetBeans, menerapkan prinsip pemrograman berorientasi objek untuk codebase yang bersih, modular, dan mudah dipelihara.",

        project_mobile_title: "Tugas Mobile Programming",

        project_mobile_desc: "Mengembangkan aplikasi e-commerce berbasis mobile untuk Level Up Computer menggunakan Flutter dan Dart.",

        project_mobile_details: "Aplikasi ini mencakup fitur utama seperti Halaman Utama dan Halaman Checkout. Bertanggung jawab untuk merancang antarmuka dan mengimplementasikan fitur untuk meningkatkan pengalaman pengguna.",

        project_3_desc: "Proyek peningkatan website e-commerce menggunakan JavaScript dan Bootstrap.",

        project_3_details: "Dengan MySQL sebagai database dan Nginx sebagai web server. Membangun server dari laptop bekas dengan upgrade memori dan hard disk untuk pengembangan. Server dikelola dengan Proxmox untuk menangani VM dan container pada satu mesin fisik.",

        project_4_title: "Perancangan Sistem Informasi Monitoring Nutrisi Hidroponik Berbasis Web",

        project_4_desc: "Proyek ini adalah sistem monitoring hidroponik berbasis IoT.",

        project_4_details: "Memungkinkan pengguna memantau parameter kritis seperti pH, kelembaban, suhu air, dan tingkat TDS secara real-time melalui website. Dirancang untuk membantu petani hidroponik mengelola tanaman mereka dengan lebih efisien dan nyaman.",

        project_5_desc: "Sistem Manajemen Keuangan berbasis aplikasi web.",

        project_5_details: "Dikembangkan menggunakan PHP dan MySQL untuk menyederhanakan transaksi keuangan dan manajemen anggaran. Memungkinkan pelacakan data keuangan secara real-time, menawarkan antarmuka yang ramah pengguna untuk input transaksi, perencanaan anggaran, dan visualisasi data melalui tabel responsif.",

        project_6_desc: "Desain antarmuka yang intuitif dan menarik secara visual untuk aplikasi e-commerce streetwear.",

        project_6_details: "Untuk aplikasi e-commerce web dan mobile yang fokus pada fashion streetwear. Menciptakan pengalaman belanja yang mulus yang mencerminkan identitas merek dan menarik bagi target audiens.",

        project_7_desc: "Desain UI/UX untuk aplikasi rujukan pasien rumah sakit.",

        project_7_details: "Fokus pada antarmuka yang intuitif dan ramah pengguna, menyederhanakan navigasi antara informasi pasien, status rujukan, dan penjadwalan janji. Dioptimalkan untuk kemudahan dan efisiensi dalam proses rujukan medis.",

        project_8_desc: "Desain UI/UX untuk aplikasi top-up game.",

        project_8_details: "Fokus pada antarmuka yang intuitif dan ramah pengguna, memudahkan pengguna memilih game, memilih jumlah top-up, dan menyelesaikan pembayaran dengan aman. Memastikan navigasi yang lancar dan proses transaksi yang mulus.",

        project_9_desc: "Menu Ordering Coffee Shop adalah aplikasi berbasis web.",

        project_9_details: "Dirancang untuk membuat pemesanan di kedai kopi lebih mudah dan efisien. Pelanggan dapat menelusuri menu dan melakukan pemesanan secara online. Menggabungkan front-end yang interaktif dengan back-end yang kuat untuk mengelola pesanan dan data.",

        project_sales_desc: "Aplikasi web full stack untuk monitoring dan pengelolaan kinerja penjualan tim secara real-time dengan dashboard interaktif dan ekspor data.",

        project_sales_details: "Membangun arsitektur full stack menggunakan Node.js, Express.js, React.js, dan MySQL. Fitur utama meliputi dashboard dinamis dengan Chart.js, manajemen pengguna lengkap (NIK, profil detail), manajemen produk & target penjualan, pencatatan pencapaian sales, serta ekspor laporan ke Excel dengan ExcelJS. Dilengkapi autentikasi JWT dan antarmuka responsif di berbagai perangkat.",

        project_padi_desc: "Aplikasi web full-stack untuk deteksi otomatis penyakit daun padi menggunakan deep learning ResNet50v2 dan Google Gemini API.",

        project_padi_details: "Membangun sistem deteksi penyakit tanaman end-to-end dengan Node.js, Express.js, React.js, dan MySQL. Mengintegrasikan model ONNX ResNet50v2 untuk klasifikasi gambar, Google Gemini API untuk rekomendasi dan informasi dinamis, fitur kamera real-time (depan/belakang), unggah gambar dengan drag-and-drop, autentikasi JWT, serta dashboard admin untuk manajemen pengguna dan data penyakit.",

        // Experience

        experience_subtitle: "Perjalanan Karir",

        experience_title: "Pengalaman Kerja",

        exp_type_internship: "Magang",

        exp_type_teaching: "Mengajar",

        exp_type_organization: "Organisasi",

        exp_status_latest: "Terbaru",

        exp_1_date: "Agustus – Oktober 2024",

        exp_1_desc: "Pemeliharaan infrastruktur IT, troubleshooting jaringan, dan dukungan teknis untuk sistem administrasi instansi.",

        exp_1_duration: "3 Bulan",

        exp_2_title: "Guru TIK",

        exp_2_date: "Oktober – November 2024",

        exp_2_desc: "Mengajar mata pelajaran Teknologi Informasi dan Komunikasi (TIK) kepada siswa kelas X–XII.",

        exp_2_duration: "2 Bulan",

        exp_itstaff_title: "Staf IT",

        exp_3_title: "Anggota Divisi Pendidikan",

        exp_3_desc: "Mengkoordinasikan kegiatan edukasi, seminar teknologi, dan pelatihan keterampilan untuk anggota himpunan.",

        exp_4_date: "Februari – Mei 2025",

        exp_4_desc: "Mengembangkan backend system untuk manajemen IP Address internal perusahaan menggunakan Node.js, MySQL, dan RESTful API.",

        exp_4_duration: "4 Bulan",

        exp_4_org_duration: "1 Tahun",

        exp_5_title: "Freelance Web Developer",

        exp_5_company: "Self-Employed · Remote",

        exp_5_date: "Agustus 2025 – Sekarang",

        exp_5_desc: "Merancang dan mengembangkan website responsif untuk berbagai klien, termasuk company profile, landing page, dan aplikasi web menggunakan React, Node.js, dan teknologi modern lainnya.",

        exp_5_duration: "7 Bulan",

        // Education

        education_subtitle: "Latar Belakang Akademis",

        education_title: "Pendidikan & Sertifikasi",

        edu_faculty: "Fakultas Ilmu Komputer – S1 Sistem Informasi",

        edu_present: "2026",

        cert_title: "Bahasa & Sertifikasi",

        cert_1: "Bahasa Inggris – Intermediate (TOEFL Score 620)",

        cert_carousel_subtitle: "Dokumen Resmi",

        cert_carousel_title: "Galeri Sertifikat",

        cert_view: "Lihat",

        cert_download: "Unduh",

        org_title: "Organisasi & Kepemimpinan",

        org_name: "Himpunan Mahasiswa Sistem Informasi Universitas Mercu Buana",

        org_role: "Anggota Divisi Pendidikan | 2023 – 2024",

        org_item_1: "Aktif sebagai Anggota Divisi Pendidikan dan pernah menjabat Kepala Divisi Acara Pengabdian Masyarakat.",

        org_item_2: "Merencanakan, mengoordinasikan, dan melaksanakan kegiatan kemahasiswaan, sosialisasi mahasiswa baru, serta pelatihan kepemimpinan mahasiswa.",

        org_item_3: "Berpengalaman sebagai Master of Ceremony (MC) dan pembicara pada berbagai acara internal dan program pengabdian masyarakat.",

        // Contact

        contact_subtitle: "Mari Terhubung",

        contact_title: "Hubungi Saya",

        contact_location_label: "Lokasi",

        contact_phone_label: "Telepon",

        form_name: "Nama Lengkap",

        form_message: "Pesan",

        form_submit: "Kirim Pesan",

        contact_avail_status: "Tersedia untuk Peluang Baru",

        contact_avail_desc: "Full-time \u2022 Freelance \u2022 Kolaborasi Proyek",

        contact_intro: "Punya proyek atau ide yang ingin diwujudkan? Hubungi saya, saya membalas dalam 24 jam.",

        contact_form_title: "Kirim Pesan",

        // IT Support ITSJ

        exp_itsj_title: "IT Support",

        exp_itsj_desc: "Bertanggung jawab dalam pemeliharaan dan dukungan infrastruktur IT di beberapa institusi pendidikan termasuk TK, SD, SMP, dan SMA Al Azhar Kembangan serta Yayasan Al Ikhwan.",

        exp_itsj_r1: "Melakukan pemeliharaan dan troubleshooting PC, printer, dan perangkat jaringan di ruang kelas, ruang guru, dan area administrasi.",

        exp_itsj_r2: "Mengelola infrastruktur jaringan termasuk router MikroTik dan access point UniFi untuk konektivitas stabil dan andal.",

        exp_itsj_r3: "Melakukan pemeliharaan server dan memantau kinerja sistem untuk meminimalkan downtime.",

        exp_itsj_r4: "Membuat dan mengelola laporan tiket untuk masalah perangkat keras (PC & printer) dan jaringan.",

        exp_itsj_r5: "Menyiapkan laporan pemeliharaan rutin (mingguan dan semesteran) untuk pelacakan kinerja dan dokumentasi.",

        exp_itsj_r6: "Memberikan dukungan teknis dan penyelesaian cepat untuk masalah perangkat keras dan jaringan.",

        exp_present: "Sekarang",

        exp_month: "Bulan",

        // Footer

        footer_text: "Membangun solusi digital yang membawa dampak nyata.",

        footer_rights: "Hak cipta dilindungi.",

        // Toggle

        read_more: "Selengkapnya",

        read_less: "Sembunyikan",

        // Typewriter roles (About section)
        typewriter_roles: [
            "Full Stack Web Developer",
            "IT Support"
        ],
        // Hero big typewriter
        hero_roles: [
            "FULL STACK ENGINEER.",
            "IT SUPPORT.",
            "UI/UX DESIGNER.",
            "DEVOPS ENGINEER."
        ]
    },
    en: {

        // Navigation

        nav_home: "Home",

        nav_about: "About",

        nav_skills: "Skills",

        nav_projects: "Projects",

        nav_experience: "Experience",

        nav_education: "Education",

        nav_contact: "Contact",

        // Hero

        hero_badge: "Open to new opportunities",

        hero_greeting: "Hello, I'm",

        hero_description: "Software Engineer & IT Support with 3+ years building full stack web solutions, managing server infrastructure, and crafting intuitive digital experiences. From code to network cables, I make technology work smarter.",

        hero_contact: "Contact Me",

        hero_scroll: "Scroll down",

        // About

        about_subtitle: "Tech Enthusiast",

        about_title: "Who Am I?",

        about_stat_years: "Years Experience",

        about_stat_projects: "Projects Done",

        about_stat_certs: "Certifications",

        about_role: "Full Stack Web Developer",

        about_text_1: "Graduate of S1 Information Systems at Mercu Buana University (GPA 3.57/4.00), adaptive, fast learner, with a strong interest in problem-solving through technology. Over 3 years of experience in full stack web application development with Node.js, Express.js, React.js, as well as MySQL/SQL database integration and RESTful APIs.",

        about_text_2: "Beyond software development, I also have experience as an IT Support and System Administrator. Proficient in managing virtualization servers (Proxmox, Docker), network infrastructure, and bridging technical solutions with non-technical business needs.",

        about_gpa: "GPA 3.57 / 4.00",

        // Skills

        skills_subtitle: "What I Master",

        skills_title: "Skills & Technologies",

        skill_soft_2: "Communication & Public Speaking",

        skill_soft_3: "Creativity & Critical Thinking",

        skill_soft_4: "Team Collaboration & Leadership",

        skill_soft_5: "Time Management & Project Management",

        // Projects

        projects_subtitle: "My Works",

        projects_title: "Recent Projects",

        other_projects_title: "Other Projects",

        project_1_desc: "Project management & fullstack development of an online legal consultation application between clients and lawyers.",

        project_1_details: "Built end-to-end architecture using Node.js, React.js, and MySQL, designed RESTful API, multi-role JWT-based authentication, Midtrans payment integration, real-time live chat with Socket.io, and responsive dashboard. Managed the development cycle with Trello and GitHub, and performed API testing using Postman. This project won 2nd Place at PHKM 2025 and Silver Medal at UMB National Innovation Week.",

        project_2_desc: "Backend development of company internal IP Address management system based on RESTful API.",

        project_2_details: "Developed backend services using Node.js and MySQL for real-time monitoring, searching, and managing IP data. Designed efficient database architecture, performed API testing with Postman, and managed project workflow through GitHub. Collaborated with the team to ensure smooth backend-frontend integration ready for production.",

        project_oop_title: "Object-Oriented Programming (OOP) Assignment",

        project_oop_desc: "Developed a web-based e-commerce application for Level Up Computer using Java and NetBeans.",

        project_oop_details: "Focusing on frontend and backend development. Built using Java with the NetBeans IDE, implementing object-oriented principles for a clean, modular, and maintainable codebase.",

        project_mobile_title: "Mobile Programming Assignment",

        project_mobile_desc: "Developing a mobile-based e-commerce application for Level Up Computer using Flutter and Dart.",

        project_mobile_details: "The app includes key features like a Home Page and Checkout Page. Responsible for designing the interface and implementing features to enhance user experience.",

        project_3_desc: "E-commerce website improvement project using JavaScript and Bootstrap.",

        project_3_details: "With MySQL as the database and Nginx as the web server. Built a server from a refurbished laptop with upgraded memory and hard disk for development. The server is managed with Proxmox to handle VMs and containers on a single physical machine.",

        project_4_title: "Designing a Web-Based Nutrient Monitoring Information System for Hydroponics",

        project_4_desc: "This project is an IoT-based hydroponic monitoring system.",

        project_4_details: "Allows users to monitor critical parameters such as pH, humidity, water temperature, and TDS levels in real-time through a website. Designed to assist hydroponic farmers in managing their crops more efficiently and conveniently.",

        project_5_desc: "The Financial Management System is a web-based application.",

        project_5_details: "Developed using PHP and MySQL to streamline financial transactions and budget management. Allows real-time tracking of financial data, offering user-friendly interfaces for transaction input, budget planning, and data visualization through responsive tables.",

        project_6_desc: "Design an intuitive, visually appealing interface for a streetwear e-commerce application.",

        project_6_details: "For a web and mobile e-commerce application focused on streetwear fashion. Creating a seamless shopping experience that reflects the brand's identity and appeals to its target audience.",

        project_7_desc: "UI/UX Design for a hospital patient referral app.",

        project_7_details: "Focuses on an intuitive and user-friendly interface, simplifying navigation between patient information, referral status, and appointment scheduling. Optimized for ease and efficiency in the medical referral process.",

        project_8_desc: "UI/UX Design for a game top-up application.",

        project_8_details: "Focusing on an intuitive and user-friendly interface, making it easy for users to select games, choose top-up amounts, and complete payments securely. Ensures smooth navigation and a seamless transaction process.",

        project_9_desc: "The Menu Ordering Coffee Shop is a web-based app.",

        project_9_details: "Designed to make ordering at a coffee shop easier and more efficient. Customers can browse the menu and place orders online. Combines an interactive front-end with a robust back-end for managing orders and data.",

        project_sales_desc: "Full stack web application for real-time monitoring and management of team sales performance with an interactive dashboard and data export.",

        project_sales_details: "Built full stack architecture using Node.js, Express.js, React.js, and MySQL. Key features include dynamic dashboard with Chart.js, comprehensive user management (ID number, detailed profiles), product & sales target management, achievement tracking, and Excel report export with ExcelJS. Equipped with JWT authentication and responsive UI across devices.",

        project_padi_desc: "Full-stack web application for automatic rice leaf disease detection using ResNet50v2 deep learning and Google Gemini API.",

        project_padi_details: "Built an end-to-end plant disease detection system with Node.js, Express.js, React.js, and MySQL. Integrated ONNX ResNet50v2 model for image classification, Google Gemini API for dynamic recommendations and information, real-time camera features (front/rear), drag-and-drop image upload, JWT authentication, and admin dashboard for user and disease data management.",

        // Experience

        experience_subtitle: "Career Journey",

        experience_title: "Work Experience",

        exp_type_internship: "Internship",

        exp_type_teaching: "Teaching",

        exp_type_organization: "Organization",

        exp_status_latest: "Latest",

        exp_1_date: "August – October 2024",

        exp_1_desc: "IT infrastructure maintenance, network troubleshooting, and technical support for institution's administrative systems.",

        exp_1_duration: "3 Months",

        exp_2_title: "ICT Teacher",

        exp_2_date: "October – November 2024",

        exp_2_desc: "Taught Information and Communication Technology (ICT) subjects to 10th–12th grade students.",

        exp_2_duration: "2 Months",

        exp_itstaff_title: "IT Staff",

        exp_3_title: "Education Division Member",

        exp_3_desc: "Coordinated educational activities, tech seminars, and skills training for association members.",

        exp_4_date: "February – May 2025",

        exp_4_desc: "Developed backend system for company internal IP Address management using Node.js, MySQL, and RESTful API.",

        exp_4_duration: "4 Months",

        exp_4_org_duration: "1 Year",

        exp_5_title: "Freelance Web Developer",

        exp_5_company: "Self-Employed · Remote",

        exp_5_date: "August 2025 – Present",

        exp_5_desc: "Designing and developing responsive websites for various clients, including company profiles, landing pages, and web applications using React, Node.js, and other modern technologies.",

        exp_5_duration: "7 Months",

        // Education

        education_subtitle: "Academic Background",

        education_title: "Education & Certifications",

        edu_faculty: "Faculty of Computer Science – S1 Information Systems",

        edu_present: "2026",

        cert_title: "Language & Certifications",

        cert_1: "English – Intermediate (TOEFL Score 620)",

        cert_carousel_subtitle: "Official Documents",

        cert_carousel_title: "Certificate Gallery",

        cert_view: "View",

        cert_download: "Download",

        org_title: "Organization & Leadership",

        org_name: "Information Systems Student Association of Mercu Buana University",

        org_role: "Education Division Member | 2023 – 2024",

        org_item_1: "Active as Education Division Member and formerly served as Head of Community Service Event Division.",

        org_item_2: "Planned, coordinated, and executed student activities, new student orientations, and student leadership training.",

        org_item_3: "Experienced as Master of Ceremony (MC) and speaker at various internal events and community service programs.",

        // Contact

        contact_subtitle: "Let's Connect",

        contact_title: "Contact Me",

        contact_location_label: "Location",

        contact_phone_label: "Phone",

        form_name: "Full Name",

        form_message: "Message",

        form_submit: "Send Message",

        contact_avail_status: "Open to New Opportunities",

        contact_avail_desc: "Full-time \u2022 Freelance \u2022 Project Collaboration",

        contact_intro: "Have a project or idea you want to bring to life? Contact me, I reply within 24 hours.",

        contact_form_title: "Send a Message",

        // IT Support ITSJ

        exp_itsj_title: "IT Support",

        exp_itsj_desc: "Responsible for maintaining and supporting IT infrastructure across educational institutions including TK, SD, SMP, and SMA Al Azhar Kembangan, as well as Yayasan Al Ikhwan.",

        exp_itsj_r1: "Perform maintenance and troubleshooting for PCs, printers, and network devices across classrooms, teacher offices, and administrative areas.",

        exp_itsj_r2: "Manage network infrastructure including MikroTik routers and UniFi access points to ensure stable and reliable connectivity.",

        exp_itsj_r3: "Handle server maintenance and monitor system performance to minimize downtime.",

        exp_itsj_r4: "Create and manage ticketing reports for hardware (PC & printer) and network issues.",

        exp_itsj_r5: "Prepare routine maintenance reports (weekly and biannual) for performance tracking and documentation.",

        exp_itsj_r6: "Provide technical support and quick resolution for hardware and network-related problems.",

        exp_present: "Present",

        exp_month: "Month",

        // Footer

        footer_text: "Building digital solutions that make a real impact.",

        footer_rights: "All rights reserved.",

        // Toggle

        read_more: "Read More",

        read_less: "Show Less",

        // Typewriter roles (About section)
        typewriter_roles: [
            "Full Stack Web Developer",
            "IT Support"
        ],
        // Hero big typewriter
        hero_roles: [
            "FULL STACK ENGINEER.",
            "IT SUPPORT.",
            "UI/UX DESIGNER.",
            "DEVOPS ENGINEER."
        ]
    }
};

// ===== STATE =====

let currentLang = localStorage.getItem('portfolio-lang') || 'id';

let currentTheme = localStorage.getItem('portfolio-theme') || 'dark';

// ===== DOM LOADED =====

document.addEventListener('DOMContentLoaded', () => {

    initTheme();

    initLanguage();

    initNavigation();

    initNavDropdown();

    initScrollEffects();

    initProjectToggles();

    initCarousel();

    initCarouselFilter();

    initCountUp();

    initScrollReveal();

    initContactForm();

    // New premium features
    initScrollProgress();

    initCommandMenu();

    initTypewriter();

    initHeroTypewriter();

});

// ===== THEME SYSTEM =====

function initTheme() {

    if (currentTheme === 'light') {

        document.documentElement.setAttribute('data-theme', 'light');

        updateThemeIcon();

    }

    const themeToggle = document.getElementById('theme-toggle');

    if (themeToggle) {

        themeToggle.addEventListener('click', () => {

            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';

            if (currentTheme === 'light') {

                document.documentElement.setAttribute('data-theme', 'light');

            } else {

                document.documentElement.removeAttribute('data-theme');

            }

            localStorage.setItem('portfolio-theme', currentTheme);

            updateThemeIcon();

        });

    }

}

function updateThemeIcon() {

    const icon = document.querySelector('#theme-toggle i');

    if (icon) {

        icon.className = currentTheme === 'dark' ? 'bx bx-moon' : 'bx bx-sun';

    }

}

// ===== LANGUAGE SYSTEM =====

function initLanguage() {

    setLanguage(currentLang);

    document.querySelectorAll('.lang-btn').forEach(btn => {

        btn.addEventListener('click', () => {

            const lang = btn.dataset.lang;

            if (lang !== currentLang) {

                currentLang = lang;

                localStorage.setItem('portfolio-lang', lang);

                setLanguage(lang);

            }

        });

    });

}

function setLanguage(lang) {

    const t = translations[lang];

    if (!t) return;

    // Update all elements with data-i18n

    document.querySelectorAll('[data-i18n]').forEach(el => {

        const key = el.dataset.i18n;

        if (t[key]) {

            el.textContent = t[key];

        }

    });

    // Update toggle buttons text (top-card and any future toggles)

    document.querySelectorAll('[data-i18n-toggle]').forEach(btn => {

        // find closest details element — works for top-card__body parent

        const body = btn.closest('.top-card__body');

        const details = body ? body.querySelector('.top-card__details') : null;

        if (details && details.classList.contains('show')) {

            btn.innerHTML = `${t['read_less'] || 'Show Less'} <i class='bx bx-chevron-up' style="font-size:1rem"></i>`;

        } else {

            btn.innerHTML = `${t['read_more'] || 'Read More'} <i class='bx bx-chevron-down' style="font-size:1rem"></i>`;

        }

    });

    // Update active button styling

    document.querySelectorAll('.lang-btn').forEach(btn => {

        btn.classList.toggle('active', btn.dataset.lang === lang);

    });

    // Update html lang

    document.documentElement.lang = lang;

    // Update specific logic for Present dates
    document.querySelectorAll('[data-exp-start], [data-exp-start-id]').forEach(el => {
        const startId = el.dataset.expStartId || el.dataset.expStart;
        const startEn = el.dataset.expStartEn || el.dataset.expStart;
        const start = lang === 'id' ? startId : startEn;
        el.textContent = `${start} – ${t.exp_present}`;
    });

    // Update all duration elements
    initExperienceDuration();

    // Update typewriter roles on language change
    if (window.typewriterInstance) {
        window.typewriterInstance.updateRoles(t.typewriter_roles || ["Full Stack Web Developer"]);
    }
    // Update hero typewriter roles on language change
    if (window.heroTypewriterInstance) {
        window.heroTypewriterInstance.updateRoles(t.hero_roles || ["FULL STACK ENGINEER."]);
    }

    // Update CV download button based on active language
    const cvBtn = document.getElementById('cv-download-btn');
    if (cvBtn) {
        if (lang === 'en') {
            cvBtn.href = 'CV/CV_Azzikra_Praqasta_Kusuma_ATS_EN.pdf';
        } else {
            cvBtn.href = 'CV/CV_Azzikra_Praqasta_Kusuma_ATS.pdf';
        }
    }

}

// ===== NAVIGATION =====

function initNavigation() {

    const navToggle = document.getElementById('nav-toggle');

    const navClose = document.getElementById('nav-close');

    const navMenu = document.getElementById('nav-menu');

    const navLinks = document.querySelectorAll('.nav__link');

    const navOverlay = document.getElementById('nav-overlay');

    function openMenu() {
        navMenu.classList.add('show-menu');
        if (navOverlay) {
            navOverlay.style.display = 'block';
            setTimeout(() => navOverlay.classList.add('show-overlay'), 10);
        }
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        navMenu.classList.remove('show-menu');
        if (navOverlay) {
            navOverlay.classList.remove('show-overlay');
            setTimeout(() => { navOverlay.style.display = 'none'; }, 350);
        }
        document.body.style.overflow = '';
    }

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', openMenu);
    }

    if (navClose) {
        navClose.addEventListener('click', closeMenu);
    }

    // Close menu when clicking overlay
    if (navOverlay) {
        navOverlay.addEventListener('click', closeMenu);
    }

    // Close menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Header scroll effect

    window.addEventListener('scroll', () => {

        const header = document.getElementById('header');

        if (window.scrollY > 50) {

            header.classList.add('scroll-header');

        } else {

            header.classList.remove('scroll-header');

        }

    });

    // Active link on scroll

    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {

        const scrollY = window.scrollY;

        sections.forEach(section => {

            const sectionHeight = section.offsetHeight;

            const sectionTop = section.offsetTop - 100;

            const sectionId = section.getAttribute('id');

            const link = document.querySelector(`.nav__link[href*="${sectionId}"]`);

            if (link) {

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

                    link.classList.add('active-link');

                } else {

                    link.classList.remove('active-link');

                }

            }

        });

    });

    // Scroll to top button

    const scrollTopBtn = document.getElementById('scroll-top');

    if (scrollTopBtn) {

        window.addEventListener('scroll', () => {

            if (window.scrollY > 400) {

                scrollTopBtn.classList.add('show');

            } else {

                scrollTopBtn.classList.remove('show');

            }

        });

        scrollTopBtn.addEventListener('click', () => {

            window.scrollTo({ top: 0, behavior: 'smooth' });

        });

    }

}

// ===== NAV DROPDOWN =====

function initNavDropdown() {

    const toggle = document.querySelector('.nav__dropdown-toggle');

    const dropdown = document.querySelector('.nav__dropdown');

    if (!toggle || !dropdown) return;

    // Mobile: klik toggle buka/tutup accordion
    toggle.addEventListener('click', (e) => {

        if (window.innerWidth <= 768) {

            e.stopPropagation();

            const isOpen = dropdown.classList.contains('show');

            dropdown.classList.toggle('show', !isOpen);

            toggle.classList.toggle('open', !isOpen);

        }

    });

    // Tutup dropdown & mobile menu saat klik link di dalamnya
    dropdown.querySelectorAll('.nav__dropdown-link').forEach(link => {

        link.addEventListener('click', () => {

            dropdown.classList.remove('show');

            toggle.classList.remove('open');

            const navMenu = document.getElementById('nav-menu');

            if (navMenu) navMenu.classList.remove('show-menu');

        });

    });

    // Klik di luar dropdown → tutup
    document.addEventListener('click', (e) => {

        if (!e.target.closest('.nav__item--dropdown')) {

            dropdown.classList.remove('show');

            toggle.classList.remove('open');

        }

    });

}

// ===== SCROLL PROGRESS =====
function initScrollProgress() {
    const progressBar = document.getElementById('scroll-progress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// ===== COMMAND MENU =====
function initCommandMenu() {
    const cmdMenu = document.getElementById('cmd-menu');
    const cmdMenuInput = document.getElementById('cmd-menu-input');
    const cmdMenuClose = document.getElementById('cmd-menu-close');
    if (!cmdMenu) return;

    // Toggle menu
    const toggleMenu = (show) => {
        if (show) {
            cmdMenu.classList.add('active');
            setTimeout(() => cmdMenuInput.focus(), 100);
        } else {
            cmdMenu.classList.remove('active');
            cmdMenuInput.value = '';
        }
    };

    // Keyboard shortcut (Ctrl+K or Cmd+K)
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
            e.preventDefault();
            toggleMenu(!cmdMenu.classList.contains('active'));
        }
        if (e.key === 'Escape' && cmdMenu.classList.contains('active')) {
            toggleMenu(false);
        }
    });

    if (cmdMenuClose) {
        cmdMenuClose.addEventListener('click', () => toggleMenu(false));
    }

    // Handle clicks on items
    const items = cmdMenu.querySelectorAll('.cmd-menu__item');
    items.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const action = item.dataset.action;
            
            if (action === 'scroll') {
                const target = document.querySelector(item.dataset.target);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            } else if (action === 'theme') {
                const themeToggle = document.getElementById('theme-toggle');
                if (themeToggle) themeToggle.click();
            } else if (item.hasAttribute('download')) {
                window.location.href = item.getAttribute('href');
            }
            toggleMenu(false);
        });
    });
}

// ===== EASTER EGG =====
function initEasterEgg() {
    console.log(
        "%c \u2728 You found the secret console! \u2728",
        "color: #0070f3; font-size: 20px; font-weight: bold; background: #000; padding: 10px; border-radius: 5px;"
    );
    console.log(
        "%cI see you're inspecting my code. Let's connect! Email me at azzikrapraqasta1@gmail.com",
        "color: #10b981; font-size: 14px;"
    );
}

// ===== CARD SPOTLIGHT EFFECT & TILT =====
function initCardSpotlight() {
    const cards = document.querySelectorAll('.top-card, .carousel-card, .skill-category-card, .org-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // Initialize VanillaTilt if available
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll(".top-card, .carousel-card"), {
            max: 10,
            speed: 400,
            glare: true,
            "max-glare": 0.2
        });
    }
}

// ===== CUSTOM MAGNETIC CURSOR =====
function initCustomCursor() {
    const cursor = document.getElementById('custom-cursor');
    const follower = document.getElementById('custom-cursor-follower');
    if (!cursor || !follower) return;

    let posX = 0, posY = 0;
    let mouseX = 0, mouseY = 0;

    // Throttle cursor movement for performance
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    });

    // Smooth follower animation using requestAnimationFrame
    const updateFollower = () => {
        posX += (mouseX - posX) * 0.15; // easing
        posY += (mouseY - posY) * 0.15;
        follower.style.transform = `translate3d(${posX}px, ${posY}px, 0) translate(-50%, -50%)`;
        requestAnimationFrame(updateFollower);
    };
    requestAnimationFrame(updateFollower);

    // Magnetic / Hover state on interactive elements
    const interactables = document.querySelectorAll('a, button, input, textarea, select, .nav__toggle, .nav__close, .top-card, .carousel-card');
    
    interactables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            follower.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            follower.classList.remove('hover');
        });
    });
}

// ===== HACKER TEXT SCRAMBLE =====
function initHackerScramble() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const nameElement = document.querySelector('.hero__name');
    if (!nameElement) return;

    let interval = null;
    const originalText = nameElement.innerText; // "Azzikra Praqasta Kusuma"

    const startScramble = () => {
        let iteration = 0;
        clearInterval(interval);
        
        interval = setInterval(() => {
            nameElement.innerText = originalText
                .split("")
                .map((letter, index) => {
                    if (letter === " ") return " ";
                    if (index < iteration) {
                        return originalText[index];
                    }
                    return letters[Math.floor(Math.random() * 26)];
                })
                .join("");

            if (iteration >= originalText.length) {
                clearInterval(interval);
            }
            
            // Adjust speed of descrambling
            iteration += 1 / 3;
        }, 30);
    };

    // Scramble on hover
    nameElement.addEventListener("mouseover", startScramble);
    
    // Scramble once on load
    setTimeout(startScramble, 500);
}

// ===== TYPEWRITER EFFECT =====
function initTypewriter() {
    const element = document.getElementById('about-typewriter');
    if (!element) return;

    const t = translations[currentLang];

    let roles = t.typewriter_roles || ["Full Stack Developer"];

    let roleIndex = 0;

    let charIndex = 0;

    let isDeleting = false;

    let timeout;

    function type() {

        const currentRole = roles[roleIndex];

        if (isDeleting) {

            element.textContent = currentRole.substring(0, charIndex - 1);

            charIndex--;

        } else {

            element.textContent = currentRole.substring(0, charIndex + 1);

            charIndex++;

        }

        let speed = isDeleting ? 40 : 80;

        if (!isDeleting && charIndex === currentRole.length) {

            speed = 2000;

            isDeleting = true;

        } else if (isDeleting && charIndex === 0) {

            isDeleting = false;

            roleIndex = (roleIndex + 1) % roles.length;

            speed = 500;

        }

        timeout = setTimeout(type, speed);

    }

    type();

    // Expose instance for language switching

    window.typewriterInstance = {

        updateRoles: (newRoles) => {

            roles = newRoles;

            roleIndex = 0;

            charIndex = 0;

            isDeleting = false;

            clearTimeout(timeout);

            element.textContent = '';

            type();

        }

    };

}

// ===== HERO TYPEWRITER EFFECT =====
function initHeroTypewriter() {
    const element = document.getElementById('hero-typewriter');
    if (!element) return;

    const t = translations[currentLang];
    let roles = t.hero_roles || ['FULL STACK ENGINEER.'];
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeout;

    function type() {
        const currentRole = roles[roleIndex];

        if (isDeleting) {
            element.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
        } else {
            element.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
        }

        let speed = isDeleting ? 55 : 110;

        if (!isDeleting && charIndex === currentRole.length) {
            speed = 2500; // pause at end
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            speed = 400;
        }

        timeout = setTimeout(type, speed);
    }

    type();

    window.heroTypewriterInstance = {
        updateRoles: (newRoles) => {
            roles = newRoles;
            roleIndex = 0;
            charIndex = 0;
            isDeleting = false;
            clearTimeout(timeout);
            element.textContent = '';
            type();
        }
    };
}

// ===== SCROLL EFFECTS =====

function initScrollEffects() {

    // Parallax-like effects handled by CSS already

}

// ===== TOP-CARD TOGGLES =====

function initProjectToggles() {

    document.querySelectorAll('.top-card__toggle').forEach(btn => {

        btn.addEventListener('click', () => {

            const body = btn.closest('.top-card__body');
            const details = body.querySelector('.top-card__details');
            const t = translations[currentLang];

            if (details.classList.contains('show')) {
                details.classList.remove('show');
                btn.classList.remove('active');
                btn.innerHTML = `<span>${t.read_more}</span><i class='bx bx-right-arrow-alt'></i>`;
            } else {
                details.classList.add('show');
                btn.classList.add('active');
                btn.innerHTML = `<span>${t.read_less}</span><i class='bx bx-right-arrow-alt'></i>`;
            }

        });

    });

}

// ===== CAROUSEL =====

function initCarousel() {

    const track = document.getElementById('carousel-track');

    const dotsContainer = document.getElementById('carousel-dots');

    const prevBtn = document.getElementById('carousel-prev');

    const nextBtn = document.getElementById('carousel-next');

    if (!track || !dotsContainer) return;

    const cards = Array.from(track.querySelectorAll('.carousel-card'));

    if (!cards.length) return;

    // Determine how many cards visible at once based on viewport

    function getVisibleCount() {

        if (window.innerWidth <= 768) return 1;

        if (window.innerWidth <= 992) return 2;

        return 3;

    }

    let currentIndex = 0;

    let visibleCount = getVisibleCount();

    let totalSlides = Math.ceil(cards.length / visibleCount);

    let isDragging = false;

    let startX = 0;

    let currentTranslate = 0;

    // Build dot indicators

    function buildDots() {

        dotsContainer.innerHTML = '';

        visibleCount = getVisibleCount();

        totalSlides = Math.ceil(cards.length / visibleCount);

        for (let i = 0; i < totalSlides; i++) {

            const dot = document.createElement('button');

            dot.className = 'carousel-dot' + (i === currentIndex ? ' active' : '');

            dot.setAttribute('aria-label', `Slide ${i + 1}`);

            dot.addEventListener('click', () => goTo(i));

            dotsContainer.appendChild(dot);

        }

    }

    function updateDots() {

        dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {

            dot.classList.toggle('active', i === currentIndex);

        });

    }

    function getCardWidth() {

        const gap = 24; // var(--space-lg) ~= 1.5rem = 24px

        const wrapperWidth = track.parentElement.offsetWidth;

        return (wrapperWidth - gap * (visibleCount - 1)) / visibleCount;

    }

    function goTo(index) {

        visibleCount = getVisibleCount();

        totalSlides = Math.ceil(cards.length / visibleCount);

        currentIndex = Math.max(0, Math.min(index, totalSlides - 1));

        const cardWidth = getCardWidth();

        const gap = 24;

        const translateX = -currentIndex * visibleCount * (cardWidth + gap);

        track.style.transform = `translateX(${translateX}px)`;

        updateDots();

        if (prevBtn) prevBtn.disabled = currentIndex === 0;

        if (nextBtn) nextBtn.disabled = currentIndex >= totalSlides - 1;

    }

    // Navigation buttons

    if (prevBtn) prevBtn.addEventListener('click', () => goTo(currentIndex - 1));

    if (nextBtn) nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

    // Keyboard navigation

    document.addEventListener('keydown', (e) => {

        const section = document.getElementById('projects');

        if (!section) return;

        const rect = section.getBoundingClientRect();

        if (rect.top > window.innerHeight || rect.bottom < 0) return;

        if (e.key === 'ArrowLeft') goTo(currentIndex - 1);

        if (e.key === 'ArrowRight') goTo(currentIndex + 1);

    });

    // Touch / drag swipe

    track.addEventListener('mousedown', (e) => {

        isDragging = true;

        startX = e.clientX;

        track.style.transition = 'none';

    });

    track.addEventListener('touchstart', (e) => {

        startX = e.touches[0].clientX;

        track.style.transition = 'none';

    }, { passive: true });

    track.addEventListener('mouseup', (e) => {

        if (!isDragging) return;

        isDragging = false;

        track.style.transition = '';

        const diff = startX - e.clientX;

        if (Math.abs(diff) > 50) goTo(currentIndex + (diff > 0 ? 1 : -1));

        else goTo(currentIndex);

    });

    track.addEventListener('touchend', (e) => {

        track.style.transition = '';

        const diff = startX - e.changedTouches[0].clientX;

        if (Math.abs(diff) > 50) goTo(currentIndex + (diff > 0 ? 1 : -1));

        else goTo(currentIndex);

    });

    track.addEventListener('mouseleave', () => {

        if (isDragging) {

            isDragging = false;

            track.style.transition = '';

            goTo(currentIndex);

        }

    });

    // Resize handler

    let resizeTimer;

    window.addEventListener('resize', () => {

        clearTimeout(resizeTimer);

        resizeTimer = setTimeout(() => {

            buildDots();

            goTo(Math.min(currentIndex, totalSlides - 1));

        }, 200);

    });

    // Init

    buildDots();

    goTo(0);

    // ===== AUTO-SLIDE =====

    let autoSlideTimer;

    const AUTO_SLIDE_DELAY = 4000; // 4 detik

    function startAutoSlide() {
        stopAutoSlide();
        // Skip auto slide if we are in mobile/responsive view
        if (window.innerWidth <= 768) return; 

        autoSlideTimer = setInterval(() => {

            const nextIndex = currentIndex >= totalSlides - 1 ? 0 : currentIndex + 1;

            goTo(nextIndex);

        }, AUTO_SLIDE_DELAY);

    }

    function stopAutoSlide() {

        if (autoSlideTimer) clearInterval(autoSlideTimer);

    }

    // Pause saat hover, lanjut saat mouse keluar

    const trackWrapper = track.closest('.carousel-track-wrapper') || track.parentElement;

    trackWrapper.addEventListener('mouseenter', stopAutoSlide);

    trackWrapper.addEventListener('mouseleave', startAutoSlide);

    // Pause saat touch, lanjut setelah touch selesai

    trackWrapper.addEventListener('touchstart', stopAutoSlide, { passive: true });

    trackWrapper.addEventListener('touchend', () => {

        setTimeout(startAutoSlide, 2000);

    });

    // Reset timer saat navigasi manual (tombol prev/next)

    if (prevBtn) prevBtn.addEventListener('click', startAutoSlide);

    if (nextBtn) nextBtn.addEventListener('click', startAutoSlide);

    // Mulai auto-slide

    startAutoSlide();

}

// ===== CAROUSEL CATEGORY FILTER =====

function initCarouselFilter() {

    const filterBtns = document.querySelectorAll('.carousel-filter__btn');

    const track = document.getElementById('carousel-track');

    const countBadge = document.querySelector('.carousel-header__count');

    if (!filterBtns.length || !track) return;

    const allCards = Array.from(track.querySelectorAll('.carousel-card'));

    filterBtns.forEach(btn => {

        btn.addEventListener('click', () => {

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            let visible = 0;

            allCards.forEach(card => {

                const match = filter === 'all' || card.dataset.category === filter;

                if (match) {

                    card.classList.remove('filter-hidden');
                    card.classList.remove('filter-visible');
                    void card.offsetWidth; // reflow for animation
                    card.classList.add('filter-visible');
                    visible++;

                } else {

                    card.classList.add('filter-hidden');
                    card.classList.remove('filter-visible');

                }

            });

            // Update count badge
            if (countBadge) {
                countBadge.textContent = visible + ' Project' + (visible !== 1 ? 's' : '');
            }

            // Reset carousel position to start
            if (track) track.style.transform = 'translateX(0)';

            // Clear dots
            const dotsContainer = document.getElementById('carousel-dots');
            if (dotsContainer) dotsContainer.innerHTML = '';

        });

    });

}

// ===== COUNT UP ANIMATION =====

function initCountUp() {

    const counters = document.querySelectorAll('.stat-number[data-count]');

    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target = parseInt(counter.dataset.count);

                let current = 0;

                const increment = target / 40;

                const timer = setInterval(() => {

                    current += increment;

                    if (current >= target) {

                        counter.textContent = target;

                        clearInterval(timer);

                    } else {

                        counter.textContent = Math.ceil(current);

                    }

                }, 50);

                observer.unobserve(counter);

            }

        });

    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));

}

// ===== SCROLL REVEAL =====

function initScrollReveal() {

    if (typeof ScrollReveal === 'undefined') return;

    const sr = ScrollReveal({

        origin: 'bottom',

        distance: '40px',

        duration: 1000,

        delay: 100,

        easing: 'cubic-bezier(0.5, 0, 0, 1)',

        reset: false

    });

    sr.reveal('.section__header', {});

    sr.reveal('.hero__badge', { origin: 'top', delay: 100 });

    sr.reveal('.hero__title', { delay: 200 });

    sr.reveal('.hero__role', { delay: 300 });

    sr.reveal('.hero__description', { delay: 400 });

    sr.reveal('.hero__cta', { delay: 500 });

    sr.reveal('.hero__social', { delay: 600 });

    sr.reveal('.hero__image', { origin: 'right', delay: 300 });

    sr.reveal('.about__image', { origin: 'left' });

    sr.reveal('.about__content', { origin: 'right', delay: 200 });

    sr.reveal('.stat-item', { interval: 100 });

    sr.reveal('.marquee-row', { interval: 200 });

    sr.reveal('.skill-category-card', { interval: 150 });

    sr.reveal('.top-projects__label', { delay: 50 });

    sr.reveal('.top-card', { interval: 200 });

    sr.reveal('.carousel-section', { delay: 100 });

    sr.reveal('.timeline__item', { interval: 150 });

    sr.reveal('.edu-card', { interval: 150 });

    sr.reveal('.org-card', { delay: 200 });

    sr.reveal('.contact__info-card', { interval: 100 });

    sr.reveal('.contact__form-wrapper', { origin: 'right', delay: 200 });

}

// ===== CONTACT FORM =====

function initContactForm() {

    const form = document.getElementById('contact-form');

    if (!form) return;

    form.addEventListener('submit', (e) => {

        e.preventDefault();

        const btn = form.querySelector('button[type="submit"]');

        const originalContent = btn.innerHTML;

        btn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> <span>Sending...</span>';

        btn.disabled = true;

        // Simulate form submission

        setTimeout(() => {

            btn.innerHTML = '<i class="bx bx-check"></i> <span>' + (currentLang === 'id' ? 'Pesan Terkirim!' : 'Message Sent!') + '</span>';

            btn.style.background = 'linear-gradient(135deg, #34d399, #10b981)';

            setTimeout(() => {

                btn.innerHTML = originalContent;

                btn.disabled = false;

                btn.style.background = '';

                form.reset();

            }, 2500);

        }, 1500);

    });

}

/* ============================================================
   CERTIFICATE CAROUSEL — PDF.js
   ============================================================ */

(function initCertCarousel() {

    // Setup PDF.js worker
    if (typeof pdfjsLib === 'undefined') return;
    pdfjsLib.GlobalWorkerOptions.workerSrc =
        'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

    const track = document.getElementById('certTrack');
    const prevBtn = document.getElementById('certPrev');
    const nextBtn = document.getElementById('certNext');
    const dotsEl = document.getElementById('certDots');

    if (!track || !prevBtn || !nextBtn || !dotsEl) return;

    const cards = Array.from(track.querySelectorAll('.cert-card'));
    const total = cards.length;
    let current = 0;
    let rendered = new Set();

    // How many cards visible at once (responsive)
    function getVisible() {
        if (window.innerWidth <= 600) return 1;
        if (window.innerWidth <= 992) return 2;
        return 3;
    }

    // Total slide positions
    function maxIndex() {
        return Math.max(0, total - getVisible());
    }

    // Slide to index
    function goTo(idx) {
        const vis = getVisible();
        current = Math.max(0, Math.min(idx, maxIndex()));

        // Compute offset: each card width = track wrapper width / vis
        const wrapper = track.parentElement;
        const wrapW = wrapper.offsetWidth;
        const gapPx = parseFloat(getComputedStyle(track).gap) || 0;
        const cardW = (wrapW - gapPx * (vis - 1)) / vis;
        const offset = current * (cardW + gapPx);

        track.style.transform = `translateX(-${offset}px)`;

        // Update dots
        document.querySelectorAll('.cert-dot').forEach((d, i) => {
            d.classList.toggle('active', i === current);
        });

        // Prev/next state
        prevBtn.disabled = current === 0;
        nextBtn.disabled = current >= maxIndex();

        // Render visible PDFs
        renderVisible();
    }

    // Render PDF thumbnails that are now in view
    function renderVisible() {
        const vis = getVisible();
        for (let i = current; i < current + vis && i < total; i++) {
            if (!rendered.has(i)) {
                renderCard(cards[i]);
                rendered.add(i);
            }
        }
    }

    // Render a single card's PDF page 1 onto its canvas
    function renderCard(card) {
        const canvas = card.querySelector('.cert-canvas');
        const loading = card.querySelector('.cert-card__loading');
        if (!canvas) return;

        const pdfPath = canvas.getAttribute('data-pdf');
        if (!pdfPath) return;

        pdfjsLib.getDocument(pdfPath).promise.then(function (pdf) {
            return pdf.getPage(1);
        }).then(function (page) {
            const preview = canvas.parentElement;
            const W = preview.offsetWidth || 300;
            const viewport = page.getViewport({ scale: 1 });
            const scale = W / viewport.width;
            const scaled = page.getViewport({ scale });

            canvas.width = scaled.width;
            canvas.height = scaled.height;

            const ctx = canvas.getContext('2d');
            return page.render({ canvasContext: ctx, viewport: scaled }).promise;
        }).then(function () {
            if (loading) loading.classList.add('hidden');
        }).catch(function (err) {
            console.warn('PDF render error:', err);
            if (loading) {
                loading.innerHTML = '<i class="bx bx-file-blank" style="color:#666;font-size:2rem"></i>';
            }
        });
    }

    // Build dot indicators
    function buildDots() {
        dotsEl.innerHTML = '';
        const pages = maxIndex() + 1;
        for (let i = 0; i < pages; i++) {
            const btn = document.createElement('button');
            btn.className = 'cert-dot' + (i === 0 ? ' active' : '');
            btn.setAttribute('aria-label', `Slide ${i + 1}`);
            btn.addEventListener('click', () => goTo(i));
            dotsEl.appendChild(btn);
        }
    }

    // Button events
    prevBtn.addEventListener('click', () => goTo(current - 1));
    nextBtn.addEventListener('click', () => goTo(current + 1));

    // Keyboard
    document.addEventListener('keydown', function (e) {
        const section = document.querySelector('.cert-carousel-section');
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        if (!inView) return;
        if (e.key === 'ArrowLeft') goTo(current - 1);
        if (e.key === 'ArrowRight') goTo(current + 1);
    });

    // Rebuild on resize
    let resizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
            buildDots();
            goTo(Math.min(current, maxIndex()));
        }, 200);
    });

    // Touch/swipe support
    let touchStartX = 0;
    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
        const diff = touchStartX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
    });

    // Lazy-init: render first set when section is visible
    const observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
            buildDots();
            goTo(0);
            observer.disconnect();
        }
    }, { threshold: 0.1 });

    const section = document.querySelector('.cert-carousel-section');
    if (section) observer.observe(section);

})();

// ===== EXPERIENCE DURATION CALCULATOR =====
function initExperienceDuration() {
    const durationElements = document.querySelectorAll('[data-start-date]');
    const t = translations[currentLang];

    durationElements.forEach(el => {
        const startDateStr = el.dataset.startDate; // "YYYY-MM-DD"
        const startDate = new Date(startDateStr);
        const endDate = new Date(); // Today

        let months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
        months += endDate.getMonth() - startDate.getMonth();
        
        // Include start month as month 1
        months += 1;
        
        if (months <= 0) months = 1;
        
        const suffix = " " + t.exp_month + (currentLang === 'en' && months > 1 ? 's' : '');
        el.textContent = months + suffix;
    });
}
