(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Navbar on scrolling
    $('.navbar').css('display', 'flex');
    $(window).scroll(function () {
        $('.navbar').css('display', 'flex');
    });


    // Smooth scrolling without changing file:// hash URLs
    $('[data-scroll-target]').on('click', function (event) {
        event.preventDefault();

        var target = $(this).data('scroll-target');
        var $target = $(target);
        if (!$target.length) {
            return;
        }

        $('html, body').animate({
            scrollTop: $target.offset().top - 75
        }, 900, 'easeInOutExpo');

        if ($(this).hasClass('nav-link')) {
            $('.navbar-nav .active').removeClass('active');
            $(this).addClass('active');
            $('.navbar-collapse').collapse('hide');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }

    // Dynamic portfolio data
    var professionalSkills = [
        { name: 'HTML', percent: 90, icon: 'fab fa-html5', color: '#e44d26' },
        { name: 'CSS', percent: 85, icon: 'fab fa-css3-alt', color: '#2965f1' },
        { name: 'PHP', percent: 60, icon: 'fab fa-php', color: '#777bb3' },
        { name: 'SQL Server', percent: 80, icon: 'fas fa-database', color: '#00a6a6' },
        { name: 'React Js', percent: 50, icon: 'fab fa-react', color: '#61dafb' },
        { name: 'FastAPI', percent: 55, icon: 'fas fa-bolt', color: '#009688' },
        { name: 'TypeScript', percent: 70, icon: 'fas fa-code', color: '#3178c6' },
        { name: 'Java', percent: 85, icon: 'fab fa-java', color: '#f89820' },
        { name: 'Javascript', percent: 50, icon: 'fab fa-js-square', color: '#f7df1e' },
        { name: 'C#', percent: 70, icon: 'fas fa-code', color: '#9b4dca' },
        { name: 'Bootstrap', percent: 80, icon: 'fab fa-bootstrap', color: '#563d7c' },
        { name: 'MySQL Server', percent: 70, icon: 'fas fa-database', color: '#4479a1' },
        { name: 'jQuery', percent: 60, icon: 'fas fa-code', color: '#1c1e22' },
        { name: 'Kotlin', percent: 55, icon: 'fas fa-code', color: '#7f52ff' },
        { name: 'Python', percent: 70, icon: 'fab fa-python', color: '#3776ab' }
    ];

    var moreSkills = [
        { name: 'Windows Server', percent: 80, icon: 'fas fa-server', color: '#8f4bd8' },
        { name: 'Microsoft 365', percent: 85, icon: 'fas fa-cloud', color: '#00a6a6' },
        { name: 'Networking', percent: 75, icon: 'fas fa-network-wired', color: '#2965f1' },
        { name: 'Cybersecurity', percent: 65, icon: 'fas fa-shield-alt', color: '#e83e8c' },
        { name: 'GitHub', percent: 80, icon: 'fab fa-github', color: '#1c1e22' },
        { name: 'Troubleshooting', percent: 90, icon: 'fas fa-bug', color: '#ff8ab8' },
        { name: 'UX/UI Design', percent: 80, icon: 'fas fa-pencil-ruler', color: '#ff8ab8' },
        { name: 'API Integration', percent: 70, icon: 'fas fa-plug', color: '#9b4dca' },
        { name: 'JWT Authentication', percent: 70, icon: 'fas fa-key', color: '#e83e8c' },
        { name: 'Technical Support', percent: 90, icon: 'fas fa-tools', color: '#563d7c' },
        { name: 'AI', percent: 75, icon: 'fas fa-brain', color: '#8f4bd8' },
        { name: 'System Testing', percent: 75, icon: 'fas fa-vial', color: '#8f4bd8' },
        { name: 'Linux (Ubuntu, CentOS)', percent: 70, icon: 'fab fa-linux', color: '#1c1e22' }
    ];

    var tools = [
        { name: 'Python', image: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
        { name: 'Visual Studio', image: 'img/icon3.jpg' },
        { name: 'Git', image: 'img/icon4.png' },
        { name: 'Thonny IDE', image: 'img/icon1.png' },
        { name: 'Vs Code', image: 'img/icon.jpg' },
        { name: 'Jupyter', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg' },
        { name: 'Android Studio', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg' },
        { name: 'PowerShell', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg' },
        { name: 'Pandas', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
        { name: 'NumPy', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
        { name: 'IntelliJ IDEA', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg' },
        { name: 'Postman', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
        { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Figma', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'GitHub', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
    ];

    var projects = [
        {
            title: 'Furniture E-Commerce Website',
            emoji: '\uD83D\uDCBC',
            badge: 'Web Design',
            image: 'img/project.png',
            category: 'web-design',
            description: 'A modern furniture shopping website designed to help customers browse furniture products, explore categories, discover promotions, and easily find products for different areas of their homes.',
            tech: ['HTML', 'CSS', 'JS',],
            detail: true,
            info: {
                client: 'Academic / Personal Project',
                projectType: 'E-Commerce Website',
                date: 'Mar 2024 - May 2024',
                duration: '3 Months',
                role: 'Web Developer & UI Designer',
                status: 'Completed',
                website: 'furniture-demo.netlify.app'
            },
            technologies: {
                Frontend: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
                'Development Tools': ['VS Code', 'Git', 'GitHub']
            },
            highlights: ['User-friendly website interface', 'Furniture product browsing', 'Product category navigation', 'Bedroom furniture', 'Living room furniture', 'Dining room furniture', 'Mattress products', 'Promotion section', 'Customer account / login', 'Services information', 'Contact page', 'Responsive web layout'],
            features: ['Product Browsing', 'Furniture Categories', 'Customer Login', 'Promotion Products', 'Bedroom Collection', 'Living Room Collection', 'Dining Room Collection', 'Mattress Collection', 'Services Page', 'Contact Page', 'Responsive Design', 'Easy Navigation'],
            roleItems: ['Web Developer', 'UI/UX Design', 'Frontend Development', 'Website Structure Design', 'Responsive Layout Design', 'Page Navigation', 'Testing & Troubleshooting'],
            gallery: [
                'img/project1.png',
                'img/project2.png',
                'img/project3.png',
                'img/project4.png'
            ]
        },
        {
            title: 'Skyline Coffee Shop',
            emoji: '\u2615',
            badge: 'Web Design',
            image: 'img/skyline.png',
            category: 'web-design',
            description: 'A modern and responsive coffee shop website designed for customers to explore coffee products, menu selections, and shop information through a simple and engaging user experience.',
            tech: ['HTML', 'CSS', 'JS', 'Bootstrap'],
            info: {
                client: 'Academic / Personal Project',
                projectType: 'Coffee Shop Website',
                date: 'Mar 2024 - May 2024',
                duration: '3 Months',
                role: 'Web Developer & UI Designer',
                status: 'Completed',
                website: 'skyline-coffee-shop.netlify.app'
            },
            technologies: {
                Frontend: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
                'Development Tools': ['Visual Studio Code', 'Git', 'GitHub']
            },
            highlights: ['Clean and modern website interface', 'Coffee product presentation', 'Coffee menu browsing', 'Product information', 'Shop information', 'Attractive image presentation', 'Easy page navigation', 'User-friendly interface', 'Responsive web layout'],
            features: ['Coffee Menu', 'Product Browsing', 'Coffee Categories', 'Product Details', 'Coffee Shop Information', 'Modern Homepage', 'Navigation Menu', 'Contact Information', 'Responsive Design', 'User-Friendly Interface', 'Mobile-Friendly Layout', 'Attractive Product Presentation'],
            roleItems: ['Web Developer', 'UI/UX Designer', 'Frontend Development', 'Website Structure Design', 'Responsive Layout Design', 'Page Navigation', 'Testing & Troubleshooting'],
            gallery: ['img/skyline1.png', 'img/skyline2.png', 'img/skyline3.png', 'img/skyline4.png']
        },
        {
            title: 'Instagram Mobile App UI/UX Design',
            emoji: '\uD83D\uDCF8',
            badge: 'UI/UX Design',
            image: 'img/instagram.png',
            category: 'uiux',
            description: 'A modern and clean Instagram mobile app UI/UX design concept focused on user experience, aesthetics, and smooth interaction.',
            tech: ['UI/UX Design', 'Mobile App', 'Social Media', 'Figma'],
            info: {
                client: 'Academic / Personal Project',
                projectType: 'Mobile App UI/UX Design',
                date: 'May 2024',
                duration: '1 Month',
                role: 'UI/UX Designer',
                status: 'Completed',
                website: 'instagram-mobile-app-uiux'
            },
            technologies: {
                'Design Tool': ['Figma'],
                'Design Skills': ['UI Design', 'UX Design', 'Prototyping', 'Wireframing', 'Design System']
            },
            highlights: ['Modern and attractive UI', 'User-centered design', 'Consistent colors and typography', 'Clean and minimal layout', 'Easy navigation flow', 'Interactive elements', 'High-quality visual design', 'Mobile-friendly interface'],
            features: ['Modern UI Design', 'Clean & Minimal Layout', 'User-Friendly Interface', 'Smooth Navigation', 'Home Feed Screen', 'Stories Section', 'Explore Page', 'Reels Page', 'User Profile Page', 'Direct Messages', 'Post Detail View', 'Edit Profile Screen'],
            roleItems: ['UI/UX Designer', 'Wireframing', 'User Flow Design', 'Visual Design', 'Prototyping', 'Design System', 'Interaction Design'],
            gallery: ['img/instagram1.png', 'img/instagram2.png', 'img/instagram3.png', 'img/instagram4.png']
        },
        {
            title: 'RFID Smart Access Control System',
            emoji: '\uD83D\uDD10',
            badge: 'IoT Projects',
            image: 'img/pic4.jpg',
            category: 'iot',
            description: 'An IoT-based security system that uses RFID authentication, a microcontroller, LCD display, LEDs, and buzzer feedback to provide automated and secure access control.',
            longDescription: 'The RFID Smart Access Control System is an IoT and embedded-system project designed to improve physical access security through RFID-based authentication. Users scan an authorized RFID card or tag at the reader to request access. The system reads the RFID information, verifies the card, and determines whether access should be granted or denied. An LCD provides real-time instructions and system status, while LED indicators and a buzzer provide visual and audible feedback.',
            tech: ['IoT', 'RFID', 'Embedded System', 'Smart Security', 'Hardware Prototype', 'Completed'],
            info: {
                client: 'Academic / University Project',
                projectType: 'IoT & Embedded System',
                date: 'Academic Project',
                duration: 'Prototype Build',
                role: 'IoT Developer / System Developer',
                status: 'Completed',
                platform: 'Microcontroller-Based System',
                website: 'RFID Smart Access Control Prototype'
            },
            technologies: {
                Hardware: ['Microcontroller', 'RFID RC522 Reader', 'RFID Card / Tag', 'LCD Display', '7-Segment Display', 'LEDs', 'Buzzer', 'Electronic Components', 'Breadboard / Wiring'],
                'Software / Programming': ['Embedded Programming', 'Arduino IDE', 'C / C++', 'RFID Library']
            },
            workflow: ['User approaches the entrance', 'LCD displays Scan to Enter', 'User scans an RFID card/tag', 'RFID reader captures the card ID', 'Microcontroller verifies the ID', 'Authorized access is granted', 'Unauthorized access is denied', 'LCD, LEDs, and buzzer show the result'],
            highlights: ['RFID-based authentication', 'Real-time LCD instructions', 'Authorized and unauthorized access logic', 'LED visual feedback', 'Buzzer sound notification', 'Microcontroller-based control', 'Hardware and software integration', 'Physical IoT security prototype'],
            features: ['RFID Card Authentication', 'Contactless Card Scanning', 'Authorized User Verification', 'Access Granted / Denied Logic', 'Real-Time LCD Status', 'LED Status Indicators', 'Buzzer Notification', 'Digital Display', 'Automated Access Control', 'Security Monitoring', 'Hardware & Software Integration', 'Physical IoT Prototype'],
            roleItems: ['IoT System Development', 'Hardware Integration', 'RFID Module Integration', 'Microcontroller Programming', 'LCD Integration', 'Sensor & Component Wiring', 'Access Control Logic', 'System Testing', 'Troubleshooting', 'Prototype Design'],
            gallery: ['img/IoT.jpg', 'img/IoT1.jpg', 'img/IoT2.jpg', 'img/IoT3.jpg']
        },
        {
            title: 'Payroll Management System',
            emoji: '\uD83D\uDCB0',
            badge: 'Web Application',
            image: 'img/payroll.PNG',
            category: 'web-app',
            description: 'A full-stack payroll management web application for managing employees, attendance, payroll calculations, and downloadable payslips using React, Spring Boot, and MySQL.',
            longDescription: 'The Payroll Management System is a full-stack web application developed to simplify and automate employee payroll operations. The system provides functionality for managing employee information, recording attendance, calculating payroll, and generating employee payslips. It combines a modern React frontend with a Java Spring Boot backend and MySQL database to provide structured and efficient payroll management. The application also provides authentication and REST API integration between the frontend and backend, while PDF generation allows payroll information to be provided as downloadable payslips.',
            tech: ['React', 'Java', 'Spring Boot', 'MySQL', 'REST API', 'GitHub'],
            info: {
                client: 'Academic / Personal Project',
                projectType: 'Web Application',
                date: 'Academic Project',
                duration: 'Project Build',
                role: 'Full Stack Developer',
                status: 'Completed',
                database: 'MySQL',
                website: 'Payroll Management System'
            },
            technologies: {
                Frontend: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Axios'],
                Backend: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'Spring Security', 'REST API'],
                Database: ['MySQL'],
                'Libraries & Tools': ['Git', 'GitHub', 'VS Code / IntelliJ IDEA', 'Maven', 'iText PDF']
            },
            workflow: ['React Frontend', 'Axios', 'REST API', 'Java Spring Boot', 'Spring Data JPA', 'MySQL Database'],
            highlights: ['Employee information management', 'Employee attendance management', 'Payroll calculation', 'Payslip management', 'PDF payslip generation', 'User authentication', 'REST API integration', 'Database-driven application', 'Frontend and backend integration', 'Structured payroll workflow'],
            features: ['User Login', 'Employee Management', 'Add & Manage Employees', 'Employee Attendance', 'Attendance Records', 'Payroll Calculation', 'Payroll Management', 'Employee Payslips', 'Payslip History', 'PDF Payslip Download', 'REST API Integration', 'MySQL Data Storage', 'Form Validation', 'Error Handling', 'Responsive User Interface'],
            roleItems: ['Full Stack Developer', 'Frontend Development', 'Backend Development', 'Database Design & Integration', 'REST API Development', 'UI Implementation', 'Payroll Logic Development', 'Authentication Integration', 'PDF Generation', 'Testing & Troubleshooting'],
            gallery: ['img/payroll.PNG', 'img/payroll1.PNG', 'img/payroll2.PNG', 'img/payroll3.PNG']
        },
        {
            title: 'TravelTour - Tour Booking Website',
            emoji: '\u2708\uFE0F',
            badge: 'Web Application',
            image: 'img/travel.png',
            category: 'web-app',
            description: 'A full-stack travel and tour booking website designed to help users explore destinations, view tour packages, make reservations, manage bookings, and interact with travel services.',
            longDescription: 'The TravelTour project is a full-stack travel and tourism web application developed to provide users with a convenient way to discover destinations and book tour packages online. The website presents different tour packages with information such as destination, duration, rating, description, and price per person. Customers can select a tour, choose the number of travelers, select a travel date and starting time, enter their personal information, review the total price, and place an order. The system also includes user registration and login functionality, booking history, customer messaging, and an administrative dashboard for monitoring users, administrators, tour bookings, and customer messages.',
            tech: ['Web Application', 'Travel & Tourism', 'Tour Booking', 'PHP', 'MySQL', 'Full Stack', 'Completed'],
            info: {
                client: 'Academic / Personal Project',
                projectType: 'Travel & Tour Booking Website',
                date: 'Academic Project',
                duration: 'Project Build',
                role: 'Full Stack Web Developer',
                status: 'Completed',
                database: 'MySQL',
                website: 'TravelTour'
            },
            technologies: {
                Frontend: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'Bootstrap Icons'],
                Backend: ['PHP', 'MySQLi', 'Session Management'],
                Database: ['MySQL'],
                'Development Tools': ['Visual Studio Code', 'XAMPP', 'phpMyAdmin', 'Git', 'GitHub']
            },
            workflow: ['Visitor browses tours', 'User views tour details', 'User selects a tour', 'User enters customer information', 'System reviews total price', 'User places order', 'System generates order code', 'Admin logs in', 'Admin views dashboard', 'Admin manages users, bookings, orders, and customer messages'],
            highlights: ['Tour package browsing', 'Destination information', 'Tour details and pricing', 'Online tour booking', 'Number of travelers selection', 'Travel date selection', 'Starting time selection', 'Automatic total price calculation', 'Customer information collection', 'Booking/order confirmation', 'Unique order code', 'User registration and login', 'Password authentication', 'Booking history', 'Customer contact/messages', 'Admin dashboard'],
            features: ['Tour & Destination Browsing', 'Tour Package Details', 'Tour Booking', 'Customer Registration', 'User Login & Logout', 'Secure Password Verification', 'Travel Date Selection', 'Number of Travelers', 'Starting Time Selection', 'Dynamic Price Calculation', 'Customer Information Form', 'Order Placement', 'Booking History', 'Customer Messages', 'Admin Dashboard', 'User Management', 'Booking Management', 'Message Management', 'Responsive Interface'],
            roleItems: ['Full Stack Web Developer', 'Frontend Development', 'Backend Development', 'UI Implementation', 'Database Integration', 'User Authentication', 'Booking Workflow Development', 'Order Management', 'Admin Dashboard Development', 'Form Handling & Validation', 'Testing & Troubleshooting'],
            gallery: ['img/travel1.png', 'img/travel2.png', 'img/travel3.png', 'img/travel4.png']
        },
        {
            title: 'Brainwave Mobile App',
            emoji: '\uD83E\uDDE0\uD83D\uDCF1',
            badge: 'Mobile App',
            image: 'img/mobile3.png',
            category: 'mobile',
            description: 'A modern mobile application designed to provide a simple, engaging, and user-friendly digital experience through an intuitive Android interface.',
            longDescription: 'The Brainwave Mobile App is an Android-based application developed with a focus on usability, clean interface design, and efficient mobile interaction. The application provides users with an organized and intuitive experience while demonstrating practical Android application development, interface implementation, navigation, data handling, and mobile application functionality.',
            tech: ['Mobile Application', 'Android', 'UI/UX', 'Completed'],
            info: {
                client: 'Academic / Personal Project',
                projectType: 'Android Mobile Application',
                date: 'Academic Project',
                duration: 'Project Build',
                role: 'Mobile App Developer',
                status: 'Completed',
                platform: 'Android',
                website: 'Brainwave Mobile App'
            },
            technologies: {
                'Mobile Development': ['Android', 'Java/Kotlin', 'XML'],
                'Development Tools': ['Android Studio', 'Git', 'GitHub']
            },
            workflow: ['Launch App', 'User Interface', 'Main Features', 'User Actions', 'Data Processing', 'Results'],
            highlights: ['Clean Android interface', 'Simple mobile experience', 'Organized screen layout', 'Intuitive navigation', 'Practical app functionality', 'Data handling flow', 'User-friendly interaction', 'Mobile application optimization'],
            features: ['Modern Mobile UI', 'Android Interface', 'Screen Navigation', 'User Actions', 'Data Processing', 'Clean Layout', 'Mobile-Friendly Experience', 'Optimized Interaction'],
            roleItems: ['Mobile App Developer', 'Android Development', 'UI Implementation', 'Application Logic Development', 'Screen & Navigation Development', 'Testing & Debugging', 'Application Optimization'],
            gallery: ['img/mobile3.png', 'img/mobile4.png', 'img/moblie5.png', 'img/mobile5.png']
        },
        {
            title: 'Portfolio Website',
            emoji: '\uD83C\uDF80',
            badge: 'Personal Website',
            image: 'img/about5.jpg',
            category: 'personal',
            description: 'A cute pink personal portfolio website designed to showcase skills, tools, projects, contact information, and personal branding.',
            longDescription: 'The Portfolio Website is a personal web project designed to present skills, tools, experience, and project work in a modern, cute, and responsive interface. The design focuses on clear project presentation, soft pink visual styling, smooth animations, and friendly navigation across all devices.',
            tech: ['HTML', 'CSS', 'JS', 'Bootstrap'],
            info: {
                client: 'Personal Project',
                projectType: 'Portfolio Website',
                date: 'Personal Build',
                duration: 'Portfolio Project',
                role: 'Frontend Developer & Designer',
                status: 'Completed',
                website: 'Personal Portfolio'
            },
            technologies: {
                Frontend: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
                'Design Focus': ['Responsive Design', 'Cute UI', 'Project Showcase'],
                'Development Tools': ['VS Code', 'Git', 'GitHub']
            },
            highlights: ['Cute pink modern design', 'Responsive layout', 'Dynamic project cards', 'Project detail pages', 'Skills section', 'Tools section', 'Contact section', 'Smooth animations'],
            features: ['Home Section', 'About Section', 'Skills Display', 'Tools Grid', 'Project Cards', 'Project Detail View', 'Contact Form', 'Back To Top Button', 'Responsive Navbar', 'Animated UI'],
            roleItems: ['Frontend Development', 'UI Design', 'Responsive Layout Design', 'Dynamic Content Setup', 'Project Detail Design', 'Testing & Troubleshooting'],
            gallery: ['img/about7.jpg', 'img/about2.jpg', 'img/about8.jpg', 'img/about1.jpg']
        },
        {
            title: 'Snake Game',
            emoji: '\uD83D\uDC0D\uD83C\uDFAE',
            badge: 'Game Development',
            image: 'img/snack.jpg',
            category: 'game',
            description: 'A classic interactive Snake Game designed to provide a simple and entertaining gaming experience while demonstrating programming logic and real-time score management.',
            longDescription: 'The Snake Game is a classic 2D game in which the player controls a snake and moves it around the game area to collect food. Each time the snake collects food, its body grows and the player score increases. The player must carefully control the snake and avoid collisions while trying to achieve the highest possible score. This project demonstrates fundamental game-development concepts such as movement control, game loops, collision detection, score calculation, and dynamic object positioning.',
            tech: ['Game Development', '2D Game', 'Programming', 'Interactive Game', 'Completed'],
            info: {
                client: 'Academic / Personal Project',
                projectType: '2D Game Application',
                date: 'Academic Project',
                duration: 'Project Build',
                role: 'Game Developer',
                status: 'Completed',
                website: 'Snake Game'
            },
            technologies: {
                Programming: ['Game Logic', '2D Programming', 'Event Handling'],
                Development: ['Programming', 'UI Design', 'Testing & Debugging']
            },
            workflow: ['Start Game', 'Control Snake', 'Find Food', 'Eat Food', 'Increase Score & Length', 'Avoid Collision', 'Continue Playing', 'Game Over'],
            highlights: ['Classic snake gameplay', 'Keyboard movement controls', 'Food collection', 'Dynamic snake growth', 'Real-time score tracking', 'Collision detection', 'Game-over logic', 'Restart functionality', 'Simple and user-friendly game interface'],
            features: ['Snake Movement', 'Food Collection', 'Snake Growth', 'Score Counter', 'Collision Detection', 'Game Over', 'Restart Game', 'Keyboard Controls', 'Interactive Gameplay', 'Simple Game Interface'],
            roleItems: ['Game Developer', 'Game Logic Development', 'User Interface Development', 'Keyboard Control Implementation', 'Collision Detection', 'Score System Development', 'Game Testing', 'Debugging & Troubleshooting'],
            gallery: ['img/snack1.jpg', 'img/snack2.jpg', 'img/snack3.jpg', 'img/snakck4.jpg']
        },
        {
            title: 'Chess Game',
            emoji: '\u265F\uFE0F\uD83C\uDFAE',
            badge: 'Game Development',
            image: 'img/chess.jpg',
            category: 'game',
            description: 'A digital two-player Chess Game designed to recreate traditional chess gameplay through an interactive interface with board movement and game rules.',
            longDescription: 'The Chess Game is a digital implementation of the traditional strategy board game designed for two players. The project provides an interactive chessboard where players can control chess pieces and take turns making moves. It focuses on implementing chessboard structure, piece movement, player turns, game logic, and an easy-to-understand interface. This project helped demonstrate logical thinking and problem-solving through the implementation of a rule-based strategy game.',
            tech: ['Game Development', 'Board Game', 'Chess', 'Two Player', 'Completed'],
            info: {
                client: 'Academic / Personal Project',
                projectType: 'Board Game Application',
                date: 'Academic Project',
                duration: 'Project Build',
                role: 'Game Developer',
                status: 'Completed',
                website: 'Chess Game'
            },
            technologies: {
                Programming: ['Game Logic', 'Object-Oriented Programming', 'Event Handling'],
                Development: ['Programming', 'UI Design', 'Testing & Debugging']
            },
            workflow: ['Start Game', 'White Player Move', 'Validate Move', 'Update Board', 'Black Player Move', 'Validate Move', 'Continue Turns', 'Game Result'],
            highlights: ['Interactive chessboard', 'Two-player gameplay', 'White and black chess pieces', 'Player turn management', 'Chess piece movement', 'Game rule implementation', 'Interactive piece selection', 'Board position management', 'Clean game interface'],
            features: ['Interactive Chessboard', 'Two-Player Mode', 'Chess Piece Selection', 'Piece Movement', 'Player Turn System', 'White & Black Pieces', 'Board Position Tracking', 'Game Rules', 'Restart Game', 'Interactive Gameplay'],
            roleItems: ['Game Developer', 'Game Logic Development', 'Chessboard UI Development', 'Chess Piece Movement Logic', 'Player Turn Management', 'Event Handling', 'Testing & Debugging', 'Problem Solving'],
            gallery: ['img/chess.jpg', 'img/chess.jpg', 'img/chess.jpg', 'img/chess.jpg']
        }
    ];

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, function (character) {
            return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character];
        });
    }

    function renderSkillGroups(target, items) {
        var midpoint = Math.ceil(items.length / 2);
        var columns = [items.slice(0, midpoint), items.slice(midpoint)];
        $(target).html(columns.map(function (column) {
            return '<div class="col-md-6">' + column.map(function (skill) {
                return '<div class="skill mb-4">' +
                    '<div class="d-flex justify-content-between">' +
                    '<h6 class="font-weight-bold"><i class="' + skill.icon + '" style="color: ' + skill.color + ';"></i> ' + escapeHtml(skill.name) + '</h6>' +
                    '<h6 class="font-weight-bold">' + skill.percent + '%</h6>' +
                    '</div>' +
                    '<div class="progress"><div class="progress-bar" role="progressbar" aria-valuenow="' + skill.percent + '" aria-valuemin="0" aria-valuemax="100"></div></div>' +
                    '</div>';
            }).join('') + '</div>';
        }).join(''));
    }

    function renderTools() {
        $('#tools-grid').html(tools.map(function (tool) {
            return '<div class="col-xl-2 col-lg-3 col-md-4 col-6 portfolio-item second">' +
                '<div class="portfolio-img rounded overflow-hidden">' +
                '<img class="img-fluid" src="' + tool.image + '" alt="' + escapeHtml(tool.name) + ' Logo" width="150">' +
                '<div class="portfolio-btn"><h5>' + escapeHtml(tool.name) + '</h5></div>' +
                '</div>' +
                '</div>';
        }).join(''));
    }

    function renderProjects() {
        $('#project-grid').html(projects.map(function (project) {
            var index = projects.indexOf(project);
            var image = escapeHtml(project.image);
            return '<div class="col-xl-4 col-lg-4 col-md-6 col-12 portfolio-item ' + project.category + '">' +
                '<a class="project-card js-project-card" href="project-detail.html?project=' + index + '" aria-label="View ' + escapeHtml(project.title) + ' details">' +
                '<div class="project-image">' +
                '<span class="project-badge">' + escapeHtml(project.badge) + '</span>' +
                '<img class="img-fluid" src="' + image + '" alt="' + escapeHtml(project.title) + '">' +
                '</div>' +
                '<div class="project-content">' +
                '<h3>' + escapeHtml(project.title) + ' <span>' + project.emoji + '</span></h3>' +
                '<p>' + escapeHtml(project.description) + '</p>' +
                '<div class="project-footer">' +
                '<div class="project-tech">' + project.tech.map(function (item) {
                    return '<span>' + escapeHtml(item) + '</span>';
                }).join('') + '</div>' +
                '<span class="project-arrow js-project-detail" aria-hidden="true"><i class="fa fa-arrow-right"></i></span>' +
                '</div>' +
                '</div>' +
                '</a>' +
                '</div>';
        }).join(''));
    }

    function renderProjectDetail(project) {
        var infoRows = [
            ['Client', project.info.client],
            ['Project Type', project.info.projectType],
            ['Date', project.info.date],
            ['Duration', project.info.duration],
            ['Role', project.info.role],
            ['Status', project.info.status],
            ['Platform', project.info.platform],
            ['Database', project.info.database],
            ['Website', project.info.website]
        ].filter(function (row) { return row[1]; });

        var techSections = Object.keys(project.technologies).map(function (group) {
            return '<div class="detail-tech-group"><h4>' + escapeHtml(group) + '</h4><div class="detail-tech-list">' +
                project.technologies[group].map(function (item) {
                    return '<span>' + escapeHtml(item) + '</span>';
                }).join('') + '</div></div>';
        }).join('');

        $('#project-detail').html(
            '<a class="detail-back" href="index.html#project"><i class="fa fa-arrow-left"></i> Back to Projects</a>' +
            '<div class="detail-layout">' +
            '<div class="detail-main">' +
            '<div class="detail-title-row">' +
            '<div><h2>' + escapeHtml(project.title) + ' <span>' + project.emoji + '</span></h2><p>' + escapeHtml(project.description) + '</p></div>' +
            '</div>' +
            '<div class="detail-tags">' + project.tech.map(function (tag) { return '<span>' + escapeHtml(tag) + '</span>'; }).join('') + '</div>' +
            '<div class="detail-hero"><img src="' + escapeHtml(project.image) + '" alt="' + escapeHtml(project.title) + ' detail preview"></div>' +
            '<div class="detail-thumbs">' + project.gallery.map(function (image) {
                return '<img src="' + escapeHtml(image) + '" alt="' + escapeHtml(project.title) + ' thumbnail">';
            }).join('') + '</div>' +
            '<div class="detail-bottom-grid">' +
            '<div class="detail-panel"><h3><i class="fa fa-file-alt"></i> Project Description</h3><p>' + escapeHtml(project.longDescription || project.description) + '</p>' +
            (project.workflow ? '<h4>How It Works:</h4><ul>' + project.workflow.map(function (step) { return '<li>' + escapeHtml(step) + '</li>'; }).join('') + '</ul>' : '') +
            '<h4>Key highlights:</h4><ul>' +
            project.highlights.map(function (feature) { return '<li>' + escapeHtml(feature) + '</li>'; }).join('') +
            '</ul></div>' +
            '<div class="detail-panel"><h3><i class="fa fa-user"></i> My Role</h3><ul>' +
            project.roleItems.map(function (role) { return '<li>' + escapeHtml(role) + '</li>'; }).join('') +
            '</ul></div>' +
            '</div>' +
            '<div class="detail-project-nav">' +
            '<span><i class="fa fa-arrow-left"></i> Previous Project<br><strong>Task Management App</strong></span>' +
            '<a href="index.html#project"><i class="fa fa-th"></i> All Projects</a>' +
            '<span>Next Project <i class="fa fa-arrow-right"></i><br><strong>Travel Website</strong></span>' +
            '</div>' +
            '</div>' +
            '<aside class="detail-sidebar">' +
            '<div class="detail-panel"><h3><i class="fa fa-info-circle"></i> Project Information</h3>' +
            infoRows.map(function (row) { return '<div class="info-row"><span>' + escapeHtml(row[0]) + '</span><strong>' + escapeHtml(row[1]) + '</strong></div>'; }).join('') +
            '</div>' +
            '<div class="detail-panel"><h3><i class="fa fa-code"></i> Technologies Used</h3>' + techSections + '</div>' +
            '<div class="detail-panel"><h3><i class="fa fa-star"></i> Key Features</h3><ul class="feature-list">' +
            project.features.map(function (feature) { return '<li>' + escapeHtml(feature) + '</li>'; }).join('') +
            '</ul></div>' +
            '</aside>' +
            '</div>'
        );
    }

    window.portfolioProjects = projects;
    window.renderPortfolioProjectDetail = renderProjectDetail;

    if ($('#professional-skills').length) {
        renderSkillGroups('#professional-skills', professionalSkills);
    }

    if ($('#more-skills').length) {
        renderSkillGroups('#more-skills', moreSkills);
    }

    if ($('#tools-grid').length) {
        renderTools();
    }

    if ($('#project-grid').length) {
        renderProjects();
    }

    if ($('.project-heading h1').length) {
        $('.project-heading h1').html('My Projects \uD83C\uDF80');
    }
    if ($('.project-heading').length && !$('.project-heading p').length) {
        $('.project-heading .col-lg-6:first').append('<p>Here are some of the projects I have worked on. Each one reflects my passion for developing beautiful and functional solutions.</p>');
    }

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio filter
    document.querySelectorAll('#portfolio-flters button').forEach(function (button) {
        button.addEventListener('click', function () {
            var filter = button.getAttribute('data-filter');
            var projectItems = document.querySelectorAll('#project-grid .portfolio-item');

            document.querySelectorAll('#portfolio-flters button').forEach(function (filterButton) {
                filterButton.classList.remove('active');
            });
            button.classList.add('active');

            projectItems.forEach(function (item) {
                var shouldShow = filter === '*' || item.matches(filter);
                item.style.display = shouldShow ? '' : 'none';
            });
        });
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

    
})(jQuery);

var contactConfig = {
    // Replace this with your Formspree, Getform, Netlify Forms, or backend endpoint.
    formEndpoint: 'https://formspree.io/f/meajkjbo'
};

function showContactFeedback(type, message) {
    var feedback = document.getElementById('contact-feedback');
    if (!feedback) {
        return;
    }

    feedback.hidden = false;
    feedback.className = 'contact-feedback is-' + type;
    feedback.textContent = message;
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setContactLoading(isLoading) {
    var submitButton = document.getElementById('contact-submit');
    if (!submitButton) {
        return;
    }

    submitButton.disabled = isLoading;
    submitButton.dataset.originalText = submitButton.dataset.originalText || submitButton.textContent;
    submitButton.textContent = isLoading ? 'Sending...' : submitButton.dataset.originalText;
}

function validateContactForm(form) {
    var fields = ['name', 'email', 'subject', 'message'];
    var values = {};
    var isValid = true;

    fields.forEach(function (fieldName) {
        var field = form.elements[fieldName];
        var value = field ? field.value.trim() : '';
        values[fieldName] = value;

        if (!value || (fieldName === 'email' && !isValidEmail(value))) {
            isValid = false;
            if (field) {
                field.classList.add('is-invalid');
            }
        } else if (field) {
            field.classList.remove('is-invalid');
        }
    });

    return { isValid: isValid, values: values };
}

function setupContactForm() {
    var form = document.getElementById('contact-form');

    if (!form) {
        return;
    }

    form.addEventListener('input', function (event) {
        if (event.target.classList.contains('form-control')) {
            event.target.classList.remove('is-invalid');
        }
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        var validation = validateContactForm(form);
        if (!validation.isValid) {
            showContactFeedback('error', 'Please complete all fields and enter a valid email address.');
            return;
        }

        if (!contactConfig.formEndpoint) {
            showContactFeedback('error', 'Contact form endpoint is not configured yet. Please add your email service endpoint in js/main.js.');
            return;
        }

        setContactLoading(true);

        fetch(contactConfig.formEndpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: validation.values.name,
                email: validation.values.email,
                subject: validation.values.subject,
                message: validation.values.message
            })
        })
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('Message sending failed.');
                }
                form.reset();
                showContactFeedback('success', 'Thank you. Your message was sent successfully.');
            })
            .catch(function () {
                showContactFeedback('error', 'Sorry, your message could not be sent. Please try again later.');
            })
            .finally(function () {
                setContactLoading(false);
            });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    setupContactForm();

    document.querySelectorAll('.nav-logo h1, .navbar-brand.d-block h1').forEach(function (brand) {
        brand.textContent = '\u7F8E\u4E3D\uD83E\uDD0D\uD83C\uDF3C';
    });

    var headingUpdates = [
        ['#about h1', 'About Me \uD83C\uDF37'],
        ['#skill .col-lg-6:nth-child(1) h1', 'Skills \u2728'],
        ['#skill .col-lg-6:nth-child(1) h3', 'Profesional Skills \uD83D\uDCBB'],
        ['#skill .tools-section h3', 'Machine Learning and Tools \uD83D\uDEE0\uFE0F'],
        ['#project .project-heading h1', 'My Projects \uD83C\uDF80'],
        ['#contact h1', 'Contact \uD83D\uDC8C']
    ];

    headingUpdates.forEach(function (item) {
        var element = document.querySelector(item[0]);
        if (element) {
            element.textContent = item[1];
        }
    });

    var hello = document.querySelector('#home h3.text-black');
    if (hello) {
        hello.textContent = 'Hello! I`m \uD83C\uDF38';
    }

    var badges = document.querySelectorAll('.hero-badges span');
    var badgeText = ['\uD83D\uDC97 Creative', '\u2728 Developer', '\uD83C\uDF80 IT Support', '\uD83D\uDCBB Software Developer'];
    badges.forEach(function (badge, index) {
        if (badgeText[index]) {
            badge.textContent = badgeText[index];
        }
    });

    var contactButton = document.querySelector('#home a[data-scroll-target="#contact"]');
    if (contactButton) {
        contactButton.textContent = 'Contact Me \uD83D\uDC8C';
    }
}
);
