import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as BackIcon } from '../../assets/icons/back.svg';

type Props = {
  title: string;
  useBackButton?: boolean;
};

function Header({ title, useBackButton }: Props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1);
  };

  return (
    <Container>
      <Title>{title}</Title>
      {useBackButton ? (
        <BackButton type="button" onClick={handleClick}>
          <BackIcon />
          <span className="sr-only">뒤로 가기</span>
        </BackButton>
      ) : null}
    </Container>
  );
}

const Container = styled.header`
  position: relative;
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.color.BLACK};
`;

const Title = styled.h1`
  height: 100%;
  font-weight: 700;
  font-size: 17px;
  text-align: center;
  line-height: 60px;
`;

const BackButton = styled.button`
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  & > svg {
    width: 100%;
    height: 100%;
  }
`;

export default Header;
