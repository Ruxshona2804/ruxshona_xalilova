import "@/styles/globals.css";

import {  Inter } from 'next/font/google'
import { NextIntlClientProvider } from "next-intl";


const volkov = Inter({
  subsets:['latin'],
  weight:["400","700"],
  display:'swap',
  variable:'-font-inter'
})

export default async function RootLayout({ children, params }) {

  const { locale } = await params
  console.log(locale);


  return (
    <html lang={locale} >
      <body className={volkov.className }  >
        <NextIntlClientProvider>
            {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
