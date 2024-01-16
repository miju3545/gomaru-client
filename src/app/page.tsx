'use client';

import { FNB } from '@/components/FNB';
import { GNB } from '@/components/GNB';
import { Notification } from '@/components/blocks/Notification';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export default function Home() {
  return (
    <Main>
      <GNB />
      <Inner>
        <Notification />
        초기화면
      </Inner>
      <FNB />
    </Main>
  );
}

const Main = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.n[10]};
    height: calc(100vh - 108px);
  `}
`;

const Inner = styled.div`
  padding: 0 16px;
  margin-top: 16px;
`;
