import styled from 'styled-components';
import Header from './Header';

type Props = {
  category?: React.ReactNode;
  children?: React.ReactNode;
} & React.ComponentProps<typeof Header>;

function Layout({ category, title, useBackButton, children }: Props) {
  return (
    <Container>
      <Header title={title} useBackButton={useBackButton} />
      {category || null}
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 768px;
  height: 100vh;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.WHITE};
`;

const Wrapper = styled.section`
  flex: 1;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Layout;
