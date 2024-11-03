import Image from 'next/image';
import img from '../../../public/11233.png';
import { FaGithub } from 'react-icons/fa';

export async function About() {

  return (
    <div>
      <div className="min-h-screen bg-gray-900 text-gray-200 p-10 md:p-20 relative">
        <div className="relative w-full h-96 md:h-screen flex items-center justify-center bg-cover bg-center">
          <Image
            src={img}
            alt="Profile Picture"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-xl md:text-4xl font-bold text-white mb-4 animate-fadeIn">Hello, I'm Wign</h1>
            <p className="text-xl md:text-2xl text-gray-300 animate-fadeIn delay-1s">
              A student and developer enthusiastic about creating web applications using React, Express, and Next.js.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 md:mt-24 px-6 text-left">
          <h2 className="text-xl md:text-5xl font-bold text-yellow-400 mb-8">About Me</h2>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            My name is Wign, a student passionate about programming. I focus on building engaging and functional web applications and am always looking for ways to improve my skills in this field.
          </p>
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mt-4">
            I have a strong interest in various technologies, especially React and Next.js, and I believe every project should offer an excellent user experience. Currently, I'm actively involved in UI/UX projects and full-stack development to hone my skills.
          </p>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/portfolio"
            className="inline-block bg-yellow-500 text-gray-900 text-lg font-bold py-4 px-12 rounded-full hover:bg-yellow-400 transition-transform transform hover:-translate-y-1"
          >
            View My Portfolio
          </a>
          <div className="mt-6">
            <a href="https://github.com/wignn" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-300 hover:text-yellow-400 transition">
              <FaGithub className="h-6 w-6 mr-2" />
              My GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
