import React from 'react'
import html from '../images/html.svg'
import css from '../images/css.svg'
import javascript from '../images/javascript.svg'
import tailwindcss from '../images/tailwindcss.svg'
import figma from '../images/figma.svg'
import sass from '../images/sass.svg'
import typescript from '../images/typescript.svg'
import vite from '../images/vite.svg'
import react from '../images/react.svg'
import nextjs from '../images/nextjs.svg'
import vue from '../images/vue.svg'
import Image from 'next/image'
import { useTranslations } from 'next-intl';

const Skills = () => {
    const t = useTranslations();
    return (
      <div className='border-b-1 border-gray-600'>
          <div className='container h-[700px] pt-10 '>
            <h2 className="text-3xl text-center font-bold  mb-10">
                <span className="bg-gradient-to-r ml-10 from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
                   {t("SKILLS")} 
                </span>
            </h2>
            <div className="py-12 px-4 md:px-10 lg:px-20  text-white">
                <p className="text-center text-xl md:text-2xl font-semibold mb-8">
                  {t("use")}  
                </p>
                <div className='flex flex-col items-center justify-center gap-10'>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Image src={html} alt="HTML" width={50} height={50} className="hover:scale-110 transition-transform duration-300  m-4 scale-120" />
                        <Image src={css} alt="CSS" width={50} height={50} className="hover:scale-110 transition-transform duration-300  m-4 scale-120" />
                        <Image src={javascript} alt="JavaScript" width={50} height={50} className="hover:scale-110 transition-transform duration-300  m-4 scale-120" />
                        <Image src={tailwindcss} alt="Tailwind CSS" width={50} height={50} className="hover:scale-110 transition-transform duration-300    m-4 scale-120" />
                        <Image src={figma} alt="Figma" width={50} height={50} className="hover:scale-110 transition-transform duration-300  m-4 scale-120" />
                        <Image src={sass} alt="Sass" width={50} height={50} className="hover:scale-110 transition-transform duration-300  m-4 scale-120" />

                    </div>
                    <div className='flex flex-wrap justify-center gap-6'>
                        <Image src={typescript} alt="TypeScript" width={50} height={50} className="hover:scale-110 transition-transform duration-300  m-4 scale-120" />
                        <Image src={vite} alt="Vite" width={50} height={50} className="hover:scale-110 transition-transform duration-300  m-4 scale-120" />
                        <Image src={react} alt="React" width={50} height={50} className="hover:scale-110 transition-transform duration-300  m-4 scale-120" />
                        <Image src={nextjs} alt="Next.js" width={50} height={50} className="hover:scale-110 bg-gray-400 px-2  transition-transform duration-300  m-4 scale-120" />
                        <Image src={vue} alt="Vue.js" width={50} height={50} className="hover:scale-110 transition-transform duration-300  m-4 scale-120" />
                    </div>
                </div>
            </div>

        </div>
      </div>
    )
}

export default Skills