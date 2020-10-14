import React from 'react';
import { createUseStyles } from 'react-jss';
import Tag from 'components/Tag';


const useStyles = createUseStyles({
  request: {
    '& p': {

    }
  }
});

const Request = () => {
  const cls = useStyles();
  
  return(
    <div className={cls.request}>
      <h5>Проверить данные клиента</h5>
      <p>2 000 000 руб.</p> {/* TODO: сделать функцию которая парсит число с отступами */}
      <p>ООО "ТехИнвест"</p>

      <div>
        <ul>
          <li><Tag text="Исполнение" /></li>
          <li><Tag text="Новая" /></li>
          <li><Tag text="На экспертизе" /></li>
        </ul>
        <div>Иванов И.И.</div>
        <ul>
          <li><Tag text="Какой-то тег" /></li>
        </ul>
      </div>

      <div>
        <p>234567</p>
        <p>от 01.08.2018</p>
      </div>
    </div>
  )
}

export default Request;