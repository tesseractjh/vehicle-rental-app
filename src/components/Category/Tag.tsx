import React from 'react';
import styled from 'styled-components';

type Props = {
  label: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  isChecked: boolean;
};

function Tag({ label, value, onChange, isChecked }: Props) {
  const id = `radio-category-${value}`;

  return (
    <li>
      <Label htmlFor={id} isChecked={isChecked}>
        {label}
      </Label>
      <Input id={id} type="radio" name="category" value={value} onChange={onChange} checked={isChecked} />
    </li>
  );
}

const Input = styled.input`
  display: none;
`;

const Label = styled.label<{ isChecked: boolean }>`
  display: inline-block;
  padding: 5px 18px;
  background-color: ${({ isChecked, theme }) => theme.color[isChecked ? 'BLACK' : 'GRAY']};
  border-radius: 24px;
  font-weight: 700;
  font-size: 14px;
  color: ${({ isChecked, theme }) => theme.color[isChecked ? 'WHITE' : 'BLACK']};
  white-space: nowrap;
  cursor: pointer;
`;

export default React.memo(Tag);
