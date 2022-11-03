import styled from 'styled-components';

type Props = {
  title: string;
  items: Array<[string, string]>;
};

function DetailList({ title, items }: Props) {
  return items.length ? (
    <Container>
      <Header>{title}</Header>
      <ul>
        {items.map(([key, value]) => (
          <DetailItem key={key}>
            <strong>{key}</strong>
            <span>{value}</span>
          </DetailItem>
        ))}
      </ul>
    </Container>
  ) : null;
}

const Container = styled.li`
  font-size: 17px;
`;

const Header = styled.div`
  padding: 14px 20px;
  background-color: ${({ theme }) => theme.color.BLUE};
  font-weight: 700;
  color: ${({ theme }) => theme.color.WHITE};
`;

const DetailItem = styled.li`
  ${({ theme }) => theme.mixin.flex('space-between')}
  padding: 14px 20px;

  & > strong {
    font-weight: 700;
  }
`;

export default DetailList;
