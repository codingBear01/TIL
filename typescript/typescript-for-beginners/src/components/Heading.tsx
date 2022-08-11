type HeadingProps = {
  children: string;
};

export const Heading = (props: HeadingProps) => {
  const { children } = props;

  return <div>{children}</div>;
};
