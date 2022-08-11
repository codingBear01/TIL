type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
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
