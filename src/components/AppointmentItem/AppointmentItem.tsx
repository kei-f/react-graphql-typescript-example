import Tag from "components/Tag";
import { AppointmentItemFragment } from "generated/graphql";

type Props = {
  appointment: AppointmentItemFragment;
};

const TodoItem = ({ appointment }: Props) => {
  const { title, place, datetime, tags } = appointment;

  return (
    <div>
      <div>{title}</div>
      <div>{place}</div>
      <div>{datetime}</div>
      <div>
        {tags.map((tag) => (
          <Tag key={tag.id} tag={tag} />
        ))}
      </div>
    </div>
  );
};

export default TodoItem;
