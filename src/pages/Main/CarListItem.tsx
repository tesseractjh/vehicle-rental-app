import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Car } from '../../api/types';
import Image from '../../components/Image';
import CATEGORY from '../../constants/category';
import elapsedTime from '../../utils/elapsedTime';

type Props = {
  car: Car;
};

function CarListItem({ car }: Props) {
  const {
    id,
    amount,
    createdAt,
    attribute: { brand, name, segment, fuelType, imageUrl },
  } = car;

  return (
    <Wrapper>
      <Container to={id.toString()} state={car}>
        <Info>
          <InfoTitle>
            <strong>{brand}</strong>
            <strong>{name}</strong>
          </InfoTitle>
          <InfoDetail>
            <span>{`${CATEGORY.segment[segment]} / ${CATEGORY.fuelType[fuelType]}`}</span>
            <span>{`월 ${amount.toLocaleString()}원 부터`}</span>
          </InfoDetail>
        </Info>
        <Image src={imageUrl} alt={`${brand} ${name}`} isNew={elapsedTime(createdAt) < 24 * 60 * 60 * 1000} />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.color.BLACK};
  line-height: 17px;

  &:hover {
    background-color: ${({ theme }) => theme.color.BLUE};
    color: ${({ theme }) => theme.color.WHITE};

    & .tag-new {
      background-color: ${({ theme }) => theme.color.WHITE};
      color: ${({ theme }) => theme.color.BLACK};
    }
  }
`;

const Container = styled(Link)`
  ${({ theme }) => theme.mixin.flex('space-between')}
  height: 120px;
  padding: 20px;
`;

const Info = styled.div`
  flex: 1;

  & strong,
  & span {
    display: inline-block;
    width: 100%;
  }
`;

const InfoTitle = styled.p`
  margin-bottom: 8px;

  & > strong {
    font-weight: 700;
    font-size: 14px;
  }
`;

const InfoDetail = styled.p`
  & > span {
    font-size: 12px;
  }
`;

export default CarListItem;
