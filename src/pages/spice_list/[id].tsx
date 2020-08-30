import fetch from 'isomorphic-unfetch'
import { GetStaticPaths } from 'next'
import Layout from '../../components/layout'
import { microCmsData } from '../../types/microCmsData'

type Props = {
  detail: microCmsData
}

const DetailId: React.FC<Props> = ({ detail }) => {
  return (
    <Layout>
      <div className="max-w-2xl mt-10 mb-0 ml-auto mr-auto">
        <h1 className="font-bold text-xl mb-5">{detail.name}</h1>
        <img
          className="object-contain h-48 mt-0 mb-5 ml-auto mr-auto"
          src={detail.image.url}
          alt=""
        />
        <table className="table-auto mt-5 mb-5 ml-auto mr-auto">
          <tbody>
            <tr>
              <td className="border px-4 py-2">科名</td>
              <td className="border px-4 py-2">原産地</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">{detail.tags[0].name}</td>
              <td className="border px-4 py-2">{detail.origin}</td>
            </tr>
          </tbody>
        </table>
        <div dangerouslySetInnerHTML={{ __html: `${detail.body}` }}></div>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY as string },
  }

  const res = await fetch(process.env.ENDPOINT + '/spice_list', key)
  const repos = await res.json()

  const paths: Array<string> = repos.contents.map(
    (repo: { id: string }) => `/spice_list/${repo.id}`
  )
  return { paths, fallback: false }
}

export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id

  const key = {
    headers: { 'X-API-KEY': process.env.API_KEY as string },
  }

  const res = await fetch(process.env.ENDPOINT + `/spice_list/${id}`, key)
  const detail = await res.json()

  return {
    props: {
      detail: detail,
    },
  }
}

export default DetailId
