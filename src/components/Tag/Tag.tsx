import { TagFragment } from "generated/graphql";

type Props = {
  tag: TagFragment;
};

const Tag = ({ tag }: Props) => {
  const { label, color } = tag;

  return <div style={{ backgroundColor: color, color: "white" }}>{label}</div>;
};

export default Tag;
