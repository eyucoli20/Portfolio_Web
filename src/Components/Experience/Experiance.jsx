import React from 'react'
import './Experiance.css'

function Experiance() {
    return (
        <div>
            <section id="experience" class="container py-5">
                <h2 class="mb-4 text-dark">Experience</h2>
                <div class="row g-4">
                <div class="col-md-6">
                    <div class="card shadow-sm p-4 h-100">
                    <h3 class="fw-bold">Software Developer - SKYIT Services (GBCS Group)</h3>
                    <p class="text-muted">Feb 2024 – April 2025 </p>
                    <p>Designed and built secure, scalable backend services using Spring Boot / Java with MySQL and PostgreSQL.

                    Developed Python automation scripts for monitoring and alerting, reducing incidents by 30%.

                    Collaborated with product management and UX teams during Agile sprints to refine user stories and requirements.

                    Implemented CI/CD pipelines and automated testing (unit/integration) to maintain high code quality.

                    Conducted resilience testing and configured logging and alerting to improve production reliability.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card shadow-sm p-4 h-100">
                    <h3 class="fw-bold">Software Development Intern - SYNC</h3>
                    <p class="text-muted">Nov 2023 – Feb 2024</p>
                    <p>Gained hands-on experience with Microsoft Azure, deploying and managing cloud-based resources in simulated environments.

                    Built foundational Java programming skills, developing simple applications and applying object-oriented principles.

                    Strengthened communication and collaboration through workshops, team projects, and peer feedback.

                    Worked on team-based problem-solving challenges, presenting solutions to stakeholders and enhancing teamwork and presentation skills.</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="card shadow-sm p-4 h-100">
                    <h3 class="fw-bold">Java Software Engineer - Revature</h3>
                    <p class="text-muted">Jan 2023 – May 2023</p>
                    <p>Gained practical experience with AWS cloud services and applied DevOps practices for continuous integration and deployment.

                    Integrated RESTful and GraphQL APIs into React applications, enabling real-time data updates and improved responsiveness.

                    Built dynamic, reusable UI components with React and TypeScript, enhancing development speed and consistency.

                    Developed responsive, mobile-first layouts using Flexbox, Grid, and Tailwind CSS for seamless cross-device compatibility.

                    Implemented client-side routing with React Router and optimized rendering performance using memoization and lazy loading.

                    Collaborated with designers and managed state effectively to ensure a polished, responsive UI.</p>
                    </div>
                </div>
                </div>
            </section>
        </div>
    )
}

export default Experiance
