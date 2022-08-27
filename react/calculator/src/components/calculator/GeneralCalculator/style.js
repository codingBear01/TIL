import styled from 'styled-components';
import * as S from '../../../style';

export const CalBody = styled.div`
  ${S.alignments.aCenterJCenter}
  flex-direction: column;
  margin: 50% auto;
  padding: 15px;
  width: 80%;
  border-radius: 20px;
  background-color: ${S.colors.black};
  text-align: center;
`;

export const CalInputArea = styled.div`
  ${S.alignments.aCenterJCenter}
  flex-direction: column;
  padding-bottom: 15px;
  width: 100%;
  height: 200px;
`;

export const CalInput = styled.input`
  width: 100%;
  height: 50%;
  text-align: right;
`;

export const CalControlButtonArea = styled.div`
  ${S.alignments.aCenterJCenter}
  justify-content: space-around;
  padding: 15px 0;
  width: 100%;
  border-top: 1px solid ${S.colors.blue};
  border-bottom: 1px solid ${S.colors.blue};
  background-color: ${S.colors.black};
  color: ${S.colors.blue};
`;

export const CalButtonArea = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(60px, auto);
  width: 100%;
  padding-top: 15px;
`;

export const CalButton = styled.button`
  margin: 4px;
  border: none;
  border-radius: 10px;
  background-color: ${S.colors.lightBlack};
  color: ${S.colors.blue};
  font-size: 20px;
`;

export const controlButtonStyle = {
  fontSize: '24px',
};

export const clearButtonStyle = {
  gridColumn: '1/3',
  gridRow: '1',
  color: `${S.colors.red}`,
};

export const evaluateButtonStyle = {
  gridColumn: '3/5',
  gridRow: '5',
  color: `${S.colors.beige}`,
};

export const operationButtonStyle = {
  color: `${S.colors.beige}`,
};
