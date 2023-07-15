import Image from 'next/image';
import Section from '../layout/Section';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header: React.FunctionComponent = () => {
  const router = useRouter()
  return (
    <Section className="flex flex-row items-center justify-start gap-4 mt-12 max-sm:items-start max-md:items-start">
      <Link
        href={'/'}
        className="profile-icon-wrapper hover:scale-110 duration-300 relative w-fit h-fit"
      >
        <Image
          src={'/media/profile.jpeg'}
          alt="kartik-profile"
          width={'80'}
          height={'80'}
          className="rounded-full transition-all hover:grayscale"
          priority
        />
        {/* <motion.div
          className="box icon-content-wrapper animation-delay absolute px-2 py-1 bg-white shadow rounded-full text-sm left-14 bottom-0 cursor-default select-none max-sm:left-8 max-sm:text-xs max-sm:px-1 max-sm:py-0.5"
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
          {'🚀'}
        </motion.div> */}
      </Link>
      <div>
        <h1 className="welcome-text flex leading-snug font-semibold text-2xl text-zinc-900">
          {'👋 Hey, I am Kartik'}
        </h1>
        <div className="leading-snug font-normal text-base text-zinc-500 mt-2">
          <p>
            {'Passionate developer and designer'}
          </p>
          <p>{19 + ', he/him'}</p>
        </div>
      </div>
    </Section>
  );
};

export default Header;
