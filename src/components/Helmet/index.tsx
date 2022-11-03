import { Helmet as ReactHelmet } from 'react-helmet-async';
import { Car } from '../../api/types';

type Props = {
  car: Car;
};

function Helmet({ car }: Props) {
  const {
    id,
    amount,
    attribute: { brand, name, imageUrl },
  } = car;

  return (
    <ReactHelmet>
      <meta property="og:url" content={`${process.env.REACT_APP_SERVER}/${id}`} />
      <meta property="og:title" content={`${brand} ${name}`} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:description" content={`월 ${amount.toLocaleString()} 원`} />
    </ReactHelmet>
  );
}

export default Helmet;
