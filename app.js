//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let items = [];

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  const today = new Date();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  let day = today.toLocaleDateString("en-US", options);

  let firstQuote = "";
  let arthur = "";
  const quoteNum = Math.trunc(Math.random() * 7) + 1;

  if (quoteNum === 1) {
    firstQuote = `"Peristence is very important. You should not give up unless you are forced to give up"`;
    arthur = `-Elon Musk`;
  } else if (quoteNum === 2) {
    firstQuote = `"We dont have to be smarter than the rest we have to be more diciplined than the rest"`;
    arthur = `-Warren Buffet`;
  } else if (quoteNum === 8) {
    firstQuote = `"If something stands Between You & Your Success, move it! Never be denied"`;
    arthur = `-Dewayne Johnson`;
  } else if (quoteNum === 4) {
    firstQuote = `"Everybody wants a quick fix. You may get results but they wont be permanent. Results come from you having to suffer"`;
    arthur = `-David Goggins`;
  } else if (quoteNum === 5) {
    firstQuote = `"Motivation is crap. Motivation comes and goes. When you're driven, whatever is in front of you wil be destroyed"`;
    arthur = `-David Goggins`;
  } else if (quoteNum === 6) {
    firstQuote = `"In 1995, I had 7 bucks in my pocket. I knew two things : I 'm broke as hell and one day I won't be"`;
    arthur = `-Dewayne Johnson`;
  } else if (quoteNum === 7) {
    firstQuote = `"I don't want to fall back on anything.. if i'm going to fall, I want to fall forward"`;
    arthur = `-Denzel Washington`;
  }

  let MainQuote = firstQuote;

  res.render("list");
  app.get("/todolist", (req, res) => {
    res.render("todolist", {
      kindOfDay: day,
      newListItems: items,
      MainQuote: firstQuote,
      ArthurQuote: arthur,
    });
  });

  app.get("/list", (req, res) => {
    res.render("list");
  });
});

app.post("/", function (req, res) {
  cardioChk = req.body.newItem1; //* create name"" in form in html
  blankField = req.body.newItem;
  readingChk = req.body.newItem2;
  noTV = req.body.newItem3;
  deepLearning = req.body.newItem4;

  items.push(cardioChk, blankField, readingChk, noTV, deepLearning);

  res.redirect("/todolist"); //! redirects to the todolist page
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
