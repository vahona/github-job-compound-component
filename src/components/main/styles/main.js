import styled from "styled-components";

export const Container = styled.section`
  background-color: white;
  margin: 2rem;
  display: flex;
  position: relative;
  @media (min-width: 1000px) {
    margin-inline-start: 5rem;
  }
`



export const Image = styled.img`
  width: 20%;
  margin-right: 1rem;
`;

export const Article = styled.article`
  margin: 2rem;
  display: flex;
`

export const SubContainer = styled.div`
  color: gray;
  display: flex;
  position: absolute;
  bottom: 0;
  right : 1rem;
  font-size: 12px

`

export const Location = styled.p`
 margin-right: 1rem;

`

export const Dates = styled.div`
 margin-top: 1rem
`