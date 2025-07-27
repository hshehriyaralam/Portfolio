import { Outfit, Ovo } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import { ThemeContext} from "../Context/ThemeContext";
import {DescriptionContext} from '../Context/DescriptionContext'
import  {ProjectContext} from '../Context/ProjectContext'



const OutfitFont  =  Outfit({
  subsets: ["latin"], weight : ['400','500','600', '700']
});

const OvoFont = Ovo({
  subsets: ["latin"], weight : ['400']
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal Portfolio",
   icons: {
    icon: '../../public/header_logo.png'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className="scroll-smooth">
      <body
        className={`${OutfitFont.className} ${OvoFont.className}  antialiased leading-8 overflow-x-hidden
          `}
          
      ><ThemeContext>
        <ProjectContext>
        <DescriptionContext>
        {children}
        </DescriptionContext>
        </ProjectContext>
      </ThemeContext>
      </body>
    </html>
  );
}
