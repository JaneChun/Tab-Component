import styled from "styled-components";

const Accordion = styled.ul`
  list-style: none;
  text-align: left;
`;

const Item = styled.li``;

const Title = styled.h2`
  font-weight: 600;
  color: #52616b;
  padding: 20px;
  cursor: pointer;
  transition: all ease-in-out 0.2s;
  position: relative;

  :hover {
    padding-left: 25px;
  }

  ::after {
    content: "";
    height: 2px;
    width: 100%;
    /* 이 absolute 속성값은 위의 Title(h2) 요소를 기준으로 한다. */
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: #d6e4e5;
    /* transition이 안먹힌다 🥲 */
    transition: all ease-in-out 0.6s;
  }
  :hover::after {
    background: linear-gradient(90deg, #497174, #d6e4e5);
  }

  :hover span::before,
  :hover span::after {
    background-color: #497174;
  }
`;

const AccIcon = styled.span`
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  margin: -4px;

  ::before,
  ::after {
    content: "";
    position: absolute;
    background-color: lightgrey;
    border-radius: 50px;
    transition: all ease-in-out 0.3s;
  }

  /* 세로 선 */
  ::before {
    width: 2px;
    height: 20px;
    /* clicked = true 면, display: none; */
  }

  /* 가로 선 */
  ::after {
    width: 20px;
    height: 2px;
    display: block;
  }

  &.open::before {
    transform: rotate(90deg);
  }
`;

const Text = styled.div`
  font-size: 1.05rem;
  font-weight: 200;
  line-height: 160%;
  background: #eff5f5;
  padding: 0px 25px;
  height: 0;

  overflow: hidden;
  transition: all 0.6s;

  &.open {
    padding: 30px 25px;
    height: auto;
  }
`;
export default function Menu({
  city,
  description,
  idx,
  selectedIdx,
  setSelectedIdx
}) {
  const openAndClose = (index) => {
    if (selectedIdx === index) {
      // 만약 이미 열려있던 메뉴라면 닫는다.
      return setSelectedIdx(null);
    }

    setSelectedIdx(index); // 이미 열려있던 메뉴가 아니라면 해당 메뉴를 연다.
  };

  return (
    <Accordion>
      <Item>
        <Title>
          {city}
          {/* 클릭한 요소의 index를 openAndClose 함수에 전달하여 setSelectedIndex(idx)한다. */}
          <AccIcon
            className={selectedIdx === idx ? "open" : ""}
            onClick={() => openAndClose(idx)}
          />
        </Title>

        <Text className={selectedIdx === idx ? "open" : ""}>
          {/* selectedIdx와 index가 일치하는 요소는 open이라는 클래스명을 준다. */}
          {description}
        </Text>
      </Item>
    </Accordion>
  );
}
