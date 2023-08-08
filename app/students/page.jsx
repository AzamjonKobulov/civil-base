import ActivityList from '../components/ActivityList';
import StudentsList from '../components/StudentsList';

async function fetchData() {
  const res = await fetch(
    'https://fake-api-civil-base.vercel.app/activities2',
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const res2 = await fetch('https://fake-api-civil-base.vercel.app/students2', {
    next: {
      revalidate: 60,
    },
  });

  const data2 = await res2.json();
  const data = await res.json();
  return { data, data2 };
}

export default async function page() {
  const { data, data2 } = await fetchData();

  return (
    <div>
      <h2>Minnesote Daycare</h2>
      <ActivityList data={data} />
      <StudentsList data={data2} />
    </div>
  );
}
