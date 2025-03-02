import React from 'react';
import Image from 'next/image';
import Logo from '@/public/code_club_logo.jpg';
import { fetchTechnologies } from './lib/data';

export default async function Page() {
  const technologies = await fetchTechnologies();

  return (
    <div className="container mx-auto px-10">
      <main>
        <div className="bg-green-500 text-white p-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Learn to code with Code Club</h1>
          <p className="text-lg">
            Our projects have step-by-step instructions to teach you how to create games, animations, and much more. Choose from hundreds of options, in up to 30
            languages.
          </p>
        </div>

        <div className="container mx-auto py-12 px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">Start with a project path</h2>
          <p className="text-center mb-8">
            Each of our project paths guides you through a series of six projects that will help you build your coding and design skills.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech) => (
              <section
                key={tech.id}
                className={`p-6 rounded-lg shadow-md ${tech.background_color}`} // Use background color from database
              >
                <Image src={tech.image_url} alt={tech.title} width={500} height={300} className="mb-4" />
                <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                <p className="mb-4">{tech.description}</p>
                <a
                  href={tech.link}
                  className="bg-black hover:bg-green-600 text-white font-bold py-2 px-4 rounded inline-block"
                >
                  Explore {tech.title} project paths
                </a>
              </section>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}