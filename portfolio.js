/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Fathima Zaineb",
  title: "Hi! I'm Fathima",
  subTitle: emoji(
    "An inspriring Software Developer having an experience of building Web and Mobile applications with JavaScript, ReactJS and Flutter."
  ),
  resumeLink:
    "https://docs.google.com/document/d/1K-rEMO6mRCxapRUvGMlEnRYQ9r9aINpt/edit?usp=drive_link&ouid=114155142476161912092&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/fzi2000",
  linkedin: "https://www.linkedin.com/in/fathima-zaineb-029508228/",
  gmail: "fathimazainab106@gmail.com",
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I explore new technologies and develop software solutions and quick hacks with my team and alone too. I am a quick learner and always ready to learn new technologies and frameworks.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
   emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },

    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "flutter",
      fontAwesomeClassname: "fab fa-dart"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [ 
    {
      schoolName: "Heriot-Watt University",
      logo: require("./assets/images/heriot_watt_university_logo.jpg"),
      subHeader: "Bachelor of Science in Computer Science (Specialization in Software Engineering)" ,
      duration: "September 2021 - April 2025",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Active member of the Tech Club, Google Student Developer Club and Acturial Science Club","Participated in the LabLab Ai Hackathon"]
    },
    {
      schoolName: "Our Own English High School",
      logo: require("./assets/images/gems_education_logo.jpg"),
      subHeader: "High School Diploma - 97.8 %",
      duration: "April 2008 - April 2021",
      descBullets: [
        "Activities and societies: Eco-Club Member, Student Council Member",
        "First runner-up for best website at DigiFest",
        "High School Prefect of the Student Council for 2 consecutive years"
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [

    
    {
      role: "Software Engineer Intern",
      company: "DevelopL",
      companylogo: require("./assets/images/developl_logo.jpg"),
      date: "August 2023 – October 2023",
      desc: "Developed an application for a client using Flutter and Firebase. Contributed to Flutter project development and GitHub collaboration."
    },
    {
      role: "Virtual Internship",
      company: "Fujitsu",
      companylogo: require("./assets/images/fujitsu_logo.jpg"),
      date: "July 2023 – August 2023",
      desc: "Fujitsu WorkX program is a live virtual experience program introducing participants to various areas of Fujitsu's business, including cyber security, quantum computing, and smart cities."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications, Award Letters and Licenses🏆 "),
  subtitle:
    "Certifications, Award Letters",

  achievementsCards: [
    {
      title: "Microsoft Certified: Azure AI Fundamentals",
      subtitle:
        "Skills: Machine Learning · Artificial Intelligence (AI) · Natural Language Processing (NLP)",
      image: require("./assets/images/microsoft_logo.jpg"),
      imageAlt: "Microsoft Certified: Azure AI Fundamentals",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1Pl7zjzA8lt_dyu1NoxHhAjb0EkQ_g5Ac/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Software Engineering Virtual Experience Program - Wells Fargo",
      subtitle:
        "Skills: Systems Design · Software Development · Data Modeling",
      image: require("./assets/images/wellsfargo_logo.jpg"),
      imageAlt: "Wells Fargo ",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1BampfjswweoldRaWmewr2dsDX2ZsqIe4/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Deputy Principal's Award for Academic Excellence",
      subtitle:
        "Awarded for achieving Grade A in six or more courses for 2 consecutive years - Year 1 and 2, Computer Science",
      image: require("./assets/images/heriot_watt_university_logo.jpg"),
      imageAlt: "Deputy Principal's Award Letter ",
      footerLink: [
        {
          name: "View Award Letter",
          url: "https://drive.google.com/file/d/1WMu9V1hRgpEx3AZw0k_BIlkFKmqac1iS/view?usp=drive_link"
        }
      ]
    },
    {
      title: "7th India Middle East Education Awards 2021",
      subtitle:
        "Exceptional Achievers for excellence in academics high schoo",
      image: require("./assets/images/gems_education_logo.jpg"),
      imageAlt: "Deputy Principal's Award Letter ",
      footerLink: [
        {
          }
      ]
    },

    {
      title: "lablab.ai Plug into AI with AI21 Hackathon Certificate",
      subtitle: "Skills: Artificial Intelligence (AI)",
      image: require("./assets/images/lablab_ai.jpg"),
      imageAlt: "Lab Lab AI Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://lablab.ai/u/@fzi2000/clkwswkzf00wapn0hp3wld87s"
        }
      ]
    },
    {
      title: "SpringPod Certificate of Participation ",
      subtitle: "Issued: 2023-07-27 ",
      image: require("./assets/images/springpod_logo.jpg"),
      imageAlt: "Springpod Logo",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1M_sR23mR5vPhW-pEsBQoShxUrKsr6aqV/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Some big projects you have worked on

const bigProjects = {
  title: "Projects 💻",
  subtitle: "Some projects that I worked on together with a group and individually",
  projects: [
    {
      image: require("./assets/images/dubai_metro.PNG"),
      projectName: "Dubai Metro App",
      projectDesc: "The project likely focuses on providing a user-friendly interface for Dubai Metro commuters, utilizing Flutter's cross-platform capabilities. My role encompassed actively participating in the coding and enhancement of the project using the Flutter framework. The collaborative nature of the development, coupled with GitHub's collaborative tools, highlights the teamwork and version control aspects of the project.      ",
      footerLink: [
        {
          // name: "Visit Website",
          // url: "http://nextu.se/"
        }
      ]
    },
    {
      
      image: require("./assets/images/mail.PNG"),
      projectName: "Mail-O-Matic",
      projectDesc: "A Smart Email Virtual Assistant leverages advanced AI in three key areas: Smart Compose for personalized drafting, Summarization for information condensation, and Sentimental Analysis for enhanced emotional context understanding. It streamlines email communication. ",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://lablab.ai/event/plug-into-ai-with-ai21/sweet-n-sour/mail-o-matic"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/tic_tac_toe.png"),
      projectName: "AI Tic-Tac-Toe",
      projectDesc: "This project demonstrates the application of MDPs and Reinforcement Learning techniques in creating intelligent agents for playing Tic-Tac-Toe. The combination of Value Iteration, Policy Iteration, and Q-Learning agents offers a set of approaches with its strengths in strategic decision-making, contributes to the field of AI-driven game playing.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    },
    {
      image: require("./assets/images/raspberry_pi.png"),
      projectName: "MasterMind - Raspberry Pi ",
      projectDesc: "This systems programming project entails implementing a MasterMind board game using C and ARM Assembler on a Raspberry Pi 2 or 3. It involves LEDs, a button, and an LCD for user interaction, creating a two-player dynamic where a codekeeper sets a hidden sequence, and a codebreaker aims to deduce it.",
      footerLink: [
        {
          name: "Visit Website",
          // url: "://.se/"
        }
      ]
    }, {
      image: require("./assets/images/steganography.jpg"),
      projectName: "Image Steganography in C",
      projectDesc: "This C programming coursework entails developing a steganography program for encoding and decoding secret messages in RGB colour bitmap images using Plain PPM format. The project involves reading/writing PPM files, encoding/decoding messages in pixel values, and optional features like comments or handling normal PPM files.",
      footerLink: [
        {
          // name: "Visit Website",
          // url: "http://nextu.se/"
        }
      ]
    }
    // , 
    //  {
    //   image: require("./assets/images/nextuLogo.webp"),
    //   projectName: "Nextu",
    //   projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    //   footerLink: [
    //     {
    //       name: "Visit Website",
    //       url: "http://nextu.se/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "You can reach out to me through any of the following links",
  email_address: "fathimazainab106@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
