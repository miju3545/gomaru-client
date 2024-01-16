import styled from '@emotion/styled';
import { Paragraph } from '../../atoms/Paragraph';
import { css } from '@emotion/react';

export const Challenge = () => {
  return (
    <Wrap>
      <Paragraph size={16}>도전 중인 챌린지</Paragraph>
      <Box>치카치카 양치하기</Box>
    </Wrap>
  );
};

const Wrap = styled.div`
  ${() => css`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `}
`;

const Box = styled.div`
  ${({ theme }) => css`
    box-shadow: 0px 0px 2px 0px #00000014;
    background-color: ${theme.colors.white};
    padding: 24px 20px;
    border-radius: 16px;
  `}
`;
