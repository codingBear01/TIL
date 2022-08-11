import { PersonProps } from './types/Person.types';

export const Person = (props: PersonProps) => {
  const { name } = props;

  return (
    <div>
      {name.first} {name.last}
    </div>
  );
};
