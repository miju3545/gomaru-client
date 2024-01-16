import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactSVG } from 'react-svg';

export const GNB = () => {
  return (
    <Header>
      <h2>마루의 하루</h2>
      <ReactSVG src="/assets/svg/notifications_unread.svg" />
    </Header>
  );
};

const Header = styled.header`
  ${({ theme }) => css`
    top: 0;
    left: 0;
    width: 100vw;
    background-color: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;

    h2 {
      font-size: 18px;
      font-weight: 550;
      line-height: 24px;
      color: ${theme.colors.n[90]};
    }
  `}
`;
