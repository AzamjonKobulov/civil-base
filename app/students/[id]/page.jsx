import PersonalActions from '@/app/components/PersonalActions';
import PersonalInfo from '@/app/components/PersonalInfo';

export default function page({ params: { id } }) {
  return (
    <div>
      <PersonalActions />
      <PersonalInfo id={id} />
    </div>
  );
}
