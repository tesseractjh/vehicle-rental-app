import Layout from '../../components/Layout';
import Category from '../../components/Category';
import CarList from './CarList';
import CarListErrorBoundary from './CarListErrorBoundary';

function Main() {
  return (
    <Layout title="전체차량" category={<Category />}>
      <CarListErrorBoundary>
        <CarList />
      </CarListErrorBoundary>
    </Layout>
  );
}

export default Main;
