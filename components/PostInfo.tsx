import { FC } from "react";
import { postType } from "../types";
import Heading from "./Heading";

type postInfoPropsType = {
  post: postType,
}

const PostInfo: FC<postInfoPropsType> = ({ post }) => {
  const { title, body } = post || {};

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
