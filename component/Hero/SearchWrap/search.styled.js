import styled from "styled-components";
const height = "50px";
const SearchContainer = styled.div`
  z-index: 3;
  display: flex;
  padding: 0;
  margin: 10rem 0 0;
  width: 70%;
  background-color: orangered;
  box-shadow: 0px 0px 0px 10px rgba(255, 255, 255, 0.3);
  border-radius: var(--border-radius);

  &:hover {
    .input-desc > .static {
      opacity: 0;
    }
  }

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

export { SearchContainer };
