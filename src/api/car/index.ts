import apiClient from '../apiClient';
import { Car, Fuel, Segment } from '../types';

export type CarRequestQuery = {
  fuelType?: Fuel;
  segment?: Segment;
};

export const getCarList = async (params: CarRequestQuery) => {
  const { data } = await apiClient.get<{ payload: Car[] }>('', { params });
  return data;
};
