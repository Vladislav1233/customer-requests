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
  loading: {
    display: 'flex',
    height: '100px',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    fontSize: '18px'
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

let timerId;

const ListRequest = () => {
  const { loading, listRequest, filterListRequest } = useSelector(requestsSelector);
  const { numRequest, clientName } = useSelector(filterRequestsSelector);
  const dispatch = useDispatch();
  const reNumRequest = new RegExp(`(${numRequest.trim()})`, 'i');
  const reClientName = new RegExp(`${clientName.trim()}`, 'gi');
  const cls = useStyles();

  useEffect(() => {
    dispatch(getRequests())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    clearTimeout(timerId);

    if(numRequest || clientName) {
      
      timerId = setTimeout(() => {
        const updateData = listRequest.filter(item => (
          item.id.search(reNumRequest) !== -1 && item.requirement.search(reClientName) !== -1
        ));
        
        // Note: На самом деле есть минимум два решения по поиску. Второй вариант тоже приемлем как и тот который выше. Второй более гибкий и я бы уточнял с аналитиками какие 
        // данные будут на бою и как в конечном итоге будет использоваться строка поиска.
        // const updateData = listRequest.filter(item => {
        //   return item.id.toLowerCase().replace(/ /g,"").includes(numRequest.toLowerCase().replace(/ /g,"")) 
        //     && item.requirement.toLowerCase().replace(/ /g,"").includes(clientName.toLowerCase().replace(/ /g,""))
        // });
    
        dispatch(filterDataRequests(updateData))
      }, 500);
    } else {
      dispatch(filterDataRequests(listRequest))
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [numRequest, clientName])

  return !loading ? 
    <ul className={cls.listRequest}>
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
    : <div className={cls.loading}>Загрузка...</div>
}

export default ListRequest;