"use client"
import { FC, useState } from 'react';

import Image from 'next/image';
import { SettingBtn } from '../btn/profileBtn';

interface PhotoCardProps {
  id: number;
  name: string;
  photoURL: string;
  coverURL: string;
}

const SetingProfile: FC<PhotoCardProps> = ({ id, name, photoURL, coverURL }) => {
  const [bio, setBio] = useState<string>('');

  const handleBioChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(event.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div className="bg-black bg-opacity-40 backdrop-blur-lg backdrop-filter text-gray-800 rounded-lg shadow-lg w-full max-w-md overflow-hidden">
        <div className="h-64 ">
    
          <img
            src={coverURL}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative flex justify-center -mt-16">
          <img
            src={photoURL}
            alt={name}
            className="w-32 h-32 rounded-full border-4 border-white shadow-md"
          />
        </div>

        <div className="text-center px-4 pt-16 pb-4">
          <h2 className="text-2xl font-semibold text-gray-900">{name}</h2>
          <p className="text-sm text-gray-500">User ID: {id}</p>

          <textarea
            className="mt-4 w-full h-24 p-2 border rounded-md text-gray-800"
            placeholder="Tulis bio atau kata-kata di sini..."
            value={bio}
            onChange={handleBioChange}
          />
          <SettingBtn/>
        </div>
      </div>
    </div>
  );
};

export default SetingProfile;
