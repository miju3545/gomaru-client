'use client';

import { FNB } from '@/components/FNB';
import { Header } from '@/components/Header';
import { Butlers } from '@/components/blocks/users/Butlers';
import { MyPets } from '@/components/blocks/users/MyPets';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export default function Members() {
  return (
    <Main>
      <Header>가족 맴버</Header>
      <Inner>
        <Butlers />
        <MyPets />
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
  ${({ theme }) => css``}
`;
