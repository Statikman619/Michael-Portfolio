import dayPlannerImg from "./assets/demo-thumbnails/day-planner.png";
import movieBuffsImg from "./assets/demo-thumbnails/movie-buffs.png";
import noteTakerImg from "./assets/demo-thumbnails/note-taker.png";
import openWeatherMapImg from "./assets/demo-thumbnails/open-weather-map.png";
import passwordGeneratorImg from "./assets/demo-thumbnails/password-generator.png";
import workoutTrackerImg from "./assets/demo-thumbnails/workout-tracker.png";

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
          {type : "Repository", url "https://github.com/JG-77/Movie-Buffs-Group-Project"},
          {type : "Deployment", url "https://jg-77.github.io/Movie-Buffs-Group-Project/"}
      ]
      skillsUsed: "",
      demoThumbnail: [movieBuffsImg],
      demoContent: [movieBuffsGif],
      demoType: "gif",
      summary: "",
      details ""
  }
  {
    id: 4,
    name: "note-taker",
    projectLinks: [
        {type : "Repository", url "https://github.com/Statikman619/Note-Taker"},
        {type : "Deployment", url "https://serene-ridge-18121.herokuapp.com/"}
    ]
    skillsUsed: "HTML, CSS, JS, Express.js, JSON and UUID",
    demoThumbnail: [noteTakerImg],
    demoContent: [noteTakerGif],
    demoType: "gif",
    summary: "It's your job to build the back end, connect the two, and then deploy the entire application to Heroku.",
    details "An application called Note Taker that can be used to write and save notes."
}
{
    id: 3,
    name: "open-weather-map",
    projectLinks: [
        {type : "Repository", url "https://github.com/Statikman619/Open-Weather-Map/tree/master"},
        {type : "Deployment", url "https://statikman619.github.io/Open-Weather-Map/"}
    ]
    skillsUsed: "HTML, CSS, JS, LocalStorage and Open Weather Map API",
    demoThumbnail: [openWeatherMapImg],
    demoContent: [openWeatherMapGif],
    demoType: "gif",
    summary: "Your challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS.",
    details "An application called Open Weather Map that allows you to get current weather data from various cities"
}
{
    id: 2,
    name: "password-generator"
    projectLinks: [
        {type : "Repository", url "https://github.com/Statikman619/Password-Generator"}
        {type : "Deployment", url "https://statikman619.github.io/Password-Generator/"}
    ]
    skillsUsed: "HTML, CSS, JS, ",
    demoThumbnail: [passwordGeneratorImg],
    demoContent: [passwordGeneratorGif],
    demoType: "gif"
    summary: "For this project we had to modify starter code to make it have a clean, polished and responsive look.",
    details "An application that enables employees to generate random passwords based on criteria that they’ve selected. "
}
{
    id: 1,
    name: "workout-tracker"
    projectLinks: [
        {type : "Repository", url "https://github.com/Statikman619/Workout-Tracker"}
        {type : "Deployment", url "https://mikes-workout-tracker.herokuapp.com/?id=60f798454d65b0001558decd"}
    ]
    skillsUsed: "HTML, CSS and JS",
    demoThumbnail: [workoutTrackerImg],
    demoContent: [workoutTrackerGif],
    demoType: "gif"
    summary: ""
    details ""
}
];
export default projects;
