import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Request from 'components/ListRequest/Request';
import { getRequests, requestsSelector, filterDataRequests } from 'store/requests';
import { filterRequestsSelector } from 'store/filterRequests';
import { useSelector, useDispatch } from 'react-redux';

const useStyles = createUseStyles({
  listRequest: {
    padding: '0',
    margin: '0 -10px',
    display: 'flex',
    flexWrap: 'wrap'
  },
  item: {
    listStyle: 'none',
    padding: '0 10px',
    width: '100%',
    marginBottom: '20px'
  },
  '@media (min-width: 768px)': {
    item: {
      width: '50%'
    }
  },
  '@media (min-width: 1024px)': {
    item: {
      width: 'calc(100% / 3)'
    }
  },
  '@media (min-width: 1280px)': {
    item: {
      width: '25%'
    }
  },
  '@media (min-width: 1600px)': {
    item: {
      width: '20%'
    }
  }
});

const ListRequest = () => {
  const { loading, hasErrors, listRequest, filterListRequest } = useSelector(requestsSelector);
  const { numRequest, clientName } = useSelector(filterRequestsSelector);
  const dispatch = useDispatch();
  const reNumRequest = new RegExp(`(${numRequest})`, 'i');
  const reClientName = new RegExp(`${clientName}`, 'gi');
  const cls = useStyles();

  useEffect(() => {
    dispatch(getRequests())
  }, []);

  useEffect(() => {
    let timerId;
    clearTimeout(timerId);

    if(numRequest || clientName) {
      
      timerId = setTimeout(() => {
        const updateData = listRequest.filter(item => (
          item.id.search(reNumRequest) !== -1 && item.name.search(reClientName) !== -1
        ));
    
        dispatch(filterDataRequests(updateData))
      }, 500);
    } else {
      dispatch(filterDataRequests(listRequest))
    }
    
  }, [numRequest, clientName])

  return <ul className={cls.listRequest}>
    {filterListRequest.map(item => {
      console.log(item.id, item.id.search(reNumRequest))
      return <li className={cls.item} key={item.id}><Request /></li>
    })}
  </ul>
}

export default ListRequest;