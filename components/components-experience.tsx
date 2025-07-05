'use client'

const experiences = [
  {
    company: 'Xaltam Technologies',
    position: 'Mern Stack Developer',
    duration: 'April 2024 - Present',
    responsibilities: [
      'Built and maintained CMS websites and intuitive admin dashboards using React.js and Material UI to deliver smooth data management and great user experience.',
      'Delivered a Kuwait-based e-commerce platform, Camouflagekw.com, using Next.js, TailwindCSS, and MyFatoorah Payment System, and worked with cross-functional teams to meet client needs.',
      'Improved team code quality by leading code reviews and sharing best practices',
      'Currently developing Grafikhub.com, a secure and scalable marketplace for selling PSD and graphic design templates, built with Next.js, Auth.js, Node.js, MongoDB, Cloudflare R2, and Razorpay.',
      ' Deployed applications on Cloudflare, AWS and Vercel, managing CDN configuration, custom domains, and performance optimization for global users.',
    ],
  },
  {
    company: 'DMHCA',
    position: 'Mern Stack Developer (Intern)',
    duration: 'Jan 2023 - April 2024',
    responsibilities: [
      'Built interactive and dynamic web apps using Next.js, ShadCN, and TailwindCSS.',
      'Improved code quality through optimization and performance tuning.',
      'Developed robust and scalable backend APIs with Node.js and Express.',
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
