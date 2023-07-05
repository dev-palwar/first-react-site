import React from 'react'
import "../Styles/About.css"
import vg from "../assets/2.webp";

const About = () => {
  return (
    <>
        <section className="about-section">
            <img src={vg} alt="" />
            <div className="about-info">
                <h1>About</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores temporibus nam veritatis doloremque quia facilis minus reiciendis nihil odit in minima quos, autem quibusdam, tempora natus quisquam consectetur eos perspiciatis ratione tempore voluptate ullam ab? Sequi iusto sint ab.</p>
            </div>
        </section>
        <hr />
    </>
  )
}

export default About
