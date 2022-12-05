import { FC } from "react";

type headingPropsType = {
  tag?: keyof JSX.IntrinsicElements,
  text: string
}

const Heading: FC<headingPropsType> = ({ tag, text }) => {
  const Tag = tag || 'h1';

  return <Tag>{text}</Tag>
};

export default Heading;
