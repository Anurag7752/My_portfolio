import React from 'react'
import styles from "../Projects/ProjectsStyle.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from '../../common/ProjectCard'

function Projects() {
    return (
      <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
          <ProjectCard
            src={viberr}
            link="https://github.com/Anurag7752/Prisma-ORM_REST-API-s"
            h3="Prisma-ORM_REST-API-s"
            p="Prisma-ORM_REST-API-s"
          />
          <ProjectCard
            src={freshBurger}
            link="https://github.com/Anurag7752/food-recipe"
            h3="food-recipe"
            p="food-recipe"
          />
          <ProjectCard
            src={hipsster}
            link="https://github.com/Anurag7752/Clothing-E-commerce-Website"
            h3="Clothing-E-commerce-Website"
            p="Clothing-E-commerce-Website"
          />
          <ProjectCard
            src={fitLift}
            link="https://github.com/Anurag7752/fitness_website"
            h3="FitLift"
            p="Fitness App"
          />
        </div>
      </section>
    );
  }
export default Projects
