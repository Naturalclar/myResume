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
      name: 'Node.js',
      percent: 70,
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
      name: 'Express.js',
      percent: 70,
    },
    {
      name: 'Webpack',
      percent: 80,
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
}

export default skills
