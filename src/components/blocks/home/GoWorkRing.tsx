import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Paragraph } from '@/components/atoms/Paragraph';
import { useEffect, useState } from 'react';
import { CircleProgressBar } from '@/components/atoms/CircleProgressBar';

export const GoWorkRing = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const toggle = () => {
    setIsActive(!isActive);
  };

  const reset = () => {
    setSeconds(0);
    setIsActive(false);
  };

  useEffect(() => {
    let interval: any = null;
    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <Wrap>
      <Paragraph size={16}>오늘의 산책</Paragraph>
      <Box>
        <CircleProgressBarWrap>
          <CircleProgressBar
            percentage={Math.ceil((seconds / (60 * 60 * 1000)) * 100)}
            size={200}
          />
          <Timer>
            <div>{seconds}초</div>
            <button onClick={toggle}>{isActive ? '일시정지' : '시작'}</button>
            <button onClick={reset}>리셋</button>
          </Timer>
        </CircleProgressBarWrap>
        <Members>1. 멤버별 산책 시간 체크</Members>
      </Box>
    </Wrap>
  );
};

const Wrap = styled.div`
  ${() => css`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `}
`;

const Box = styled.div`
  ${({ theme }) => css`
    box-shadow: 0px 0px 2px 0px #00000014;
    background-color: ${theme.colors.white};
    padding: 24px 20px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  `}
`;

const CircleProgressBarWrap = styled.div`
  position: relative;
`;
const Timer = styled.div`
  ${({}) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`;
const Members = styled.div`
  ${({ theme }) => css`
    width: 100%;
    margin-top: 20px;
  `}
`;
