type GreetProps = {
  name: string;
  msgCnt: number;
  isLogin: boolean;
};

export const Greet = (props: GreetProps) => {
  const { name, msgCnt, isLogin } = props;

  return (
    <div>
      <h2>
        {isLogin
          ? `Hi! ${name}! You have ${msgCnt} unread messages!`
          : 'Please Log In First'}
      </h2>
    </div>
  );
};
