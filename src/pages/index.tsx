import fetch from 'isomorphic-unfetch'
import Link from 'next/link';


const Index: React.FC = ({ posts }) => {
  return (
    <>
    <div>
      {posts.map(posts => (
        <div key={posts.id}>
          <p>{posts.name}</p>
          <Link href="/posts/[slug]" as={`posts/${posts.id}`}>
            <img src={posts.image.url} alt=""/>
          </Link>
          <p>{posts.body}</p>
        </div>
      ))}
    </div>
    </>
  )
}

export const getStaticProps = async () => {
  const key = {
    headers: {'X-API-KEY': process.env.API_KEY},
  };

  const res = await fetch(process.env.ENDPOINT + '/spice_list', key);

  const data = await res.json();

  return {
    props: {
      posts: data.contents,
    },
  };
};

export default Index;