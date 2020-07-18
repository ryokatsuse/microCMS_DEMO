import fetch from 'isomorphic-unfetch';

const BlogId = ({posts}) => {
  return (
    <div>
      <div>
        {posts.tags.map(tag => (
          <div key={tag.id}>
            <span>{tag.name}</span>
          </div>
        ))}
      </div>
      <div dangerouslySetInnerHTML={{__html: `${posts.body}`}}></div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };

  const res = await fetch(process.env.endpoint + '/spice_list', key);
  const repos = await res.json();

  const paths = repos.contents.map(repo => `/spice_list/${repo.id}`); 
    return {paths, fallback: false};
  };

export const getStaticProps = async context => {
  const id = context.params.id;

  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };

  const res = await fetch(
    `https://your.microcms.io/api/v1/spice_list/${id}`,
    key,
  );
  const blog = await res.json();

  return {
    props : {
      blog: blog,
    }
  };
};

export default BlogId;