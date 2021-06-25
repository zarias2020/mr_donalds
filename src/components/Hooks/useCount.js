import { useState } from 'react';

export const useCount = (openItem) => {

  const [count, setCount] = useState(openItem ? openItem : 1);
  console.log(openItem);

  const onChange = e => setCount(e.target.value);

  return { count, setCount, onChange }
};