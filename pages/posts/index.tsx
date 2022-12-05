import Heading from "../../components/Heading";
import Head from 'next/head';
import Link from "next/link";
import { postType } from "../../types";
import { FC } from "react";

export const getStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      posts: data
    },
  }
};

type postsPropsType = {
  posts: postType[];
}

const Posts: FC<postsPropsType> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>

      <Heading text="Posts List:" />

      <ul>
        {posts && posts.map(({ id, title }) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
};

export default Posts;
