'use client'

const experiences = [
  {
    company: 'Xaltam Technologies',
    position: 'Frontend Developer',
    duration: 'Feb 2024 - Present',
    responsibilities: [
      'Created and maintained content management system (CMS) websites, enhancing user experience and ensuring efficient content updates',
      'Designed and implemented user-friendly admin panels, facilitating smooth data management and administrative tasks',
      'Collaborated with cross-functional teams to deliver projects on time and meet client specifications',
      'Actively participated in code reviews and contributed to improving coding standards and best practices within the team',
      'Worked on UAE-based e-commerce web applications such as Camouflage and Dhudu',
    ],
  },
  {
    company: 'Coding Shuttle',
    position: 'Mern Stack Developer (Intern)',
    duration: 'Oct 2023 - Jan 2024',
    responsibilities: [
      'Developed interactive and dynamic web applications using ReactJS and Tailwind CSS',
      'Enhanced skills in code optimization and performance tuning',
      'Collaborated on backend development using Node.js to create robust and scalable APIs',
      'Improved overall application performance',
    ],
  },
];


export default function ComponentsExperience() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row md:justify-center">
              <div className="md:w-1/6 mb-4 md:mb-0">
                <h3 className="text-xl font-semibold">{exp.company}</h3>
                <p className="text-gray-600 dark:text-gray-400">{exp.duration}</p>
              </div>
              <div className="lg:w-1/2 md:pl-8">
                <h4 className="text-lg font-semibold mb-2">{exp.position}</h4>
                <ul className="list-disc pl-5 space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-600 dark:text-gray-300">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}