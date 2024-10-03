import { FaUserFriends, FaEnvelope, FaEdit } from 'react-icons/fa';
import Link from 'next/link';


export const SettingBtn: React.FC = ()=>{

    return (
        <div className="flex justify-center mt-4 space-x-3">
            <Link href={"/profile/updateAvatar"}>
            <button className="bg-blue-500 text-white flex items-center text-sm font-semibold py-2 px-4 rounded-full hover:bg-blue-600 transition-colors">
                <FaEdit className="mr-2" /> Ganti Avatar
              </button>
            </Link>
            <Link href={"/profile/updateCover"}>
            <button className="bg-green-500 text-white flex items-center text-sm font-semibold py-2 px-4 rounded-full hover:bg-green-600 transition-colors">
                <FaEdit className="mr-2" /> Ganti Sampul
              </button>
            </Link>
            <button className="bg-gray-200 text-gray-700 flex items-center text-sm font-semibold py-2 px-4 rounded-full hover:bg-gray-300 transition-colors">
                <FaEnvelope className="mr-2" /> Pesan
              </button>
          </div>
    )
}

