import { useQuery } from '@tanstack/react-query';
import api from '../api';
import { CarRequestQuery } from '../api/car';

function useCarList(params: CarRequestQuery) {
  const result = useQuery(['cars', params], () => api.car.getCarList(params), { suspense: true });
  return result;
}

export default useCarList;
