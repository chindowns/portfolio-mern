import React from 'react';
import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer"

function App() {
  return (
    <div>
      <div id="nav" className="d-flex flex-wrap">
        <header className="flex-nowrap">
          <h1> Michael Downs</h1>
          <p>Full Stack Developer</p>
        </header>

        <div id="spacer" className="d-flex flex-grow-1"></div>

        <nav className="col-5 d-flex flex-nowrap">
          <ul className="nav nav-pills flex-nowrap">
            <li className="nav-link d-flex flex-nowrap">
              <a id="nav-projects" href="#">Latest</a></li>
            <li className="nav-link d-flex flex-nowrap">
              <a id="nav-about" href="#">About</a></li>
            <li className="nav-link d-flex flex-nowrap">
              <a id="nav-blog" href="#">Blog</a></li>
            <li className="nav-item d-flex flex-nowrap">
              <a className="nav-link" target="blank" href="https://www.linkedin.com/in/michaeldownssj"><img
                src="assets/images/li-in-bug.png" alt="" width="25px" height="25px" /></a>
            </li>

          </ul>
        </nav>
      </div>

      <main id="container" className="content">
        <div id="about">
          <img id="profile-img" src="assets/images/Portfolio-HeadShot-3.jpg" width="300px" />
          <p>
            Michael is currently enrolled as a full time student at UC Berkeley Extension's Full Stack Development program. Michael delivers clean and polished applications in a collaborative environment. He is an effective communicator with an ability to translate technology into everyday language for clients and users.

            <br /><br />
            Michael is a collaborative teammate who will also manage individual tasks in order to get projects completed. Through his clear communication and leadership skills, he delivered successful projects that involved pair programming and virtual teams.
            <br /><br />
          </p>
        </div>

        <section id="projects">

          <div id="project-weather" className="row d-flex flex-wrap justify-content-around project">
            <div className="col-4 card">
              <div className="card-body">
                <img className="card-img-top" src="assets/images/Dining-Wishlist.gif" width="300px" />
                <a href="https://afternoon-ridge-53194.herokuapp.com/" className="card-link">Restaurant Listed</a>
                <a href="https://github.com/chindowns/restaurant-wishlist" className="card-link">Github Repository</a>
              </div>
            </div>
            <div className="col-4 project-description">
              <h3>Restaurant List</h3>
              <p>The restaurant app has two lists where the user adds the restaurant to the list then moves it between the two lists.  The app utilizes a true / false switch and mysql to move the restaurants between the two lists.
              </p>

              <p>Utilizing Handlebars for templates and sequelize for the ORM, the app does not use index.html files. When the user loads the page, they are given the ability to add more restaurants they want to eat at or remove restaurants they want to forget.
              </p>
            </div>
          </div>

          <div id="project-covid" className="row d-flex flex-nowrap justify-content-around project">
            <div className="col-4 project-description">
              <h3> Covid-19 Pandemic Tracker</h3>
              <p>Covid-19 Tracker enables user to see what is happening around the world regarding the Covid-19 Pandemic on one screen. Select one of the top 10 hotspots around the World and see live updates of how many cases havebeen Confirmed, Recovered, and Deaths associated to Covid-19 in that country. Along side the map, the news displays the latest headlines regarding health news in that country.</p>

              <p>In the United States, the user has the ability to zoom into the US, select the marker in the state and see a chart that plots confirmed cases by day for that state.</p>

              <p>This site utilizes Javascript AJAX calls to query the latest information from Covid-19 Data APIs and News API.</p>
            </div>

            <div className="col-4 card">
              <div className="card-body">
                <img className="card-img-top" src="assets/images/covid-19-tracker.png" width="300px" />
                <a href="https://chindowns.github.io/covid19-tracker/" className="card-link">Covid-19 Pandemic Tracker</a>
                <a href="https://github.com/chindowns/covid19-tracker" className="card-link">Github Repository</a>
              </div>
            </div>
          </div>

          <div id="project-weather" className="row d-flex flex-wrap justify-content-around project">
            <div className="col-4 card">
              <div className="card-body">
                <img className="card-img-top" src="assets/images/weather-app.jpg" width="300px" />
                <a href="https://chindowns.github.io/weather/" className="card-link">Weather App</a>
                <a href="https://github.com/chindowns/weather" className="card-link">Github Repository</a>
              </div>
            </div>
            <div className="col-4 project-description">
              <h3>Weather App</h3>
              <p>The Weather App is a weather dashboard with clean, polished, responsive, and pleasingly friendly weather dashboard that utilizes weatherapi.com as the 3rd party API providing access to all the cities around the world.</p>

              <p>The site utilizes a search bar where the user can type in their city search and click on the search icon, hit enter or tab to pull the data for a city filtered in the United States. This app utilizes: HTML, CSS, jQuery, and JavaScript.</p>
            </div>
          </div>

        </section>

        <article id="blog"></article>


      </main>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
          integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
          crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"
          integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
          crossorigin="anonymous"></script>
        <script src="assets/js/script.js"></script>
      <Footer />
    </div>
  );
}

export default App;
