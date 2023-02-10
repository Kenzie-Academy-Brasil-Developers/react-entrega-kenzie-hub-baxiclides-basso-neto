import styled from "styled-components";

const StyledHeaderDashboard = styled.header`
  div {
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 0.5rem 0.5rem;
    border-bottom: 3px solid var(--gray3);
    height: 100%;
    align-items: center;
  }
  div > h1 {
    color: var(--color-primary);
    font-size: 1rem;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1rem;
    align-self: center;
  }

  div > button {
    background-color: var(--gray3);
    padding: 5px 16px;
    color: var(--gray0);
    font-size: 0.8rem;
    border-radius: 0.25rem;
  }
`;
export default StyledHeaderDashboard;

export const StyledMainDashboard = styled.main`
  padding: 0 0.5rem;

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
    padding: 5px 16px;
    color: var(--gray0);
    font-size: 0.8rem;
    border-radius: 0.25rem;
  }
`;
