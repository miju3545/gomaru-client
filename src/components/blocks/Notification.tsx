import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactSVG } from 'react-svg';

export const Notification = () => {
  return (
    <Wrap>
      <ReactSVG src="/assets/svg/campaign.svg" />
      공지사항이 있는 경우 표시
    </Wrap>
  );
};

const Wrap = styled.div`
  ${({ theme }) => css`
    display: flex;
    gap: 12px;
    align-items: center;
    background-color: ${theme.colors.n[0]};
    padding: 16px 20px;
    border-radius: 12px;

    font-size: 15px;
    font-weight: 450;
    line-height: 20px;

    svg {
      transform: translateY(2px);
    }
  `}
`;
