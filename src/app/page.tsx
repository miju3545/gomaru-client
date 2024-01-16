'use client';

import { Header } from '@/components/Header';
import { Paragraph } from '@/components/atoms/Paragraph';
import { Challenge } from '@/components/blocks/home/Challenge';
import { GoWorkRing } from '@/components/blocks/home/GoWorkRing';
import { Notification } from '@/components/blocks/home/Notification';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Link from 'next/link';
import { ReactSVG } from 'react-svg';

export default function Home() {
  return (
    <Main>
      <Header>
        <Link href="/">
          <Paragraph size={18}>
            고마루 <ReactSVG src="/assets/svg/dog.svg" />
          </Paragraph>
        </Link>
      </Header>
      <Inner>
        <Notification />
        <GoWorkRing />
        <Challenge />
      </Inner>
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
