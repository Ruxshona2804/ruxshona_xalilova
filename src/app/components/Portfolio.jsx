
"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import sale from '../images/imagepng/sale.jpg'
import watch from '../images/imagepng/apple.jpg'
import moda from '../images/imagepng/moda.jpg'
import portfolioo from '../images/imagepng/portfolioo.jpg'
import travello from '../images/imagepng/travello.jpg'
import Image from 'next/image';
import noventer from '../images/imagepng/image.png'
import { useTranslations } from 'next-intl';

const allProjects = [
  {
    title: "Интернет-магазин",
    image: sale,
    description: "e-commerce",
    tech: ['Vite', 'API', 'Tailwind'],
    github: 'https://github.com/Ruxshona2804/card-products.git',
    demo: 'https://card-products-clrp.vercel.app/',
  },
  {
    title: "Блог-платформа",
    image: watch,
    description: "platform",
    tech: ['Next.js', 'API', 'Tailwind CSS'],
    github: 'https://github.com/Ruxshona2804/first-next.electronics.git',
    demo: 'https://first-next-electronics-hxkr.vercel.app/',
  },
  {
    title: "Landing Page",
    image: noventer,
    description: "website",
    tech: ['Next', 'Tailwind', 'TypeScript'],
    github: 'https://github.com/Ruxshona2804/Noventer-in-next.git',
    demo: 'https://noventer-nextt.vercel.app/',
  },
  {
    title: "ToDo App",
    image: moda,
    description: "Простое приложение для задач",
    tech: ['React', 'LocalStorage', 'CSS'],
    github: 'https://github.com/Ruxshona2804/my_first_react_app.git',
    demo: 'https://my-first-react-app-pp7u.vercel.app/',
  },
  {
    title: "My portfolio",
    image: portfolioo,
    description: "portfolio",
    tech: ['SASS', 'HTML', 'DarkMode'],
    github: 'https://github.com/Ruxshona2804/my-portfiloi-1.git',
    demo: 'https://my-portfiloi-1-q8oh.vercel.app/',
  },
  {
    title: "Travello",
    image: travello,
    description: "DarkMode",
    tech: ['Tailwind', 'DarkMode', 'i18n'],
    github: 'https://github.com/Ruxshona2804/travello.git',
    demo: 'https://travello-55-git-main-ruxshona2804s-projects.vercel.app/en',
  },
];

const techList = ['Все','TypeScript', 'React', 'Next', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'i18n', 'DarkMode'];

function Portfolio() {
  const t = useTranslations();
  const [selectedTech, setSelectedTech] = useState('Все');
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredProjects = selectedTech === 'Все'
    ? allProjects
    : allProjects.filter(p => p.tech.includes(selectedTech));

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <div className=" border-b-1 border-gray-600  text-white ">
      <div className="container   py-10  space-y-14">

        <h2 className="text-center text-3xl font-bold">
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
          {t("PORTFOLIO")}  
          </span>
        </h2>

        {/* Фильтр */}
        <div className="flex flex-wrap justify-center gap-3">
          {techList.map((tech) => (
            <button
              key={tech}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${selectedTech === tech
                  ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white border-none shadow-lg'
                  : 'text-gray-400 border-gray-600 hover:border-pink-500 hover:text-white'
                }`}
              onClick={() => setSelectedTech(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
  {visibleProjects.map((project, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: idx * 0.1 }}
      className="group relative bg-[#0F161F] rounded-3xl p-6 border border-[#1F2937] hover:border-pink-400 shadow-xl hover:shadow-pink-900/30 transition-all duration-300"
    >
      {/* Заголовок и картинка */}
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-white border-l-4 pl-4 border-pink-500 group-hover:text-pink-400 transition-colors duration-300">
          {t(project.title)}
        </h3>
        <div className="mt-4 overflow-hidden rounded-xl">
          <Image
            src={project.image}
            alt="image"
            width={400}
            height={300}
            className="rounded-xl group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Описание */}
      <p className="text-gray-300 text-sm leading-relaxed">{t(project.description)}</p>

      {/* Технологии */}
      <div className="mt-4 text-xs text-gray-400">
        <strong className="text-white">{t( "Technologies")}</strong> {project.tech.join(', ')}
      </div>

      {/* Ссылки */}
      <div className="flex items-center gap-6 mt-6">
        <a
          href={project.github}
          target="_blank"
          className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
        >
          <FaGithub className="text-lg" /> GitHub
        </a>
        <a
          href={project.demo}
          target="_blank"
          className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
        >
          <FaExternalLinkAlt className="text-sm" /> Demo
        </a>
      </div>
    </motion.div>
  ))}
</div>


        {visibleCount < filteredProjects.length && (
          <div className="text-center pt-8">
            <button
              onClick={() => setVisibleCount((prev) => prev + 3)}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:brightness-110 transition-all shadow-lg"
            >
              {t("Смотреть ещё")}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
export default Portfolio;