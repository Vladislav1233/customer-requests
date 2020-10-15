import React from 'react';
import Input from 'components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { filterRequestsSelector, handleFilter } from 'store/filterRequests';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  filter: {
    marginBottom: '20px'
  },
  item: {
    marginBottom: '15px'
  },
  '@media (min-width: 768px)': {
    filter: {
      display: 'flex'
    },
    item: {
      marginRight: '20px',
      marginBottom: '0'
    }
  }
});

const Filter = () => {
  const cls = useStyles();
  const { numRequest, clientName } = useSelector(filterRequestsSelector);
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(handleFilter({
      name,
      value
    }))
  };

  return <form className={cls.filter}>
    <div className={cls.item}>
      <Input 
        name="numRequest"
        placeholder="Номер заявки"
        onChange={onChange}
        value={numRequest}
      />
    </div>
    <div className={cls.item}>
      <Input 
        name="clientName"
        placeholder="Наименование клиента"
        onChange={onChange}
        value={clientName}
      />
    </div>
  </form>
}

export default Filter;