import express from "express";
import { engine } from "express-handlebars";
const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templetes");

const studentsroute = (req, res) => {
  res.send(`<a href="/admins/studentspage">Students </a>`);
};
app.get("/admins", studentsroute);
const students = [
  {
    name: "Ashraf",
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
  res.render("students", { layout: false, students });
};
app.get("/admins/studentspage", studentspages);

const displayData = (req, res) => {
  const name = req.params.name;
  const student = students.find((i) => {
    return i.name == name;
  });
  res.render("student", { layout: false, student });
};
app.get("/admins/studentspage/:name", displayData);

app.listen(5000);
