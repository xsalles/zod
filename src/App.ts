import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
`

export const TitleAndLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 91px;

  h1 {
    font-size: 128px;
    color: #fff;
    margin-right: 16px;
  }

  img {
    width: 148px;
    height: 148px;
  }

  img:hover {
    width: 181px;
    height: 181px;
    transition: all ease-in-out 0.7s;
  }
`

export const SectionForm = styled.section`
  width: 1196px;
  height: 667px;
  display: flex;
  padding: 32px 0;
  justify-content: center;
  background-color: #fff;
  border-radius: 32px;
  box-shadow: 6px 6px 186px #fff ;
`
