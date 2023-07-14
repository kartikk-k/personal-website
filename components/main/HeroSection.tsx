import Image from 'next/image';
import Section from '../layout/Section';
import Button from '../ui/Button';
import LinkText from '../ui/LinkText';
import Callout from './Callout';
import Header from './Header';
import { useRouter } from 'next/router';

const HeroSection: React.FunctionComponent = () => {
  const router = useRouter()
  return (
    <main className="hero-section" id="hero">
      <Header />
      <Section>
        <h2 className="about-heading leading-snug font-medium text-base text-zinc-900">
          {'about me.'}
        </h2>
        <div className="about-content-wrapper leading-6 text-sm font-normal text-zinc-500 mt-4">
          <p>
            {
              "I am passionate developer who loves to build real world applications with professional design and deep diving into different technologies. I made my first open-source contribution in Jan 2023 in Supabase. Further I aim to build projects that solves real problem and provides high quality user experience."
            }
          </p>
        </div>
        <Callout className="mt-4">
          <p>
            {
              'I am currently open for full-time engineering roles, which involves user interface and experience design, frontend development, fullstack development and open-source projects.'
            }
          </p>
          <p className="mt-2 mb-4">
            {
              'A collaborative team of engineers and designers, who are building great products. Interested in working together? Feel free to reach out!'
            }
          </p>
          <div className="flex flex-row items-center justify-start gap-4">
            <Button onClick={() => router.push('#contact')}>
              {'Connect with me'}
            </Button>
            <LinkText
              href={'/resume'}
              className="text-zinc-600 font-medium text-sm">
              {'Resume'}
            </LinkText>
          </div>
        </Callout>
      </Section>
    </main>
  );
};

export default HeroSection;
