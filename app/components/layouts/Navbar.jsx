'use client';

import Image from 'next/image';
import { useState } from 'react';

import SidebarMenu from './SidebarMenu';
import MenuOverlay from '../common/MenuOverlay';
import {
  BellIcon,
  Bars3Icon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import ProfileDropdown from '../common/ProfileDropdown';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState('');
  const [isDropOpen, setIsDropOpen] = useState(false);

  function handleOpen() {
    setIsOpen('translate-x-0');
    document.body.classList.add('overflow-hidden');
  }

  function handleClose() {
    setIsOpen('-translate-x-full');
    document.body.classList.remove('overflow-hidden');
  }

  function closeModal() {
    setIsDropOpen(false);
  }

  function openModal() {
    setIsDropOpen(true);
  }

  return (
    <div className="fixed top-0 right-0 left-0 lg:left-64 bg-white z-40 flex items-center gap-x-3 lg:gap-x-5 py-2 px-4 shadow">
      <SidebarMenu isOpen={isOpen} onClose={handleClose} />
      {isOpen === 'translate-x-0' ? (
        <MenuOverlay onClose={handleClose} />
      ) : null}
      <button
        className="lg:hidden w-8 h-8 border-2 border-gray-200 grid place-content-center rounded"
        onClick={handleOpen}
      >
        <Bars3Icon className="w-6 h-6" />
      </button>
      <div className="flex-1 flex items-center space-x-3 py-2.5 lg:py-3.5 pr-3">
        <label htmlFor="search" className="cursor-pointer">
          <MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search"
          className="w-full lg:w-1/2 placeholder:text-gray-500 border-none outline-none"
        />
      </div>
      <div className="relative w-20 flex items-center space-x-3">
        <button>
          <BellIcon className="w-6 h-6 text-gray-400 hover:text-indigo-500" />
        </button>
        <button onClick={openModal}>
          <Image
            src="/assets/images/avatar-1.png"
            alt="User"
            width={32}
            height={32}
          />
        </button>
        <ProfileDropdown closeModal={closeModal} isDropOpen={isDropOpen} />
      </div>
      {/* <div className="absolute inset-x-0 bottom-0 h-screen top-full backdrop-blur"></div> */}
    </div>
  );
}
