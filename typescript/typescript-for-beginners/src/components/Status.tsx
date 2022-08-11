type StatusProps = {
  status: 'loading' | 'success' | 'error'; // 단순 string으로 들어오면 의도하지 않은 값도 들어오므로 활용하는 값이 한정되어 있다면 union type 선언
};

export const Status = (props: StatusProps) => {
  const { status } = props;

  let message;

  if (status === 'loading') {
    message = 'Loading...';
  } else if (status === 'success') {
    message = 'Data fetched successfully!';
  } else if (status === 'error') {
    message = 'Error fetching data';
  }

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};
