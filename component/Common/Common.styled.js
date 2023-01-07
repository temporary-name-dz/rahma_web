import styled from "styled-components";
// Overlay Start
const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 2;
  opacity: 0.5;
  border-radius: var(--border-radius);
`;
// Overlay End

// Paginate Start
const PaginateWrapper = styled.div`
  margin-top: 30px;
  text-align: center;
  width: 100%;
  button {
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    font-size: 1rem;
    font-size: 13px;
    line-height: 44px;
    letter-spacing: 1px;
    color: var(--light-gray-4);
    background-color: var(--white);
    width: 44px;
    height: 44px;
    padding: 0;
    margin: 0 5px 0 0 !important;
    border: 1px solid var(--colors-accent-50);
    cursor: pointer;
    border-radius: var(--border-radius);
    &:hover {
      background-color: var(--paper-yellow-799);
      color: var(--white);
    }
  }
  .active {
    color: var(--white);
    background-color: var(--colors-accent-35);
  }
  @media (max-width: 635px) {
    button {
      font-size: 2rem !important;
      width: 48px;
      height: 48px;
    }
  }
`;
// Paginate End

// SearchWrap Start
const height = "50px";
const SearchContainer = styled.section`
  z-index: 5;
  width: 100%;
`;

const SearchContainerModal = styled(SearchContainer)`
  z-index: 6;

  height: 100vh !important;
  background: #000 !important;
  place-items: center;

  display: none;
  opacity: 0;
  visibility: hidden;
  position: absolute;
  &.visible {
    display: grid;
    opacity: 0.9 !important ;
    visibility: visible;
  }
`;

const InputContainer = styled.article`
  z-index: 6;
  display: flex;
  padding: 0;
  margin: ${(props) => (props.modal ? "0" : "10rem 0 0")};
  width: 70%;
  background-color: orangered;
  box-shadow: 0px 0px 0px 10px rgba(255, 255, 255, 0.3);
  border-radius: var(--border-radius);
  .input-desc {
    position: relative;
    background-color: var(--white);
    margin: auto;
    width: ${height};
    height: ${height};
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    &,
    & > * {
      border-top-left-radius: var(--border-radius);
      border-bottom-left-radius: var(--border-radius);
    }

    .static {
      position: absolute;
      background-color: var(--white);
      &:hover {
        opacity: 0;
      }
    }
  }

  .form {
    display: flex;
    flex-direction: row;
    width: 100%;
  }
  .input-container {
    width: 100%;
    position: relative;
  }
  .react-select {
    &-container {
      width: 100%;
      height: ${height};
      color: var(--primary-text);
      font-size: 1.2rem;
    }
    &__control {
      height: ${height};
      border-radius: 0;
      border: none !important;
      outline: none !important;
      box-shadow: none !important;
    }
  }

  .btn {
    &-search {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--paper-yellow-799);
      transition: var(--transition-2);
      &:hover {
        background-color: var(--colors-accent-40);
      }
    }
    &-img {
      margin-left: 1rem;
    }
  }
`;
// SearchWrap End

export {
  Overlay,
  PaginateWrapper,
  SearchContainer,
  SearchContainerModal,
  InputContainer,
};
