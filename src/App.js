import "./styles.css";
import styled from "styled-components";
import Menu from "./Menu.js";
import { data } from "./data.js";
import { useState } from "react";

const Wrapper = styled.section`
  background: #d6e4e5;
  padding-top: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Conatiner = styled.div`
  width: 100%;
  max-width: 500px;
  min-width: 300px;
  border-radius: 5px;
  background-color: white;
  position: relative;
  box-shadow: 0px 20px 40px rgba(82, 97, 107, 0.2);
`;

export default function App() {
  // 선택된 index를 관리하는 state
  const [selectedIdx, setSelectedIdx] = useState(null);

  return (
    <Wrapper>
      <Conatiner>
        {data.map((item, idx) => (
          <Menu
            selectedIdx={selectedIdx}
            setSelectedIdx={setSelectedIdx}
            idx={idx}
            key={item.city}
            city={item.city}
            description={item.description}
          />
        ))}
      </Conatiner>
    </Wrapper>
  );
}
