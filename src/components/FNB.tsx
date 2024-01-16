import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ReactSVG } from 'react-svg';

const menu = [
  { title: '홈', img: 'home', link: '/' },
  // {
  //   title: '카테고리',
  //   img: 'grid_view',
  //   link: '/category',
  // },
  {
    title: '생활',
    img: 'paw',
    link: '/life',
  },
  {
    title: '가계부',
    img: 'finance',
    link: '/household',
  },
  {
    title: '맴버',
    img: 'users',
    link: '/members',
  },
];

export const FNB = () => {
  const pathname = usePathname();

  return (
    <Footer>
      {menu.map(({ title, img, link }) => {
        const isActive = link === pathname;
        return (
          <MenuItem key={title} href={link} isActive={isActive}>
            <ReactSVG
              src={`/assets/svg/${isActive ? `${img}_filled` : img}.svg`}
            />

            {title}
          </MenuItem>
        );
      })}
    </Footer>
  );
};

const Footer = styled.footer`
  ${({ theme }) => css`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    display: grid;
    grid-template-columns: repeat(${menu.length}, 1fr);
    padding: 10px 24px 40px;
    gap: 24px;
    box-shadow: 0px 0px 12px 0px #00000014;
    border-radius: 24px 24px 0px 0px;
    background-color: ${theme.colors.white};
    a:nth-of-type(2) svg,
    a:nth-of-type(4) svg {
      width: 22px;
      height: 22px;
      padding: 2px;
    }
  `}
`;

const MenuItem = styled(Link)<{ isActive: boolean }>`
  ${({ theme, isActive }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    text-align: center;
    font-size: 12px;
    font-weight: 450;
    line-height: 14px;
    cursor: pointer;
    color: ${isActive ? theme.colors.n[90] : theme.colors.n[35]};

    svg {
      width: 22px;
      height: 22px;
      path {
        fill: ${isActive ? theme.colors.n[90] : theme.colors.n[35]};
      }
    }
  `}
`;
