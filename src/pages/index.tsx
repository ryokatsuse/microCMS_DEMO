import fetch from 'isomorphic-unfetch'
import Link from 'next/link';
import Layout from '../components/layout';
import { microCmsData } from '../../types/microCmsData'

// TODO microCMSのAPIに型定義つける
type Props = {
  dataList: Array<microCmsData>
};


const Index: React.FC<Props> = ({ dataList }) => {
  return (
    <Layout>
      <div className="flex justify-start items-center mt-10 p-5">
        {dataList.map(dataList => (
          <Link
            key={dataList.id}
            href="/spice_list/[id]"
            as={`spice_list/${dataList.id}`}><a>
            <div
              className="max-w-sm rounded overflow-hidden shadow-lg mr-6"
              key={dataList.id}>
                <img
                  className="object-contain h-48"
                  src={dataList.image.url} alt=""/>
                <div className="px-6 py-4">
                <p
                  className="font-bold text-xl mb-2">{dataList.name}</p>
                <div
                  className="text-gray-700 text-base"
                  dangerouslySetInnerHTML={{__html: `${dataList.body}`}}></div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{dataList.tags[0].name}</span>
                </div>
            </div></a>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };

  const res = await fetch(process.env.ENDPOINT + '/spice_list', key)

  const data = await res.json()

  return {
    props: {
      dataList: data.contents,
    },
  };
};

export default Index