import React, { useState, useRef } from 'react';

const App = () => {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const onRefInput = useRef(null);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue('');
      setResult(`${first} * ${second} = ${value} 정답`);
      onRefInput.current.focus();
    } else {
      setValue('');
      setResult(`오답입니다. ${first} * ${second} = ${first * second} 입니다.`);
      onRefInput.current.focus();
    }
  };

  return (
    <>
      <div>
        {first} 곱하기 {second}는?
      </div>
      <form onSubmit={onSubmit}>
        <input
          ref={onRefInput}
          type="number"
          value={value}
          onChange={onChange}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

export default App;
