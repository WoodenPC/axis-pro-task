import React, { memo } from 'react';

const Header = memo(() => {
  return (
    <header className='Header'>
      <span className='Header-Icon'></span>
      <h1 className='Header-Title'>Планирование численности / Мастер 2020 / Таблица / Организационный Дизайн / Позиции / Мои прямые подчиненные</h1>

      <style jsx>{`
        .Header {
          height: 20px;
          display: flex;
          flex-direction: row;
          align-items: center;
          padding: 10px;
          background-color: #11484a;
        }

        .Header-Title {
          color: #fff;
          font-size: 12px;
          margin-left: 5px;
        }

        .Header-Icon {
          background: url("/assets/monitor.svg") no-repeat;
          width: 30px;
          height: 30px;
        }
      `}</style>
    </header>
  )
});

export { Header }