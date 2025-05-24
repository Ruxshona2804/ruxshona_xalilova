import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import main from '../images/mainn.png';
import { useTranslations } from 'next-intl';

const Header = () => {
    const t = useTranslations();
    return (
      <div className='border-b border-gray-600'>
      <div className=" container  flex flex-col-reverse md:flex-row md:h-[700px] items-center justify-between md:gap-20 text-white px-4 md:px-0 py-10">
        
       
        <div className="md:w-[50%] text-center md:text-left">
          <h1 className="text-4xl md:text-[80px] font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text leading-tight">
            {t('FRONTEND')} <br /> {t('DEVELOPER')}
          </h1>
    
          <p className="text-gray-300 text-sm md:text-xl mt-4 md:mt-6">
            {t('I am Ruxshona')} – <span className="font-semibold text-blue-400">{t('web-developer')}</span>
            {t('websites')}
          </p>
    
          <Link href="#portfolio">
            <button className="mt-4 md:mt-6 px-6 py-3 rounded-lg border border-pink-500 text-white bg-gradient-to-r from-blue-500 to-pink-500 hover:from-pink-500 hover:to-blue-500 transition-all shadow-lg shadow-pink-500/30">
              {t('VIEW MY WORK')}
            </button>
          </Link>
        </div>
    
        <div className='md:w-[50%] w-[90%] mb-8 md:mb-0'>
          <Image
            src={main}
            alt="main"
            width={500}
            height={500}
            className="rounded scale-120 mx-auto md:mx-0"
          />
        </div>
    
      </div>
    </div>
    );
};

export default Header;
