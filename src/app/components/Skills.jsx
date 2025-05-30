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
    <div className="border-b md:h-[700px] border-gray-600">
      <div className="container   pt-10">
        <h2 className="text-3xl text-center font-bold mb-10">
          <span className="bg-gradient-to-r ml-2 md:ml-10 from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
            {t("SKILLS")}
          </span>
        </h2>

        <div className="py-12 px-2  text-white">
          <p className="text-center text-xl md:text-2xl font-semibold mb-8">
            {t("use")}
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 pt-10 justify-items-center">
            {[html, css, javascript, tailwindcss, figma, sass, typescript, vite, react, nextjs, vue].map((tech, index) => (
              <Image
                key={index}
                src={tech}
                alt={`Tech-${index}`}
                width={50}
                height={50}
                className={`hover:scale-110  w-[70px]   transition-transform duration-300 m-2 `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
