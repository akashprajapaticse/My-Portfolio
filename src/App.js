import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, BookOpen, Award, Code, Mail, Linkedin, Github, FileText, Download, ExternalLink, Sun, Moon, Link as LinkIcon } from 'lucide-react';

// Helper function to simulate navigation
const navigate = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showProjectDetail, setShowProjectDetail] = useState(null); // State for showing project detail
  const [projectFilter, setProjectFilter] = useState('All');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const projects = [
    {
      id: 'traffic-management',
      category: 'Research',
      title: 'AI-Powered Traffic Management System',
      tagline: 'Minimizing congestion with YOLOv8 & ML',
      problem: 'Urban traffic congestion is a growing problem, leading to increased travel times, fuel consumption, and pollution. Existing traffic signal systems are often static and inefficient.',
      stack: ['Machine Learning', 'IoT', 'Cloud', 'Blockchain', 'YOLOv8'],
      achievements: [
        'Developing a real-time adaptive traffic signal system using YOLOv8 and machine learning to minimize congestion and improve traffic flow.',
        'Integrating IoT sensors and blockchain to enable secure vehicle tracking and emergency vehicle authentication across intersections.'
      ],
      github: 'https://github.com/akashprajapaticse/Smart-Traffic-Management-System',
      demo: 'https://akashprajapaticse.github.io/Smart-Traffic-Management-System/',
      screenshots: [
        'https://raw.githubusercontent.com/akashprajapaticse/My-Portfolio/main/src/assets/traffic1.png',
        'https://raw.githubusercontent.com/akashprajapaticse/My-Portfolio/main/src/assets/traffic2.png'
      ]
    },
    {
      id: 'proactive-wellness',
      category: 'Web Apps',
      title: 'Proactive Wellness App',
      tagline: 'AI-powered fatigue monitoring & recommendations',
      problem: 'Long hours of computer usage can lead to fatigue, impacting productivity and health. Users often neglect breaks and hydration.',
      stack: ['Python', 'Flask', 'OpenCV', 'React', 'Tailwind', 'scikit-learn'],
      achievements: [
        'Developed an AI-powered desktop application to monitor user fatigue using computer vision (gaze, emotion, posture) and activity metrics (mouse/keyboard speed).',
        'Integrated a scikit-learn fatigue prediction model and intelligent recommendation system with hydration, nap, and exercise timers.',
        'Built a responsive React frontend and a multithreaded Flask backend exposing real-time wellness data via REST API.'
      ],
      github: 'https://github.com/akashprajapaticse/Proactive-Wellness-App',
      demo: 'https://placehold.co/600x400/007bff/ffffff?text=Demo+Video',
      screenshots: [
        'https://placehold.co/600x400/e0e0e0/333333?text=Wellness+App+Screenshot+1',
        'https://placehold.co/600x400/d0d0d0/333333?text=Wellness+App+Screenshot+2'
      ]
    },
    {
      id: 'facial-recognition',
      category: 'ML Models',
      title: 'Facial Recognition Attendance System',
      tagline: '99.2% accurate attendance tracking',
      problem: 'Manual attendance systems are time-consuming and prone to errors. There\'s a need for an automated, accurate, and real-time solution.',
      stack: ['Python', 'OpenCV', 'TensorFlow', 'Mediapipe', 'Vision Transformer (VIT)', 'SQL'],
      achievements: [
        'Built a facial recognition-based attendance tracker using OpenCV and SQL, achieving 99.2% accuracy and reducing manual workload by 80%.',
        'Enabled real-time, cloud-synced attendance reports by connecting the system to a secure cloud-based SQL database.'
      ],
      github: 'https://github.com/akashprajapaticse/Facial-Recognition-Attendance',
      demo: 'https://placehold.co/600x400/007bff/ffffff?text=Demo+Video',
      screenshots: [
        'https://placehold.co/600x400/e0e0e0/333333?text=Attendance+System+Screenshot+1',
        'https://placehold.co/600x400/d0d0d0/333333?text=Attendance+System+Screenshot+2'
      ]
    }
  ];

  const filteredProjects = projectFilter === 'All' ? projects : projects.filter(p => p.category === projectFilter);

  const renderContent = () => {
    if (showProjectDetail) {
      const project = projects.find(p => p.id === showProjectDetail);
      if (!project) return null;

      return (
        <div className="container mx-auto px-4 py-8 dark:text-white">
          <button
            onClick={() => setShowProjectDetail(null)}
            className="mb-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 dark:bg-blue-700 dark:hover:bg-blue-800"
          >
            &larr; Back to Projects
          </button>
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{project.tagline}</p>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Problem Statement</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200">{project.problem}</p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-gray-200 text-gray-800 rounded-full text-sm dark:bg-gray-700 dark:text-gray-100">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Key Achievements & Metrics</h2>
            <ul className="list-disc list-inside text-lg text-gray-700 dark:text-gray-200 space-y-2">
              {project.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Screenshots / Demo</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.screenshots.map((src, index) => (
                <img key={index} src={src} alt={`${project.title} Screenshot ${index + 1}`} className="rounded-lg shadow-lg w-full h-auto object-cover" />
              ))}
              {project.demo && (
                <div className="w-full h-64 bg-gray-300 flex items-center justify-center rounded-lg shadow-lg dark:bg-gray-700">
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline dark:text-blue-400">
                    <ExternalLink size={48} /> <span className="block mt-2">View Demo Video</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-3">Links</h2>
            <div className="flex flex-wrap gap-4">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300 dark:bg-gray-900 dark:hover:bg-gray-800">
                  <Github size={20} /> GitHub Repo
                </a>
              )}
              {/* Add more links like paper DOI, live site if available */}
            </div>
          </div>
        </div>
      );
    }

    return (
      <main className="flex-grow">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-500">
          <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-down">Akash Prajapati</h1>
            <p className="text-xl md:text-3xl mb-8 animate-fade-in-up">AI/ML Researcher & Full-Stack Developer</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in">
              <a
                href="/Akash_Prajapati_Resume.pdf" // Placeholder, replace with actual path
                download="Akash_Prajapati_Resume.pdf"
                className="flex items-center justify-center px-8 py-3 bg-white text-blue-600 rounded-full shadow-lg hover:bg-gray-100 transition duration-300 text-lg font-semibold"
              >
                <Download className="mr-2" size={20} /> Download CV
              </a>
              <button
                onClick={() => navigate('projects')}
                className="flex items-center justify-center px-8 py-3 bg-transparent border-2 border-white text-white rounded-full shadow-lg hover:bg-white hover:text-blue-600 transition duration-300 text-lg font-semibold"
              >
                <Briefcase className="mr-2" size={20} /> View Projects
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up">
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <h3 className="text-4xl font-bold">4+</h3>
                <p className="text-lg">Years of Experience</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <h3 className="text-4xl font-bold">2</h3>
                <p className="text-lg">Papers Published</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <h3 className="text-4xl font-bold">500+</h3>
                <p className="text-lg">GitHub Stars</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl shadow-lg">
                <h3 className="text-4xl font-bold">8.1/10</h3>
                <p className="text-lg">SGPA</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/3 flex justify-center">
                <img
                  src="https://raw.githubusercontent.com/akashprajapaticse/My-Portfolio/main/src/assets/my_Photo.jpg"
                  alt="Akash Prajapati"
                  className="rounded-full w-64 h-64 object-cover shadow-lg border-4 border-blue-400 dark:border-purple-400"
                />
              </div>
              <div className="md:w-2/3 text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                <p className="mb-4">
                  Hello! I'm Akash Prajapati, an AI enthusiast with a strong background in scalable ML systems, Explainable AI (XAI), distributed computing, and cloud-integrated solutions. I am passionate about leveraging cutting-edge technologies to solve real-world problems and create impactful applications.
                </p>
                <p className="mb-4">
                  My mission is to contribute to the advancement of AI and machine learning, focusing on building intelligent systems that are not only efficient and accurate but also transparent and interpretable. I thrive in environments that challenge me to learn and innovate.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                  <div><span className="font-semibold text-gray-900 dark:text-white">Location:</span> Kanpur, Uttar Pradesh, India</div>
                  <div><span className="font-semibold text-gray-900 dark:text-white">Email:</span> akash.prajapati.cse@gmail.com</div>
                  <div><span className="font-semibold text-gray-900 dark:text-white">Current Role:</span> Research Scholar at PSIT</div>
                  <div><span className="font-semibold text-gray-900 dark:text-white">Interests:</span> AI, ML, Computer Vision, Full-Stack Development, Blockchain</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Education</h2>
            <div className="relative border-l-4 border-blue-500 dark:border-purple-500 pl-8 ml-4">
              <div className="mb-12 relative">
                <div className="absolute w-4 h-4 bg-blue-500 dark:bg-purple-500 rounded-full -left-10 top-1.5 border-4 border-white dark:border-gray-900"></div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Bachelor of Technology in Computer Science and Engineering</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">Pranveer Singh Institute of Technology</p>
                <p className="text-md text-gray-500 dark:text-gray-400">Aug 2022 - April 2026 | SGPA: 8.1/10</p>
                <p className="text-md text-gray-500 dark:text-gray-400 mt-2">Relevant Coursework: Data Structures, Operating System, Artificial Intelligence, Machine Learning, Computer Networks, DBMS, Compiler Design, Computer Architecture</p>
              </div>
              {/* Add more education entries as needed */}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Skills</h2>
            <div className="mb-12">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Technical Stack</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
                  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
                  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
                  { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg' },
                  { name: 'OpenCV', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
                  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
                  { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg' },
                  { name: 'YOLOv8', icon: 'https://placehold.co/48x48/000000/ffffff?text=Y8' }, // Placeholder for YOLOv8
                  { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg' },
                  { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg' },
                  { name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
                  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                  { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
                  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                ].map((skill, index) => (
                  <div key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 dark:bg-gray-700">
                    {skill.icon.startsWith('http') ? (
                      <img src={skill.icon} alt={skill.name} className="w-12 h-12 mb-2" />
                    ) : (
                      <Code className="w-12 h-12 mb-2 text-blue-500 dark:text-purple-400" />
                    )}
                    <span className="text-gray-800 dark:text-white text-center font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Soft Skills & Leadership</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {['Problem Solving', 'Teamwork', 'Communication', 'Leadership', 'Adaptability', 'Critical Thinking'].map((skill, index) => (
                  <span key={index} className="px-6 py-3 bg-blue-100 text-blue-800 rounded-full shadow-md text-lg font-medium dark:bg-purple-200 dark:text-purple-900">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Projects & Case Studies</h2>

            <div className="flex justify-center mb-8 gap-4">
              {['All', 'Research', 'Web Apps', 'ML Models'].map(category => (
                <button
                  key={category}
                  onClick={() => setProjectFilter(category)}
                  className={`px-6 py-2 rounded-full text-lg font-semibold transition duration-300
                    ${projectFilter === category
                      ? 'bg-blue-600 text-white shadow-md dark:bg-purple-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-gray-50 rounded-xl shadow-lg overflow-hidden flex flex-col dark:bg-gray-800 hover:shadow-xl transform hover:-translate-y-1 transition duration-300">
                  <img src={project.screenshots[0]} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{project.tagline}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.stack.slice(0, 3).map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full dark:bg-purple-200 dark:text-purple-900">
                          {tech}
                        </span>
                      ))}
                      {project.stack.length > 3 && (
                        <span className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded-full dark:bg-gray-600 dark:text-gray-200">
                          +{project.stack.length - 3} more
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => setShowProjectDetail(project.id)}
                      className="mt-auto px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 dark:bg-purple-600 dark:hover:bg-purple-700"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research & Publications Section */}
        <section id="research" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Research & Publications</h2>
            <div className="space-y-8">
              {/* Publication 1 */}
              <div className="bg-white rounded-xl shadow-lg p-6 dark:bg-gray-700">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                  Leveraging Explainable AI to Enhance Security in IDS for IoV (Co-Authored)
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <span className="font-medium">Status:</span> Communicated | <span className="font-medium">Year:</span> 2024-Present
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
                  <li>Improved k-NN accuracy from 98.58% to 99.66% and F1-score from 98.05% to 99.66% using SHAP-based XAI in IoV intrusion detection.</li>
                  <li>Reduced prediction time by 22.6% and enabled interpretable alerts with SHAP and LIME for transparent, real-time threat analysis.</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <a href="javascript:void(0)" className="flex items-center gap-2 text-blue-600 hover:underline dark:text-purple-400">
                    <FileText size={18} /> PDF
                  </a>
                  <a href="javascript:void(0)" className="flex items-center gap-2 text-blue-600 hover:underline dark:text-purple-400">
                    <LinkIcon size={18} /> arXiv
                  </a>
                  <button
                    onClick={() => document.execCommand('copy', false, 'BibTeX for Publication 1')}
                    className="flex items-center gap-2 text-blue-600 hover:underline dark:text-purple-400"
                  >
                    <Code size={18} /> Copy BibTeX
                  </button>
                </div>
              </div>

              {/* Publication 2 */}
              <div className="bg-white rounded-xl shadow-lg p-6 dark:bg-gray-700">
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                  Transforming Autonomous Vehicle Communication in Multi-Cloud: Integrating Secure Data Processing with Explainable AI Leveraging Federated Learning & Optimizer (Co-Authored)
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">
                  <span className="font-medium">Status:</span> Communicated
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 mb-4">
                  <li>Achieved 99.27% accuracy and 99.99% recall in AV cyber threat detection using SHAP-based federated learning, outperforming centralized models.</li>
                  <li>Reduced false negatives to 4 and improved F1-score to 89.91% with an XAI-enhanced federated neural network, ensuring privacy and real-time decision-making.</li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <a href="javascript:void(0)" className="flex items-center gap-2 text-blue-600 hover:underline dark:text-purple-400">
                    <FileText size={18} /> PDF
                  </a>
                  <a href="javascript:void(0)" className="flex items-center gap-2 text-blue-600 hover:underline dark:text-purple-400">
                    <LinkIcon size={18} /> arXiv
                  </a>
                  <button
                    onClick={() => document.execCommand('copy', false, 'BibTeX for Publication 2')}
                    className="flex items-center gap-2 text-blue-600 hover:underline dark:text-purple-400"
                  >
                    <Code size={18} /> Copy BibTeX
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements & Awards Section */}
        <section id="achievements" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Achievements & Awards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl shadow-lg p-6 text-center dark:bg-gray-800">
                <Award className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Academic Excellence Scholarship</h3>
                <p className="text-gray-600 dark:text-gray-300">Awarded for outstanding academic performance.</p>
              </div>
              <div className="bg-gray-50 rounded-xl shadow-lg p-6 text-center dark:bg-gray-800">
                <Award className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Hackathon Winner</h3>
                <p className="text-gray-600 dark:text-gray-300">1st Place in Inter-College AI Hackathon 2024.</p>
              </div>
              <div className="bg-gray-50 rounded-xl shadow-lg p-6 text-center dark:bg-gray-800">
                <Award className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Research Grant Recipient</h3>
                <p className="text-gray-600 dark:text-gray-300">Secured funding for AI in IoV research.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Experience & Internships</h2>
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-6 dark:bg-gray-700 flex flex-col md:flex-row items-start md:items-center gap-6">
                <img
                  src="https://placehold.co/80x80/e0e0e0/333333?text=PSIT"
                  alt="Pranveer Singh Institute of Technology Logo"
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                />
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">Research Scholar</h3>
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-2">Pranveer Singh Institute of Technology</p>
                  <p className="text-md text-gray-500 dark:text-gray-400 mb-4">Aug 2022 - April 2026 | Kanpur, Uttar Pradesh</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
                    <li>Improved k-NN accuracy from 98.58% to 99.66% and F1-score from 98.05% to 99.66% using SHAP-based XAI in IoV intrusion detection.</li>
                    <li>Reduced prediction time by 22.6% and enabled interpretable alerts with SHAP and LIME for transparent, real-time threat analysis.</li>
                    <li>Achieved 99.27% accuracy and 99.99% recall in AV cyber threat detection using SHAP-based federated learning, outperforming centralized models.</li>
                    <li>Reduced false negatives to 4 and improved F1-score to 89.91% with an XAI-enhanced federated neural network, ensuring privacy and real-time decision-making.</li>
                  </ul>
                  <a href="javascript:void(0)" className="mt-4 inline-flex items-center gap-2 text-blue-600 hover:underline dark:text-purple-400">
                    <Download size={18} /> Download Verification Letter
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Courses Section */}
        <section id="certifications" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Certifications & Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl shadow-lg p-6 text-center dark:bg-gray-800">
                <img
                  src="https://placehold.co/80x80/e0e0e0/333333?text=Infosys"
                  alt="Infosys Logo"
                  className="w-20 h-20 mx-auto mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">Web Development Certifications</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Issuer: Infosys Springboard</p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">HTML, CSS, JavaScript, Python and Bootstrap</p>
                <a href="javascript:void(0)" className="flex items-center justify-center gap-2 text-blue-600 hover:underline dark:text-purple-400">
                  <LinkIcon size={18} /> View Credentials
                </a>
              </div>
              <div className="bg-gray-50 rounded-xl shadow-lg p-6 text-center dark:bg-gray-800">
                <img
                  src="https://placehold.co/80x80/e0e0e0/333333?text=IBM"
                  alt="IBM Logo"
                  className="w-20 h-20 mx-auto mb-4 object-contain"
                />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">AI Engineering Specialization</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Issuer: IBM</p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">AI Fundamentals, Agile Explorer, Machine Learning, Deep Learning, Generative AI</p>
                <a href="javascript:void(0)" className="flex items-center justify-center gap-2 text-blue-600 hover:underline dark:text-purple-400">
                  <LinkIcon size={18} /> View Credentials
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Document Vault Section */}
        <section id="vault" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Document Vault</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { name: 'Latest Resume', link: '/Akash_Prajapati_Resume.pdf' },
                { name: 'Letter of Recommendation 1', link: 'javascript:void(0)' },
                { name: 'Mark Sheets', link: 'javascript:void(0)' },
                { name: 'Research Patent (Draft)', link: 'javascript:void(0)' },
              ].map((doc, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between dark:bg-gray-700">
                  <span className="text-lg font-medium text-gray-800 dark:text-white">{doc.name}</span>
                  <a href={doc.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-purple-400 dark:hover:text-purple-600">
                    <ExternalLink size={24} />
                  </a>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 dark:bg-purple-600 dark:hover:bg-purple-700">
                Bulk Download All
              </button>
            </div>
          </div>
        </section>

        {/* Blog / Writing Section */}
        <section id="blog" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Blog / Writing</h2>
            <div className="text-center text-gray-700 dark:text-gray-200">
              <p className="mb-4 text-lg">
                Stay tuned for insightful articles on AI, Machine Learning, Data Structures, and Career Tips!
              </p>
              <p className="text-md">
                This section will feature my thoughts, tutorials, and deep dives into technical topics.
              </p>
              <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 dark:bg-purple-600 dark:hover:bg-purple-700">
                Explore Blog Posts
              </button>
            </div>
          </div>
        </section>

        {/* Speaking / Workshops Section */}
        <section id="speaking" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Speaking / Workshops</h2>
            <div className="text-center text-gray-700 dark:text-gray-200">
              <p className="mb-4 text-lg">
                Details about my past and upcoming speaking engagements and workshops will appear here.
              </p>
              <p className="text-md">
                Topics include Explainable AI, Federated Learning, and Full-Stack Development.
              </p>
              <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 dark:bg-purple-600 dark:hover:bg-purple-700">
                View Event Gallery
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-500">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Testimonials</h2>
            <div className="relative max-w-2xl mx-auto">
              <div className="bg-gray-50 rounded-xl shadow-lg p-8 text-center dark:bg-gray-800">
                <p className="text-xl italic text-gray-700 dark:text-gray-200 mb-6">
                  "Akash is an exceptionally talented and dedicated researcher. His work on Explainable AI for IoV systems was groundbreaking and showed a deep understanding of complex ML concepts. He's a true asset to any team."
                </p>
                <p className="font-semibold text-gray-800 dark:text-white">- Dr. [Professor Name], Research Advisor</p>
              </div>
              {/* Add more testimonials and implement a carousel if desired */}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-500">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Contact Me</h2>
            <div className="max-w-xl mx-auto bg-white rounded-xl shadow-lg p-8 dark:bg-gray-700">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-lg font-medium text-gray-700 dark:text-gray-200">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-lg font-medium text-gray-700 dark:text-gray-200">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-lg font-medium text-gray-700 dark:text-gray-200">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300 dark:bg-purple-600 dark:hover:bg-purple-700"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Connect with me:</h3>
                <div className="flex justify-center gap-6">
                  <a href="https://www.linkedin.com/in/akash-prajapati" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-purple-400">
                    <Linkedin size={36} />
                  </a>
                  <a href="https://github.com/akashprajapaticse" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-purple-400">
                    <Github size={36} />
                  </a>
                  <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-purple-400">
                    <BookOpen size={36} /> {/* Placeholder for Google Scholar */}
                  </a>
                  <a href="javascript:void(0)" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-purple-400">
                    <Code size={36} /> {/* Placeholder for Kaggle */}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  };

  return (
    <div className={`font-inter min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
      {/* Global Header / Sticky Nav Bar */}
      <header className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-900 dark:shadow-lg transition-colors duration-500">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-purple-400">Akash Prajapati</div>
          <nav className="hidden md:flex space-x-6">
            <button onClick={() => navigate('home')} className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-purple-400 transition duration-300 flex items-center gap-1">
              <Home size={18} /> Home
            </button>
            <button onClick={() => navigate('about')} className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-purple-400 transition duration-300 flex items-center gap-1">
              <User size={18} /> About
            </button>
            <button onClick={() => navigate('projects')} className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-purple-400 transition duration-300 flex items-center gap-1">
              <Briefcase size={18} /> Projects
            </button>
            <button onClick={() => navigate('research')} className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-purple-400 transition duration-300 flex items-center gap-1">
              <BookOpen size={18} /> Research
            </button>
            <button onClick={() => navigate('experience')} className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-purple-400 transition duration-300 flex items-center gap-1">
              <Briefcase size={18} /> Experience
            </button>
            <button onClick={() => navigate('contact')} className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-purple-400 transition duration-300 flex items-center gap-1">
              <Mail size={18} /> Contact
            </button>
          </nav>
          <div className="flex items-center gap-4">
            <button onClick={toggleDarkMode} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            {/* Mobile menu button (Hamburger icon) */}
            <button className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800">
              {/* Add your hamburger icon here, e.g., using Lucide icon */}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-menu"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            </button>
          </div>
        </div>
      </header>

      {renderContent()}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 dark:bg-gray-950 transition-colors duration-500">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">© {new Date().getFullYear()} Akash Prajapati. All rights reserved.</p>
          <p className="text-sm text-gray-400 mb-4">Last Updated: July 2025</p>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#home" className="text-gray-300 hover:text-blue-400">Home</a>
            <a href="#about" className="text-gray-300 hover:text-blue-400">About</a>
            <a href="#projects" className="text-gray-300 hover:text-blue-400">Projects</a>
            <a href="#contact" className="text-gray-300 hover:text-blue-400">Contact</a>
          </div>
          <p className="text-sm text-gray-500">Built with ❤️ using React + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default App;



