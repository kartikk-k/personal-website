import Section from '@/components/layout/Section';
import ViewContainer from '@/components/layout/ViewContainer';
import Header from '@/components/main/Header';
import MetaHead from '@/components/seo/MetaHead';
import Button from '@/components/ui/Button';
import { getCrafts } from '@/lib/crafts';
import Link from 'next/link';
import React from 'react';

type CraftLinkType = 'internal' | 'external';
interface CraftProps {
  craftTitle?: string;
  linkType?: CraftLinkType;
  craftDescription?: string;
  craftSlug?: string;
  craftLink?: string;
}

const Crafts: React.FunctionComponent = () => {
  return (
    <>
      <MetaHead
        title={'Crafts | Kartik Khorwal'}
        description={'A Collection of beatifully designed UI components for frontend.'}
        embedSource={{
          twitter:
            'https://ik.imagekit.io/kartikk/Frame_63.png?updatedAt=1689352124062',
          linkedin:
            'https://ik.imagekit.io/kartikk/Frame_63.png?updatedAt=1689352124062',
          og: 'https://ik.imagekit.io/kartikk/Frame_63.png?updatedAt=1689352124062',
        }}
      />
      <div className="crafts-view-container" id="crafts">
        <ViewContainer>
          <Header />
          <Section
            className="crafts-list-wrapper mt-8"
            id="crafts-list"
            aria-label="Crafts">
            <h2 className="about-heading leading-snug font-medium text-base text-zinc-900">
              {'crafts.'}
            </h2>
            <ul className="crafts-list mt-8 grid grid-cols-1 items-start gap-4">
              {getCrafts()?.map((craft: CraftProps, craftIndex: number) => {
                if (craft?.linkType === 'external' && craft?.craftLink) {
                  return (
                    <li className="craft-item" key={craftIndex}>
                      <Link
                        href={craft?.craftLink}
                        target={craft?.craftSlug ? '_self' : '_blank'}>
                        <h3 className="text-lg  hover:underline">
                          {craft?.craftTitle}
                        </h3>
                        <p className="text-sm font-normal text-zinc-500">
                          {craft?.craftDescription}
                        </p>
                      </Link>
                    </li>
                  );
                } else if (craft?.linkType === 'internal' && craft?.craftSlug) {
                  return (
                    <li className="craft-item" key={craftIndex}>
                      <Link
                        href={`/crafts/${craft?.craftSlug}`}
                        target={craft?.craftSlug ? '_self' : '_blank'}>
                        <div className='border-l-2 pl-4 hover:border-orange-300 transition-all'>
                          <h3 className="text-lg">
                            {craft?.craftTitle}
                          </h3>
                          <p className="text-sm font-normal text-zinc-500">
                            {craft?.craftDescription}
                          </p>
                        </div>
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </Section>
        </ViewContainer>
      </div>
    </>
  );
};

export default Crafts;
export type { CraftProps };

// React.useMemo(() => (async () => await myLongAsyncFunction(args)), [args])
