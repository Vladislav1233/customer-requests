import React from 'react';
import Filter from 'components/Filter';
import ListRequest from 'components/ListRequest';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  '@global': {
    html: {
      fontFamily: 'Roboto',
      fontWeight: '300'
    },
    body: {
      margin: '0',
      boxSizing: 'border-box',
      backgroundColor: '#fafbfd'
    },
    '*, *:before, *:after': {
        boxSizing: 'border-box'
    }
  },
  app: {
    overflow: 'hidden',
    padding: '40px 15px 180px'
  },
  '@media (min-width: 768px)': {
    app: {
      padding: '40px 40px 180px'
    }
  }
});

function App() {
  const cls = useStyles();

  return (
    <div className={cls.app}>
      <Filter />
      <ListRequest />
    </div>
  );
}

export default App;
