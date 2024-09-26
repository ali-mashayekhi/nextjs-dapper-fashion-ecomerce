export default function HeartIcon({
  className,
  stroke,
}: {
  className: string;
  stroke: string;
}) {
  return (
    <svg
      // width="26"
      // height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path
        d="M22.7646 10.1915C22.7541 7.50932 21.3454 4.98694 18.5682 4.09321C16.6611 3.47845 14.5838 3.82032 12.9706 6.134C11.3574 3.82032 9.28002 3.47845 7.37299 4.09321C4.59543 4.98703 3.18674 7.5099 3.17654 10.1924C3.15086 15.5271 8.56229 19.6093 12.9692 21.5605L12.9706 21.5598L12.972 21.5605C17.3791 19.6092 22.791 15.5266 22.7646 10.1915Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}
