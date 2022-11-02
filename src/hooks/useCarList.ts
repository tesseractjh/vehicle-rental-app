import { useQuery } from '@tanstack/react-query';
import api from '../api';
import useCategory from './useCategory';

function useCarList() {
  const { selected } = useCategory();
  const params = selected === 'ALL' ? {} : { segment: selected };
  const { data } = useQuery(['cars', params], () => api.car.getCarList(params), {
    staleTime: 60 * 1000,
    suspense: true,
  });

  if (!data || !data.payload) {
    throw new Error('invalid data');
  }

  return data.payload;
}

export default useCarList;
