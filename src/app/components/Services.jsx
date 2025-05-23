import React from 'react';
import { FaCode, FaGlobe, FaLaptopCode } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const services = [
  {
    title: "Website Development",
    description:
      "service",
    icon: <FaLaptopCode className="text-blue-400 text-2xl" />,
  },
  {
    title: "React/Nextjs",
    description:
      "apps",
    icon: <FaCode className="text-pink-400 text-2xl" />,
  },
  {
    title: "API",
    description:
      "RESR API",
    icon: <FaGlobe className="text-blue-300 text-2xl" />,
  },
];

const Services = () => {
  const t = useTranslations();
  return (
    <div className='border-b-1 border-gray-600'>
      <section className=" text-white container  h-[800px] pt-10 relative">
        {/* Линия */}


        <h2 className="text-3xl text-center font-bold  mb-10">
          <span className="  bg-gradient-to-r ml-10 from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
            {t('MY SERVICES')}
          </span>
        </h2>

        {services.map((service, index) => (
          <div key={index} className="relative flex flex-col items-center my-15">

            {index > 0 && (
              <div className="w-[1px] h-15 bg-gray-600 absolute left-160 top-[-59px] hidden md:block" />
            )}


            <div
              className={`relative z-10 mr-20 ml-10 border border-gray-700 rounded-xl p-6 md:w-1/2 ${index % 2 === 0 ? 'self-start' : 'self-end'
                }`}
            >
              <div className="flex items-center gap-4 mb-4">
                {service.icon}
                <h3 className="text-xl font-semibold">{t(service.title)}</h3>
              </div>
              <p className="text-gray-400">{t(service.description)}</p>
            </div>
          </div>
        ))}

      </section>
    </div>
  );
};

export default Services;

