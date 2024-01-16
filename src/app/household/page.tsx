'use client';

import { FNB } from '@/components/FNB';
import { Header } from '@/components/Header';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export default function Household() {
  return (
    <Main>
      <Header>가계부</Header>
      <Inner />
      <FNB />
    </Main>
  );
}

const Main = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.n[10]};
    padding-top: 58px;
    padding-bottom: 80px;
  `}
`;
const Inner = styled.div`
  padding: 20px 16px;
`;
