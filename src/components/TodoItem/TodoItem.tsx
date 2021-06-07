import Tag from "components/Tag";
import { TodoItemFragment } from "generated/graphql";

type Props = {
  todo: TodoItemFragment;
};

const TodoItem = ({ todo }: Props) => {
  const { title, description, tags } = todo;

  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
      <div>
        {tags.map((tag) => (
          <Tag key={tag.id} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default TodoItem;
