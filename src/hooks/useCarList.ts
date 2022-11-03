import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import api from '../api';
import { Car } from '../api/types';
import useCategory from './useCategory';

function useCarList(options: UseQueryOptions<{ payload: Car[] }> = {}) {
  const { selected } = useCategory();
  const params = selected === 'ALL' ? {} : { segment: selected };
  const { data } = useQuery<{ payload: Car[] }>(['cars', params], () => api.car.getCarList(params), {
    staleTime: 60 * 1000,
    suspense: true,
    ...options,
  });

  if (!data || !data.payload) {
    throw new Error('invalid data');
  }

  return data.payload;
}

export default useCarList;
