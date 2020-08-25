import React from 'react';
import Head from 'next/head';

type Props = {
  description?: string
  title?: string
};

const Meta: React.FC<Props> = ({ description, title }) => {
  return (
    <Head>
      <meta title={title ? title : `スパイス図鑑`} />
      <meta
        name="description"
        content={description ? description : `スパイス図鑑`}
      />
    </Head>
  );
};

export default Meta;