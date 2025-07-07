"use client";

import Link from "next/link";
import { NavBar } from "./NavBar";
import { Merienda } from "next/font/google";

const playwrite = Merienda({
  subsets: ['latin'],
})

export const Header = () => {
    return <header className="py-8 px-[5%] lg:px-[10%]">
        <div className="container mx-auto flex justify-between">
            <div className={`text-lg lg:text-2xl text-accent font-bold ${playwrite.className}`}>&le;Vraj /&ge;</div>
            <NavBar />
        </div>
    </header>
}