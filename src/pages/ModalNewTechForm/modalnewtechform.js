import styled from "styled-components";
import Modal from "react-modal";

const StyledModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  margin: 8.5rem auto;
  background-color: var(--gray2);
  /* width: 95%;
  height: 70%; */

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: var(--gray2);
    padding: 10px 16px;
  }

  header > h1 {
    color: var(--gray0);
    font-size: 0.9rem;
  }

  header > span {
    color: var(--gray1);
  }

  main {
    background-color: var(--gray3);
    height: 100%;
  }

  main > form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    margin-top: 1.5rem;
    width: 90%;
  }

  form > label {
    color: var(--gray0);
    font-size: 0.8rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  form > input {
    border: none;
    height: 3rem;
    background-color: var(--gray2);
    border-radius: 4px;
    color: var(--gray0);
    padding-left: 1rem;
  }

  form > select {
    color: var(--gray0);
    width: 100%;
    margin: 0 auto;
    margin-bottom: 1rem;
    border: none;
    height: 3rem;
    background-color: var(--gray2);
    border-radius: 4px;
  }

  select > option {
    color: var(--gray0);
  }

  form > button {
    margin: 1rem auto 1rem;
    width: 100%;
    height: 3rem;
    color: #fff;
    font-size: 0.8rem;
    background-color: var(--color-primary-Negative);
    border-radius: 4px;
  }

  form > button:hover{
    background-color: var(--gray0);
    color: var(--color-primary-Negative);
    border: 1px solid var(--color-primary-Negative);
  }

  @media(min-width:769px){
    max-width: 400px;
  }
`
export default StyledModal








