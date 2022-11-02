import styled from 'styled-components';

type Props = {
  children?: React.ReactNode;
};

function Fallback({ children }: Props) {
  return (
    <Container>
      <Message>{children}</Message>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex()}
  width: 100%;
  height: 100%;
  text-align: center;
`;

const Message = styled.p`
  font-weight: 700;
  font-size: 17px;
`;

export default Fallback;
