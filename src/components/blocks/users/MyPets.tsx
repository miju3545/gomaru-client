import { Paragraph } from '@/components/atoms/Paragraph';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

const myPets = [
  {
    id: 1,
    nickname: '마루',
    profileImage: '/assets/jpeg/maru.jpeg',
    breed: '진돗개',
    gender: 'girl',
    age: 6,
    weight: 13,
  },
];

export const MyPets = () => {
  return (
    <Wrap>
      <InnerHeader>
        <Paragraph size={18}>반려동물</Paragraph>
        <Management>관리하기</Management>
      </InnerHeader>
      <ListWrap>
        <List>
          {myPets.map(({ id, nickname, profileImage }) => (
            <MyPet key={id}>
              <Image src={profileImage} width={70} height={70} alt={nickname} />
              <div className="content">
                <span className="nickname">{nickname}</span>
                <span>진돗개</span>
                <span>5개월﹒13kg</span>
              </div>
            </MyPet>
          ))}
          <NewPet href="/pets/new">
            <div className="circle">
              반려동물 <br /> 추가
            </div>
            <p>8명의 가족, 1명의 친구와 함께 살아갈 아이를 소개해볼까요?</p>
          </NewPet>
        </List>
      </ListWrap>
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
const ListWrap = styled.div`
  width: 100vw;
  overflow-x: auto;
`;
const List = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 18px;
  padding-left: 20px;
  width: fit-content;
`;
const MyPet = styled.div`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.n[15]};
    border-radius: 16px;
    padding: 12px;
    width: calc(100vw - 120px);
    height: 100%;
    display: flex;
    align-items: center;
    gap: 16px;
    img {
      border-radius: 50%;
      object-fit: cover;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 4px;

      .nickname {
        font-size: 15px;
        font-weight: 600;
      }
      span {
        font-size: 13px;
      }
    }
  `}
`;
const NewPet = styled(Link)`
  ${({ theme }) => css`
    border-radius: 16px;
    width: calc(100vw - 120px);
    padding: 12px;
    border: 1px dashed ${theme.colors.n[30]};
    background-color: ${theme.colors.white};
    color: ${theme.colors.n[50]};
    display: inline-flex;
    align-items: center;

    .circle {
      width: 48px;
      height: 48px;
      border: 1px dashed ${theme.colors.n[30]};
      border-radius: 50%;
      background-color: ${theme.colors.n[5]};
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 10px;
      font-weight: 600;
      text-align: center;
    }

    p {
      text-align: left;
      max-width: 160px;
      margin-left: 12px;
      font-size: 13px;
    }
  `}
`;
