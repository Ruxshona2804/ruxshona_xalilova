import React from 'react';
import { useTranslations } from 'next-intl';

const Footer = () => {
    const t = useTranslations();
  return (
    <footer className=" text-gray-400 py-6 border-t border-gray-700">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base">
          {t("All rights")} <span className="text-pink-500">{t("Ruxshona Xalilova")}</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
