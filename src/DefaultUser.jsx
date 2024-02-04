import userPicture from "../src/assets/profile.jpg";

const defaultUser = {
  userData: {
    email: "stevedoe@example.com",
    phone: "+1 123 456 90",
    address: "New York, USA",
    link: "stevedoe.com",
  },
  personalData: {
    firstName: "Steve",
    lastName: "Doe",
    profileTitle: "Software Engineer",
    description: "Passionate about creating amazing software.",
    imageUrl: userPicture,
    nationality: "American",
    sexe: "Male",
    language: "English",
  },
  experienceData: [
    {
      positionExp: "Software Developer",
      company: "Tech Solutions Inc.",
      startDate: "2018-01-01",
      endDate: "2021-12-31",
      details: "Worked on various projects using React and Node.js.",
    },
    {
      positionExp: "Junior Developer",
      company: "Code Wizards",
      startDate: "2016-05-01",
      endDate: "2017-12-31",
      details: "Assisted in developing web applications using Angular.",
    },
  ],
  skillData: {
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS"],
  },
  educationData: {
    school: "University of Computer Science",
    degree: "Bachelor of Science in Computer Science",
    startDate: "2014-09-01",
    endDate: "2018-05-31",
  },
};

export default defaultUser;
