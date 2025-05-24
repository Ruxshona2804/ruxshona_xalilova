"use client"

import React, { useState } from 'react';
import LangSwitch from './LangSwitch';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='h-[100px]  mt-4 relative'>
      <div className='container px-3 py-5 border border-gray-400 rounded-3xl flex items-center justify-between uppercase'>

        <p className='text-[20px]'>{t('Ruxshona Xalilova')}</p>

        
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

    
        <ul className='hidden md:flex items-center gap-7 text-[16px]'>
          <Link href="#services"><li className='hover:text-blue-500 hover:underline cursor-pointer'>{t('Services')}</li></Link>
          <Link href="#technologies"><li className='hover:text-blue-500 hover:underline cursor-pointer'>{t('Technologies')}</li></Link>
          <Link href="#portfolio"><li className='hover:text-blue-500 hover:underline cursor-pointer'>{t('Portfolio')}</li></Link>
          <Link href="#contact"><li className='hover:text-blue-500 hover:underline cursor-pointer'>{t('Contact')}</li></Link>
        </ul>

       
        <div className='hidden md:block'>
          <LangSwitch />
        </div>
      </div>

     
      {isOpen && (
        <div className='md:hidden absolute top-full right-0 mt-2 bg-white rounded-md shadow-lg overflow-hidden z-10'> {/* Стили для выпадающего меню */}
          <div className="py-1">
            <Link href="#services"><p onClick={() => setIsOpen(false)} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>{t('Services')}</p></Link>
            <Link href="#technologies"><p onClick={() => setIsOpen(false)} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>{t('Technologies')}</p></Link>
            <Link href="#portfolio"><p onClick={() => setIsOpen(false)} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>{t('Portfolio')}</p></Link>
            <Link href="#contact"><p onClick={() => setIsOpen(false)} className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'>{t('Contact')}</p></Link>
          </div>
          <div className="border-t border-gray-200">
            <LangSwitch />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

