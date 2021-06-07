import { AppointmentItemFragment } from "generated/graphql";

type Props = {
  appointment: AppointmentItemFragment;
};

const TodoItem = ({ appointment }: Props) => {
  const { title, place, datetime } = appointment;

  return (
    <div>
      <h2 style={{ fontSize: "1.1rem", marginBlock: 4 }}>{title}</h2>
      <div>Place: {place}</div>
      <div>Date and time: {new Date(datetime).toLocaleString()}</div>
    </div>
  );
};

export default TodoItem;
