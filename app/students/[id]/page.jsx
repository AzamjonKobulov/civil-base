import AttendanceDataList from '../../components/AttendanceDataList';
import PersonalActions from '../../components/PersonalActions';
import PersonalInfo from '../../components/PersonalInfo';
import StudentStats from '../../components/StudentsStats';

const data = [
  {
    id: 1,
    date: '1 April, 2023',
    day: 'Monday',
    hours: 5,
    attendance: 'Present',
  },
  {
    id: 2,
    date: '2 April, 2023',
    day: 'Tuesday',
    hours: 4,
    attendance: 'Present',
  },
  {
    id: 3,
    date: '3 April, 2023',
    day: 'Wednesday',
    hours: 0,
    attendance: 'Absent',
  },
  {
    id: 4,
    date: '4 April, 2023',
    day: 'Thursday',
    hours: 5,
    attendance: 'Present',
  },
  {
    id: 5,
    date: '5 April, 2023',
    day: 'Friday',
    hours: 0,
    attendance: 'Holiday',
  },
  {
    id: 6,
    date: '6 April, 2023',
    day: 'Saturday',
    hours: 2,
    attendance: 'Present',
  },
  {
    id: 7,
    date: '7 April, 2023',
    day: 'Sunday',
    hours: 0,
    attendance: 'Holiday',
  },
  {
    id: 8,
    date: '8 April, 2023',
    day: 'Monday',
    hours: 2,
    attendance: 'Present',
  },
  {
    id: 9,
    date: '9 April, 2023',
    day: 'Tuesday',
    hours: 0,
    attendance: 'Holiday',
  },
];

export default function page({ params: { id } }) {
  return (
    <div>
      <PersonalActions />
      <PersonalInfo id={id} />
      <StudentStats />
      <AttendanceDataList data={data} />
    </div>
  );
}
