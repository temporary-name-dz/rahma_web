import styled from "styled-components";

const TeamWrapper = styled.section`
  flex-direction: column;
  background-color: var(--white);
  text-align: center;
  padding: max(7vh, 60px) 0;
`;
const TeamHeader = styled.div`
  padding: max(7vh, 60px) 0;
  h2 {
    font-size: 2rem;
    color: var(--paper-blue-grey-900);
  }
  p {
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--clr-grey-6);
  }
`;
const MembersList = styled.div`
  display: grid;
  /* TODO make me responsive */
  grid-template-columns: repeat(3, minmax(275px, 1fr));
  place-items: center;
  justify-content: space-evenly;
  row-gap: max(7vh, 32px);
  max-width: clamp(825px, 1000px, 65vw) !important;
`;
const MemberItem = styled.article`
  & > * {
    font-size: 1.5rem !important;
    margin: 0;
    padding: 0;
  }

  .img_wrapper {
    overflow: hidden;
    margin-bottom: max(2.5rem, 5vh);
  }
  .image {
    border-radius: 50%;
  }
  h6 {
    color: var(--paper-blue-grey-900);
    margin-bottom: 0.5rem;
  }
  p {
    color: var(--blue-70);
    margin-bottom: 1rem;
  }
  .socials_wrapper {
    gap: 0 3px;
  }
`;

export { TeamWrapper, TeamHeader, MembersList, MemberItem };
