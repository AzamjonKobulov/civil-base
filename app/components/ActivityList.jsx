import Activity from './Activity';

export default function ActivityList({ data }) {
  return (
    <div className="mt-6">
      <h4>Recent Activities</h4>
      <div className="rounded-lg shadow mt-5 lg:mt-9">
        {data.map((el) => (
          <Activity key={el.id} item={el} />
        ))}
      </div>
    </div>
  );
}
