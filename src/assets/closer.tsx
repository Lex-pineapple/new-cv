type TCloser = {
  color?: string;
};

export const Closer = ({ color = "white" }: TCloser) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path
        fill="none"
        stroke={color}
        strokeDasharray="12"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 12l7 7M12 12l-7 -7M12 12l-7 7M12 12l7 -7"
      >
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          dur="0.4s"
          values="12;0"
        />
      </path>
    </svg>
  );
};
