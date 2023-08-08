import Actions from './components/Actions';
import ActivityList from './components/ActivityList';
import PinnedList from './components/PinnedList';
import StudentsList from './components/StudentsList';

async function fetchData() {
  const res = await fetch('https://fake-api-civil-base.vercel.app/activities', {
    next: {
      revalidate: 60,
    },
  });

  const res2 = await fetch('https://fake-api-civil-base.vercel.app/students', {
    next: {
      revalidate: 60,
    },
  });

  const data2 = await res2.json();
  const data = await res.json();
  return { data, data2 };
}

export default async function Home() {
  const { data, data2 } = await fetchData();

  return (
    <div>
      <Actions />
      <PinnedList />
      <ActivityList data={data} />
      <StudentsList data={data2} />
    </div>
  );
}
