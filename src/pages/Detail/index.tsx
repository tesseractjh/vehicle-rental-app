import Layout from '../../components/Layout';
import DetailInfo from './DetailInfo';
import DetailInfoErrorBoundary from './DetailInfoErrorBoundary';

function Detail() {
  return (
    <Layout title="차량상세" goBackRoute="/">
      <DetailInfoErrorBoundary>
        <DetailInfo />
      </DetailInfoErrorBoundary>
    </Layout>
  );
}

export default Detail;
