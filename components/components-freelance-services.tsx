'use client'

const services = [
  {
    title: 'Full Stack Web Development',
    description: 'End-to-end web application development using the MERN stack.',
    icon: '🌐',
  },
  {
    title: 'API Development and Integration',
    description: 'Design and implement RESTful APIs or integrate third-party services.',
    icon: '🔌',
  },
  {
    title: 'Database Design and Optimization',
    description: 'Create efficient database schemas and optimize queries for performance.',
    icon: '💾',
  },
  {
    title: 'Frontend Development',
    description: 'Build responsive and interactive user interfaces using React.js.',
    icon: '🖥️',
  },
  {
    title: 'Backend Development',
    description: 'Develop robust server-side applications using Node.js and Express.js.',
    icon: '⚙️',
  },
  {
    title: 'Code Review and Optimization',
    description: 'Review existing codebases and provide optimization recommendations.',
    icon: '🔍',
  },
]

export default function ComponentsFreelanceServices() {
  return (
    <section id="freelance-services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Freelance Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 flex flex-col items-center text-center"
            >
              <span className="text-4xl mb-4">{service.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}