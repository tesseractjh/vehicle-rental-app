import React, { useCallback, useState } from 'react';
import { Segment } from '../api/types';
import CATEGORY from '../constants/category';

function useCategory() {
  const [selected, setSelected] = useState('ALL');
  const categories = Object.entries(CATEGORY.segment) as Array<[Segment, string]>;

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(({ target: { value } }) => {
    setSelected(value);
  }, []);

  return { categories, selected, handleChange } as const;
}

export default useCategory;
