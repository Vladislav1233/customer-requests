import React from 'react';

const Checkbox = ({
  name,
  onChange,
  check
}) => {
  return <input id={name} name={name} type="checkbox" checked={check} onChange={onChange} />
}

export default Checkbox;