import React, { useState, useEffect } from 'react';
import TimeField from 'react-simple-timefield';
import DivFlex from '../../../components/DivFlex';
import DivFlexMargin from "../../../components/DivFlexMargin";

const Timer = (props) => {
  const [seconds, setSeconds] = useState(1);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [time, setTime] = useState('00:00');

  function updateTime(time) {
    setTime(time);
    props.onChange(time);
  }

  function onTimeChange(time) {
    let time_array = time.split(":");
    setSeconds(parseInt(time_array[2]) + 1);
    setMinutes(parseInt(time_array[1]));
    setHours(parseInt(time_array[0]));
    console.log(time_array);

    updateTime(time);
  }

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    // Tem o valor do timer quando para
    props.getData();

    updateTime('00:00:00');
    setSeconds(0);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    let h, m, s;
    if (isActive) {
      interval = setInterval( () => {
        if (seconds == 59) { setMinutes(minutes => minutes + 1); setSeconds(-1); }
        if (minutes == 59 && seconds == 59) { setHours(hours => hours + 1); setSeconds(-1); setMinutes(0); }
        if(hours < 10){
          h = `0${hours}`;
        } else {
          h = hours;
        }
        if(minutes < 10){
          m = `0${minutes}`;
        } else {
          m = minutes;
        }
        if(seconds < 10){
          s = `0${seconds}`;
        } else {
          s = seconds;
        }
        updateTime(`${h}:${m}:${s}`);
        setSeconds(seconds => seconds + 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <DivFlex>
      <TimeField
        value={time}
        onChange={onTimeChange}
        showSeconds={true}
        input={<input type="text" className="form-control text-center margin-horizontal"/>}
      />
      <div className="row">
        {isActive ?
          <DivFlexMargin>
            <button className={"btn btn-warning"} onClick={toggle} style={{marginRight: 5}}>
              Pause
            </button>
            <button className="btn btn-danger" onClick={reset}>
              Stop
            </button>
          </DivFlexMargin> :
          <button className={"btn btn-primary padding-btn"} onClick={toggle}>
            Start
          </button>
        }
      </div>
    </DivFlex>
  );
};

export default Timer;
