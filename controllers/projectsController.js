const db = require ("../models");

module.exports = {
    create: (req, res) => {
        db.Projects
            .create(req.body)
            .then(dbResults => res.json(dbResults))
            .catch(err => res.status(422).json(err));
    },
    findAll: (req, res) => {
        console.log("Searching portfoliodb for Projects")
        db.Projects
            .find({})
            .sort({order:-1})
            .then(dbResults => res.json(dbResults))
            .catch(err => res.status(422).json(err));
    },
    update: (req, res) => { 
        db.Projects
            .findOneAndUpdate({order: req.params.id}, req.body)
            .then(dbResults => res.json(dbResults))
            .catch(err => res.status(422).res.json(err));
    },
    delete: (req, res) => {
        db.Projects
            .findById({_id: req.params.id })
            .then(dbResults => dbResults.remove())
            .then(dbResults => res.json(dbResults))
            .catch(err => res.status(422).json(err));
    },
    seed: (req, res) => {
        console.log("Seeding Projects");
        seedDB.forEach(seed => {
            db.Projects.create(seed)
            .then(dbResults => res.json(dbResults))
            .catch(err => res.status(422).json(err));
        })
        console.log("Finished Seeding Projects");
    }

}

const seedDB = [
    {
        order:1,
        project:"Weather App",
        repoLink: "https://chindowns.github.io/weather/",
        imageLink: "weather-app.jpg",
        deployLink: "https://github.com/chindowns/weather",
        projectRole: "Auther (Self Developed)",
        skills_id: ["Web APIs", "3rd Party APIs", "JavaScript", "AJAX", "CSS Frameworks"],
        appDesc: "<p>The Weather App is a weather dashboard with clean, polished, responsive, and pleasingly friendly weather dashboard that utilizes weatherapi.com as the 3rd party API providing access to all the cities around the world.</p><p> The site utilizes a search bar where the user can type in their city search and click on the search icon, hit enter or tab to pull the data for a city filtered in the United States.This app utilizes: HTML, CSS, jQuery, and JavaScript.</p>",
        projHighlights: "Weather App is clean, polished, responsive, friendly site where user can Click, Enter or Tab to search. The site maintains the last 10 visited sites.",
        projResponsibilities: "Full Design, API selection, and Developemnt.",
        projLearnings: "Rendering a pleasant polished look using dynamic dates and icons in the forecast cards along with input validation."
    },
    {
        order: 2,
        project:"Restaurant List",
        imageLink:"Dining-Wishlist.gif",
        repoLink: "https://github.com/chindowns/restaurant-wishlist",
        deployLink: "https://afternoon-ridge-53194.herokuapp.com/",
        projectRole: "Design and Deploy a FullStack Application",
        skills_id: ["HTML5", "CSS", "jQuery", "Sequelize ORM", "Handlebars"],
        appDesc: "App creates a restaurant wish list checking off the restaurants that you have eaten at. Checking the restaurants that you would go to again and removing the restaurants you don't want to visit while keeping them in the database as an unliked restaurant.  This is fully deployed Full Stack application utilizing JavaScript generated DOM with MVC Handlebars and Sequelize ORM tracking the state of each object.",
        projHighlights: "Clean, User friendly demonstration of Stateful development with Handlebars MVC and full JavaScript rendering.",
        projResponsibilities: "Self Project",
        projLearnings: "Templates and JavaScript DOM rendering simplify dynamic generation of display data.  Yet React is much better tool for dynamic stateful apps."
    },
    {
        order: 3,
        project:"Codvid-19 Pandemic Tracker",
        imageLink: "covid-19-tracker.png",
        repoLink: "https://github.com/chindowns/covid19-tracker",
        deployLink: "https://chindowns.github.io/covid19-tracker/",
        projectRole: "Covid API, Chartjs, and Refactoring",
        skills_id: ["JavaScript", "jQuery", "Web APIs", "3rd Party APIs", "AJAX", "HTML5", "CSS", "CSS Frameworks", "Mapbox", "Leafletjs", "Big Data", "Big Data Parsing", "Full Stack"],
        appDesc: "<p>Web App developed in the early stages to track new cases by State per Day.</p><p>In January 2020, the World Health Organizatin declared the Covid-19 Virus (aka Coronavirus) represents a public health emergency of international concern. On January 31, the U.S. Department of Health and Human Services declared the virus to be a health emergency for the United States. The first recorded case in the United States was on January 22, 2020.</p><p>This application, Covid- 19 Tracker is a web application that enables the user to see what is happening around the world regarding the Covid - 19 Pandemic on one screen.The application enables the user to select one of the top 10 hotspots around the World and see live updates of how many cases have been Confirmed, Recovered, and Deaths associated to Covid - 19 in that country.Along side the map, the news will display the latest headline news regarding health news in that country.</p><p>In the United States, the user has the ability to zoom into the US, select the marker in the state and see a chart that plots confirmed cases by day for that state.</p>",
        projHighlights: "Clean, User friendly site to pull the latest available data regarding the Pandemic in one place.  The News pulls Health Information by country which was COVID related during the Pandemic.",
        projResponsibilities: "Identify, Design, Develop, and Deploy in 7 days. Direct responsibility for COVID API Data Aggregation, Formatting and  Chart Rendering",
        projLearnings: "Managing and Parsing Big Data for Website rendering.  Maintaining 3rd Party APIs to ensure the site functions optimally. Scrubbing, Parsing, Concatenating data hundred thousand objects to display visually."
    },
    {
        order: 4,
        project: "Google Books",
        imageLink: "googlebooks.gif",
        repoLink: "git@github.com:chindowns/google-books.git",
        deployLink: "https://mysterious-reef-15813.herokuapp.com/",
        projectRole: "Full Stack Developer",
        skills_id: ["Full Stack", "MERN", "Mongo DB", "React", "Rest API", "Problem Solving", "Git", "GitHub", "Heroku", "Express.js", "Node.js", "Mongoose ODM", "JSX", "JSON", "Bootstrap", "CSS Frameworks"],
        appDesc: "This book search allows a user to search books from the Google API. They can then save them to a favorites list, view more details, or delete them from the favorites list. Both the search and save functions are made to be user-friendly and intuitive",
        projHighlisghts: "First fully deployed MERN app.",
        projResponsibilities:"Worked on each aspect",
        projLearnings: "The Books API is a full MERN app, combining MongoDB, Express.js, React.js, and Node.js. The storage is all saved to the mongo databse, which is being hosted on Heroku along with the frontend app. API calls are made to mongo to retrieve saved information and bring it back to the frontend to display to the user.",
    },
    {
        order: 9,
        project:"JobKit",
        imageLink: "applications-tracked.jpg",
        repoLink: "https://github.com/chindowns/job-kit",
        deployLink: "https://jobkit.herokuapp.com",
        projectRole: "Database design and model creation with Sequelize, Authentication and Bug testing and troubhleshooting.",
        skills_id: ["HTML5", "CSS", "jQuery", "JavaScript", "MySQL", "Sequelize ORM", "Handlebars", "UI Kit", "3rd Party APIs", "Server Side APIs", "OOP", "Node.js", "Rest API"],
        appDesc: "JobKit organizes all of your job hunt information in one place.  Keep track of each application includng the resume used, whom you talked to about the application, notes from the discussion and where you are in the hiring process with each application.",
        projHighlights: "Add and edit applications.  Add and edit details of the hiring process related to the application.",
        projecResponsiblities: "Full Stack Developer working on the backend, authentication, frontend, testing and quality assurance.",
        projLearnings: "Learned the benefit of an Agile development with an operating MVP developed in 2 days.  Managing state with UI Kit, Handelbars and Sequelize required some problem solving",
    },
    
    {
        order: 10,
        project:"Yum&Yum",
        imageLink: "yumyum.jpg",
        repoLink: "https://github.com/chindowns/Yum-Yum",
        deployLink: "https://yum-y-yum.herokuapp.com",
        projectRole: "Product Manager and Full Stack Developer",
        skills_id: ["HTML5", "CSS", "jQuery", "JavaScript", "MySQL", "Node.js", "Sequelize ORM", "Bootstrap", "Firebase", "Rest API", "OOP", "Server Side APIs"],
        appDesc: "is your favorite Recipe Manager. Create, Save, View, and Edit your recipes -- You can do it all.",
        projHighlights: "Full MERN app using MySQL to support the 8 table, 7 joins database including 3 many-many relastionships. Utilizing Global State to track the User, User Favorites, and Current Recipe.  React application uses 8 pages with 7 components shared with multiple pages. We love this app and think you will too.",
        projResponsibilities: "Database design, models, authentication, application setup, react recipe search, recipe favorites, troubhleshooting and testing",
        projLearnings:"Complex database relationships require more complex programming logic to support CRUD.",
    },
];
