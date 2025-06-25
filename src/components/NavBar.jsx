import Link from "next/link";



const ALL_LINKS = [
    {
        name: "Home",
        link: "/"
    },
    
    {
        name: "Experience",
        link: "/experience"
    },

    {
        name: "Projects",
        link: "/projects"
    },

]

export const NavBar = () => {
    return (<div className="flex gap-8 items-center w-[300px]">
        {ALL_LINKS.map((item, index) => {
            return (
                <Link href={item.link} key={index}
                    className="font-bold text-primary transition-all hover:text-secondary"
                >
                    {item.name}
                </Link>
            )
        })}
    </div>);
}