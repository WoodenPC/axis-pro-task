import React, { memo } from 'react';

type CheckBoxProps = {
  checked: boolean;
  id: string;
  onClick?: (event: React.ChangeEvent<HTMLButtonElement>) => void;
};

const Checkbox: React.FC<CheckBoxProps> = memo(({ checked, onClick, id }) => {
  return (
    <label className='Checkbox' htmlFor={id}>
      <input
        type='checkbox'
        className='Checkbox-Input'
        onChange={onClick}
        id={id}
        checked={checked}
      />
      <span className='Checkbox-Icon'></span>
      <style jsx>{`
        .Checkbox {
          position: relative;
          cursor: pointer;
          height: 14px;
          display: block;
        }

        .Checkbox-Input {
          display: none;
        }

        .Checkbox-Icon::before {
          content: "+";
          background-color: #fff;
          z-index: 2;
          border-radius: 50%;
          font-size: 10px;
          text-align: center;
          color: #11484a;
          position: absolute;
          width: 14px;
          height: 14px;
          border: 1px solid #11484a;
        }

        .Checkbox-Input:checked ~ .Checkbox-Icon::before {
          content: "-";
        }
      
      `}</style>
    </label>
  );
});

export { Checkbox };