import styled from 'styled-components';
import Fallback from '../Fallback';

type Props = {
  refresh?: () => void;
};

function ErrorBoundaryFallback({ refresh }: Props) {
  return (
    <Fallback>
      <RefreshButton type="button" onClick={refresh}>
        새로고침
      </RefreshButton>
    </Fallback>
  );
}

const RefreshButton = styled.button`
  width: 100%;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 38px;
  background-color: ${({ theme }) => theme.color.BLUE};
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.color.WHITE};
`;

export default ErrorBoundaryFallback;
