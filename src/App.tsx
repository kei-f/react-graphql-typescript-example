import ScheduleItem from "components/ScheduleItem";
import { useAppQuery } from "generated/graphql";

function App() {
  const { data, error, loading } = useAppQuery();

  if (error) return <div>Error</div>;

  if (loading) return <div>Loading...</div>;

  if (!data) return null;

  return (
    <div>
      {data.schedule.map((item) => (
        <ScheduleItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;
