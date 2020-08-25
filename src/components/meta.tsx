import React from 'react';
import Head from 'next/head';

type Props = {
  description?: string;
  title?: string;
};

const Meta: React.FC<Props> = ({ description, title }) => {
  return (
    <Head>
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta title={title ? title : `スパイス図鑑`} />
      <meta
        name="description"
        content={description ? description : `スパイス図鑑`}
      />
    </Head>
  );
};

export default Meta;