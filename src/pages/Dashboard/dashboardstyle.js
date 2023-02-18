import styled from "styled-components";

const StyledHeaderDashboard = styled.header`
  div {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0.5rem 0.5rem;
    border-bottom: 3px solid var(--gray3);
    height: 100%;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
  }
  div > h1 {
    color: var(--color-primary);
    font-size: 1rem;
    text-align: center;
    align-self: center;
  }

  div > button {
    background-color: var(--gray3);
    padding: 5px 16px;
    color: var(--gray0);
    font-size: 0.8rem;
    border-radius: 0.25rem;
  }

  div > button:hover {
    background-color: var(--color-primary);
  }

  @media (min-width: 769px) {
    div > h1 {
      margin-top: 1rem;
    }
  }
`;
export default StyledHeaderDashboard;

export const StyledMainDashboard = styled.main`
  padding: 0.5rem;
  max-width: 1200px;
  margin: 0 auto;
  border: 3px solid var(--gray3);

  section {
    border-bottom: 3px solid var(--gray3);

    &:nth-child(2) {
      border-bottom: none;
    }
  }

  section > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

  }

  section > h2 {
    color: var(--gray0);
    font-size: 1rem;
    margin-top: 1.5rem;
  }

  section h3 {
    color: var(--gray1);
    font-size: 0.9rem;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }

  div > h2 {
    color: var(--gray0);
    font-size: 1rem;
    margin-top: 1.5rem;
  }

  div > button {
    background-color: var(--gray3);
    margin-top: 1rem;
    width: 2rem;
    height: 2rem;
    color: var(--gray0);
    font-size: 0.8rem;
    border-radius: 0.25rem;
  }

  div > button:hover {
    background-color: var(--gray0);
    color: var(--gray3);
  }

  @media (min-width: 769px) {
    section {
      &:nth-child(1) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 0px;

        h2 {
          margin-top: 0;
        }
        h3 {
          margin-bottom: 1rem;
        }
      }
    }
  }
`;

export const StyledNewTechstList = styled.ul`
  width: 100%;
  margin: 0 auto;
  margin-top: 2rem;
  border-radius: 4px;
  background-color: var(--gray3);

  p {
    text-align: center;
    color: var(--gray0);
    font-size: 2rem;
    padding: 1rem;
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--gray4);
    margin: 1rem 1rem;
    padding: 0 10px;
    border-radius: 4px;
  }

  li > h2 {
    color: var(--gray0);
    font-size: 1rem;
  }

  h3 {
    text-align: center;
    padding-top: 0.5rem;
  }

  @media (min-width: 769px) {
    margin-bottom: 2rem;
  }
`;
