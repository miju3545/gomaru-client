import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { ReactSVG } from 'react-svg';
import { PropsWithChildren, ReactNode } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  leadingIcons?: ReactNode;
  trailingIcon?: ReactNode;
};

export const DetailHeader = ({
  leadingIcons,
  children,
  trailingIcon,
}: PropsWithChildren<Props>) => {
  const router = useRouter();
  return (
    <Box>
      <div>
        {typeof leadingIcons === 'string' ? (
          <ReactSVG
            src={`/assets/svg/${leadingIcons}.svg`}
            onClick={router.back}
          />
        ) : (
          leadingIcons
        )}
      </div>
      <div>
        {typeof children === 'string' ? (
          <p className="title">{children}</p>
        ) : (
          children
        )}
      </div>
      <div>
        {typeof trailingIcon === 'string' ? (
          <ReactSVG src={`/assets/svg/${trailingIcon}.svg`} />
        ) : (
          trailingIcon
        )}
      </div>
    </Box>
  );
};

const Box = styled.header`
  ${({ theme }) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    background-color: ${theme.colors.white};
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto 1fr;
    padding: 12px 20px;
    height: 58px;

    > div:nth-of-type(3) {
      text-align: end;
    }
    .title {
      font-size: 16px;
      font-weight: 500;
      line-height: 20px;
      color: ${theme.colors.n[90]};
    }
  `}
`;
