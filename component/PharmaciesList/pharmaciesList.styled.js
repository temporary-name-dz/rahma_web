import styled from "styled-components";
const ListWrap = styled.section`
  background-color: var(--light-gray-2);
  color: var(--primary-text);
  padding: 2rem;
  overflow-y: scroll;

  p {
    font-size: 1.2rem;
    margin-top: 1.5rem;
    font-family: "Times New Roman", serif;
  }
`;
const ListTitle = styled.section`
  padding: 1.5rem;
  border-bottom: var(--border);
  font-family: "Montserrat", sans-serif;
  text-align: left;
  h1 {
    color: var(--light-gray-3);
    font-size: 1.7rem;
    font-weight: 500;
  }
  span {
    color: var(--colors-accent-45);
  }
`;

const ListContent = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2vw;
  margin-top: 2vh;
`;
export { ListWrap, ListTitle, ListContent};
