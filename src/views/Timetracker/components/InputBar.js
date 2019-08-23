import React, { useState } from 'react';
import Timer from "react-compound-timer";
import TimeField from 'react-simple-timefield';
import DivFlex from '../../../components/DivFlex';

function InputBar() {
  // Declare uma nova variável de state, a qual chamaremos de "count"
  const [time, setTime] = useState('00:00');
  const [timeRunning, setTimeRunning] = useState(false);

  function onTimeChange(time) {
    setTime(time);
  }

  return (
    <div className={'card'}>
      <div className={'card-body'}>
        <DivFlex>
          <input type="text" name="timeentry" className={'form-control'}/>
          <Timer
            initialTime={10000}
            startImmediately={false}
            onStart={() => setTimeRunning(true)}
            onResume={() => console.log('onResume hook')}
            onPause={() => console.log('onPause hook')}
            onStop={() => setTimeRunning(false)}
            onReset={() => console.log('onReset hook')}
          >
            {
              ({ start, resume, pause, stop, reset, timerState }) => (
              <React.Fragment>
                <div>
                  <TimeField
                    value={time}
                    onChange={onTimeChange}
                    style={{marginRight: 20, marginLeft: 20, width: 80}}
                    showSeconds={true}
                    input={<input type="text" className="form-control"/>}
                  />
                </div>
                <br />
                <div>
                  {timeRunning?
                    <button onClick={stop} className={'btn btn-danger'}>Stop</button>
                    : <button onClick={start} className={'btn btn-primary'}>Start</button>}
                  {/*<button onClick={pause}>Pause</button>*/}
                  {/*<button onClick={resume}>Resume</button>*/}
                  {/*<button onClick={reset}>Reset</button>*/}
                </div>
              </React.Fragment>
              )
            }
          </Timer>
        </DivFlex>
      </div>
    </div>
  );
}

export default InputBar;
