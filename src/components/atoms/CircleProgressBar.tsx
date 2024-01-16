import { useTheme } from '@emotion/react';
import { CSSProperties } from 'react';

type Props = {
  strokeWidth?: number;
  percentage: number;
  size: number;
  style?: CSSProperties;
};

export const CircleProgressBar = ({
  strokeWidth = 12,
  percentage,
  size,
  ...rest
}: Props) => {
  const theme = useTheme();
  const radius = size / 2 - strokeWidth / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size} {...rest}>
      <circle
        stroke={theme.colors.n[15]}
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        stroke={theme.colors.purple[45]}
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        r={radius}
        cx={size / 2}
        cy={size / 2}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
    </svg>
  );
};
