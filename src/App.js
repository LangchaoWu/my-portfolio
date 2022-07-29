
import './App.css';
import Spline from '@splinetool/react-spline';
import Typical from 'react-typical';
import avatar from './avatar.jpg';
import gameshop from './gameshop.png';
import goldpanning from './goldpanning.png';
import github from './github.png';
import pokedex from './pokedex.png';
import logo from './logo.png';
import linkedIn from './linkedin.png';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsLeftRight, faSchool ,faGraduationCap, faBriefcase, faBars} from '@fortawesome/free-solid-svg-icons'
import {useState,useRef} from 'react';
import React from 'react';
import emailjs from '@emailjs/browser';


function App() {
  const form = useRef();
  const [isWork,setIsWork]=useState(false);
  function timeLineChange(){
    setIsWork(!isWork);
  }


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8vhd1lh', 'template_zu6m8s8', form.current, '8tKDJCkxIXF77dj2T')
      .then((result) => {
          // console.log(result.text);
          alert('email sent');
      }, (error) => {
          // console.log(error.text);
          alert(`${error.text}, please try later`);
      });
      e.target.reset();
  };

  return (
    <div className="App">
      <div className='logo'><img src={logo}/></div>
      <div className='spline-container'id='home'>
        <div className='menu'>
            <FontAwesomeIcon icon={faBars}/>
            <a href="#home" className='menu-text'>Home</a>
            <a href="#about" className='menu-text'>About</a>
            <a href="#project" className='menu-text'>Projects</a>
            <a href="#contact" className='menu-text'>Contact</a>
        </div>
          <div className='nav-bar'>
              <a href="#home" className='nav-text'>Home</a>
              <a href="#about" className='nav-text'>About</a>
              <a href="#project" className='nav-text'>Projects</a>
              <a href="#contact" className='nav-text'>Contact</a>

          </div>

          <div className='Welcome-text'>
              <div className='welcome-text-1'>Welcome to my portfolio!</div>
              <div className='welcome-text-2'> Hi, I'm Langchao Wu   </div>
              <a href='https://www.linkedin.com/in/langchao-wu/' target="_blank" className='connect'>
                <img className='linkedin-logo' src={linkedIn}/>
                <div>Let's connect!</div>
                </a>
              <div className='welcome-text-2'>
                <Typical 
                loop={Infinity}
                wrapper="b"
                steps={
                  ["Software Engineer",3000,
                  "Full Stack Developer",3000
                  ]
                }>
                  

                </Typical>

              </div>
          </div>

          <Spline className="spline "scene="https://prod.spline.design/f4ehgKXIsBCo8OSF/scene.splinecode" />
            
               
      </div>
        
      <div id="about" className='about-container' >
          <div className='avatar-bg'></div>
          <div className='avatar-container'>

            <img src={avatar}/>

          </div>
          <div className='personal-info'>
            Full Stack Developer with experience using frontend and backend technologies such as React, Javascript, Html, CSS, Ruby on Rails, Node and Java. Possess strong collaboration and excellent problem solving skills through Flatiron program that help team members debug and accomplish robust projects. Fast learner with a passion for new technologies.
          </div>
          

          {!isWork?
           <div className='two-button'>
            
              <div className='education_active'>
                <FontAwesomeIcon className='education-icon_active' icon={faGraduationCap} />
                <span>Education</span>
                </div>

              <div className='work' onClick={timeLineChange}>
                <FontAwesomeIcon icon={faBriefcase} />
                <span>Work</span>
              </div>

            </div>
            :
            <div className='two-button'>
            
              <div className='education'onClick={timeLineChange}>
                <FontAwesomeIcon className='education-icon' icon={faGraduationCap} />
                <span>Education</span>
                </div>

              <div className='work_active'>
                <FontAwesomeIcon className='work-icon_active' icon={faBriefcase} />
                <span>Work</span>
              </div>

            </div>
      
           }

        {!isWork?
          <div className='timeLine'>
                <VerticalTimeline>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(178, 128, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2015 - 2019"
                    iconStyle={{ background: 'rgb(178, 128, 243)', color: '#b8ccddb8ccdd' }}
                    icon={<FontAwesomeIcon icon={faArrowsLeftRight} />}
                  >
                    <h2 className="vertical-timeline-element-title">Computer Science</h2>
                    <h4 className="vertical-timeline-element-subtitle">Queens College of CUNY</h4>
                    <h4 className="vertical-timeline-element-subtitle">Queens, NY</h4>
                    {/* <p>
                      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p> */}
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(178, 128, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2022-2 - 2022-6"
                    iconStyle={{ background: 'rgb(178, 128, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faArrowsLeftRight} />}
                  >
                    <h2 className="vertical-timeline-element-title">Software Engineer</h2>
                    <h4 className="vertical-timeline-element-subtitle">Flatiron School</h4>
                    <h4 className="vertical-timeline-element-subtitle">New York, NY</h4>
                    
                  </VerticalTimelineElement>
                </VerticalTimeline>
          </div>
        :
        <div className='timeLine'>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(178, 128, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2018 - 2019"
              iconStyle={{ background: 'rgb(178, 128, 243)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faArrowsLeftRight} />}
            >
              <h2 className="vertical-timeline-element-title">Sales Associate</h2>
              <h4 className="vertical-timeline-element-subtitle">GNC Holdings, Inc.</h4>
              <h4 className="vertical-timeline-element-subtitle">Part-time</h4>
              {/* <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
              </p> */}
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: 'rgb(178, 128, 243)', color: '#fff' }}
              contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
              date="2020 - 2022"
              iconStyle={{ background: 'rgb(178, 128, 243)', color: '#fff' }}
              icon={<FontAwesomeIcon icon={faArrowsLeftRight} />}
            >
              <h2 className="vertical-timeline-element-title">Customer Service Representative</h2>
              <h4 className="vertical-timeline-element-subtitle">Milea Truck Sales and Leasing</h4>
              <h4 className="vertical-timeline-element-subtitle">Full-time</h4>
              
            </VerticalTimelineElement>
          </VerticalTimeline>
       </div>
       }   
      </div>

      <div className='Project-container' id="project">
          <div className='project'>
              <div className='title'>
                Pokédex
              </div>
              <div className='img-container'>
                  <img src={pokedex}/>
              </div>
              <div className='detail'>
                  <div className='Technologies'>Technologies</div>
                  <p className='Technologies-detail'>React Js, Javascript, custom CSS</p>
                  <a href='https://github.com/LangchaoWu/phase-1-project' target="_blank" className='github-logo'><img src={github}/></a>
              </div>
              
          </div>

          <div className='project'>
              <div className='title'>
                  GameShop
              </div>
              <div className='img-container'>
                  <img src={gameshop}/>
              </div>
              <div className='detail'>
                  <div className='Technologies'>Technologies</div>
                  <p className='Technologies-detail'>React Js, Ruby on Rails, custom CSS</p>
                  <a href='https://github.com/LangchaoWu/Phase-4-project-GameShop' target="_blank" className='github-logo'><img src={github}/></a>
              </div>
              
          </div>

          <div className='project'>
              <div className='title'>
                GoldPanning Market
              </div>
              <div className='img-container'>
                  <img src={goldpanning}/>
              </div>
              <div className='detail'>
                  <div className='Technologies'>Technologies</div>
                  <p className='Technologies-detail'>React Js, Ruby on Rails, Bootstrap</p>
                  <a href='https://github.com/LangchaoWu/GoldPanningMarket-react-rails-project' target="_blank" className='github-logo'><img src={github}/></a>
              </div>
              
          </div>

    
          

          

      </div>
        
      
      <div id='contact' className='contact-container'>
          <h1>Contact me</h1>
          <form ref={form} onSubmit={sendEmail}>
            <div className='form-content'>
              <div className='input-field'>
                <input type="text" className='form-name' name='name' placeholder='Name'/>
                <input type="text" className='form-email' name='email' placeholder='Email Address'/>
              </div>
              
              <div className='input-field'>
               <input type="text" className='form-subject'name='subject' placeholder='Subject'/>
              </div>
              <div className='input-field'>
                <textarea className='form-message' name="message" placeholder='Message'/>
              </div>
              <div className='input-field'>
               <input type="submit" className='form-submit' value='Send Message'/>
              </div>

              </div>


          </form>
      </div>

      
     
     
    </div>
  );
}

export default App;
