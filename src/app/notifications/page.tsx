'use client';

import { DetailHeader } from '@/components/DetailHeader';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { ReactSVG } from 'react-svg';

// 알림은 직접 생성할 수 있어야 함.
const Alarms = {
  startGoWork: '마루가 산책을 시작했어요.',
  endGoWork: '마루가 산책을 마쳤어요.',
  eatingTime: '마루 아침먹을 시간이에요.',
  eatingTime2: '마루 점심먹을 시간이에요.',
  eatingTime3: '마루 저녁먹을 시간이에요.',
} as const;

export default function Notifications() {
  return (
    <>
      <DetailHeader
        leadingIcons="arrow_back_ios"
        trailingIcon={<ReadAll>모두 읽음</ReadAll>}
      >
        알림
      </DetailHeader>
      <List>
        {Object.values(Alarms).map((alarm, i) => (
          <Message key={`alarm_${i}`}>
            <div className="group">
              <ReactSVG src="/assets/svg/paw.svg" />
              {alarm}
            </div>
            <span className="time">6시간 전</span>
          </Message>
        ))}
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

    .group {
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
