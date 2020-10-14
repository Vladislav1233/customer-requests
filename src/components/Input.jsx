import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrap: {

  }
});

const Input = ({
  name,
  type = 'text',
  placeholder,
  onChange,
  value
}) => {
  const cls = useStyles();

  return (
    <div className={cls.wrap}>
      <input 
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default Input;