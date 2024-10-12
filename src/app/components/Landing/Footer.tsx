import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 bg-gray-900 text-gray-400 text-center">
      <p>© 2024 Platform Web Novel. Semua Hak Dilindungi.</p>
      <div className="mt-4 flex justify-center space-x-6">
        {/* Ikon GitHub */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white transition"
        >
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.304 3.438 9.8 8.205 11.387.6.111.827-.26.827-.577 0-.285-.01-1.237-.015-2.241-3.338.724-4.045-1.606-4.045-1.606-.546-1.384-1.333-1.753-1.333-1.753-1.086-.74.083-.726.083-.726 1.203.085 1.835 1.236 1.835 1.236 1.068 1.837 2.8 1.305 3.486.998.108-.773.418-1.305.761-1.605-2.665-.303-5.467-1.332-5.467-5.93 0-1.311.467-2.384 1.235-3.224-.125-.303-.535-1.53.117-3.183 0 0 1.007-.323 3.298 1.229.956-.267 1.984-.4 3.007-.404 1.022.004 2.051.137 3.007.404 2.291-1.552 3.298-1.229 3.298-1.229.653 1.653.243 2.88.119 3.183.77.84 1.235 1.913 1.235 3.224 0 4.604-2.805 5.62-5.468 5.93.43.372.82 1.101.82 2.222 0 1.606-.015 2.897-.015 3.287 0 .319.224.693.83.577C20.563 21.8 24 17.304 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
