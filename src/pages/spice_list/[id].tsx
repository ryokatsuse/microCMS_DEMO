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
      <div>
        <p>{detail.name}</p>
        <img src={detail.image.url} alt="" />
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
