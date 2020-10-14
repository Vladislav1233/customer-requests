import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Request from 'components/ListRequest/Request';
import { getRequests, requestsSelector, filterDataRequests } from 'store/requests';
import { filterRequestsSelector } from 'store/filterRequests';
import { useSelector, useDispatch } from 'react-redux';

const ListRequest = () => {
  const { loading, hasErrors, listRequest, filterListRequest } = useSelector(requestsSelector);
  const { numRequest, clientName } = useSelector(filterRequestsSelector);
  const dispatch = useDispatch();
  const reNumRequest = new RegExp(`(${numRequest})`, 'i');
  const reClientName = new RegExp(`${clientName}`, 'gi');

  useEffect(() => {
    dispatch(getRequests())
  }, []);

  useEffect(() => {
    let timerId;
    if(numRequest || clientName) {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        const updateData = listRequest.filter(item => (
          reNumRequest.test(item.id) && reClientName.test(item.name)
        ));
    
        dispatch(filterDataRequests(updateData))
      }, 500);
    } else {
      clearTimeout(timerId);
      dispatch(filterDataRequests(listRequest))
    }
    
  }, [numRequest, clientName])

  return <ul>
    {filterListRequest.map(item => {
      console.log(item.id, item.id.search(reNumRequest))
      return <li key={item.id}><Request /></li>
    })}
  </ul>
}

export default ListRequest;