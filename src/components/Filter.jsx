import React, { useState } from 'react';
import Input from 'components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { filterRequestsSelector, handleFilter } from 'store/filterRequests';

const Filter = () => {
  const { numRequest, clientName } = useSelector(filterRequestsSelector);
  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(handleFilter({
      name,
      value
    }))
  };

  console.log(numRequest, clientName)

  return <form>
    <div>
      <Input 
        name="numRequest"
        placeholder="Номер заявки"
        onChange={onChange}
        value={numRequest}
      />
    </div>
    <div>
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