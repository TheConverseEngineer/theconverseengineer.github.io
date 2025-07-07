"use client";

import { Button } from "./ui/button";

const EXPERIENCE = [
  {
    'company': 'GuruAI',
    'dates': 'Summer 2025',
    'role': 'Generative AI Engineer',
    'description': 'Built a custom OCR and text-segmentation pipeline to process '
  },
  {
    'company': 'TAIT Global',
    'role': 'Software and Controls Integration',
    'dates': 'Summer 2024',
    'description': 'Provided software automation for client projects, including for Justin Timberlake and the World Financial Group'
  }
];

export const ExperienceSection = ({props}) => {
  return (
    <div className="border-[.5px] border-gray-800 rounded-xl bg-background shadow-2xl max-w-xl mx-6">
      <div className="w-full rounded-t-xl text-white text-3xl px-6 py-2 bg-card mb-6"> Work Experience </div>
      <ol className="relative border-s border-gray-700 mx-6">
        {
          EXPERIENCE.map((item, index) => {
            return (<li className={`${(index == 1) ? "" : "mb-10"} ms-4`} key={index}>
              <div className="absolute w-3 h-3 bg-gray-900 rounded-full mt-1.5 -start-1.5 border border-white"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-500">{item.dates}</time>
              <h3 className="text-lg font-semibold text-white">{item.role} - <i>{item.company}</i></h3>
              <p className="mb-4 text-base font-normal text-gray-400">{item.description}</p>
            </li>)
          })
        }
      </ol>
      <Button variant='outline' className='mx-6 mb-4'>See all experience -&gt; </Button>
    </div>
  )
}