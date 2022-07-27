
import './App.css';
import Spline from '@splinetool/react-spline';
import Typical from 'react-typical';
import avatar from './avatar.jpg';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
        
        <div className='spline-container'>
          <div className='nav-bar'>
              <div className='nav-text'>Home</div>
              <a href="#about" className='nav-text'>About</a>
              <div className='nav-text'>Projects</div>
              <div className='nav-text'>Contact</div>

          </div>

          <div className='Welcome-text'>
              <div className='welcome-text-1'>Welcome to my portfolio!</div>
              <div className='welcome-text-2'> Hi, I'm Langchao Wu   </div>

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
        
        <a name="about" className='about-container' >
          <div className='avatar-bg'></div>
          <div className='avatar-container'>

            <img src={avatar}/>

          </div>
          <div className='personal-info'>
            Full Stack Developer with experience using frontend and backend technologies such as React, Javascript, Html, CSS, Ruby on Rails, Node and Java. Possess strong collaboration and excellent problem solving skills through Flatiron program that help team members debug and accomplish robust projects. Fast learner with a passion for new technologies.
          </div>

          <div className='timeLine'>
                <VerticalTimeline>
                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faArrowsLeftRight} />}
                  >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faArrowsLeftRight} />}
                  >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                  </VerticalTimelineElement>

                  <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FontAwesomeIcon icon={faArrowsLeftRight} />}
                  >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                      Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                  </VerticalTimelineElement>


                </VerticalTimeline>


          </div>
        </a>
        

      
     
     
    </div>
  );
}

export default App;
