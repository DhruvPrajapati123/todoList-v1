const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

const items = ["Buy Food", "Cook Food", "Eat food"];
const workItems = [];

app.get("/", (req, res) => {
  const day = date.getDay();
  res.render("list", { listTitle: day, newTodo: items });
});

app.post("/", (req, res) => {
  let item = req.body.newItem;
  // console.log(req.body);

  if (req.body.button === "Work") {
    // Doubt
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/work", (req, res) => {
  res.render("list", { listTitle: "Work List", newTodo: workItems });
});

app.post("/work", (req, res) => {
  let item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get("/about", (req, res) => {
  res.render("about");
});

// var today = new Date()
// var currentDay = today.getDay()
// var day = ""
// if (currentDay === 0 || currentDay === 6){
//     day = "Weekend"
// } else {
//     day = "Weekday"
// }

// var today = new Date()
//     var currentDay = today.getDay()
//     var day = ""
//     switch (currentDay) {
//         case 0:
//             day = "Sunday"
//             break;
//         case 1:
//             day = "Monday"
//             break;
//         case 2:
//             day = "Tuesday"
//             break;
//         case 3:
//             day = "Wenesday"
//             break;
//         case 4:
//             day = "Thursday"
//             break;
//         case 5:
//             day = "Friday"
//             break;
//         case 6:
//             day = "Saturday"
//             break;

//         default:
//             console.log(currentDay);
//     }

//     res.render("list", {day: day})
