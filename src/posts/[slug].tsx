import fetch from 'isomorphic-unfetch';

const Post = ({posts}) => {
  return (
    <div>
      <h1>{posts.title}</h1>
    </div>
  );
};

export const getStaticPaths = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };

  const res = await fetch(process.env.ENDPOINT + '/spice_list', key);
  const repos = await res.json();

  const paths = repos.contents.map(repo => `/posts/${repo.id}`);
  return {paths, fallback: false};
};

export const getStaticProps = async context => {
  const id = context.params.id;

  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };

  const res = await fetch(process.env.ENDPOINT + '/spice_list/' + id, key);
  const posts = await res.json();

  return {
    props: {
      posts: posts,
    },
  };
};

export default Post;