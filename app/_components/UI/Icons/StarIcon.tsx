export default function StarIcon({
  className,
  fill,
}: {
  className: string;
  fill: string;
}) {
  return (
    <svg
      width="11"
      height="10"
      viewBox="0 0 11 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4473 3.81931H6.63804L5.45899 0L4.28043 3.81931H0.470703L3.55438 6.18018L2.37629 10L5.45899 7.63913L8.54218 10L7.36361 6.18018L10.4473 3.81931Z"
        fill={fill}
      />
    </svg>
  );
}
