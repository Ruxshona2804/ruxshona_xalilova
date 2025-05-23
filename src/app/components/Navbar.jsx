import React from 'react'
import LangSwitch from './LangSwitch'
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Navbar = () => {
    const t = useTranslations();
    return (
        <div className='h-[100px]    mt-4'>
            <div className='container  flex items-center justify-between uppercase px-3 rounded-3xl py-5 border border-gray-400'>
                <p className='text-[20px]'>{t('Ruxshona Xalilova')}</p>
                <ul className='flex items-center gap-7 text-[16px]'>
                    <Link href="#services"><li className='hover:text-blue-500 hover:underline cursor-pointer'>{t('Services')}</li></Link>
                    <Link href="#technologies"><li className='hover:text-blue-500 hover:underline cursor-pointer'>{t('Technologies')}</li></Link>
                    <Link href="#portfolio"><li className='hover:text-blue-500 hover:underline cursor-pointer'>{t('Portfolio')}</li></Link>
                    <Link href="#contact"><li className='hover:text-blue-500 hover:underline cursor-pointer'>{t('Contact')}</li></Link>
                </ul>
                <LangSwitch />
            </div>
        </div>
    )
}

export default Navbar;
