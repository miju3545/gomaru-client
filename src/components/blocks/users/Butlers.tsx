import { Paragraph } from '@/components/atoms/Paragraph';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const butlers = [
  { id: 1, nickname: '아빠' },
  { id: 2, nickname: '엄마' },
  { id: 3, nickname: '딸' },
  { id: 4, nickname: '아들' },
  { id: 5, nickname: '지인' },
];

export const Butlers = () => {
  return (
    <Wrap>
      <InnerHeader>
        <Paragraph size={18}>반려가족</Paragraph>
        <Management>관라하기</Management>
      </InnerHeader>
      <List>
        {butlers.map(({ id, nickname }) => (
          <Bultter key={id}>{nickname}</Bultter>
        ))}
        <NewBultter onClick={() => {}}>
          가족 <br /> 추가
        </NewBultter>
      </List>
    </Wrap>
  );
};

const Wrap = styled.div`
  ${({ theme }) => css`
    padding: 20px 0;
    background-color: ${theme.colors.white};
    overflow-x: auto;
    width: 100vw;
  `}
`;

const InnerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;
const Management = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.n[60]};
    font-size: 13px;
    font-weight: 500;
    line-height: 16px;
  `}
`;
const List = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 18px;
  padding-left: 20px;
  width: auto;
  flex-wrap: wrap;
  /* width: fit-content; */
  overflow-x: auto;
`;
const Bultter = styled.button`
  ${({ theme }) => css`
    width: 48px;
    height: 48px;
    border-radius: 16px;
    background-color: ${theme.colors.n[30]};
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.white};
    font-size: 13px;
    font-weight: 600;
    line-height: 16px;
    border: 1px solid ${theme.colors.n[30]};
  `}
`;

const NewBultter = styled.button`
  ${({ theme }) => css`
    width: 48px;
    height: 48px;
    border-radius: 16px;
    background-color: ${theme.colors.n[15]};
    border: 1px dashed ${theme.colors.n[30]};
    color: ${theme.colors.n[50]};
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
  `}
`;
