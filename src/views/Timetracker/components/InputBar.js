import React from 'react';
import DivFlex from '../../../components/DivFlex';
import Timer from "./Timer";
import TagInput from "./TagInput";

function InputBar() {
  // Declare uma nova variável de state, a qual chamaremos de "count"

  return (
    <div className={'card'}>
      <div className={'card-body'}>
        <DivFlex>
          <input type="text" name="timeentry" className={'form-control'}/>
          <Timer/>
        </DivFlex>
        <TagInput/>
      </div>
    </div>
  );
}

export default InputBar;
