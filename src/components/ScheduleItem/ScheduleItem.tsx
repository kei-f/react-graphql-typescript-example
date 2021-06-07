import TodoItem from "components/TodoItem";
import AppointmentItem from "components/AppointmentItem";
import Tag from "components/Tag";
import { ScheduleItemFragment } from "generated/graphql";

type Props = {
  item: ScheduleItemFragment;
};

const renderChild = (item: ScheduleItemFragment) => {
  switch (item.__typename) {
    case "Todo":
      return <TodoItem todo={item} />;
    case "Appointment":
      return <AppointmentItem appointment={item} />;
  }
  return null;
};

const ScheduleItem = ({ item }: Props) => {
  return (
    <div style={{ margin: 20, padding: 20, border: "1px solid #ddd" }}>
      <div style={{ textAlign: "right" }}>
        {item.tags.map((tag) => (
          <Tag key={tag.id} tag={tag} />
        ))}
      </div>
      {renderChild(item)}
    </div>
  );
};

export default ScheduleItem;
