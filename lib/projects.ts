import { ProjectItemProps } from '@/components/main/ProjectSection';

export const getProjects = function (): ProjectItemProps[] {
  let projects: ProjectItemProps[] = [
    {
      projectTitle: 'Twitter Clone',
      projectData: {
        liveURL: 'https://twitter-clone-bice-three.vercel.app/',
        githubURL: 'https://github.com/kartikk-k/twitter-clone',
        // relatedLinks: [
        //   {
        //     label: 'Figma',
        //     link: 'https://www.figma.com/file/jW2MWJ0uw6rjRHJgyyKNjv/HEKORS-Website-UI?node-id=1%3A2&t=KNpN3CUgsSSaeNem-1',
        //   },
        // ],
      },
      description: [
        'Twitter Clone app including major features like tweet, like, comment, follow/unfollow, Authentication and protected actions.',
        'Building complete database using Supabase.',
      ],
      tech: [
        'NextJS',
        'React',
        'TailwindCSS',
        'StrapiCMS',
        'Heroku',
        'Typescript',
        'Figma',
      ],
      category: ['frontend', 'database', 'design'],
      status: 'Archived',
    },
  ];

  return projects.reverse();
};
