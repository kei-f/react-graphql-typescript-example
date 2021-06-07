import { TodoItemFragment } from "generated/graphql";

type Props = {
  todo: TodoItemFragment;
};

const TodoItem = ({ todo }: Props) => {
  const { title, description, deadline } = todo;

  return (
    <div>
      <h2 style={{ fontSize: "1.1rem", marginBlock: 4 }}>{title}</h2>
      <p>{description}</p>
      <div>Due date: {new Date(deadline).toLocaleString()}</div>
    </div>
  );
};

export default TodoItem;
