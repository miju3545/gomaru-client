import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactSVG } from 'react-svg';
import { Paragraph } from './atoms/Paragraph';
import { PropsWithChildren } from 'react';
import Link from 'next/link';

export const Header = ({ children }: PropsWithChildren) => {
  return (
    <Box>
      {typeof children === 'string' ? (
        <Paragraph size={18}>{children}</Paragraph>
      ) : (
        children
      )}
      <Link href="/notifications">
        <ReactSVG src="/assets/svg/notifications_unread.svg" />
      </Link>
    </Box>
  );
};

const Box = styled.header`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    height: 58px;
  `}
`;
