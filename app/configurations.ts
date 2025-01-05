export const background = './images/wave.png';

export const header = {
  title: 'Alexander Neher',
  subtitle: ['Software Engineering', 'Data Science', 'Machine Learning'],
};

export const about = {
  text: 'I am a senior at the Milwaukee School of Engineering, pursuing a B.S. in Computer Science with a minor in Mathematics, and a M.S. in Machine Learning. With experience across a range of programming languages and technologies, I am continually seeking opportunities to expand my knowledge. I am currently looking for a full-time position in software engineering or data science, driven by a passion for applying machine learning to solve real-world challenges, particularly in the medical field. I also have a strong interest in web development, with expertise in both front-end and back-end technologies.',
};

export const images = [
  './images/hpt-img.png',
  './images/hpt-img.png',
  './images/hpt-img.png',
];

export const contacts = [
  {
    link: 'https://www.linkedin.com/in/alex-j-neher/',
    id: 'linkedin',
    color: '#0077B5',
  },
  {
    link: 'https://github.com/nehera21',
    id: 'github',
    color: '#6B7280',
  },
  {
    link: 'mailto: ajneher21@gmail.com',
    id: 'email',
    color: '#F6B75D',
  },
];

export const projects = [
  {
    title: 'Homologus Point Transformer',
    description:
      'A program the takes in dataset of two modalities of medical images (made for histology and MRI images) and uses a convolutional neural network to register the one modality to the other.',
    link: '',
    image: './images/hpt-img.png',
    tags: [
      {
        name: 'Python',
        link: 'https://www.python.org/',
        isLink: true,
        id: 'python',
      },
      {
        name: 'TensorFlow',
        link: 'https://www.tensorflow.org/',
        isLink: true,
        id: 'tensorflow',
      },
      { name: 'Research', link: '', isLink: false, id: 'research' },
      {
        name: 'CNN Architecture',
        link: '',
        isLink: false,
        id: 'cnn-architecture',
      },
    ],
    id: 'homologus-point-transformer',
  },
  {
    title: 'Hierflow',
    description:
      'A program that uses a large language model to create a hierarchy of a particular topic, as well as classify an item within an existing hierarchy. The pipeline utilizes embeddings, RAG, and prompt engineering.',
    link: '',
    image: './images/hierflow-img.png',
    tags: [
      {
        name: 'Python',
        link: 'https://www.python.org/',
        isLink: true,
        id: 'python',
      },
      {
        name: 'ReactJS',
        link: 'https://react.dev/',
        isLink: true,
        id: 'reactjs',
      },
      {
        name: 'Large Language Models',
        link: '',
        isLink: false,
        id: 'large-language-models',
      },
    ],
    id: 'hierflow',
  },
  {
    title: 'Japanese Character Recognition',
    description:
      'A program that takes in an image of a Japanese character and uses a neural network to predict what character it is. The model was deployed on an Android app where a user could draw the character and see the model prediction.',
    link: '',
    image: './images/japanese-char-img.png',
    tags: [
      {
        name: 'Python',
        link: 'https://www.python.org/',
        isLink: true,
        id: 'python',
      },
      {
        name: 'TensorFlow',
        link: 'https://www.tensorflow.org/',
        isLink: true,
        id: 'tensorflow',
      },
      { name: 'Numpy', link: 'https://numpy.org/', isLink: true, id: 'numpy' },
    ],
    id: 'japanese-character-recognition',
  },
  {
    title: 'Memory Montor Web App',
    description:
      'An internal app at Cognex that allows a worker to monitor the heap memory usage of a camera overtime using a web interface and network requests using socket calls.',
    link: '',
    image: './images/cognex-camera.png',
    tags: [
      {
        name: 'AngularJS',
        link: 'https://angular.io/',
        isLink: true,
        id: 'angularjs',
      },
      {
        name: 'TypeScript',
        link: 'https://www.typescriptlang.org/',
        isLink: true,
        id: 'typescript',
      },
      {
        name: 'Web Development',
        link: '',
        isLink: false,
        id: 'web-development',
      },
    ],
    id: 'memory-monitor-web-app',
  },
];

export const experience = [
  {
    title: 'Software Engineering Intern - Cognex Corporation',
    description:
      'At Cognex, I worked on a team that developed software for the In-Sight camera line. I worked on various parts of our tech stack, including the camera firmware and the .NET apps which users interact with to perform operations.',
    link: 'https://www.cognex.com/',
    image: './images/cognex-logo.png',
    tags: [
      { name: 'C#', link: '', isLink: false, id: 'csharp' },
      { name: '.NET', link: '', isLink: false, id: 'net' },
      { name: 'C', link: '', isLink: false, id: 'c' },
      { name: 'C++', link: '', isLink: false, id: 'cpp' },
      {
        name: 'AngularJS',
        link: 'https://angular.io/',
        isLink: true,
        id: 'angularjs',
      },
      {
        name: 'TypeScript',
        link: 'https://www.typescriptlang.org/',
        isLink: true,
        id: 'typescript',
      },
    ],
    id: 'cognex-software-engineering-intern',
  },
];

export const research = [
  {
    title: 'Mind Over (Gray) Matter',
    description:
      'A program the takes in dataset of two modalities of medical images (made for histology and MRI images) and uses a convolutional neural network to register the one modality to the other.',
    link: '',
    image: './images/hpt-img.png',
    tags: [
      {
        name: 'Python',
        link: 'https://www.python.org/',
        isLink: true,
        id: 'python',
      },
      {
        name: 'TensorFlow',
        link: 'https://www.tensorflow.org/',
        isLink: true,
        id: 'tensorflow',
      },
      { name: 'Research', link: '', isLink: false, id: 'research' },
      {
        name: 'CNN Architecture',
        link: '',
        isLink: false,
        id: 'cnn-architecture',
      },
    ],
    id: 'mind-over-gray-matter',
  },
];

export const menuItems = [
  {
    name: 'About',
    id: 'about',
  },
  {
    name: 'Projects',
    id: 'projects',
  },
  {
    name: 'Experience',
    id: 'experience',
  },
  {
    name: 'Research',
    id: 'research',
  },
  {
    name: 'Skills',
    id: 'skills',
  },
];

export const skills = [
  {
    image: './images/javascript-logo.png',
    name: 'JavaScript',
    color: '#F7DF1E',
    id: 'javascript',
  },
  {
    image: './images/typescript-logo.png',
    name: 'TypeScript',
    color: '#007ACC',
    id: 'typescript',
  },
  {
    image: './images/react-logo.png',
    name: 'ReactJS',
    color: '#61DAFB',
    id: 'reactjs',
  },
  {
    image: './images/angular-logo.png',
    name: 'AngularJS',
    color: '#DD0031',
    id: 'angularjs',
  },
  {
    image: './images/node-logo.png',
    name: 'NodeJS',
    color: '#339933',
    id: 'nodejs',
  },
  {
    image: './images/java-logo.png',
    name: 'Java',
    color: '#E04C26',
    id: 'java',
  },
  {
    image: './images/c-logo.png',
    name: 'C',
    color: '#55479C',
    id: 'c',
  },
  {
    image: './images/cpp-logo.png',
    name: 'C++',
    color: '#00599C',
    id: 'cpp',
  },
  {
    image: './images/c-sharp-logo.png',
    name: 'C#',
    color: '#ffffff',
    id: 'csharp',
  },
  {
    image: './images/net-logo.png',
    name: '.NET',
    color: '#0386C9',
    id: 'net',
  },
  {
    image: './images/python-logo.png',
    name: 'Python',
    color: '#3776AB',
    id: 'python',
  },
  {
    image: './images/r-logo.png',
    name: 'R',
    color: '#276DC3',
    id: 'r',
  },
  {
    image: './images/pandas-logo.png',
    name: 'Pandas',
    color: '#150458',
    id: 'pandas',
  },
  {
    image: './images/numpy-logo.png',
    name: 'NumPy',
    color: '#4D77CF',
    id: 'numpy',
  },
  {
    image: './images/pytorch-logo.png',
    name: 'PyTorch',
    color: '#FF4F00',
    id: 'pytorch',
  },
  {
    image: './images/tensorflow-logo.png',
    name: 'TensorFlow',
    color: '#FF6F00',
    id: 'tensorflow',
  },
  {
    image: './images/sql-logo.png',
    name: 'SQL',
    color: '#00BCF2',
    id: 'sql',
  },
  {
    image: './images/mysql-logo.png',
    name: 'MySQL',
    color: '#00758F',
    id: 'mysql',
  },
  {
    image: './images/mongodb-logo.png',
    name: 'MongoDB',
    color: '#4DB33D',
    id: 'mongodb',
  },
  {
    image: './images/git-logo.png',
    name: 'Git',
    color: '#F05032',
    id: 'git',
  },
];
