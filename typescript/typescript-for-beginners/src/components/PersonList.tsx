import { Name } from '../types/Person.types';

type PersonListProps = {
  names: Name[];
};

export const PersonList = (props: PersonListProps) => {
  const { names } = props;

  return (
    <ul>
      {names.map((name) => (
        <li key={name.first}>
          {name.first}
          {name.last}
        </li>
      ))}
    </ul>
  );
};
