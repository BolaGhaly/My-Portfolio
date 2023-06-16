import ttp_capstone_project_img from "../assets/projects/ttp_capstone_project_img.webp";
import java_2d_game_project_img from "../assets/projects/java_2d_game_project_img.webp";
import quiz_app_project_img from "../assets/projects/quiz_app_project_img.webp";

interface Projects {
  img: string;
  title: string;
  subtitle: string;
  desc: string;
  technologies: Array<string>;
  github: boolean;
  githubLink: string;
  deployed: boolean;
  deployedLink?: string;
}

export const ProjectsList: Projects[] = [
  {
    img: ttp_capstone_project_img,
    title: "NYC Tech Talent Pipeline Capstone Project - Backend",
    subtitle: "Full-Stack Web Development Bootcamp",
    desc: "An online loot box simulator where a user can open different kinds of card packs (Starter, All-Stars, and Hall of Famers) to get a chance to own their favorite NBA player trading cards, using API endpoints and a PostgreSQL database.",
    technologies: ["Express", "REST API", "Postgres", "Supabase", "Vercel"],
    github: true,
    githubLink: "https://github.com/BolaGhaly/TTP-Capstone-Project-Backend",
    deployed: true,
    deployedLink: "https://ttp-capstone-project-backend.vercel.app/",
  },
  {
    img: java_2d_game_project_img,
    title: "Java 2D RPG Game",
    subtitle: "CSC330 Object-Oriented Software Design - Group Project",
    desc: "A fun and interactive 2D RPG game built with Java and Eclipse IDE.",
    technologies: ["Java Swing", "Java AWT", "Java Sound", "Eclipse IDE"],
    github: true,
    githubLink: "https://github.com/BolaGhaly/2D-Game",
    deployed: false,
  },
  {
    img: quiz_app_project_img,
    title: "TypeScript React Quiz App",
    subtitle: "Personal Project - Frontend Development",
    desc: "Get ready to test your knowledge and challenge yourself with this amazing quiz app built with Scss, TypeScript, and React, where you can choose from different categories and difficulty levels, and even select the number of questions to answer!",
    technologies: ["HTML", "Scss", "TypeScript", "React"],
    github: true,
    githubLink: "https://github.com/BolaGhaly/Quiz-App",
    deployed: true,
    deployedLink: "https://tsreact-quiz-app.netlify.app/",
  },
];
