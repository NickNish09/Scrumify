import React, { useState } from 'react';
import DivFlex from '../../../components/DivFlex';
import Timer from "./Timer";
import TagInput from "./TagInput";

function InputBar() {
  const [tags, setTags] = useState([]);
  const [time, setTime] = useState('00:00:00');
  const [entryText, setEntryText] = useState('');
  const [billable, setBillable] = useState(false);

  function getData() {
    let data = {
      tags: tags,
      time: time,
      entry: entryText,
      billable: billable
    };
    console.log(data);
  }

  return (
    <div className={'card'}>
      <div className={'card-body'}>
        <DivFlex>
          <input
            type="text"
            placeholder={'Your task name'}
            name="timeentry"
            className={'form-control'}
            value={entryText}
            onChange={(event) => setEntryText(event.target.value)}
          />
          <div className={' margin-left'}>
            {billable ?
              <button className={'btn btn-primary'} onClick={() => setBillable(false)}><i className="fa fa-money"></i></button> :
              <button className={'btn btn-secondary'} onClick={() => setBillable(true)}><i className="fa fa-money"></i></button>
            }
          </div>
          <Timer onChange={setTime} getData={() => getData()}/>
        </DivFlex>
        <TagInput onChange={setTags}/>
      </div>
    </div>
  );
}

export default InputBar;
