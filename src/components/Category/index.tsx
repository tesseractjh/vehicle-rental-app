import styled from 'styled-components';
import useCategory from '../../hooks/useCategory';
import Tag from './Tag';

function Category() {
  const { categories, selected, handleChange } = useCategory();

  return (
    <Container>
      <TagList>
        {categories.map(([segment, tag]) => (
          <Tag key={segment} label={tag} value={segment} isChecked={segment === selected} onChange={handleChange} />
        ))}
      </TagList>
    </Container>
  );
}

const Container = styled.div`
  padding: 6px 12px;
  border-bottom: 1px solid ${({ theme }) => theme.color.BLACK};
`;

const TagList = styled.ul`
  ${({ theme }) => theme.mixin.flex('flex-start', 'center', '8px')}
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export default Category;
