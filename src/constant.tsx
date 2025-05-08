export const cards = [
  {
    description: "Lana Del Rey",
    title: "Summertime Sadness",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Lana Del Rey, an iconic American singer-songwriter, is celebrated for
          her melancholic and cinematic music style. Born Elizabeth Woolridge
          Grant in New York City, she has captivated audiences worldwide with
          her haunting voice and introspective lyrics. <br /> <br /> Her songs
          often explore themes of tragic romance, glamour, and melancholia,
          drawing inspiration from both contemporary and vintage pop culture.
          With a career that has seen numerous critically acclaimed albums, Lana
          Del Rey has established herself as a unique and influential figure in
          the music industry, earning a dedicated fan base and numerous
          accolades.
        </p>
      );
    },
  },
  {
    description: "Babbu Maan",
    title: "Mitran Di Chhatri",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Babu Maan, a legendary Punjabi singer, is renowned for his soulful
          voice and profound lyrics that resonate deeply with his audience. Born
          in the village of Khant Maanpur in Punjab, India, he has become a
          cultural icon in the Punjabi music industry. <br /> <br /> His songs
          often reflect the struggles and triumphs of everyday life, capturing
          the essence of Punjabi culture and traditions. With a career spanning
          over two decades, Babu Maan has released numerous hit albums and
          singles that have garnered him a massive fan following both in India
          and abroad.
        </p>
      );
    },
  },

  {
    description: "Metallica",
    title: "For Whom The Bell Tolls",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Metallica, an iconic American heavy metal band, is renowned for their
          powerful sound and intense performances that resonate deeply with
          their audience. Formed in Los Angeles, California, they have become a
          cultural icon in the heavy metal music industry. <br /> <br /> Their
          songs often reflect themes of aggression, social issues, and personal
          struggles, capturing the essence of the heavy metal genre. With a
          career spanning over four decades, Metallica has released numerous hit
          albums and singles that have garnered them a massive fan following
          both in the United States and abroad.
        </p>
      );
    },
  },
  {
    description: "Led Zeppelin",
    title: "Stairway To Heaven",
    src: "https://assets.aceternity.com/demos/led-zeppelin.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          Led Zeppelin, a legendary British rock band, is renowned for their
          innovative sound and profound impact on the music industry. Formed in
          London in 1968, they have become a cultural icon in the rock music
          world. <br /> <br /> Their songs often reflect a blend of blues, hard
          rock, and folk music, capturing the essence of the 1970s rock era.
          With a career spanning over a decade, Led Zeppelin has released
          numerous hit albums and singles that have garnered them a massive fan
          following both in the United Kingdom and abroad.
        </p>
      );
    },
  },
  {
    description: "Mustafa Zahid",
    title: "Toh Phir Aao",
    src: "https://assets.aceternity.com/demos/toh-phir-aao.jpeg",
    ctaText: "Play",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          &quot;Aawarapan&quot;, a Bollywood movie starring Emraan Hashmi, is
          renowned for its intense storyline and powerful performances. Directed
          by Mohit Suri, the film has become a significant work in the Indian
          film industry. <br /> <br /> The movie explores themes of love,
          redemption, and sacrifice, capturing the essence of human emotions and
          relationships. With a gripping narrative and memorable music,
          &quot;Aawarapan&quot; has garnered a massive fan following both in
          India and abroad, solidifying Emraan Hashmi&apos;s status as a
          versatile actor.
        </p>
      );
    },
  },
];

export const cards2 = [
  {
    id: 0,
    name: "Manu Arora",
    designation: "Senior Software Engineer",
    content: (
      <p>
        These cards are amazing, I want to use them in my project. Framer motion
        is a godsend ngl tbh fam 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Elon Musk",
    designation: "Senior Shitposter",
    content: (
      <p>
        I dont like this Twitter thing, deleting it right away because yolo.
        Instead, I would like to call it X.com so that it can easily be confused
        with adult sites.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of Fight Club is that you do not talk about fight club.
        The second rule of Fight club is that you DO NOT TALK about fight club.
      </p>
    ),
  },
];

export const jobListings = [
  {
    id: 0,
    icon: "/images/icons8-google-48.png",
    name: "Google",
    designation: "Product Designer",
    salary: "$100k/year",
    type: "Full Time",
    submitted: "620",
    primaryRequirement: ["5+ years", "Bachelor's Degree"],
    recruiterInfo: {
      image: "/images/user-image.jpg",
      name: "Emily Hughes",
      designation: "Recruiter",
      profileLink: "",
    },
    allRequirements: [
      "5+ years of experience in product design",
      "Bachelor's degree in Design or related field",
      "Proficiency in Figma and Adobe Creative Suite",
      "Strong UX/UI skills and design portfolio",
      "Experience with user research and testing",
      "Excellent communication skills",
    ],
  },
  {
    id: 1,
    icon: "/images/icons8-google-48.png",
    name: "Meta",
    designation: "Frontend Engineer",
    salary: "$120k/year",
    type: "Full Time",
    submitted: "430",
    primaryRequirement: ["3+ years", "Bachelor's in CS"],
    recruiterInfo: {
      image: "/images/user-image.jpg",
      name: "Daniel Smith",
      designation: "Talent Acquisition",
      profileLink: "",
    },
    allRequirements: [
      "3+ years of frontend development experience",
      "Bachelor's degree in Computer Science",
      "Strong knowledge of React, HTML, CSS, and JavaScript",
      "Experience with Next.js or similar frameworks",
      "Familiarity with RESTful APIs and Git",
      "Excellent debugging and optimization skills",
    ],
  },
  {
    id: 2,
    icon: "/images/icons8-google-48.png",
    name: "Amazon",
    designation: "Backend Developer",
    salary: "$110k/year",
    type: "Full Time",
    submitted: "510",
    primaryRequirement: ["4+ years", "Node.js expertise"],
    recruiterInfo: {
      image: "/images/user-image.jpg",
      name: "Sophia Turner",
      designation: "Tech Recruiter",
      profileLink: "",
    },
    allRequirements: [
      "4+ years in backend development",
      "Expert in Node.js and Express",
      "Experience with MongoDB and SQL databases",
      "Understanding of microservices architecture",
      "Knowledge of AWS services",
      "Strong problem-solving abilities",
    ],
  },
  {
    id: 3,
    icon: "/images/icons8-google-48.png",
    name: "Netflix",
    designation: "UI/UX Designer",
    salary: "$105k/year",
    type: "Contract",
    submitted: "290",
    primaryRequirement: ["2+ years", "Design Portfolio"],
    recruiterInfo: {
      image: "/images/user-image.jpg",
      name: "Liam Johnson",
      designation: "Creative Hiring Manager",
      profileLink: "",
    },
    allRequirements: [
      "2+ years of UI/UX design experience",
      "Proven portfolio showcasing design work",
      "Strong skills in Sketch, Figma, and prototyping tools",
      "Knowledge of design systems",
      "Understanding of user-centered design",
      "Ability to collaborate with product teams",
    ],
  },
  {
    id: 4,
    icon: "/images/icons8-google-48.png",
    name: "Apple",
    designation: "iOS Developer",
    salary: "$130k/year",
    type: "Full Time",
    submitted: "370",
    primaryRequirement: ["5+ years", "Swift expertise"],
    recruiterInfo: {
      image: "/images/user-image.jpg",
      name: "Olivia Brown",
      designation: "Technical Recruiter",
      profileLink: "",
    },
    allRequirements: [
      "5+ years of iOS development experience",
      "Strong proficiency in Swift and Objective-C",
      "Experience with iOS frameworks and APIs",
      "Knowledge of mobile UI/UX principles",
      "Familiarity with Apple's design guidelines",
      "Strong debugging and unit testing skills",
    ],
  },
  {
    id: 5,
    icon: "/images/icons8-google-48.png",
    name: "Tesla",
    designation: "Data Analyst",
    salary: "$90k/year",
    type: "Full Time",
    submitted: "220",
    primaryRequirement: ["2+ years", "Excel & SQL"],
    recruiterInfo: {
      image: "/images/user-image.jpg",
      name: "James Miller",
      designation: "Recruiter",
      profileLink: "",
    },
    allRequirements: [
      "2+ years of experience in data analysis",
      "Advanced Excel and SQL skills",
      "Proficiency in Python or R is a plus",
      "Experience with data visualization tools like Tableau",
      "Strong analytical thinking",
      "Ability to interpret and present data clearly",
    ],
  },
  {
    id: 6,
    icon: "/images/icons8-google-48.png",
    name: "Spotify",
    designation: "DevOps Engineer",
    salary: "$115k/year",
    type: "Remote",
    submitted: "180",
    primaryRequirement: ["3+ years", "CI/CD experience"],
    recruiterInfo: {
      image: "/images/user-image.jpg",
      name: "Isabella Garcia",
      designation: "Hiring Specialist",
      profileLink: "",
    },
    allRequirements: [
      "3+ years of DevOps experience",
      "Experience with CI/CD tools like Jenkins, GitLab CI",
      "Knowledge of Docker and Kubernetes",
      "Familiarity with cloud platforms (AWS/GCP)",
      "Strong scripting skills (Bash, Python)",
      "Monitoring and logging experience",
    ],
  },
];
