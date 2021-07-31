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
        {type: "Repository", url: "https://github.com/Statikman619/Work-Day-Scheduler" }
        {type: "Deployment", url: "https://statikman619.github.io/Work-Day-Scheduler/" }
    ]
    skillsUsed: "HTML, CSS, JQuery and Moment.js"
    demoThumbnail: [dayPlannerImg],
    demoContent: [dayPlannerGif],
    demoType: "gif",
    summary: "Create a simple calendar application that allows a user to save events for each hour of the day by modifying starter code."
    details: "An application that allows users to add important events to a daily planner. So that they can manage their time effectively."
  },
];
export default projects;
