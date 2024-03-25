import React from 'react';
import './works.css';
import work1 from '../../assets/python.png';
import work2 from '../../assets/java.png';
import work3 from '../../assets/ecourse.png';


const Works = () => {
    return(
        <section id="works">
        <div className='container'>
            <h1 className='heading'>Projects</h1>
            <span className='skillDesc'>
You may access the respective GitHub repositories of the provided projects by clicking on the corresponding blocks, where you can also explore additional projects.</span>
            <div className='box-container'>
                <a href='https://github.com/geerthanah/Progression-predictor'><div className='box'>
                    <img src={work1} alt='cover'/>
                    <h3>python</h3>
                    <p>An exam Grading platform built using Python Language.</p>
                    
                </div></a>
                <a href='https://github.com/geerthanah/Java-OOP'><div className='box'>
                <img src={work2} alt='cover'/>
                    <h3>Java Swing</h3>
                    <p>This is a online shopping management interface.</p>
                    
                </div></a>
                <a href='https://github.com/geerthanah/Web-design-CW'><div className='box'>
                <img src={work3} alt='cover'/>
                    <h3>HTML, CSS, JS</h3>
                    <p>Book buying store user responsive web application.</p>
                    
                </div></a>
                <a href='https://github.com/geerthanah/Theatre-booking-system-Java'><div className='box'>
                <img src={work2} alt='cover'/>
                    <h3>Java</h3>
                    <p>This is a theatre booking system with multiple features.</p>
                   
                </div></a>
                <a href='https://github.com/Parani2002/SDGP-SE4'><div className='box'>
                <img src={work3} alt='cover'/>
                    <h3>HTML, CSS, JS</h3>
                    <p>User responsive web application for university students</p>
                    
                </div></a>
                <a href='https://github.com/geerthanah'><div className='box'>
                <img src={work1} alt='cover'/>
                    <h3>Python</h3>
                    <p>A calculator for doing complex mathematical operations.</p>
                    
                </div></a>
            </div>
            

 
           
     
        </div>
        </section>
        
    );
}

export default Works;