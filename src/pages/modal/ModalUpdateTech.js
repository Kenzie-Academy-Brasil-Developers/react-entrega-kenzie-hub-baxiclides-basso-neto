import styled from "styled-components";
import Modal from "react-modal";
export const StyledUpdateTechForm = styled(Modal)`
  width: 90%;
  margin: 8.5rem auto;
  background-color: var(--gray2);
  max-width: 400px;

  header {
    background-color: var(--gray2);
    display: flex;
    justify-content: space-between;
    position: relative;

    h2 {
      color: var(--gray0);
      font-size: 0.9rem;
      padding: 10px;
    }

    span {
      color: var(--gray1);
      position: absolute;
      font-size: 0.8rem;
      right: 10px;
      top: 8px;
      cursor: pointer;
    }
  }

  main {
    background-color: var(--gray3);

    div {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      padding: 10px;

      form {
        select {
          background-color: var(--gray2);
          color: var(--gray1);
          padding: 10px;
          width: 100%;
          border-radius: 4px;
        }
      }
    }

    h3 {
      color: var(--gray1);
      font-size: 0.8rem;
      font-weight: 100;
      background-color: var(--gray2);
      padding: 10px;
      border-radius: 4px;
    }

    h4 {
      color: var(--gray0);
      font-size: 0.7rem;
      font-weight: 100;
      margin-top: 0.5rem;
    }
  }
`;

export const StyledBtn = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  background-color: var(--gray3);

  

  button {
    background-color: var(--color-primary-Negative);
    color: var(--gray0);
    border-radius: 4px;
    padding: .5rem 2rem;
    width: 60%;

    :hover {
      background-color: var(--gray0);
      color: var(--color-primary-Negative);
      outline: 1px solid var(--color-primary-Negative);
      font-weight: bolder;
    }

    &.primary {
      background-color: var(--gray1);
      color: var(--gray0);
      padding: 0 2rem;
      width: 35%;
      :hover {
        background-color: var(--gray0);
        outline: 1px solid var(--gray1);
        color: var(--gray1);
      }
    }
  }
`;
