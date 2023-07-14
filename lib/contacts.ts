import { ContactItemProps } from '@/components/main/ContactSection';

export const getContacts = function (): ContactItemProps[] {
  return [
    {
      title: 'GitHub',
      link: {
        display: '@kartikk-k',
        url: 'https://github.com/kartikk-k',
      },
    },
    {
      title: 'Twitter',
      link: {
        display: '@kartik_builds',
        url: 'https://twitter.com/kartik_builds',
      },
    },
    {
      title: 'LinkedIn',
      link: {
        display: '@kartik-khorwal',
        url: 'https://linkedin.com/in/kartik-khorwal',
      },
    },
    {
      title: 'Dribble',
      link: {
        display: '@kartikk12',
        url: 'https://dribbble.com/kartikk12',
      },
    },
    {
      title: 'Resume',
      link: {
        display: 'kartikkhorwal.com/resume',
        url: '/resume',
      },
    },
  ];
};
