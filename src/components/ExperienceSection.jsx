"use client";

import { Button } from "./ui/button";
import { Card } from "./ui/card";

const EXPERIENCE = [
  {
    'company': 'AIGuru',
    'dates': 'Summer 2025',
    'role': 'Generative AI Engineer',
    'description': 'Built a custom OCR and text-segmentation pipeline to process '
  },
  {
    'company': 'Extreme Dynamics Lab',
    'dates': 'Summer 2025',
    'role': 'AI/ML + Algorithmic Computing Researcher',
    'description': 'Built a custom OCR and text-segmentation pipeline to process '
  },
  {
    'company': 'TAIT Global',
    'role': 'Software and Controls Integration',
    'dates': 'Summer 2024',
    'description': 'Provided software automation for client projects, including for Justin Timberlake and the World Financial Group'
  },
  {
    'company': '',
    'role': 'Private Tutor',
    'dates': 'Summer 2023 - Present',
    'description': 'Provided software automation for client projects, including for Justin Timberlake and the World Financial Group'
  }
];

export const ExperienceSection = ({props}) => {
  return (
    <Card classes="max-w-xl mx-6" title="Work Experience"
    content={(
      <ol className="relative border-s border-gray-700 mx-6">
        {
          EXPERIENCE.map((item, index) => {
            return (<li className={`${(index == EXPERIENCE.length - 1) ? "" : "mb-6"} ms-4`} key={index}>
              <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-500">{item.dates}</time>
              <h3 className="text-lg font-semibold text-white">{item.role}{(item.company=="")?"":" - "}<i>{item.company}</i> </h3>
              <p className="mb-4 text-base font-normal text-gray-400">{item.description}</p>
            </li>)
          })
        }
      </ol>
    )}
    />
  )
}