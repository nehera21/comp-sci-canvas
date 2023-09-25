export const header = {
  title: 'Alex Neher',
  subtitle: 'Software Engineering and Data Science',
  intro: 'Computer Science Student at the Milwaukee School of Engineering',
};

export const about = {
  text: 'Hello! My name is Alex Neher, a passionate and hard-working computer science student on a journey to explore the rapidly evolving world of technology and programming.\nAs a computer science student, I have developed a strong foundation in languages such as Python, Java, and C/C++, as well a web technologies like JavaScript, Node.js, and ReactJS. My coursework has equipped me with knowledge in algorithms, data structures, and software engineering practices. I am also enthusiastic about exploring emerging technologies like artificial intelligence, machine learning, and data science.\nI am currently looking for an internship in software engineering or data science.',
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
    title: 'Styled Cooking Website',
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
    link: 'https://github.com/nehera21/comp-sci-canvas',
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
      'A program that takes in a list of words and randomly generates a word search puzzle with the words hidden in the puzzle.',
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
