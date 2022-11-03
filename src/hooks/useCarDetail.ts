import React, { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Car } from '../api/types';
import CATEGORY from '../constants/category';
import DetailList from '../pages/Detail/DetailList';
import dateString from '../utils/dateString';
import useCarList from './useCarList';

function useCarDetail() {
  const { id } = useParams();
  const { state } = useLocation();
  const carList = useCarList({ enabled: !state });

  const car = (state ?? carList.find(({ id: carId }) => id === carId.toString())) as Car;
  const {
    startDate,
    attribute: { segment, fuelType },
    insurance,
    additionalProducts,
  } = car;

  const details = useMemo<React.ComponentProps<typeof DetailList>[]>(
    () => [
      {
        title: '차량 정보',
        items: [
          ['차종', CATEGORY.segment[segment]],
          ['연료', CATEGORY.fuelType[fuelType]],
          ['이용 가능일', `${dateString(startDate)} 부터`],
        ],
      },
      {
        title: '보험',
        items: insurance.map(({ name, description }) => [name, description]),
      },
      {
        title: '추가상품',
        items: additionalProducts?.map(({ name, amount }) => [name, `월 ${amount.toLocaleString()} 원`]) ?? [],
      },
    ],
    []
  );
  return { car, details };
}

export default useCarDetail;
