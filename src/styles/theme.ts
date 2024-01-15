import { Theme, css } from '@emotion/react';

const theme: Theme = {
  colors: {
    white: '#FFF',
    black: '#000',
    n: {
      0: '#FFF',
      5: '#F7F9FC',
      10: '#F2F5FA',
      15: '#E6EAF0',
      20: '#DFE3EB',
      25: '#CED3DB',
      30: '#C2C8D1',
      35: '#B2B7BF',
      45: '#959AA3',
      50: '#898E96',
      55: '#777C85',
      60: '#6B6F78',
      80: '#363A40',
      90: '#24262B',
    },
    purple: {
      0: '#F8F2FF',
      30: '#A866FF',
      50: '#7000FF',
      55: '#6700EB',
      60: '#5C00D4',
    },
    red: {
      10: '#FFD9E6',
      70: '#B2003C',
      primary: '#E13A38',
      secondary: '#FFC3C3',
      error: '#F1333A', // error
    },
    yellow: {
      10: '#FFF2CC',
      70: '#997300',

      primary: '#DFAB0D',
      secondary: '#FFE595',
    },
    green: {
      10: '#C6F7EF',
      70: '#078C76',
      primary: '#0DAD6D',
      secondary: '#B1EDD5',
    },
    blue: { primary: '#19AED5', secondary: '#B5EDFC', headOffice: '#1975FF' },
  },
  fonts: {
    buttonM_16: css`
      font-family: 'Pretendard Variable';
      font-size: 16px;
      line-height: 125%;
      font-weight: 500;
    `,
    buttonS_14: css`
      font-family: 'Pretendard Variable';
      font-size: 14px;
      line-height: 135%;
      font-weight: 500;
    `,
    subtextL16_Emp: css`
      font-family: 'Pretendard Variable';
      font-size: 16px;
      line-height: 125%;
      font-weight: 500;
    `,
    subtextL_16: css`
      font-family: 'Pretendard Variable';
      font-size: 16px;
      line-height: 125%;
      font-weight: 400;
    `,
    subtextM_15_Emp: css`
      font-family: 'Pretendard Variable';
      font-size: 15px;
      line-height: 135%;
      font-weight: 500;
    `,
    subtextM_15: css`
      font-family: 'Pretendard Variable';
      font-size: 15px;
      line-height: 135%;
      font-weight: 450;
    `,
    subtextS_14_Emp: css`
      font-family: 'Pretendard Variable';
      font-size: 14px;
      line-height: 125%;
      font-weight: 400;
    `,
    subtextS_14: css`
      font-family: 'Pretendard Variable';
      font-size: 14px;
      line-height: 125%;
      font-weight: 400;
    `,
  },
};

export { theme };
