import React from 'react';
import Header from './_Header';
import Summary from './_Summary';
import Experience from './_Experience';
import Frame from './_Frame';
import Education from './Education';
import SkillList from './_SkillList';
import summary from '../imports/summary';
import skills from '../imports/skills';

const category = 'data-analyst';

const App = () => (
  <div className="main">
    <div className="letter">
      <Frame />
      <div className="container">
        <Header />
        <div className="body">
          <div className="column">
            <Summary content={summary[category]} />
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
