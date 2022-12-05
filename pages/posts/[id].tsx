import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { FC } from 'react';
import PostInfo from '../../components/PostInfo';
import { postType } from '../../types';

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  const paths = data.map(({ id }) => ({
    params: { id: id.toString() },
  }))

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context.params);

  const { id } = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      post: data
    },
  }
};

type postPropsType = {
  post: postType;
}

const Post: FC<postPropsType> = ({ post }) => (
  <>
    <Head>
      <title>Post Page</title>
    </Head>

    <PostInfo post={post} />
  </>
);

export default Post;
