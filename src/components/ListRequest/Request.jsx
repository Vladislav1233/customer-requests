import React from 'react';
import { createUseStyles } from 'react-jss';
import Tag from 'components/Tag';


const useStyles = createUseStyles({
  request: {
    backgroundColor: '#fff',
    borderRadius: '15px',
    overflow: 'hidden',
    padding: '20px',
    boxShadow: '0px 0px 10px -3px rgba(0, 0, 0, 0.1)',
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

  },
  listTag: {
    padding: '0',
    margin: '0',
    display: 'flex',
    flexWrap: 'wrap',
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
    }
  }
});

const Request = () => {
  const cls = useStyles();
  
  return(
    <div className={cls.request}>
      <h5 className={cls.title}>Проверить данные клиента</h5>
      <p>2 000 000 руб.</p> {/* TODO: сделать функцию которая парсит число с отступами */}
      <div className={cls.companyInfo}>
        <p>ООО "ТехИнвест"</p>
        <p className={cls.textLight}>ИНН 2901142357</p>
      </div>

      <div className={cls.toggleHidden}>
        <ul className={cls.listTag}>
          <li><Tag text="Исполнение" /></li>
          <li><Tag text="Новая" /></li>
          <li><Tag text="На экспертизе" /></li>
        </ul>
        <div className={cls.requirement}>Иванов И.И.</div>
        <ul className={cls.listTag}>
          <li><Tag text="Какой-то тег" /></li>
        </ul>
      </div>

      <div className={cls.footer}>
        <p className={cls.textLight}>234567</p>
        <p className={cls.textLight}>от 01.08.2018</p>
      </div>
    </div>
  )
}

export default Request;