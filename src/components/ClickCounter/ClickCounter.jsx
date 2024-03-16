import React, { useState } from 'react';

function ClickCounter() {
  const [clickCount, setClickCount] = useState(0);

  const handleButtonClick = () => {
    setClickCount(clickCount + 1);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>
        Click me ({clickCount} clicks)
      </button>
    </div>
  );
}

export default ClickCounter;