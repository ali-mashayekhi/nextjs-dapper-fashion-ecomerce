export default function ShoppingCart({ className }: { className: string }) {
  return (
    <svg
      // width="20"
      // height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.70346 3.85289C8.43275 3.12666 9.42125 2.72073 10.4504 2.72476C12.588 2.72543 14.3206 4.45852 14.3206 6.59628V7.18839H13.1364V6.59628C13.1364 5.11212 11.9333 3.90897 10.4491 3.90897H10.4466C9.73191 3.90594 9.04546 4.18773 8.53902 4.69202C8.03262 5.19632 7.74792 5.88158 7.74793 6.59628L7.74794 7.18839L6.56373 7.18839L6.56372 6.59629C6.56371 5.56665 6.97385 4.57941 7.70346 3.85289Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0731 9.42224H13.2921V10.6065H12.0731V9.42224Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.64624 9.42224H8.86517V10.6065H7.64624V9.42224Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.65259 18.9091H17.7426L16.9693 6.17078H3.426L2.65259 18.9091ZM4.54049 7.35499H15.8548L16.4844 17.7249H3.91087L4.54049 7.35499Z"
        fill="white"
      />
    </svg>
  );
}
