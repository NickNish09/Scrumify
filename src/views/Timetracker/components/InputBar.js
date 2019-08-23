import React, { useState, useEffect } from 'react';
import DivFlex from '../../../components/DivFlex';
import Timer from "./Timer";

function InputBar() {
  // Declare uma nova variável de state, a qual chamaremos de "count"

  return (
    <div className={'card'}>
      <div className={'card-body'}>
        <DivFlex>
          <input type="text" name="timeentry" className={'form-control'}/>
          <Timer/>
        </DivFlex>
      </div>
    </div>
  );
}

export default InputBar;
