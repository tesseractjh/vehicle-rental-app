import styled from 'styled-components';

type Props = {
  src: string;
  alt: string;
  isNew: boolean;
};

function Image({ src, alt, isNew }: Props) {
  return (
    <Container>
      <ImgWrapper>
        <Img src={src} alt={alt} />
      </ImgWrapper>
      {isNew ? <NewTag className="tag-new">신규</NewTag> : null}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
`;

const ImgWrapper = styled.div`
  overflow: hidden;
  width: 152px;
  height: 80px;
`;

const Img = styled.img`
  width: 152px;
  height: 80px;
  object-fit: contain;
  transition: transform 0.4s ease-in-out;

  &:hover {
    /* object-fit: cover; */
    transform: scale(140%);
  }
`;

const NewTag = styled.span`
  display: inline-block;
  position: absolute;
  top: -10px;
  right: -12px;
  padding: 4px 14px;
  background-color: ${({ theme }) => theme.color.BLUE};
  border-radius: 24px;
  font-weight: 700;
  font-size: 12px;
  color: ${({ theme }) => theme.color.WHITE};
`;

export default Image;
