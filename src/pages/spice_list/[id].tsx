import fetch from 'isomorphic-unfetch';
import { GetStaticPaths } from 'next'
import { server } from '../../../config'

const BlogId = ({detail}) => {
  return (
    <div>
      <p>{detail.name}</p>
      <img src={detail.image.url} alt=""/>
      <div dangerouslySetInnerHTML={{__html: `${detail.body}`}}></div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };

  const res = await fetch(`${server}` + '/spice_list', key);
  const repos = await res.json();

  const paths = repos.contents.map(repo => `/spice_list/${repo.id}`); 
    return {paths, fallback: false};
};

export const getStaticProps = async context => {
  const id = context.params.id;
  console.log(id)

  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };

  const res = await fetch(
    process.env.ENDPOINT +`/spice_list/${id}`,
    key,
  );
  const detail = await res.json();

  return {
    props : {
      detail: detail,
    }
  };
};

export default BlogId;