import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  tag: {
    borderRadius: '12px',
    color: '#fff',
    backgroundColor: '#c5c7dc',
    fontSize: '12px',
    textTransform: 'uppercase',
    height: '26px',
    padding: '0 10px',
    display: 'inline-flex',
    alignItems: 'center',
    '@media (min-width: 768px)': {
      fontSize: '14px',
    }
  }
});

const Tag = ({ text }) => {
  const cls = useStyles();

  return <span className={cls.tag}>{text}</span>
}

export default Tag;