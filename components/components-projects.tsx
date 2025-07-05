'use client'

const projects = [
  {
    title: 'StudyWire',
    description: 'A fully functional ed-tech platform that enables users to create, consume, and rate educational content.',
    technologies: ['ReactJS', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS', 'JWT', 'Razorpay'],
    link: 'https://study-wire.vercel.app/',
  },
  {
    title: 'FoodWire',
    description: 'A dynamic and responsive frontend for a food delivery web application.',
    technologies: ['ReactJS', 'Redux', 'React-Router-Dom', 'TailwindCSS'],
    link: 'https://food-wire.vercel.app/',
  },
  {
    title: 'Netflix GPT',
    description: 'An AI-powered movie recommendation and streaming app, similar to Netflix, with GPT-driven suggestions.',
    technologies: ['ReactJS', 'Firebase', 'GPT API'],
    link: 'https://saheb-netflix.vercel.app/',
  },
];


export default function ComponentsProjects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
