type ButtonProps = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = (props: ButtonProps) => {
  const { handleClick } = props;

  return <button onClick={(e) => handleClick(e, 1)}>Button</button>;
};
