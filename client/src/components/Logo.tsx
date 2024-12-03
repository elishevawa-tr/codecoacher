interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <svg
      viewBox="0 0 500 500"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M250 100C160 100 100 160 100 250C100 340 160 400 250 400C340 400 400 340 400 250C400 160 340 100 250 100Z"
        fill="#4CAF50"
        stroke="#000000"
        strokeWidth="20"
      />
      <path
        d="M175 175L325 175L250 300L175 175Z"
        fill="#FFFFFF"
        stroke="#000000"
        strokeWidth="10"
      />
      <text
        x="250"
        y="250"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="#000000"
        fontSize="40"
        fontWeight="bold"
      >
        {"</>"}
      </text>
    </svg>
  );
}
