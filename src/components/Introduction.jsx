"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";

const CONTENT = {
  "role": "Machine Learning and Robotics Engineer",
  "description": "I research and design novel machine learning and reinforcement techniques to enable robots and other intelligent systems.",
  "github_link": "https://github.com/TheConverseEngineer",
  "linkedin_link": "https://www.linkedin.com/in/vrajparikh2023/"
}

export const Introduction = () => {
    return (
    <div className="mx-[5%] h-full flex flex-col gap-4 max-w-xl">
        <div>
            <div className="text-center font-medium text-primary text-[42px] leading-[1.35]">Hi! I&apos;m <span className="text-secondary">Vraj Parikh</span></div>
            <div className="text-center font-light italic text-primary text-[16px]">{CONTENT.role}</div>
        </div>
        <div className="text-center font-light text-primary text-[14px]">
            {CONTENT.description}
        </div>
        <div className="flex justify-center gap-4">
            <Button variant="outline">View full CV</Button>
            <div className="flex items-center justify-around gap-2">
            <a target="_blank" href={CONTENT.github_link} rel="noopener noreferrer" className="border-1 border-accent h-7 w-7 flex justify-center items-center rounded-full text-accent hover:text-background hover:bg-accent">
                <IoLogoGithub size="20"/>
            </a>
            <a target="_blank" href={CONTENT.linkedin_link} rel="noopener noreferrer" className="border-1 border-accent h-7 w-7 flex justify-center items-center rounded-full text-accent hover:text-background hover:bg-accent">
                <FaLinkedinIn size="16"/>
            </a>
            </div>
        </div>
    </div>
    );
}