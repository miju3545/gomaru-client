'use client';

import { FNB } from '@/components/FNB';
import { Header } from '@/components/Header';
import { Family } from '@/components/blocks/users/Family';
import { MyPets } from '@/components/blocks/users/MyPets';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export default function Members() {
  return (
    <Main>
      <Header>가족 멤버</Header>
      <Family />
      <MyPets />
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
