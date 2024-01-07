// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, my name is",
    name: "Rakshith HY",
    message: "I'm a Information Science student and an aspiring software engineer. A highly motivated and results-oriented professional seeking a challenging position in your company where I can utilize my skills and experience to contribute to the success of the organization",
    basedLocation: "Hassan, Karnataka India",
    resumeLink: "https://drive.google.com/file/d/1jiXTrIrz9zKzpQrv4VZpgHfKJAP_Adpl/view?usp=sharing", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/portrait.jpg'
}

const socialMediaLinks = {
    github: "https://github.com/raxy0",
    linkedin: "https://www.linkedin.com/in/rakshith-hy-a1b420247/",
    stackoverflow: "",
    xtwitter: "https://twitter.com/HyRakshith?t=bQiYcKk66ygxee2868iWEQ&s=09"
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "My name is Rakshith HY and I'm a Information Science student at NMAM Institute of Technology.",
        "Responsible, organized, problem solver, and independent thinker. Work well in a team and a quick learner. Programming for 3+ years and have a good experience in advanced mathematics such as calculus, statistics, and discrete mathematics. Have worked as a intern in Hindustan Aeronautical Limited(HAL)."
    ], // Separated items are paragraphs
    techStack: [
        "PHP",
        "Python",
        "JavaScript",
        "Node.js",
        "SQL",
        "Git",
        "HTML/CSS",
    ],
    hobbies: [
        "Anime",
        "Volleyball",
        "Badminton",
        "Swimming",
        "Trekking",
        "Video games"
    ],
    photo1Link: "images/portrait1.jpg",
    photo2Link: "images/portrait2.png",
    photo3Link: "images/p.jpg"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "IT & Network Intern",
        company: {
            name: "Hindustan Aeronautical Limited(HAL)",
            link: "https://service.hal-india.co.in/"
        },
        duration: "Jul 2023 - Aug 2023",
        bulletPoints: [
            "Assisted IT team in hardware/software troubleshooting, network maintenance, and upgrades.",
            "Monitored network performance, provided user support, and gained hands-on experience in virtualized environments"
        ],
        hashtags: [
            "Computer Networks",
            "Intrusion detection system",
            "Servers",
            "Snort",
            "Cloud computing"
        ]
    },
    {
        position: "AIML Co-Head @GDSC NMAMIT",
        company: {
            name: "GDSC",
            link: "https://gdsc.community.dev/nmam-institute-of-technology-deralakatte/"
        },
        duration: "Aug 2023 - present",
        bulletPoints: [
            "As AIML Co-Head in the Google Developer Student Club at NMAMIT, I led a team, organized workshops, seminars, and hackathons, collaborated with industry professionals, facilitated hands-on projects, fostered a vibrant learning community, and contributed to club growth through promotional activities, enhancing technical skills and promoting AIML awareness."
        ],
        hashtags: [
            "AIML",
            "Machine learning",
            "Developer",
            "Google Developer student club"
        ]
    }
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "AyurEase: Bridging Ancient Wisdom and Modern Self-Care with Ayurveda-Inspired Home Remedies",
        yearCompleted: "2023 - present",
        description: "Ayurease is an innovative medicine recommendation system designed to provide personalized and accurate medication suggestions based on individual health conditions and requirements. Developed as a responsive web application, Ayurease integrates principles of Ayurveda and modern healthcare to offer holistic recommendations for users.",
        techStack: "React.js, HTML5/CSS3, Node.js, Express.js, Python, Scikit-learn, Natural Language Processing (NLP) libraries, RESTful API, Agile Methodologies",
        
        imageLink: "images/tracksubs_pic.jpg",
        alignLeft: false
    },
    {
        projectName: "Reverse Image Search Using Tensorflow",
        yearCompleted: "2022",
        description: "Frontend using Flutter Applications Reverse image search using TensorFlow is a technique that allows you to search for similar or related images based on a provided query image. It leverages the power of deep learning and neural networks to analyze the visual features of images and compare them to a database of indexed images",
        techStack: "Flutter, TensorFlow, REST API",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/raxy0/Reverse-Image-search-using-Tensorflow"
            },
        ],
        imageLink: "images/rev.jpg",
        alignLeft: false
    },
    
    {
        projectName: "DJ system management, DBMS Project",
        yearCompleted: "2022-23",
        description: "A DJ system management database management system (DBMS) project involves creating a database to manage various aspects of a DJ system, such as artists, music tracks, playlists, events, bookings, and customer information. The goal of the project is to provide a comprehensive solution for DJs and event organizers to efficiently organize, track, and manage their music library and events. ",
        techStack: "HTML, CSS, JS, Mysql, Apache, Xaamp",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/raxy0/DJ-management-system"
            },
        ],
        imageLink: "images/portfolio_pic.png",
        alignLeft: true
    },
    {
        projectName: "Virtual Assistant",
        yearCompleted: "2020",
        description: "This project is written in java programming language. It works on voice input and gives output through displays the text on the screen",
        techStack: "Java",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/raxy0/voiceassistant-JAVA"
            },
        ],
        imageLink: "images/trivia_pic.png",
        alignLeft: true
    },
]

const archiveLink = "https://github.com/raxy0"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Looking to build a team for a project or develop a new idea let's collab."
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "", // email takes precedance
            other: "https://docs.google.com/forms/d/e/1FAIpQLSdPZ9l4miIiSvX_uI7UgolT4QC6ThTcEZWpk6hex82iz6j4xA/viewform?usp=sf_link"
        },
        responseTimeMessage: "...and I'll resopnd soon once I finish my tea."
    },
    formEmbedLink: "" // inclusion of this link will take precedance
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    contact
}