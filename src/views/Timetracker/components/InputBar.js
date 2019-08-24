import React, { useState } from 'react';
import DivFlex from '../../../components/DivFlex';
import Timer from "./Timer";
import TagInput from "./TagInput";

function InputBar() {
  const [tags, setTags] = useState([]);
  const [time, setTime] = useState('00:00:00');

  return (
    <div className={'card'}>
      <div className={'card-body'}>
        <DivFlex>
          <input type="text" name="timeentry" className={'form-control'}/>
          <Timer onChange={setTime}/>
        </DivFlex>
        <TagInput onChange={setTags}/>
        <p>{time}</p>
      </div>
    </div>
  );
}

export default InputBar;
