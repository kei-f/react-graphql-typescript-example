import Tag from "components/Tag";
import { TodoItemFragment } from "generated/graphql";

type Props = {
  todo: TodoItemFragment;
};

const TodoItem = ({ todo }: Props) => {
  const { title, description, deadline, tags } = todo;

  return (
    <div>
      <div style={{ textAlign: "right" }}>
        {tags.map((tag) => (
          <Tag key={tag.id} tag={tag} />
        ))}
      </div>
      <h2 style={{ fontSize: "1.1rem", marginBlock: 4 }}>{title}</h2>
      <p>{description}</p>
      <div>Due date: {new Date(deadline).toLocaleString()}</div>
    </div>
  );
};

export default TodoItem;
