import React, { useEffect } from 'react';
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
    flexWrap: 'wrap',
    minHeight: '380px',
  },
  item: {
    listStyle: 'none',
    padding: '0 10px',
    width: '100%',
    marginBottom: '20px',
    height: '165px',
    position: 'relative'
  },
  '@media (min-width: 768px)': {
    item: {
      height: '175px',
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
      return <li className={cls.item} key={item.id}><Request 
        name={item.name}
        sum={item.sum}
        company={item.company}
        taxpayerId={item.taxpayer_id}
        requirement={item.requirement}
        id={item.id}
        date={item.date}
        tags={item.tags}
      /></li>
    })}
  </ul>
}

export default ListRequest;