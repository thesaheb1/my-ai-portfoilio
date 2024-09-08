'use client'

const education = [
  {
    institution: 'CCS University',
    degree: 'Bachelor of Computer Applications',
    date: '2020 - 2023',
  },
  {
    institution: 'Coding Shuttle',
    degree: 'MERN Stack Developement',
    date: '2021 - 2022',
  },
  {
    institution: 'Govt. Boys. Sr. Sec. Model School',
    degree: '12th (Intermediate)',
    date: '2018 - 2020',
  },
  {
    institution: 'Govt. Boys. Sr. Sec. Model School',
    degree: '10th',
    date: '2018',
  },
]

export default function ComponentsAcademicJourney() {
  return (
    <section id="academic-journey" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Academic Journey</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6"
            >
              <div className="md:w-1/4 mb-4 md:mb-0">
                <p className="text-gray-600 dark:text-gray-300">{edu.date}</p>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}