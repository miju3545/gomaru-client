'use client';

import { FNB } from '@/components/FNB';
import { Header } from '@/components/Header';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export default function Life() {
  return (
    <Main>
      <Header>[마루] 생활기록부</Header>
      <div>[개발사항] - ㅇㅇ</div>
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
