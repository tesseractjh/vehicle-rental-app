import styled from 'styled-components';
import Fallback from '../../components/Fallback';
import useCarList from '../../hooks/useCarList';
import CarListItem from './CarListItem';

function CarList() {
  const carList = useCarList();

  return (
    <Container>
      {carList?.length ? (
        <ul>
          {carList.map((car) => (
            <CarListItem key={car.id} car={car} />
          ))}
        </ul>
      ) : (
        <Fallback>차량이 없습니다.</Fallback>
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
`;

export default CarList;
