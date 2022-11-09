import styled from "styled-components";

const Sidebar = styled.div`
  position: fixed;
  inset: 0;
  z-index: 99;
  transform: translateX(100%);
  opacity: 0;
  transition: var(--transition), opacity 0.3s ease-out;

  backdrop-filter: blur(8px);
  background-color: rgba(17, 17, 17, 0.2);

  display: none;
  &.show-sidebar {
    transform: translateX(0) !important;
    opacity: 1;
  }
  aside {
    background-color: var(--white);
    position: fixed;
    inset: 0 0 0 40%;
    transition: var(--transition);
  }
  .sidebar-header {
    display: flex;
    justify-content: space-between;
    padding: 4px;
  }
  .sidebar-links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    width: 100%;
    margin: auto;
    height: 100%;
  }
  .sidebar-link {
    width: 100%;
    transition: var(--transition);
  }
  .sidebar-link a {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    margin-left: 1rem;
    padding: 2rem;
    color: var(--primary-text);
    font-size: 1.5rem;
    transition: var(--transition);
  }
  .sidebar-link:hover {
    background: var(--clr-grey-10);
  }
  .sidebar-link a:hover {
    padding-left: 2rem;
  }
  Image {
    width: 3rem;
  }
  .active_page {
    color: var(--colors-accent-300);
  }
  @media (max-width: 635px) {
    aside {
      inset: 0 0 0 20%;
    }
  }
  @media (max-width: 900px) {
    display: block;
  }
`;
export { Sidebar };
