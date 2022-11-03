import styled from 'styled-components';
import Helmet from '../../components/Helmet';
import useCarDetail from '../../hooks/useCarDetail';
import DetailList from './DetailList';

function DetailInfo() {
  const { car, details } = useCarDetail();
  const {
    amount,
    attribute: { brand, name, imageUrl },
  } = car;

  return (
    <>
      <Helmet car={car} />
      <ImageWrapper>
        <Image src={imageUrl} alt={`${brand} ${name} 이미지`} />
      </ImageWrapper>
      <Title>
        <Brand>{brand}</Brand>
        <CarName>{name}</CarName>
      </Title>
      <Amount>{`월 ${amount.toLocaleString()} 원`}</Amount>
      <ul>
        {details.filter(Boolean).map(({ title, items }) => (
          <DetailList key={title} title={title} items={items} />
        ))}
      </ul>
    </>
  );
}

const ImageWrapper = styled.div`
  ${({ theme }) => theme.mixin.flex()}
  margin-bottom: 20px;
`;

const Image = styled.img`
  height: 205px;
  object-fit: contain;
`;

const Title = styled.p`
  padding: 0 20px;
  margin-bottom: 20px;
  font-weight: 700;
  line-height: 30px;

  & > strong {
    display: inline-block;
    width: 100%;
  }
`;

const Brand = styled.strong`
  font-size: 20px;
`;

const CarName = styled.strong`
  font-size: 24px;
`;

const Amount = styled.p`
  padding: 14px 20px;
  font-size: 17px;
  text-align: right;
`;

export default DetailInfo;
