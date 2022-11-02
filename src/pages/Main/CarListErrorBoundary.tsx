import { Suspense } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
import Fallback from '../../components/Fallback';
import useCategory from '../../hooks/useCategory';
import useRefresh from '../../hooks/useRefresh';

type Props = {
  children: React.ReactNode;
};

function CarListErrorBoundary({ children }: Props) {
  const { selected } = useCategory();
  const refresh = useRefresh(['cars', { segment: selected }]);

  return (
    <ErrorBoundary refresh={refresh}>
      <Suspense fallback={<Fallback>불러오는 중</Fallback>}>{children}</Suspense>
    </ErrorBoundary>
  );
}

export default CarListErrorBoundary;
