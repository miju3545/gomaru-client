'use client';

import { FNB } from '@/components/FNB';
import { Header } from '@/components/Header';
import { Paragraph } from '@/components/atoms/Paragraph';
import { Challenge } from '@/components/blocks/home/Challenge';
import { GoWorkRing } from '@/components/blocks/home/GoWorkRing';
import { Notification } from '@/components/blocks/home/Notification';
import Link from 'next/link';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export default function Home() {
  return (
    <Main>
      <Header>
        <Link href="/">
          <Paragraph size={18}>마루의하루</Paragraph>
        </Link>
      </Header>
      <Inner>
        <Notification />
        <GoWorkRing />
        <Challenge />
      </Inner>
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
