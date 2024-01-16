'use client';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

export default function Category() {
  return <Main />;
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
