import { CraftProps } from '@/pages/crafts';

export const getCrafts = function (): CraftProps[] {
  return [
    {
      craftTitle: 'Toast Notification',
      craftDescription:
        'Beautiful animated notification made with sonner, framer-motion & tailwind.',
      linkType: 'internal',
      craftSlug: 'toast-notification',
    },
  ];
};

interface DateType {
  date?: number;
  month?: string;
  year: number;
}

interface HeaderPayloadType {
  playloadStatus?: boolean;
  header?: string;
  description?: string;
  uploadedAt?: DateType;
}

export const getCraftHeader = function ({
  craftSlug,
}: {
  craftSlug: string;
}): HeaderPayloadType {
  let headerPayload: HeaderPayloadType = {
    playloadStatus: false,
  };
  getCrafts()?.map((craft) => {
    if (craftSlug === `/crafts/${craft?.craftSlug}`) {
      headerPayload = {
        playloadStatus: true,
        header: craft?.craftTitle,
        description: craft?.craftDescription,
        uploadedAt: {
          month: 'Mar',
          year: 2023,
        },
      };
    }
  });

  return headerPayload;
};
