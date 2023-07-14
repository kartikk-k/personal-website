import { ExperienceItemProps } from '@/components/main/ExperienceSection';

export const getExperiences = function (): ExperienceItemProps[] {
  return [
    {
      experienceTitle: 'fullstack developer & UI design Intern',
      experienceDescription: [
        'Lead the technical team for Frontend, Backend & App development while developing the product from scratch. I Also designed Database and application architecture for the product.',
        'Using Javascript,Typescript React, NextJS, TailwindCSS, Django, Postman, Supabase for building the project.',
      ],
      experienceOrg: {
        name: 'Medref',
        // link: 'https://joinclamp.com',
        websiteDisplayName: 'medref.in',
      },
      experienceStatus: {
        startAt: 'May, 2023',
        endAt: 'Jul, 2023',
      },
    },
  ];
};
