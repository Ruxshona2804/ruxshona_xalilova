import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import main from '../images/mainn.png';
import { useTranslations } from 'next-intl';

const Header = () => {
    const t = useTranslations();
    return (
      <div className='border-b-1 border-gray-600'>
          <div className="  container   h-[700px] flex  items-center justify-between gap-40    text-white   ">
            <div className=" w-[50%] ">
                <h1 className="text-[80px]  font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
                   {t('FRONTEND')} <br />  {t('DEVELOPER')}
                </h1>
                <p className="text-gray-300 text-lg md:text-xl">
                {t('I am Ruxshona')}  – <span className="font-semibold text-blue-400">  {t('web-developer ')}</span> 
                {t('websites')}  
                </p>
                <Link href="#portfolio">
                    <button id='' className="mt-4 px-6 py-3 rounded-lg border border-pink-500 text-white bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 transition-all shadow-lg shadow-pink-500/30">
                      {t('VIEW MY WORK')}  
                    </button></Link>
            </div>
            <div className='w-[50%] '>
                <Image src={main} alt="main" width={500} height={500} className="rounded- scale-120" /> 
               
            </div>

        </div>
      </div>
    );
};

export default Header;
