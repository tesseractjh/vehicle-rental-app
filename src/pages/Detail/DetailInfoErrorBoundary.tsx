import { Suspense } from 'react';
import ErrorBoundary from '../../components/ErrorBoundary';
import Fallback from '../../components/Fallback';
import useRefresh from '../../hooks/useRefresh';

type Props = {
  children: React.ReactNode;
};

function DetailInfoErrorBoundary({ children }: Props) {
  const refresh = useRefresh(['cars', {}]);

  return (
    <ErrorBoundary refresh={refresh}>
      <Suspense fallback={<Fallback>불러오는 중</Fallback>}>{children}</Suspense>
    </ErrorBoundary>
  );
}

export default DetailInfoErrorBoundary;
