import Image from 'next/image'; 
import img from '../../../public/11233.png';
import { FaGithub } from 'react-icons/fa';
import Navbar from './Landing/Navbar';

export function About() {
  return (
    <div>
      <Navbar/>
    <div className="min-h-screen bg-gray-900 text-gray-200 p-10 md:p-20 relative">
      <div className="relative w-full h-96 md:h-screen flex items-center justify-center bg-cover bg-center">
        <Image
          src={img}
          alt="Gambar Profil"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-transparent to-gray-900"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-xl md:text-4xl font-bold text-white mb-4 animate-fadeIn">Halo, saya Wign</h1>
          <p className="text-xl md:text-2xl text-gray-300 animate-fadeIn delay-1s">
            Mahasiswa dan pengembang yang antusias dalam menciptakan aplikasi web menggunakan React, Express, dan Next.js.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-16 md:mt-24 px-6 text-left">
        <h2 className="text-xl md:text-5xl font-bold text-yellow-400 mb-8">Tentang Saya</h2>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
          Nama saya Wign, seorang mahasiswa yang bersemangat dalam dunia pemrograman. Saya berfokus pada pembangunan aplikasi web yang menarik dan fungsional, serta selalu mencari cara untuk meningkatkan keterampilan saya di bidang ini.
        </p>
        <p className="text-lg md:text-xl text-gray-400 leading-relaxed mt-4">
          Saya memiliki ketertarikan dalam berbagai teknologi, terutama React dan Next.js, dan saya percaya bahwa setiap proyek harus memberikan pengalaman pengguna yang luar biasa. Saat ini, saya aktif terlibat dalam proyek UI/UX dan pengembangan full-stack untuk mengasah kemampuan saya.
        </p>
      </div>

      <div className="mt-12 text-center">
        <a
          href="/portfolio"
          className="inline-block bg-yellow-500 text-gray-900 text-lg font-bold py-4 px-12 rounded-full hover:bg-yellow-400 transition-transform transform hover:-translate-y-1"
        >
          Lihat Portfolio Saya
        </a>
        <div className="mt-6">
          <a href="https://github.com/wignn" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-300 hover:text-yellow-400 transition">
            <FaGithub className="h-6 w-6 mr-2" />
            GitHub Saya
          </a>
        </div>
      </div>
    </div>
    </div>
  );
}
