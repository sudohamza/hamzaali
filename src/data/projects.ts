import towerImage from "../assets/tower.png"
import dbImage from "../assets/muidashboard.png"
import bTracker from "../assets/btracker.png";
export const  myProjects = [
    {
        title:"Tower of Hanoi",
        des:"Tower of Hanoi is a simple puzzle game based on the Tower of Hanoi problem using React Native's drag-and-drop events.",
        sourceLink:"https://github.com/sudohamza/tower-hanoi",
        liveLink:"https://sudohamza.github.io/tower-hanoi/",
        img:towerImage,
        preview:false,
    },
        {
        title:"Admin Dashboard MUI",
        des:"A multi-mode admin dashboard has been created using React and Material-UI, featuring a responsive interface for efficient management,",
        sourceLink:"https://github.com/sudohamza/admin-dashboard-mui",
        liveLink:"https://sudohamza.github.io/admin-dashboard-mui/",
        img:dbImage,
        preview:false,
    },
          {
        title:"Budget-Tracker",
        des:"The Budget Tracker is a web app for managing finances, featuring user authentication, a transaction dashboard, and data visualization, powered by a Node.js backend.",
        sourceLink:"https://github.com/sudohamza/Budget-Tracker-App",
        liveLink:"",
        img:bTracker,
        preview:true,
    },
]
