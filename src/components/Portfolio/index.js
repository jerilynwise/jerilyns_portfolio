import React from "react";
import Project from "../Projects";

// How do I import the images???
// import travelImage from '../../assets/projects/Travel.png'
// import employeeImage from '../../assets/projects/Employee.png'
// import noteImage from '../../assets/projects/Note.png'
// import networkImage from '../../assets/projects/Network.png'
// import blogImage from '../../assets/projects/Blog.png'
// import weatherImage from '../../assets/projects/Weather.png'

    const projects = [
        {
            id: 0,
            name: 'Gotta Keep Traveling',
            description: 'This is a budget tracker for avid travelers that want to track their withdrawls and deposits',
            image: '../../',
            programs: 'HTML/CSS, MongoDB, ExpressJS, NodeJS',
            github: 'https://github.com/jerilynwise/gotta-keep-traveling',
            deployed: 'https://agile-hamlet-56297.herokuapp.com/'
        },
        {   
            id: 1,
            name: 'Employee Tracker',
            description: 'As a business owner I want to be able to view and manage the departments, roles, and employees in my company so that I can organize and plan my business',
            image: 'Employee.png',
            programs: 'NodeJS, MySQL DB, Inquirer',
            github: 'https://github.com/jerilynwise/employee-tracker',
            deployed: 'N/A'
        },
        {
            id: 2,
            name: 'Note Taker',
            description: 'As a business owner I want to be able to write and save notes so that I can organize my thoughts and keep track of tasks I need to complete',
            image: 'Note.png',
            programs: 'Javascript, NodeJS, ExpressJS',
            github: 'https://github.com/jerilynwise/note-taker',
            deployed: 'https://rocky-island-84186.herokuapp.com'
        },
        {
            id: 3,
            name: 'Social- Network API',
            description: 'As a social media startup I want an API for my social network that uses a NoSQL database so that my website can handle large amounts of unstructured data',
            image: 'Network.png',
            programs: "Mongoose, NodeJS, ExpressJS",
            github: 'https://github.com/jerilynwise/social-network-api',
            deployed: 'N/A'
        },
        {
            id: 4,
            name: 'Tech Blog',
            description: 'As a developer who writes about tech I want a CMS-style blog site so that I can publish articles, blog posts, and my thoughts and opinions',
            image: 'Blog.png',
            programs: 'Express-Handlebars, Sequelize, MVC',
            github: 'https://github.com/jerilynwise/tech-blog',
            deployed: 'https://nameless-cove-30065.herokuapp.com/'
        },
        {
            id: 5,
            name: 'Weather App',
            description: 'As a traveler I want to see the weather outlook for multiple cities so that I can plan a trip accordingly',
            image: 'Weather.png',
            programs: 'API, Local Storage, Javascript',
            github: 'https://github.com/jerilynwise/weather-app',
            deployed: 'https://jerilynwise.github.io/weather-app/'
        },
    ]

function Portfolio() {
    return (
        <div className="portfolio">
            <h1>Portfolio</h1>
            <Project projects = {projects} />
        </div>
    )
}

export default Portfolio;
