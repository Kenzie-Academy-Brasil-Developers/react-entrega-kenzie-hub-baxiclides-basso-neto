import styled from "styled-components";

export const StyledSignUpPageHeader = styled.header`
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 2rem auto;
    max-width: 380px;
    padding: 0 5px;
  }
  div > h1 {
    color: var(--color-primary);
    font-size: 1rem;
  }

  div > button {
    background-color: var(--gray3);
    padding: 5px 16px;
    color: var(--gray0);
    font-size: 0.8rem;
    border-radius: 0.25rem;
  }
`;

export const StyledSignUpPageMain = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  padding: 0 0.5rem;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    padding-top: 2rem;
    border-radius: 4px;
    background-color: var(--gray3);
    max-width: 380px;
  }

  div > h2 {
    color: var(--gray0);
    font-size: 1rem;
    margin-bottom: 2rem;
  }

  div > h5 {
    color: var(--gray1);
    margin-bottom: 2rem;
  }

  div > form {
    display: flex;
    flex-direction: column;
    width: 100%;
    color: var(--gray0);
  }

  form > label {
    color: var(--gray0);
    font-size: 0.8rem;
    width: 90%;
    margin: 1rem auto 0.5rem;
  }

  form > input {
    width: 90%;
    margin: 0 auto;
    padding: 1rem;
    border: none;
    height: 3rem;
    background-color: var(--gray2);
    border-radius: 4px;
    color: var(--gray0);
  }

  input:hover {
    border: 1px solid green;
  }

  form p {
    color: var(--gray1);
    font-size: 0.8rem;
    width: 90%;
    margin: 0 auto 0.5rem;
  }

  form > select {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 1rem;
    border: none;
    height: 3rem;
    background-color: var(--gray2);
    border-radius: 4px;
  }

  select:hover {
    border: 1px solid green;
  }

  form > button {
    margin: 1rem auto 1rem;
    width: 90%;
    height: 3rem;
    color: #fff;
    font-size: 0.8rem;
    background-color: var(--color-primary-Negative);
    border-radius: 4px;
  }

  form > button:hover {
    background-color: var(--color-primary-Focus);
  }
`;
