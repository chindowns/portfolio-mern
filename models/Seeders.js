
db.on("error", error => {
    console.log("database Error:", error);
});

db.Resume.insert({
    name: "Michael Downs",
    email: "michael@chindowns.com",
    phone: "479-799-9490",
    city: "San Jose",
    state: "CA",
    linkedin: "michaeldownssj",
    github: "chindowns"
});

db.Skills.insert({"3rd Party APIs": "Frontend"}),
db.Skills.insert({"AJAX": "Frontend"}),
db.Skills.insert({"API": "Backend"}),
db.Skills.insert({"Big Data": "Backend"}),
db.Skills.insert({"Bootstrap": "Frontend"}),
db.Skills.insert({"Bootstrap CSS Framework": "Frontend"}),
db.Skills.insert({"Cascading Style Sheets (CSS)": "Frontend"}), 
db.Skills.insert({"Context API": "Frontend"}),
db.Skills.insert({"CSS Frameworks": "Frontend"}), 
db.Skills.insert({"Databases": "Frontend"}),  
db.Skills.insert({"Declarative Programming": "Frontend"}),  
db.Skills.insert({"Django": "Frontend"}),  
db.Skills.insert({"ES6": "Frontend"}),  
db.Skills.insert({"Express.js": "Backend"}),  
db.Skills.insert({"Firebase": "Backend"}), 
db.Skills.insert({"Flask": "Frontend"}),
db.Skills.insert({"Full Stack": "Frontend"}),
db.Skills.insert({"Git": "Backend"}),  
db.Skills.insert({"GitHub": "Backend"}),  
db.Skills.insert({"Handlebars ORM": "Frontend"}), 
db.Skills.insert({"Heroku": "Backend"}),  
db.Skills.insert({"HTML5 ": "Frontend"}), 
db.Skills.insert({"IndexDB": "Frontend"}),  
db.Skills.insert({"JavaScript": "Frontend"}), 
db.Skills.insert({"jQuery": "Frontend"}), 
db.Skills.insert({"JSON": "Frontend"}),  
db.Skills.insert({"JSX ": "Frontend"}), 
db.Skills.insert({"Linux": "Backend"}), 
db.Skills.insert({"Mongo DB": "Backend"}),  
db.Skills.insert({"Mongoose ODM": "Frontend"}),  
db.Skills.insert({"MVC": "Frontend"}), 
db.Skills.insert({"MySQL": "Backend"}),  
db.Skills.insert({"Node.js": "Backend"}),  
db.Skills.insert({"NoSQL": "Backend"}), 
db.Skills.insert({"Object-oriented Programming (OOP)": "Frontend"}),  
db.Skills.insert({"ODM": "Frontend"}), 
db.Skills.insert({"ORM": "Frontend"}), 
db.Skills.insert({"Passport": "Frontend"}),  
db.Skills.insert({"Postman": "Frontend"}),  
db.Skills.insert({"Problem-Solving": "Backend"}),
db.Skills.insert({"Python": "Frontend"}),  
db.Skills.insert({"Rails": "Frontend"}),  
db.Skills.insert({"React": "Frontend"}), 
db.Skills.insert({"Rest API": "Frontend"}),  
db.Skills.insert({"Ruby": "Frontend"}),  
db.Skills.insert({"Sequelize ORM ": "Frontend"}),
db.Skills.insert({"Server Side APIs": "Backend"}), 
db.Skills.insert({"Sinatra": "Frontend"}), 
db.Skills.insert({"SQL": "Backend"}),
db.Skills.insert({"Stateful Development": "Frontend"}), 
db.Skills.insert({"Testing (edited)": "Frontend"}), 
db.Skills.insert({"Web APIs": "Frontend"}),

db.Projects.insert({
    project:"Weather App",
    repoLink: "https://chindowns.github.io/weather/",
    imageLink: "weather-app.jpg",
    deployLink: "https://github.com/chindowns/weather",
    projectRole: "Auther (Self Developed)",
    skills_id: ["Web APIs", "3rd Party APIs", "JavaScript", "CSS Frameworks"],
    appDesc: "Easy and Quick Weather App utilizing weatherAPI for weather data",
    projHighlights: "Weather App is clean, polished, responsive, friendly site where user can Click, Enter or Tab to engage a search. The site maintains the last 10 visited sites.",
    projResponsibilities: "Full Design, API selection, and Developemnt.",
    projLearnings: "Rendering a pleasant polished look using dynamic dates and icons in the forecast cards along with input validation."
})

db.Projects.insert({
    project:"Codvid-19 Pandemic Tracker",
    imageLink: "covid-19-tracker.png",
    repoLink: "https://github.com/chindowns/covid19-tracker",
    deployLink: "https://chindowns.github.io/covid19-tracker/",
    projectRole: "Covid API, Chartjs, and Refactoring",
    skills_id: ["JavaScript", "jQuery", "Web APIs", "3rd Party APIs", "HTML5", "CSS", "CSS Frameworks", "Mapbox", "Leafletjs", "Big Data", "Big Data Parsing", "Full Stack"],
    appDesc: "Web App developed in the early stages to track new cases by State/Day",
    projHighlights: "Clean, User friendly sight to pull the latest available data regarding the Pandemic in one place.  The News pulls Health Information by country which was COVID related during the Pandemic.",
    projResponsibilities: "Identify, Design, Develop, and Deploy in 7 days. Direct responsibility for COVID API and Data Rendering",
    projLearnings: "Managing and Parsing Big Data for Website rendering.  Maintaining 3rd Party APIs to ensure the site functions optimally. Scrubbing, Parsing, Concatenating data hundred thousand objects to display visually."
});

db.Projects.insert({
    project:"Restaurant List",
    imageLink:"Dining-Wishlist.gif",
    repoLink: "https://github.com/chindowns/restaurant-wishlist",
    deployLink: "https://afternoon-ridge-53194.herokuapp.com/",
    projectRole: "Design and FullStack Development",
    skills_id: ["HTML5", "CSS", "jQuery", "Sequelize ORM", "Handlebars"],
    appDesc: "JavaScript DOM site rendering utilizing MVC Handlebars and Sequelize ORM to track the state of each item.",
    projHighlights: "Clean, User friendly demonstration of Stateful development with Handlebars MVC and full JavaScript rendering.",
    projResponsibilities: "Self Project",
    projLearnings: "Templates and JavaScript DOM rendering simplify dynamic generation of display data."
});

db.Projects.insert({
    project:"JobKit",
    imageLink: "applications-tracked.jpg",
    repoLink: "https://github.com/chindowns/job-kit",
    deployLink: "https://jobkit.herokuapp.com",
    projectRole: "Database design and model creation with Sequelize, Authentication and Bug testing and troubhleshooting.",
    skills_id: ["HTML5", "CSS", "jQuery", "JavaScript", "MySQL", "Sequelize ORM", "Handlebars", "UI Kit", "3rd Party APIs", "Server Side APIs", "OOP", "Node.js", "Rest API"]
});

db.Project.insert({
    project:"Yum&Yum",
    imageLink: "yumyum.jpg",
    repoLink: "https://github.com/chindowns/Yum-Yum",
    deployLink: "https://yum-y-yum.herokuapp.com",
    projectRole: "Database design, models, authentication, application setup, react recipe search, recipe favorites, troubhleshooting and testing",
    skills_id: ["HTML5", "CSS", "jQuery", "JavaScript", "MySQL", "Node.js", "Sequelize ORM", "Bootstrap", "Firebase", "Rest API", "OOP", "Server Side APIs"]
})

db.JobHistory.insert({
    company: "Self-Employeed",
    jobTitle: "Realestate, Landlord, Handyman",
    endDate: "2020-03-10",
    startDate: "2016-04-01",
    city:"Bentonville",
    state: "AR",
    accomplishments1: "Purchase & renovate rental houses required vision, development, contractor maangement and ability to identify obstacles, adjust plans and vision to meet goals and complete on schedule.",
});

db.JobHistory.insert({
    company: "1Source LLC",
    jobTitle: "Business Consultant",
    endDate: "2016-04-01",
    startDate: "2012-08-01",
    city: "Hong Kong",
    state: "Hong Kong",
    accomplishments1: "Worked with Executives and Business Owners analyze and lower telecom expenses."
});

db.JobHistory.insert({
    company: "CD Business Solutions",
    jobTitle: "Business Consultant",
    endDate: "2012-08-01",
    startDate: "2009-08-01",
    city: "Bentonville",
    state: "AR",
    accomplishments1: "Worked with businesses to help build web and marketing practice.",
    accomplishments2: "Developed an advertising platform in the online virtual meeting space."
});

db.JobHistory.insert({
    company: "PRN",
    jobTitle: "Director Business Development",
    endDate: "2009-06-01",
    startDate: "1998-05-01",
    accomplishment1: "Developed and sold $3M annual advertising campaign incorporating 27 brands with Sam's Club",
    accomplishment2: "Developed and Lead the Technical Account Team to support Walmart In-Store Digital and HD advertising.",
    accomplishment3: "As Product Manager, worked closely with Engineering and QA to develop a process that released updates every 6 weeks to 12,000 servers, nationwide and PR.  This process was very similar to Agile."
});