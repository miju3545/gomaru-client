import { CSSProperties, PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

type Props = {
  size: 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18;
  className?: string;
  style?: CSSProperties;
};
export const Paragraph = ({
  size,
  children,
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <Box size={size} {...rest}>
      {children}
    </Box>
  );
};

const Box = styled.div<{ size: number }>`
  ${({ theme, size }) => css`
    display: flex;
    align-items: center;
    align-items: left;
    color: ${theme.colors.n[90]};

    ${size === 16 &&
    css`
      font-size: 16px;
      font-weight: 550;
      line-height: 20px;
    `}

    ${size === 18 &&
    css`
      font-size: 18px;
      font-weight: 550;
      line-height: 24px;
      color: ${theme.colors.n[90]};
    `}
  `}
`;
