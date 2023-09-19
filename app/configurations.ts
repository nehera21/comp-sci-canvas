export const header = {
  title: 'Alex Neher',
  subtitle: 'Software Engineering and Data Science',
  intro:
    'I am a Computer Science student at the Milwaukee School of Engineering',
};

export const about = {
  text: 'I am a student at MSOE University pursuing a Computer Science Major and a Mathematics Minor looking for a summer internship in software engineering starting June 2023. I have been learning programming for five years and I have loved it. Over the course of these five years, I have picked up many programming languages, general computer knowledge, and most importantly - problem solving skills.\nAlthough I have been very successful in the classroom, there is only so much you can learn in school. For this reason, I am eager to learn things that I can only learn through experience in a workplace.\nI am a team player who would support my peers and team as a whole through hard work and a constant willingness to learn and grow as both a programmer and an intern.',
};

export const contacts = [
  'https://www.linkedin.com/in/alex-j-neher/',
  'https://github.com/nehera21',
  'mailto: ajneher21@gmail.com',
];

export const projects = [
  {
    title: 'Image Editor GUI',
    description:
      'An app using an MVC approach that can take in an image and use many filters on it such as black and white, photo negative, color filters and more. You may also save edited images.',
    link: '',
    image: '',
    tags: [
      { name: 'Java', link: 'https://www.java.com/en/', isLink: true },
      { name: 'JavaFX', link: 'https://openjfx.io/', isLink: true },
      { name: 'MVC', link: '', isLink: false },
    ],
  },
  {
    title: 'Cooking Website',
    description:
      'A static page cooking website using HTML and CSS with recipes, an about page, and an information page',
    link: '',
    image: '',
    tags: [
      { name: 'HTML', link: '', isLink: false },
      { name: 'CSS', link: '', isLink: false },
    ],
  },
  {
    title: 'Portfolio Website',
    description: 'The site you are on right now.',
    link: '',
    image: '',
    tags: [
      { name: 'HTML', link: '', isLink: false },
      { name: 'CSS', link: '', isLink: false },
      { name: 'ReactJS', link: 'https://react.dev/', isLink: true },
      {
        name: 'TypeScript',
        link: 'https://www.typescriptlang.org/',
        isLink: true,
      },
      { name: 'ChakraUI', link: 'https://chakra-ui.com/', isLink: true },
    ],
  },
  {
    title: 'Word Search Puzzle Generator',
    description:
      'A program that takes in a list of words and generates a word search puzzle with the words hidden in the puzzle.',
    link: '',
    image: '',
    tags: [{ name: 'C++', link: 'https://cplusplus.com/', isLink: true }],
  },
  {
    title: 'Japanese Character Recognition',
    description:
      'A program that takes in an image of a Japanese character and uses a neural network to predict what character it is.',
    link: '',
    image: '',
    tags: [
      { name: 'Python', link: 'https://www.python.org/', isLink: true },
      { name: 'TensorFlow', link: 'https://www.tensorflow.org/', isLink: true },
      { name: 'Numpy', link: 'https://numpy.org/', isLink: true },
    ],
  },
];

export const menuItems = [
  {
    name: 'About',
    jumpID: 'about',
  },
  {
    name: 'Projects',
    jumpID: 'projects',
  },
  {
    name: 'Skills',
    jumpID: 'skills',
  },
];

export const skills = [
  {
    image: './images/html-logo.png',
    name: 'HTML',
    color: '#E34C26',
  },
  {
    image: './images/css-logo.png',
    name: 'CSS',
    color: '#264DE4',
  },
  {
    image: './images/javascript-logo.png',
    name: 'JavaScript',
    color: '#F7DF1E',
  },
  {
    image: './images/typescript-logo.png',
    name: 'TypeScript',
    color: '#007ACC',
  },
  {
    image: './images/react-logo.png',
    name: 'ReactJS',
    color: '#61DAFB',
  },
  {
    image: './images/node-logo.png',
    name: 'NodeJS',
    color: '#339933',
  },
  {
    image: './images/java-logo.png',
    name: 'Java',
    color: '#E04C26',
  },
  {
    image: './images/c-logo.png',
    name: 'C',
    color: '#55479C',
  },
  {
    image: './images/cpp-logo.png',
    name: 'C++',
    color: '#00599C',
  },
  {
    image: './images/python-logo.png',
    name: 'Python',
    color: '#3776AB',
  },
  {
    image: './images/numpy-logo.png',
    name: 'NumPy',
    color: '#4D77CF',
  },
  {
    image: './images/git-logo.png',
    name: 'Git',
    color: '#F05032',
  },
];
