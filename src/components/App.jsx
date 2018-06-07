import React from 'react';
import Header from './Header';
import Summary from './Summary';
import Experience from './Experience';
import Frame from './_Frame';
import Education from './Education';
import SkillList from './Skill';
import skills from '../imports/skills';

const category = 'front-end-developer';

const App = () => (
  <div className="main">
    <div className="letter">
      <Frame />
      <div className="container">
        <Header />
        <div className="body">
          <div className="column">
            <Summary />
            <Experience />
          </div>
          <div className="column">
            <SkillList skills={skills[category]} />
            <Education />
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default App;
