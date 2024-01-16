'use client';

import { DetailHeader } from '@/components/DetailHeader';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { ReactSVG } from 'react-svg';

// 알림은 직접 생성할 수 있어야 함.
const messages = {
  startGoWork: (name: string) => ({
    icon: 'paw',
    text: `${name}가 산책을 시작했어요.`,
  }),
  endGoWork: (name: string) => ({
    icon: 'paw',
    text: `${name}가 산책을 끝냈어요.`,
  }),
  eatingTime: (name: string) => ({
    icon: 'bone',
    text: `${name} 밥먹을 시간이에요.`,
  }),
  buyFood: (name: string) => ({
    icon: 'sack-dollar',
    text: `${name} 사료를 구매했어요.`,
  }),
  buySnack: (name: string) => ({
    icon: 'sack-dollar',
    text: `${name} 간식을 구매했어요.`,
  }),
  buyMedicine: (name: string) => ({
    icon: 'sack-dollar',
    text: `${name} 약을 구매했어요.`,
  }),
  buySupplies: (name: string) => ({
    icon: 'sack-dollar',
    text: `${name} 용품을 구매했어요.`,
  }),
};

export default function Alarms() {
  return (
    <>
      <DetailHeader
        leadingIcons="arrow_back_ios"
        trailingIcon={<ReadAll>모두 읽음</ReadAll>}
      >
        알림
      </DetailHeader>
      <List>
        {Object.values(messages).map((getMessageOf, i) => {
          const { icon, text } = getMessageOf('마루');
          return (
            <Message key={`message_${i}`}>
              <div className="message">
                <ReactSVG src={`/assets/svg/${icon}.svg`} />
                {text}
              </div>
              <span className="time">6시간 전</span>
            </Message>
          );
        })}
      </List>
    </>
  );
}

const List = styled.ul`
  padding: 0 24px;
  padding-top: 58px;

  li:not(:nth-of-type(1)) {
    border-top: 1px solid ${({ theme }) => theme.colors.n[20]};
  }
`;
const Message = styled.li`
  ${({ theme }) => css`
    font-size: 15px;
    font-weight: 500;
    line-height: 22px;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .message {
      display: flex;
      gap: 12px;

      svg {
        width: 20px;
        height: 20px;
        padding: 2px;
      }
    }

    .time {
      font-size: 13px;
      font-weight: 500;
      line-height: 20px;
      color: ${theme.colors.n[45]};
    }
  `}
`;

const ReadAll = styled.span`
  ${({ theme }) => css`
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    color: ${theme.colors.n[90]};
  `}
`;
