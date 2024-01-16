'use client';

import { FNB } from '@/components/FNB';
import { Header } from '@/components/Header';
import { GoWorkRing } from '@/components/blocks/home/GoWorkRing';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export default function Household() {
  return (
    <Main>
      <Header>가계부</Header>
      <Inner>
        <GoWorkRing />
      </Inner>
      <FNB />
    </Main>
  );
}

const Main = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.n[10]};
    padding-top: 58px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
  `}
`;

const Inner = styled.div`
  padding: 0 16px;
  padding-top: 20px;
`;
