import React, { useState } from 'react';

const LambdaDemo = () => {
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  const handleClick = api => e => {
    e.preventDefault();

    setLoading(true);
    fetch('/.netlify/functions/' + api)
      .then(response => response.json())
      .then(json => {
        setLoading(false);
        setMsg(json.msg);
      });
  };

  return (
    <p>
      <button onClick={handleClick('hello')}>
        {loading ? 'Loading...' : 'Call Lambda'}
      </button>
      <button onClick={handleClick('async-dadjoke')}>
        {loading ? 'Loading...' : 'Call Async Lambda'}
      </button>
      <br />
      <span>{msg}</span>
    </p>
  );
};

export default LambdaDemo;
