import { TagFragment } from "generated/graphql";

type Props = {
  tag: TagFragment;
};

const Tag = ({ tag }: Props) => {
  const { label, color } = tag;

  return (
    <div
      style={{
        display: "inline-block",
        marginRight: 4,
        padding: "2px 8px",
        borderRadius: 4,
        backgroundColor: color,
        color: "white",
      }}
    >
      {label}
    </div>
  );
};

export default Tag;
