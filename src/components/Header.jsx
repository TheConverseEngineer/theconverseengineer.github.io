"use client";

import Link from "next/link";
import { NavBar } from "./NavBar";


export const Header = () => {
    return <header className="py-8 px-[10%]">
        <div className="container mx-auto flex justify-between">
            <div></div>
            <div className=""> <NavBar /></div>
            <div className="hidden">mobile nav</div>
        </div>
    </header>
}