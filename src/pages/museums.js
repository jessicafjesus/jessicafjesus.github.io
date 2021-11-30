import React from "react";
import styled from "styled-components";

const Museums = () => {
  return (
    <>
      <LeftBlock>
        <CatStyle> Suggested Categories</CatStyle>
        <CatImageM className="categoriesBtn">Modern Art</CatImageM>
        <CatImageH className="categoriesBtn">History</CatImageH>
        <CatImageS className="categoriesBtn">Science</CatImageS>
        <div horizontal>
          <ViewAllStyle>
            View All
            <img
              src="https://marvel-live.freetls.fastly.net/canvas/2021/10/e27467627666434985412fa7811db91c?quality=95&fake=.png"
              alt="arrow"
              width="40"
              height="25"
            />
          </ViewAllStyle>
        </div>
      </LeftBlock>
      <RightBlock>
        <CatStyle>Don't know what to visit?</CatStyle>
        <TakeQuizBtn className="categoriesBtn">Take our quiz</TakeQuizBtn>
      </RightBlock>
    </>
  );
};

export default Museums;

export const CatButton = styled.button`
  border: 3px solid #00a3a3;
  border-radius: 6px;
  padding: 10px;
  left-margin: 20px;
  width: 184px;
  height: 53px;
  color: #00a3a3;
  font-family: Lato, sans-serif;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: #00a3a3;
    outline: auto;
    border: 3px solid #00a3a3;
    font-weight: bold;
  }
`;

export const CatStyle = styled.h1`
  color: #191f24;
  font-family: Lato, sans-serif;
  font-size: 23px;
  line-height: 35px;
  text-align: left;
  padding: 40px;
  font-weight: bold;
`;

export const CatImageM = styled(CatButton)`
  background: no-repeat left/20%
    url(https://cdn-icons.flaticon.com/png/512/3162/premium/3162573.png?token=exp=1638191578~hmac=b520cd6dbf76ae61d0e67b3e241c9d5c);
`;

export const CatImageH = styled(CatButton)`
  background: no-repeat left/20%
    url(https://cdn-icons.flaticon.com/png/512/3673/premium/3673777.png?token=exp=1638207956~hmac=78a8c090c591ca2684bd0e383d8e307d);
`;
export const CatImageS = styled(CatButton)`
  background: no-repeat left/20%
    url(https://cdn-icons-png.flaticon.com/512/782/782711.png);
`;

export const LeftBlock = styled.div`
  margin: 10px 20px;
  padding: 20px;
  width: 750px;
  float: left;
`;

export const RightBlock = styled.div`
  margin: 10px 50px;
  padding: 20px;
  width: 400px;
  float: right;
`;

export const TakeQuizBtn = styled.button`
  padding: 10px;
  border-radius: 6px;
  border: 3px solid #ffa552;
  left-margin: 20px;
  width: 194px;
  height: 73px;
  color: #fff;
  background-color: #ffa552;
  font-family: Lato, sans-serif;
  font-size: 23px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s ease-in-out;
  &:hover {
    outline: auto;
    font-weight: bold;
  }
`;

export const ViewAllStyle = styled.h1`
  color: #00a3a3;
  font-family: Lato, sans-serif;
  font-size: 23px;
  line-height: 35px;
  text-align: left;
  padding: 40px;
  font-weight: bold;
`;
