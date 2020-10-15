import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  input: {
    position: 'relative'
  },
  icon: {
    position: 'absolute',
    left: '25px',
    top: '50%',
    transform: 'translateY(-50%)',
    height: '18px'
  },
  field: {
    borderRadius: '15px',
    border: '1px solid #c1c1c1',
    height: '40px',
    width: '100%',
    margin: '0',
    padding: '0 60px'
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
    <div className={cls.input}>
      <img className={cls.icon} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABL0lEQVRIie3UsUpDQRCF4U9RREwlWCqonZYpxE4fwDfwCQJJa5VagkVArPQJRBstU6axsLHUQgtBEQRtVMQiWuwGJCZk15BGPHBZLnf2/DN7Z5Z/DaBJVNDEI95xjX0UBzVfwS0+cY5d1HCIZ7Swh/Hfmr/hCqtdvhcirIUjjOSYT8bMLzHdJ7YsVFjKAVRiZt0y76YGHjCWCmgKZ56qDaGK9V4Box3vSzjLALRjl1MBU3jNALzEtZAKuMd8BmAhrnepGw6EPu+ZUYeqQlPMpQKKcUMtIXYWTzhJNW9rL0LKfcwv8IHFXMA4joX2awitOIMJocuqQuYfMaaeCyCMf0kYos+Op4XTmHl9EAhhQteE49rCpp8/dGBIira/QbIuvxy1K9kZFkA0vxkm4A/qCzQ5RK3c4OI+AAAAAElFTkSuQmCC"/>
      <input 
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={cls.field}
      />
    </div>
  )
}

export default Input;