import React from 'react';
import Filter from 'components/Filter';
import ListRequest from 'components/ListRequest';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  '@global': {
    body: {
      margin: '0',
      boxSizing: 'border-box'
    }
  }
});

function App() {
  const cls = useStyles();

  return (
    <div>
      <Filter />
      <ListRequest />
    </div>
  );
}

export default App;
