'use client';

import Image from 'next/image';
import { useState } from 'react';

import SidebarMenu from './SidebarMenu';
import MenuOverlay from '../common/MenuOverlay';
import { BellIcon } from '@heroicons/react/24/outline';
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
    <div className="fixed top-0 right-0 left-0 lg:left-64 bg-white z-40 flex items-center gap-x-5 py-2 px-4 shadow">
      <SidebarMenu isOpen={isOpen} onClose={handleClose} />
      {isOpen === 'translate-x-0' ? (
        <MenuOverlay onClose={handleClose} />
      ) : null}
      <button
        className="lg:hidden w-8 h-8 border-2 border-gray-200 grid place-content-center rounded"
        onClick={handleOpen}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <form className="flex-1 flex items-center space-x-3 py-3.5 pr-3">
        <label htmlFor="search" className="cursor-pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4ZM2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.29583 13.5892 10.4957 12.8907 11.4765L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L11.4765 12.8907C10.4957 13.5892 9.29583 14 8 14C4.68629 14 2 11.3137 2 8Z"
              fill="#9CA3AF"
            />
          </svg>
        </label>
        <input
          type="text"
          id="search"
          placeholder="Search"
          className="w-full lg:w-1/2 outline-none"
        />
      </form>
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
