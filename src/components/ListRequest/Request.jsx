import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import Tag from 'components/Tag';
import Checkbox from 'components/Checkbox';


const useStyles = createUseStyles({
  request: {
    backgroundColor: '#fff',
    borderRadius: '15px',
    overflow: 'hidden',
    padding: '20px',
    boxShadow: '0px 0px 10px -3px rgba(0, 0, 0, 0.1)',
    position: 'absolute',
    width: 'calc(100% - 20px)',
    transition: 'box-shadow 0.3s',
    '& p': {
      fontSize: '14px',
      margin: '0'
    }
  },
  title: {
    fontSize: '14px',
    fontWeight: '500',
    margin: '0 0 10px'
  },
  toggleHidden: {
    overflow: 'hidden',
    margin: '0 -20px',
    padding: '0 20px',
    height: '0',
    transition: 'height 0.3s',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  listTag: {
    padding: '0',
    margin: '0',
    display: 'flex',
    flexWrap: 'wrap',
    maxHeight: '62px',
    overflow: 'hidden',
    '& li': {
      listStyle: 'none',
      margin: '0 5px 5px 0'
    }
  },
  requirement: {
    backgroundColor: '#eaecf5',
    margin: '15px -20px 20px',
    fontWeight: '500',
    fontSize: '14px',
    padding: '10px 20px'
  },
  footer: {
    display: 'flex',
    marginTop: '10px',

    '& p:first-child': {
      marginRight: '30px'
    }
  },
  textLight: {
    color: '#c1c1c1',
    fontSize: '12px'
  },
  companyInfo: {
    margin: '10px 0'
  },
  zInd: {
    zIndex: '2'
  },
  show: {
    height: '185px'
  },
  checkbox: {
    position: 'absolute',
    right: '20px',
    top: '20px',
    visibility: 'hidden'
  },
  showCheck: {
    visibility: 'visible'
  },
  active: {
    boxShadow: '0px 0px 10px -3px rgba(0, 0, 0, 0.5)',
  },

  '@media (min-width: 768px)': {
    title: {
      fontSize: '16px'
    },
    request: {
      '& p': {
        fontSize: '16px'
      }
    },
    textLight: {
      fontSize: '14px'
    },
    footer: {
    },
    requirement: {
      fontSize: '16px'
    },
    show: {
      height: '198px'
    }
  }
});

const Request = ({
  name,
  sum,
  company,
  taxpayerId,
  requirement,
  id,
  date,
  tags = []
}) => {
  const cls = useStyles();
  const [isHidden, setIsHidden] = useState(true);
  const [zIndex, setZIndex] = useState(0);
  const [ isCheck, setCheck ] = useState(false);

  const toggleHidden = () => {
    let timerId;
    clearTimeout(timerId);
    if(isHidden) {
      setIsHidden(false)
      setZIndex(1)
    } else {
      setIsHidden(true)
      timerId = setTimeout(() => {setZIndex(0)}, 300)
    }
  };

  const handleCheck = (e) => {
    setCheck(e.target.checked);
  }
  
  return(
    <div className={`${cls.request} ${isHidden ? '' : cls.active}`} onClick={toggleHidden} style={{ zIndex: zIndex }}>
      <div className={`${cls.checkbox} ${(isCheck || !isHidden) ? cls.showCheck : ''}`}>
        <Checkbox 
          check={isCheck}
          onChange={handleCheck}
        />
      </div>
      <h5 className={cls.title}>{name}</h5>
      <p>{sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} руб.</p>
      <div className={cls.companyInfo}>
        <p>{company}</p>
        <p className={cls.textLight}>ИНН {taxpayerId}</p>
      </div>

      <div className={`${cls.toggleHidden} ${isHidden ? '' : cls.show}`}>
        <ul className={cls.listTag}>
          {tags.map((item, index, arr) => index !== arr.length -1 
            ? <li key={item}><Tag text={item} /></li>
            : null
          )}
        </ul>
        <div className={cls.requirement}>{requirement}</div>
        <ul className={cls.listTag}>
          <li key={tags[tags.length - 1]}><Tag text={tags[tags.length - 1]} /></li>
        </ul>
      </div>

      <div className={cls.footer}>
        <p className={cls.textLight}>{id}</p>
        <p className={cls.textLight}>от {date}</p>
      </div>
    </div>
  )
}

export default Request;