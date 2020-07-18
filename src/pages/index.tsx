import fetch from 'isomorphic-unfetch'
import Link from 'next/link';


const Index: React.FC = ({ posts }) => {
  return (
    <>
    <div>
      {posts.map(posts => (
        <div key={posts.id}>
          <p>{posts.name}</p>
            <img src={posts.image.url} alt=""/>
          <p><Link href="/posts/[id]" as={`posts/${posts.id}`}>テスト</Link></p>
          <div dangerouslySetInnerHTML={{__html: `${posts.body}`}}></div>
          <p>{posts.id}</p>
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