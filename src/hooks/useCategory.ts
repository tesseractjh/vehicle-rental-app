import React, { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { Segment } from '../api/types';
import CATEGORY from '../constants/category';
import { categoryState } from '../recoil/category/atom';

function useCategory() {
  const [selected, setSelected] = useRecoilState(categoryState);
  const categories = Object.entries(CATEGORY.segment) as Array<[Segment, string]>;

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(({ target: { value } }) => {
    setSelected(value as Segment);
  }, []);

  return { categories, selected, handleChange } as const;
}

export default useCategory;
