import React from 'react';
import * as C from './style';
import { MdOutlineTimer } from 'react-icons/md';
import { BsBackspace } from 'react-icons/bs';

const GeneralCalculator = () => {
  return (
    <C.CalBody>
      <C.CalInputArea>
        <C.CalInput>
          <span>ddd</span>
        </C.CalInput>
        <C.CalInput>
          <span>ddd</span>
        </C.CalInput>
      </C.CalInputArea>
      <C.CalControlButtonArea>
        <MdOutlineTimer style={C.controlButtonStyle} />
        <BsBackspace style={C.controlButtonStyle} />
      </C.CalControlButtonArea>
      <C.CalButtonArea>
        <C.CalButton style={C.clearButtonStyle}>C</C.CalButton>
        <C.CalButton style={C.operationButtonStyle}>%</C.CalButton>
        <C.CalButton style={C.operationButtonStyle}>÷</C.CalButton>
        <C.CalButton>7</C.CalButton>
        <C.CalButton>8</C.CalButton>
        <C.CalButton>9</C.CalButton>
        <C.CalButton style={C.operationButtonStyle}>×</C.CalButton>
        <C.CalButton>4</C.CalButton>
        <C.CalButton>5</C.CalButton>
        <C.CalButton>6</C.CalButton>
        <C.CalButton style={C.operationButtonStyle}>－</C.CalButton>
        <C.CalButton>1</C.CalButton>
        <C.CalButton>2</C.CalButton>
        <C.CalButton>3</C.CalButton>
        <C.CalButton style={C.operationButtonStyle}>＋</C.CalButton>
        <C.CalButton>0</C.CalButton>
        <C.CalButton>.</C.CalButton>
        <C.CalButton style={C.evaluateButtonStyle}>=</C.CalButton>
      </C.CalButtonArea>
    </C.CalBody>
  );
};

export default GeneralCalculator;
