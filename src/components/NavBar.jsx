"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ALL_LINKS = [
    {
        name: "Home",
        link: "/"
    },

    {
        name: "Projects",
        link: "/projects"
    },

]

export const NavBar = () => {
    const pathname = usePathname();

    return (<div className="flex gap-4 items-right w-fit text-base lg:text-xl">
        {ALL_LINKS.map((item, index) => {
            return (
                <Link href={item.link} key={index}
                    className={`font-bold text-primary transition-all hover:text-secondary ${(pathname!=item.link)?"":"text-secondary border-b-2 border-secondary"}`}
                >
                    {item.name}
                </Link>
            )
        })}
    </div>);
}