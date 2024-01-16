import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Paragraph } from '@/components/atoms/Paragraph';

export const GoWorkRing = () => {
  return (
    <Wrap>
      <Paragraph size={16}>오늘의 산책</Paragraph>
      <Box>dddd</Box>
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
