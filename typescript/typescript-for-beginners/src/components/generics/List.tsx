type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export const List = <T extends { id: number; first: string; last: string }>(
  props: ListProps<T>
) => {
  const { items, onClick } = props;

  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => (
        <div key={item.id} onClick={() => onClick(item)}>
          {item.id}
          {item.first}
          {item.last}
        </div>
      ))}
    </div>
  );
};
