import express from "express";
const app = express();
app.listen(5000);

const studentsroute = (req, res) => {
  res.send(`<a href="/admins/studentspage">Students </a>`);
};
app.get("/admins", studentsroute);
const students = [
  {
    name: "ashraf",
    id: 200148,
    major: "cs",
  },
  {
    name: "Asmaa",
    id: 200147,
    major: "cs",
  },
  {
    name: "Ahmed",
    id: 200146,
    major: "it",
  },
  {
    name: "Khaled",
    id: 200141,
    major: "is",
  },
  {
    name: "Mostafa",
    id: 200163,
    major: "cs",
  },
  {
    name: "Emad",
    id: 200113,
    major: "cs",
  },
  {
    name: "Hamza",
    id: 200363,
    major: "cs",
  },
];
const studentspages = (req, res) => {
  let output = "<ol>";
  students.forEach((i) => {
    output += "<li>";
    output += i.name;
    /*output += `<a href ="/admins/studentspage/${i.name}/">${i.name}</a>`;*/
    output += "</li>";
  });
  output += "</ol>";
  res.send(output);
};
app.get("/admins/studentspage", studentspages);
/*
const displayData = (req, res) => {
  const name = req.params.name;
  const studnt = students.find((i) => {
    return i.name == name;
  });
  res.send(`
    <ul>
        <li> ID:${studnt.id}</li>
        <li> Name:${studnt.name}</li>
        <li> Major:${studnt.major}</li>
    </ul>`);
};
app.get("/admins/studentspage/:name", displayData);
*/
