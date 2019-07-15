type Skill = {
  name: string
  percent: number
}

const skills: Record<string, Skill[]> = {
  'front-end-developer': [
    {
      name: 'TypeScript',
      percent: 80,
    },
    {
      name: 'Javascript',
      percent: 80,
    },
    {
      name: 'React',
      percent: 90,
    },
    {
      name: 'ReactNative',
      percent: 90,
    },
    {
      name: 'Redux',
      percent: 80,
    },
    {
      name: 'Babel(ES6)',
      percent: 70,
    },
    {
      name: 'Node.js',
      percent: 70,
    },
    {
      name: 'Rails 5',
      percent: 50,
    },
    {
      name: 'HTML5',
      percent: 90,
    },
    {
      name: 'CSS3',
      percent: 90,
    },
    {
      name: 'jQuery',
      percent: 80,
    },
    {
      name: 'Express.js',
      percent: 70,
    },
    {
      name: 'Webpack',
      percent: 80,
    },
    {
      name: 'Gulp',
      percent: 60,
    },
    {
      name: 'Git',
      percent: 90,
    },
    {
      name: 'Python',
      percent: 70,
    },
  ],
  'data-analyst': [
    {
      name: 'MySQL',
      percent: 70,
    },
    {
      name: 'MongoDB',
      percent: 50,
    },
    {
      name: 'Python',
      percent: 70,
    },
    {
      name: 'Japanese',
      percent: 90,
    },
    {
      name: 'Translation',
      percent: 80,
    },
    {
      name: 'HTML5',
      percent: 90,
    },
    {
      name: 'CSS3',
      percent: 90,
    },
    {
      name: 'Javascript',
      percent: 80,
    },
    {
      name: 'React',
      percent: 75,
    },
    {
      name: 'TypeScript',
      percent: 60,
    },
    {
      name: 'Node.js',
      percent: 70,
    },
    {
      name: 'Gulp',
      percent: 60,
    },
    {
      name: 'Git',
      percent: 90,
    },
    {
      name: 'Ruby',
      percent: 40,
    },
    {
      name: 'Rails 5',
      percent: 40,
    },
  ],
}

export default skills
