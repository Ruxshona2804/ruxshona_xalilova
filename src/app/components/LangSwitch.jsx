'use client';
import React from 'react';
import { redirect, usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { FaGlobe } from 'react-icons/fa';

const LangSwitch = () => {
  const path = usePathname();
  const locale = useLocale();

  const switchHandle = (e) => {
    const selectedLocale = e.target.value;
    redirect({ locale: selectedLocale, href: path });
  };

  return (
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 px-4 py-2 rounded-full shadow-md">
      <FaGlobe className="text-white" />
      <select
        onChange={switchHandle}
        value={locale}
        className="bg-transparent text-white font-semibold appearance-none focus:outline-none"
      >
       <option className="bg-black text-white" value="en">🇬🇧 English</option>
        <option className="bg-black text-white" value="uz">🇺🇿 Uzbek</option>
        <option className="bg-black text-white" value="ru">🇷🇺 Russian</option>
      </select>
    </div>
  );
};

export default LangSwitch;
