// Requiring our models for syncing

var db = require("../models");

var initialData = [
  {
    category: "CSS",
    topic: "Different CSS colors",
    url: "https://www.rapidtables.com/web/css/css-color.html#white",
    comments: "a great resource for CSS colors",
  },
  {
    category: "CSS",
    topic: "How to use Bootstrap?",
    url: "https://getbootstrap.com/",
    comments: "Bootstrap CSS framework reference",
  },
  {
    category: "CSS",
    topic: "What different CSS frameworks are out there?",
    url:
      "https://www.geeksforgeeks.org/10-best-css-frameworks-for-frontend-developers-in-2020/",
    comments: "10 best CSS frameworks in 2020",
  },
  {
    category: "CSS",
    topic: "What are different fonts to use in CSS?",
    url: "https://fonts.google.com/?preview.text_type=custom",
    comments: "different fonts with google fonts",
  },
  {
    category: "CSS",
    topic: "Free and beautiful icons",
    url: "https://fontawesome.com/v4.7.0/icons/",
    comments: "fontawesome icons",
  },
  {
    category: "CSS",
    topic: "More free and beautiful icons",
    url: "https://icons8.com/icons",
    comments: "a great icons recourse",
  },
  {
    category: "CSS",
    topic: "What is a free image resource?",
    url: "https://unsplash.com/",
    comments: "a great resource for free images",
  },
  {
    category: "CSS",
    topic: "What is a great recource to learn about CSS?",
    url: "https://css-tricks.com/",
    comments: "a great resource to learn about CSS",
  },
  {
    category: "HTML",
    topic: "A full list of HTML elements.",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element",
    comments: "HTML elements reference full list",
  },
  {
    category: "HTML",
    topic: "A greate Markup language validator.",
    url: "https://validator.w3.org/",
    comments: "markup validation service",
  },
  {
    category: "JavaScript",
    topic: "A great JavaScript resource for beginners.",
    url: "https://websitesetup.org/javascript-cheat-sheet/",
    comments: "a great JavaScript resource for beginners",
  },
  {
    category: "JavaScript",
    topic: "A great JavaScript tutorial.",
    url: "https://www.w3schools.com/js/default.asp",
    comments: "a great JavaScript tutorial",
  },
  {
    category: "JavaScript",
    topic: "Bacis JavaScript functions",
    url:
      "https://codeburst.io/javascript-functions-understanding-the-basics-207dbf42ed99",
    comments: "a great resource to understand basic JavaScript functions",
  },
  {
    category: "JavaScript",
    topic: "Useful JavaScript built-in functions and methods.",
    url:
      "https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm",
    comments: "JavaScript built-in methods and functions",
  },
  {
    category: "JavaScript",
    topic: "Object Oriented Programming",
    url: "https://www.youtube.com/watch?v=PFmuCDHHpwk",
    comments: "Hour long tutorial on Object Oriented Programming",
  },
  {
    category: "JavaScript",
    topic: "Callback Functions",
    url:
      "https://www.freecodecamp.org/news/how-to-deal-with-nested-callbacks-and-avoid-callback-hell-1bc8dc4a2012/",
    comments:
      "Explains how to avoid overly complex/difficult to read callback functions",
  },
  {
    category: "JavaScript",
    topic: "Constructor Functions",
    url:
      "https://medium.com/better-programming/what-are-javascript-constructor-functions-f10f58e5ad7a",
    comments: "tutorial on constructor functions",
  },
  {
    category: "JavaScript",
    topic: "Async Await",
    url:
      "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await",
    comments: "the basics of Async Await",
  },
  {
    category: "jQuery",
    topic: "jQuery cheatsheet and syntaxs.",
    url: "https://htmlcheatsheet.com/jquery/",
    comments: "a great resource for using jQuery",
  },
  {
    category: "jQuery",
    topic: "jQuery library",
    url: "https://jquery.com/",
    comments: "jQuery library",
  },
  {
    category: "jQuery",
    topic: "jQuery tutorial",
    url: "https://beginnersbook.com/2019/05/learn-jquery-tutorial/",
    comments: "jQuery reference guide and tutorial",
  },
  {
    category: "AJAX",
    topic: "AJAX tutorial",
    url: "https://www.w3schools.com/xml/ajax_intro.asp",
    comments: "AJAX tutorial",
  },
  {
    category: "AJAX",
    topic: "6 different way to do AJAX calls.",
    url:
      "https://medium.com/@Sharad35386442/6-different-ways-to-do-ajax-calls-in-javascript-b47200fe7a38",
    comments: "a great resource to do AJAX calls",
  },
  {
    category: "AJAX",
    topic: "AJAX library",
    url: "https://api.jquery.com/category/ajax/",
    comments: "ajax library",
  },
  {
    category: "MySQL",
    topic: "What are MySQL queries?",
    url: "https://devhints.io/mysql",
    comments: "a great MySQL cheatsheet",
  },
  {
    category: "Express",
    topic: "Node & Express Servers",
    url:
      "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction",
    comments: "Overview of both Express and Node",
  },
  {
    category: "Express",
    topic: "Node & Express Servers",
    url:
      "https://medium.com/@LindaVivah/the-beginners-guide-understanding-node-js-express-js-fundamentals-e15493462be1",
    comments: "guide to understanding express server fundamentals",
  },
  {
    category: "Express",
    topic: "Express Middleware",
    url: "https://expressjs.com/en/guide/using-middleware.html",
    comments: "Express documentation on how to use middleware in server code",
  },
  {
    category: "Handlebars",
    topic: "Handlebars Templating Engine",
    url:
      "https://stackabuse.com/guide-to-handlebars-templating-engine-for-node/",
    comments: "Overview of handlebar templating",
  },
  {
    category: "Sequelize",
    topic: "Sequelize",
    url: "https://sequelize.readthedocs.io/en/v3/docs/getting-started/",
    comments: "Easy to read, well organized, documentation for Sequelize",
  },
  {
    category: "JavaScript",
    topic: "Events Event Handling",
    url:
      "https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events",
    comments: "MDN introduction to events and event handling",
  },
  {
    category: "API",
    topic: "REST API",
    url:
      "https://medium.com/hashmapinc/rest-good-practices-for-api-design-881439796dc9",
    comments: "best practices when designing API",
  },
  {
    category: "API",
    topic: "REST API",
    url:
      "https://medium.com/valtech-ch/setup-a-rest-api-with-sequelize-and-express-js-fae06d08c0a7",
    comments: "tutorial for setting up REST API with Sequelize and Express",
  },
  {
    category: "API",
    topic: "Web API",
    url:
      "https://www.taniarascia.com/how-to-connect-to-an-api-with-javascript/",
    comments: "Helpful article for beginners on how to connect to a web API",
  },
  {
    category: "Local Storage",
    topic: "Local Storage",
    url:
      "https://blog.logrocket.com/the-complete-guide-to-using-localstorage-in-javascript-apps-ba44edb53a36/",
    comments: "a guide on how to use local storage in the browser",
  },
  {
    category: "Git",
    topic: "Git Cheat Sheet",
    url:
      "https://github.github.com/training-kit/downloads/github-git-cheat-sheet.pdf",
    comments: "resource for git terminal syntax",
  },
  {
    category: "Debugging",
    topic: "Debugging Code",
    url: "http://www.zsoltnagy.eu/javascript-debugging-tips-and-tricks/",
    comments: "5 debugging tips using Google Chrome Dev Tools",
  },
  {
    category: "Heroku",
    topic: "How to deploy to Heroku?",
    url: "https://devcenter.heroku.com/articles/git",
    comments: "deploying to Heroku with Git",
  },
  {
    category: "Testing",
    topic: "Jest Testing",
    url:
      "https://medium.com/@alialhaddad/a-beginners-guide-to-jest-testing-858d10198032",
    comments: "beginners guide to writing Jest Tests",
  },
  {
    category: "Node.js",
    topic: "fs readfile",
    url:
      "https://du.bootcampcontent.com/denver-coding-bootcamp/du-den-fsf-pt-03-2020-u-c/tree/master/Class-Content/09-NodeJS/01-Activities/05-Ins_readFile",
    comments:
      "fs is a Node standard library package for reading and writing files",
  },
  {
    category: "Node.js",
    topic: "fs writeFile",
    url:
      "https://du.bootcampcontent.com/denver-coding-bootcamp/du-den-fsf-pt-03-2020-u-c/tree/master/Class-Content/09-NodeJS/01-Activities/06-Ins_writeFile",
    comments: "",
  },
  {
    category: "Node.js",
    topic: "fs appendFile",
    url:
      "https://du.bootcampcontent.com/denver-coding-bootcamp/du-den-fsf-pt-03-2020-u-c/tree/master/Class-Content/09-NodeJS/01-Activities/07-Stu_appendFile",
    comments: "",
  },
  {
    category: "mysql",
    topic: "import csv file into mysql",
    url:
      "https://du.bootcampcontent.com/denver-coding-bootcamp/du-den-fsf-pt-03-2020-u-c/tree/master/Class-Content/12-MySQL/01-Activities/13-Top5000Code",
    comments: "",
  },
  {
    category: "MVC",
    topic: "get multiple parameters from route",
    url:
      "https://du.bootcampcontent.com/denver-coding-bootcamp/du-den-fsf-pt-03-2020-u-c/tree/master/Class-Content/13-MVC/01-Activities/01-ExpressCalculator",
    comments:
      "You will create an Express calculator application with one get route that is able to take in three parameters: an operation and two numbers.",
  },
  {
    category: "MVC",
    topic: "simple MVC exmple, day planner",
    url:
      "https://du.bootcampcontent.com/denver-coding-bootcamp/du-den-fsf-pt-03-2020-u-c/tree/master/Class-Content/13-MVC/01-Activities/09-DayPlanner",
    comments: "",
  },
  {
    category: "Node.js",
    topic: "inquirer demo password",
    url:
      "https://du.bootcampcontent.com/denver-coding-bootcamp/du-den-fsf-pt-03-2020-u-c/tree/master/Class-Content/09-NodeJS/01-Activities/14-Ins_Inquirer-Demo",
    comments: "",
  },
  {
    category: "Node.js",
    topic: "inquirer, checkbox, list",
    url:
      "https://du.bootcampcontent.com/denver-coding-bootcamp/du-den-fsf-pt-03-2020-u-c/tree/master/Class-Content/09-NodeJS/01-Activities/15-Stu_Inquirer-Users",
    comments:
      "checkbox returned data is an array becuase checkbox is multi choises list returned data is a value",
  },
];

db.sequelize.sync().then(function () {
  // initialize the database
  for (var i = 0; i < initialData.length; i++) {
    db.CodeResource.create({
      category: initialData[i].category,
      topic: initialData[i].topic,
      url: initialData[i].url,
      comments: initialData[i].comments,
    });
  }
});
