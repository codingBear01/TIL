type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition} - ${VerticalPosition}`, 'center - center'>
    | 'center';
};

export const Toast = (props: ToastProps) => {
  const { position } = props;
  return <div>Toast Notification Position - {position}</div>;
};
