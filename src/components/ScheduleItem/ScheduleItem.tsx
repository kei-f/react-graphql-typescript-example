import TodoItem from "components/TodoItem";
import AppointmentItem from "components/AppointmentItem";
import { ScheduleItemFragment } from "generated/graphql";

type Props = {
  item: ScheduleItemFragment;
};

const ScheduleItem = ({ item }: Props) => {
  switch (item.__typename) {
    case "Todo":
      return <TodoItem todo={item} />;
    case "Appointment":
      return <AppointmentItem appointment={item} />;
  }
  return null;
};

export default ScheduleItem;
