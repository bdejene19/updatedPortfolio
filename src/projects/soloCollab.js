export const soloCollab = [
  {
    name: "getTraded",
    technologies: [
      "MongoDB",
      "Express",
      "React",
      "Node",
      "graphQL",
      "MUI",
      "Heroku",
    ],
    description:
      "As a trader, create an account for one stop shop gateway for your skills, rather than relying on word of mouth for your next job.",
    heroku: true,
    newSkills: [
      "Apollo routing for graphQL",
      "JWT handling, managing login encoded token data",
      "graphQL queries/mutations - Frontend & Backend",
    ],
    howToImprove: [
      "Integrate job board",
      "Split User model into two - Worker, JobPoster - and create dynamic views for posting Vs. viewing a job board",
      "Introduce validation so that user's can only leave review's if work has been done.",
    ],
    projectDisplay: "getTraded",
    sourceCode: "https://github.com/bdejene19/getTraded",
    liveVersion: "https://get-traded.herokuapp.com",
  },
  {
    name: "Hive Mind",
    technologies: ["Express", "MySQL2", "JS", "Handlebars", "Heroku"],
    description:
      "Join the Hive Mind and add a personal note on how to fight or persist through mental illness. Create, delete and upvote posts in the community, while sensitive information in the database is stored securely using bcrypt. Also offers session expiration, reducing number of sign in's to increase user satisfaction",
    heroku: true,
    newSkills: [
      "Model View Controller (MVC) coding paradigm",
      "Express Session to minimize number of user logins and improve the user expereience",
      "Heroku deployment using JawsDB for MySQL2 integration",
      "Sequlize life cycle hooks for pre-database storage hashing",
    ],
    howToImprove: [
      "Add update functionality to previous thoughts",
      "Include moderator to main integrity of application - bolster mental health.",
    ],
    projectDisplay: "",
    sourceCode: "https://github.com/bdejene19/Hive-Mind",
    liveVersion: "https://hivemind-554.herokuapp.com/",
  },
  {
    name: "Universal Movies",
    technologies: ["React", "MUI", "JS", "CSS"],
    description:
      "See the latest and top rated movies, providing user's the ability to search for movies and watch movie trailer.",
    heroku: false,
    newSkills: ["Tailwind", "jQuery", "IMDb/TMDb APIs"],
    howToImprove: [
      "Create genres page for increased user filtration",
      "Improved performance for speed of trailer modal open",
    ],
    projectDisplay: "universalMovies",
    sourceCode: "https://github.com/bdejene19/MarvelousMoviesIndex",
    liveVersion: "https://bdejene19.github.io/MarvelousMoviesIndex/",
  },
];
