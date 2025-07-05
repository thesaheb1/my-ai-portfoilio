'use client'

import Image from "next/image"

export default function ComponentsAbout() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/image/profile.png"
              alt="Developer"
              className="rounded-full mx-auto"
              width={300}
              height={300}
            />
          </div>
          <div className="md:w-2/3 md:pl-8">
            <p className="text-lg mb-4">
              Hello! I&apos;m a passionate MERN stack developer with almost 2 years of experience in creating
              robust and scalable web applications. My journey in the world of programming started
              with a curiosity to understand how things work on the internet, and it has evolved into
              a fulfilling career where I get to build innovative solutions every day.
            </p>
            <p className="text-lg mb-4">
              I specialize in developing full-stack applications using MongoDB, Express.js, React.js,
              and Node.js. My expertise extends to modern JavaScript frameworks, RESTful APIs, and
              database design. I&apos;m always eager to learn new technologies and stay up-to-date with
              the latest industry trends.
            </p>
            <p className="text-lg">
              When I&apos;m not coding, you can find me contributing to open-source projects, mentoring
              aspiring developers, or exploring the great outdoors. I&apos;m driven by the desire to
              create meaningful applications that solve real-world problems and enhance user
              experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
