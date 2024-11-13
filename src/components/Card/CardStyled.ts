import styled from "styled-components";

export const CardList = styled.ul`
margin-left: auto;
margin-right: auto;
`

export const CardStyled = styled.li`
  padding-left: 24px;
  padding-top: 24px;
  padding-right: 24px;
  padding-bottom: 24px;

  text-align: left;

  background-color: #fff;

  border: 1px solid #000;
  border-radius: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.05);

  
`;

export const StatusCon = styled.div`
  display: inline-block;

  padding-left: 12px;
  padding-top: 4px;
  padding-right: 12px;
  padding-bottom: 4px;

  margin-top: 24px;
  margin-bottom: 12px;

  font-family: "Figtree";
  font-size: 12px;
  line-height: 1.5;
  font-weight: 900;

  background-color: #f4d04e;

  border-radius: 4px;
`;

export const DateCon = styled.div`
margin-bottom: 12px;

font-family: "Figtree";
font-size: 12px;
line-height: 1.5;
color: #000;
`

export const Title = styled.h3`
  margin-bottom: 12px;

  font-size: 20px;
  font-family: "Figtree";
  font-weight: 900;
  color: #000;
  transition: color 1s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover,
  &:focus,
  &:active {
    transition: color 1s cubic-bezier(0.075, 0.82, 0.165, 1);
    color: #f4d04e;
    cursor: pointer;
  }
`;

export const Content = styled.p`
width: 270px;

  margin-bottom: 24px;

  font-family: "Figtree";
  font-size: 14px;
  line-height: 1.5;
  color: #7f7f7f;
`;

export const AuthorCon = styled.div`
display: flex;
flex-direction: row;
align-items: center;

font-family: "Figtree";
color: #000;
font-size: 14px;
line-height: 1.5;
font-weight: bolder;
&>*:first-child{
    margin-right: 12px;
}
`