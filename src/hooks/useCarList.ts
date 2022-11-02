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
  return data;
}

export default useCarList;
