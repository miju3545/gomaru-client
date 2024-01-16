'use client';

import { Header } from '@/components/Header';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export default function User() {
  return (
    <Main>
      <Header>집사 노트</Header>
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
