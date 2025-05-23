import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  // здесь можно указать опции (если нужно)
  // например: defaultLocale: 'en'
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // другие параметры Next.js
};

export default withNextIntl(nextConfig);
