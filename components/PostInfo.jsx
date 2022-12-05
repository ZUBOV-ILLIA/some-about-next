import Heading from "./Heading";

const PostInfo = ({ post }) => {
  const { id, title, body } = post || {};

  if (!post) {
    return <Heading tag="h3" text="Empty contact" />
  }

  return (
    <>
      <Heading tag="h3" text={title} />

      <p>
        {body}
      </p>
    </>
  );
};

export default PostInfo;
