import styled from 'styled-components';
import Header from './Header';

type Props = {
  children?: React.ReactNode;
} & React.ComponentProps<typeof Header>;

function Layout({ title, useBackButton, children }: Props) {
  return (
    <Container>
      <Header title={title} useBackButton={useBackButton} />
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
  max-width: 768px;
  height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.WHITE};
`;

const Wrapper = styled.section`
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Layout;
