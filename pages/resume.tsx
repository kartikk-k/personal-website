import Section from '@/components/layout/Section';
import ViewContainer from '@/components/layout/ViewContainer';
import MetaHead from '@/components/seo/MetaHead';
import Button from '@/components/ui/Button';
import LinkText from '@/components/ui/LinkText';
import Image from 'next/image';

const ResumeView: React.FunctionComponent = () => {
  return (
    <>
      <MetaHead
        title={'Resume | Kartik Khorwal'}
        description={
          'Checkout resume of Kartik Khorwal. On Google Drive or Download as a PDF'
        }
        embedSource={{
          twitter:
            'https://ik.imagekit.io/kartikk/Frame_63.png?updatedAt=1689352124062',
          linkedin:
            'https://ik.imagekit.io/kartikk/Frame_63.png?updatedAt=1689352124062',
          og: 'https://ik.imagekit.io/kartikk/Frame_63.png?updatedAt=1689352124062',
        }}
      />
      <div className="resume-view-container">
        <ViewContainer className={'my-6'}>
          <Image
            src={'/media/resume.png'}
            width={'360'}
            height={'200'}
            alt={'resume-cover'}
            className={'resume-cover rounded-md border-2 cursor-pointer shadow-lg mx-auto'}
            onClick={() =>
              window.open(
                'https://drive.google.com/file/d/1yJbgnRAMaJGrZ5sDpp48kF9sUkeFRu-Q/view',
              )
            }
            priority
          />
          <Section
            className={
              'resume-viewer-actions-list-wrapper mt-8 mx-auto w-fit flex flex-row items-center justify-start gap-4'
            }>
            <Button
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/1yJbgnRAMaJGrZ5sDpp48kF9sUkeFRu-Q/view',
                )
              }>
              {'Resume on Drive'}
            </Button>
            <Button
              onClick={() => (window.open('/utils/resume.pdf', '_blank'))}>
              {'Resume as PDF'}
            </Button>
          </Section>
          <LinkText href={'/'} className={'mx-auto w-fit mt-12'}>
            {'Back to home'}
          </LinkText>
        </ViewContainer>
      </div>
    </>
  );
};

export default ResumeView;
