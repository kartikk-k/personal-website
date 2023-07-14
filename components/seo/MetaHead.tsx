import Head from 'next/head';

interface MetaHeadProps extends React.MetaHTMLAttributes<HTMLMetaElement> {
  title?: string;
  description?: string;
  embedSource?:
    | 'default'
    | {
        twitter?: string;
        linkedin?: string;
        og?: string;
      };
}

const MetaHead: React.FunctionComponent<MetaHeadProps> = ({
  title = 'Kartik Khorwal',
  description = 'Hey! I am an developer building web apps with stunning designs.',
  embedSource = 'default',
  ...attr
}) => {
  return (
    <Head {...attr}>
      <title>{title}</title>
      <link rel="shortcut icon" href="/media/icon.ico" />
      <meta name="title" content="Kartik Khorwal" />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.kartikkhorwal.com/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={
          embedSource === 'default'
            ? 'https://ik.imagekit.io/kartikk/Frame_63.png?updatedAt=1689352124062'
            : embedSource?.og
        }
      />

      <meta
        property="twitter:card"
        content={
          embedSource === 'default'
            ? 'https://ik.imagekit.io/kartikk/Frame_63.png?updatedAt=1689352124062'
            : embedSource?.twitter
        }
      />
      <meta property="twitter:url" content="https://www.kartikkhorwal.com/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={
          embedSource === 'default'
            ? 'https://ik.imagekit.io/kartikk/Frame_63.png?updatedAt=1689352124062'
            : embedSource?.twitter
        }
      />
    </Head>
  );
};

export default MetaHead;
