import React from 'react';
import { FaGithub, FaLinkedin, FaTelegramPlane, FaEnvelope } from 'react-icons/fa';
import { useTranslations } from 'next-intl';

const Contact = () => {
  const t = useTranslations();

  return (
    <div className="container  px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-30 md:h-[800px] text-white">

      <p className="text-[32px] sm:text-[40px] md:text-[50px] w-full md:w-[50%] text-center md:text-right font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
        {t("Men bilan bog'laning")}
      </p>


      <div className="w-full md:w-[50%] p-[2px] rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg">
        <div className="bg-[#0e0e1a] rounded-2xl p-6 text-white space-y-4">
          {[
            {
              href: "https://github.com/Ruxshona2804",
              icon: <FaGithub />,
              label: "GitHub",
            },
            {
              href: "https://www.linkedin.com/in/ruxshona-xalilova-322955356?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              icon: <FaLinkedin />,
              label: "LinkedIn",
            },
            {
              href: "https://t.me/ruxshona_xalilova",
              icon: <FaTelegramPlane />,
              label: "Telegram",
            },
            {
              href: "mailto:rukhshona.umidjonovnaa@gmail.com",
              icon: <FaEnvelope />,
              label: "Email",
            },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 px-6 py-4 rounded-xl bg-[#141426] hover:bg-[#1c1c31] transition duration-300 text-base sm:text-lg md:text-xl"
            >
              <span className="text-2xl">{icon}</span>
              {label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
