import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Request from 'components/ListRequest/Request';
import { getRequests, requestsSelector } from 'store/requests';
import { filterRequestsSelector } from 'store/filterRequests';
import { useSelector, useDispatch } from 'react-redux';

const ListRequest = () => {
  const { loading, hasErrors, listRequest } = useSelector(requestsSelector);
  const { numRequest, clientName } = useSelector(filterRequestsSelector);
  const dispatch = useDispatch();
  const reNumRequest = new RegExp(`(${numRequest})`, 'i');

  useEffect(() => {
    dispatch(getRequests())
  }, []);

  useEffect(() => {
    
  }, [numRequest, clientName])

  return <ul>
    {listRequest.map(item => {
      console.log(item.id, item.id.search(reNumRequest))
      return <li key={item.id}><Request /></li>
    })}
  </ul>
}

export default ListRequest;