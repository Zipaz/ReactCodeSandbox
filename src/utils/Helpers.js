export const colorGen = () => {
  return (
    "rgb(" +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    "," +
    Math.floor(Math.random() * 256) +
    ")"
  );
};

const skills = [
  "HTML",
  "CSS",
  "Python",
  "Java",
  "C",
  "C#",
  "C++",
  "Machine Learning",
  "SQL",
  "SQL Server",
  "MongoDB"
];
export const skillGen = () => {
  let maxLength = skills.length;
  const skillList = [];
  const skillTotal = Math.floor(Math.random() * 3) + 2;
  for (let i = 0; i < skillTotal; i++) {
    skillList.push(skills[Math.floor(Math.random() * maxLength)]);
  }
  return [...new Set(skillList)];
};
