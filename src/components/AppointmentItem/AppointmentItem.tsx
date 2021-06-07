import Tag from "components/Tag";
import { AppointmentItemFragment } from "generated/graphql";

type Props = {
  appointment: AppointmentItemFragment;
};

const TodoItem = ({ appointment }: Props) => {
  const { title, place, datetime, tags } = appointment;

  return (
    <div>
      <div style={{ textAlign: "right" }}>
        {tags.map((tag) => (
          <Tag key={tag.id} tag={tag} />
        ))}
      </div>
      <h2 style={{ fontSize: "1.1rem", marginBlock: 4 }}>{title}</h2>
      <div>Place: {place}</div>
      <div>Date and time: {new Date(datetime).toLocaleString()}</div>
    </div>
  );
};

export default TodoItem;
