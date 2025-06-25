"use client";
import { useState } from "react";

const EXPERIENCE = [
  {
    'company': 'TAIT Global',
    'role': 'Software and Controls Integration',
    'dates': 'Summer 2024',
    'description': [
      'Provided software automation for client projects, including for Justin Timberlake and the World Financial Group',
      'Programmed and repaired Beckoff and Mitsubishi programmable logic controllers for over 320 electric hoist drives',
      'Created automation code and safety fallbacks for various controllers using C',
      'Investigated novel automation and path-planning techniques for future productions'
    ]
  },
  {
    'company': 'AI Guru',
    'dates': 'Summer 2025',
    'role': 'Generative AI Engineer',
    'description': [
      'Built a custom OCR and text-segmentation pipeline to process ', 'item b', 'item d'
    ]
  }
];

const ExperienceCard = ({company, dates, role, description, isActive, onShow}) => {
  return (
    <div onClick={onShow} data-state={isActive ? "open" : "closed"} 
         className="flex flex-col gap-0 px-2 italic data-[state=open]:not-italic data-[state=open]:text-secondary 
         text-primary hover:not-italic hover:text-secondary"
    >
      <div className="flex justify-between items-center gap-8">
        <div className="font-bold text-lg leading-[1.3]">{company}</div>
        <div className="font-light not-italic text-sm leading-[1.3]">{dates}</div>
      </div>
      <div className="font-light text-sm">{role}</div>
      {isActive && <div className="text-primary text-sm"> 
        <ul className="list-disc mx-6 mt-0.5">
          {
            description.map((item, index) => {return <li key={index}>{item}</li>; })
          }
        </ul>
      </div>}
    </div>
  )
}

export const ExperienceSection = ({props}) => {
  const [activeContainer, setActiveContainer] = useState(-1);
  const toggleContainer = (i) => {
    if (i === activeContainer) setActiveContainer(-1);
    else setActiveContainer(i);
  };

  return (<div className={props}>
    <div className="text-primary text-2xl font-medium p-2">Work Experience</div>
    <div className="flex flex-col gap-3 px-4">
    {
      EXPERIENCE.map((item, index) => {
        return <ExperienceCard 
          company={item.company} 
          role={item.role} dates={item.dates}
          key={index} 
          description={item.description}
          isActive={activeContainer === index} onShow={() => toggleContainer(index)} />
      })
    }
    </div>
  </div>);
}