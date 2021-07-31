import dayPlannerImg from "./assets/demo-thumbnails/day-planner.png";
import movieBuffsImg from "./assets/demo-thumbnails/movie-buffs.png";
import noteTakerImg from "./assets/demo-thumbnails/note-taker.png";
import openWeatherMapImg from "./assets/demo-thumbnails/open-weather-map.png";
import passwordGeneratorImg from "./assets/demo-thumbnails/password-generator.png";
import workoutTrackerImg from "./assets/demo-thumbnails/workout-tracker.png";

// import dayPlannerGif from "./assets/demo-gifs/dayPlanner.gif";
// import movieBuffsGif from "./assets/demo-gifs/movieBuffs.gif";
// import noteTakerGif from "./assets/demo-gifs/noteTaker.gif";
// import openWeatherMapGif from "./assets/demo-gifs/openWeatherMap.gif";
// import passwordGeneratorGif from "./assets/demo-gifs/passwordGenerator.gif";
// import workoutTrackerGif from "./assets/demo-gifs/workoutTracker.gif"

const projects = [
  {
    id: 6,
    name: "day-planner",
    projectLinks: [
        {type: "Repository", url: "https://github.com/Statikman619/Work-Day-Scheduler" },
        {type: "Deployment", url: "https://statikman619.github.io/Work-Day-Scheduler/" }
    ]
    skillsUsed: "HTML, CSS, JQuery and Moment.js",
    demoThumbnail: [dayPlannerImg],
    demoContent: [dayPlannerGif],
    demoType: "gif",
    summary: "Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code.",
    details: "An application that allows users to add important events to a daily planner. So that they can manage their time effectively."
  },
  {
      id: 5,
      name: "movie-buffs",
      projectLinks: [
          {type : "Repository", url: "https://github.com/JG-77/Movie-Buffs-Group-Project"},
          {type : "Deployment", url: "https://jg-77.github.io/Movie-Buffs-Group-Project/"}
      ]
      skillsUsed: "TML, CSS, JS, JSON, OMDB API, WikipediaAPI",
      demoThumbnail: [movieBuffsImg],
      demoContent: [movieBuffsGif],
      demoType: "gif",
      summary: "This was my first project but luckily I had help from my team @JG-77 and @djony88.",
      details: "An application that allows a user to do a quick search to help you learn about movies, tv series, and video games."
  }
  {
    id: 4,
    name: "note-taker",
    projectLinks: [
        {type: "Repository", url: "https://github.com/Statikman619/Note-Taker"},
        {type: "Deployment", url: "https://serene-ridge-18121.herokuapp.com/"}
    ]
    skillsUsed: "HTML, CSS, JS, Express.js, JSON and UUID",
    demoThumbnail: [noteTakerImg],
    demoContent: [noteTakerGif],
    demoType: "gif",
    summary: "It's your job to build the back end, connect the two, and then deploy the entire application to Heroku.",
    details: "An application called Note Taker that can be used to write and save notes."
}
{
    id: 3,
    name: "open-weather-map",
    projectLinks: [
        {type : "Repository", url: "https://github.com/Statikman619/Open-Weather-Map/tree/master"},
        {type : "Deployment", url: "https://statikman619.github.io/Open-Weather-Map/"}
    ]
    skillsUsed: "HTML, CSS, JS, LocalStorage and Open Weather Map API",
    demoThumbnail: [openWeatherMapImg],
    demoContent: [openWeatherMapGif],
    demoType: "gif",
    summary: "Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.",
    details: "An application called Open Weather Map that allows you to get current weather data from various cities"
}
{
    id: 2,
    name: "password-generator"
    projectLinks: [
        {type : "Repository", url: "https://github.com/Statikman619/Password-Generator"},
        {type : "Deployment", url: "https://statikman619.github.io/Password-Generator/"}
    ]
    skillsUsed: "HTML, CSS and JS",
    demoThumbnail: [passwordGeneratorImg],
    demoContent: [passwordGeneratorGif],
    demoType: "gif"
    summary: "For this project we had to modify starter code to make it have a clean, polished and responsive look.",
    details: "An application that enables employees to generate random passwords based on criteria that they’ve selected. "
}
{
    id: 1,
    name: "workout-tracker"
    projectLinks: [
        {type : "Repository", url: "https://github.com/Statikman619/Workout-Tracker"}
        {type : "Deployment", url: "https://mikes-workout-tracker.herokuapp.com/?id=60f798454d65b0001558decd"}
    ]
    skillsUsed: "HTML, CSS, JS, Express, Mongo, Mongoose, Morgan and Nodemon",
    demoThumbnail: [workoutTrackerImg],
    demoContent: [workoutTrackerGif],
    demoType: "gif"
    summary: "For this project we had to modify starter code to handle schema and routes created in express.",
    details: "An application that allows a user to be able to view create and track daily workouts. I want to be able to log multiple exercises in a workout on a given day."
}
];
export default projects;
