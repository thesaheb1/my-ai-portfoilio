'use client'

import Image from "next/image"

export default function ComponentsHome() {
  return (
    <section id="home" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl mb-6">
            I&apos;m a passionate MERN stack developer creating innovative web solutions.
          </p>
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full text-lg">
            View My Work
          </a>
        </div>
        <div className="md:w-1/2">
          <Image
            src="/image/profile.png"
            alt="Developer"
            className="rounded-full mx-auto"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
