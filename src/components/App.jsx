import React from 'react';
import Summary from './_Summary';
import Experience from './_Experience';
import Frame from './_Frame';
import Education from './_Education';
import SkillList from './_SkillList';

const App = () => (
  <div className="main">
    <div className="letter">
      <Frame />
      <div className="container">
        <header>
          <div className="name">Jesse Katsumata</div>
          <div className="address">4613 Korbel St. Union City, CA 94587</div>
          <div className="contact">Phone: (510) 552-6792 - Email: jesse.katsumata@gmail.com</div>
        </header>
        <div className="body">
          <div className="column">
            <Summary />
            <Experience />
            <Education />
          </div>
          <div className="column">
            <SkillList />
          </div>
        </div>
      </div>
    </div>
  </div>
);


export default App;
