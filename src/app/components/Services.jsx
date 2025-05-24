import React from 'react';
import { FaCode, FaGlobe, FaLaptopCode } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const services = [
  {
    title: "Website Development",
    description: "service",
    icon: <FaLaptopCode className="text-blue-400 text-2xl" />,
  },
  {
    title: "React/Nextjs",
    description: "apps",
    icon: <FaCode className="text-pink-400 text-2xl" />,
  },
  {
    title: "API",
    description: "RESR API",
    icon: <FaGlobe className="text-blue-300 text-2xl" />,
  },
];

const Services = () => {
  const t = useTranslations();

  return (
    <div className="border-b border-gray-600">
      <section className="text-white container   pt-10 relative">
        {/* Заголовок */}
        <h2 className="text-3xl text-center font-bold mb-10">
          <span className="bg-gradient-to-r ml-2 md:ml-10 from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
            {t('MY SERVICES')}
          </span>
        </h2>

        <div className="flex flex-col gap-10 mb-10 ">
          {services.map((service, index) => (
            <div key={index} className="relative flex flex-col  items-center md:items-start">
              {/* Линия между блоками на десктопе */}
              {index > 0 && (
                <div className="w-[1px] h-10 bg-gray-600 absolute top-[-40px] hidden md:block left-150 transform -translate-x-1/2" />
              )}

              <div
                className={`relative z-10 border border-gray-700 rounded-xl  p-6 w-full md:w-1/2 ${
                  index % 2 === 0 ? 'self-start md:ml-5' : 'self-end md:mr-20'
                }`}
              >
                <div className="flex items-center  gap-4 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold">{t(service.title)}</h3>
                </div>
                <p className="text-gray-400">{t(service.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;


