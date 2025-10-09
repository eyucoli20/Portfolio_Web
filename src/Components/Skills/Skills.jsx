import React from 'react'
import './Skills.css'

function Skills() {
    return (
        <div>
            <section  id="skills" className="py-5">
                <div className="container">
                    <h2 className="mb-4 text-dark">Skills</h2> 
                    <div className="row g-3">
                        <div className="col-6 col-md-4 col-lg-2"><div className="card text-center p-3 shadow-sm">Java</div></div>
                        <div className="col-6 col-md-4 col-lg-2"><div className="card text-center p-3 shadow-sm">JavaScript</div></div>
                        <div className="col-6 col-md-4 col-lg-2"><div className="card text-center p-3 shadow-sm">React</div></div>
                        <div className="col-6 col-md-4 col-lg-2"><div className="card text-center p-3 shadow-sm">Python</div></div>
                        <div className="col-6 col-md-4 col-lg-2"><div className="card text-center p-3 shadow-sm">Spring Boot</div></div>
                        <div className="col-6 col-md-4 col-lg-2"><div className="card text-center p-3 shadow-sm">SQL </div></div>
                        <div className="col-6 col-md-4 col-lg-2"><div className="card text-center p-3 shadow-sm">MySQL</div></div>
                        <div className="col-6 col-md-4 col-lg-2"><div className="card text-center p-3 shadow-sm">PostgreSQL</div></div>
                        <div className="col-6 col-md-4 col-lg-2"><div className="card text-center p-3 shadow-sm">HTML & CSS</div></div>
                        <div className="col-6 col-md-4 col-lg-2"><div className="card text-center p-3 shadow-sm">Git & GitHub</div></div>
                        <div className="col-6 col-md-4 col-lg-2"><div className="card text-center p-3 shadow-sm">OOP</div></div>
                        <div className="col-6 col-md-4 col-lg-2"><div className="card text-center p-3 shadow-sm">REST APIs</div></div>
                        <div className="col-6 col-md-4 col-lg-2"><div className="card text-center p-3 shadow-sm">AWS</div></div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Skills
