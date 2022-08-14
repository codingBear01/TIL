type RandomNumberType = {
  value: number;
};

type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type NegativeNumber = RandomNumberType & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};
type Zero = RandomNumberType & {
  isPositive?: never;
  isNegative?: never;
  isZero: boolean;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

export const RandomNumber = (props: RandomNumberProps) => {
  const { value, isPositive, isNegative, isZero } = props;

  return (
    <div>
      {value} {isPositive && 'Positive'} {isNegative && 'Negative'}{' '}
      {isZero && 'Zero'}
    </div>
  );
};
