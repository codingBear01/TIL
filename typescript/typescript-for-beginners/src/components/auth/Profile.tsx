export type ProfileProps = {
  name: string;
};

export const Profile = (props: ProfileProps) => {
  const { name } = props;

  return <div>Private Profile component. Name is {name}</div>;
};
