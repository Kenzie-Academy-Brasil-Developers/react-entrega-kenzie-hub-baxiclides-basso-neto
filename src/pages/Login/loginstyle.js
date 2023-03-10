import styled from "styled-components";

const StyledHeaderLogin = styled.div`
  padding: 0 0.5rem;
  margin-top: 2rem;
  margin-bottom: 0.5rem;

  h1 {
    color: var(--color-primary);
    font-size: 1rem;
    text-align: center;
    margin-top: 50px;
    margin-bottom: 1.5rem;
  }

  h2 {
    color: var(--gray0);
    font-size: 0.9rem;
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    text-align: center;
  }

  main > div {
    margin: 0 auto;
    padding-top: 0.5rem;
    background-color: var(--gray3);
    border-radius: 4px;
    max-width: 385px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  form > label {
    color: var(--gray0);
    font-size: 0.7rem;
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    width: 90%;
  }

  form > input {
    width: 90%;
    margin: 0 auto;
    border: none;
    height: 3rem;
    background-color: var(--gray2);
    border-radius: 4px;
    color: var(--gray0);
    padding-left: 1rem;
  }

  input:hover {
    border: 1px solid green;
  }

  form > p {
    color: var(--gray1);
    font-size: 0.7rem;
    text-align: center;
  }

  form > span {
    color: var(--gray1);
    font-size: 0.8rem;
    width: 90%;
    margin: 0 auto 0.5rem;
  }

  form > button {
    width: 90%;
    margin: 0 auto;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    height: 3rem;
    border-radius: 4px;
    background-color: var(--color-primary);
  }
  form > button:hover {
    background-color: #fff;
    color: var(--color-primary);
    border: 1px solid var(--color-primary);
  }
  div > div {
    display: flex;
    justify-content: center;
  }

  div > button {
    width: 90%;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    height: 3rem;
    border-radius: 4px;
    color: var(--gray0);
    background-color: var(--gray1);
  }
  div > button:hover {
    background-color: var(--gray0);
    color: var(--gray1);
    border: 1px solid var(--gray1);
  }
`;

export default StyledHeaderLogin;
