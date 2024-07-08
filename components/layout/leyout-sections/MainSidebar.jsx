import React, { useContext } from 'react';
import Link from 'next/link';
import { MenuContext } from '@/context/MenuContext';
import { FaUser, FaClock } from 'react-icons/fa';
import { IoHome } from 'react-icons/io5';
import { AiOutlineHome, AiOutlineClose } from 'react-icons/ai';
import { RiLogoutBoxLine } from "react-icons/ri";
import { SiHelpscout, SiSinglestore } from 'react-icons/si';

const MainSidebar = () => {
  const { open, toggle } = useContext(MenuContext);

  const closeSeideBarHandler = () => {
    toggle();
  };

  return (
    <aside
      className={`bg-white dark:bg-slate-600 dark:text-white top-4 left-4 lg:fixed lg:block lg:top-16 lg:left-8 rounded-lg overflow-hidden transition-all duration-200 ${
        open ? 'w-60 p-4 block fixed' : 'w-0 hidden'
      } lg:w-60 lg:p-4 max-lg:z-20 shadow-sm`}
    >
      <ul>
        <li className='flex justify-end items-center lg:hidden'>
          <AiOutlineClose onClick={closeSeideBarHandler} className='text-red-500 hover:text-red-800 cursor-pointer' />
        </li>

        <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
          <IoHome className='mr-2' />
          <Link href='/' onClick={closeSeideBarHandler}>
            Beranda
          </Link>
        </li>
        <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
          <FaUser className='mr-2' />
          <Link href='/datapengguna' onClick={closeSeideBarHandler}>
          Data Pengguna
          </Link>
        </li>
        <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
          <FaClock className='mr-2' />
          <Link href='daftarabsensi' onClick={closeSeideBarHandler}>
          Daftar Absensi
          </Link>
        </li>
        <hr className="mt-5 mb-5 border-black border-1"/>
        <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
          <SiHelpscout className='mr-2' />
          <Link href='/about-us' onClick={closeSeideBarHandler}>
            Tentang Kami
          </Link>
        </li>
        <li className='flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2'>
        <RiLogoutBoxLine className='mr-2 shadow-lg' size={20}/>
          <Link href='/logout' onClick={closeSeideBarHandler}>
            Keluar
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default MainSidebar;
