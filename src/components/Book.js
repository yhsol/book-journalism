import React, { useState } from "react";
import styled from "styled-components";
import validator from "email-validator";

const logo = require("../images/2.png");
const arrow = require("../images/15.png");

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1a1a1a;
  /* @media (max-width: 1600px) {
    width: 1600px;
    height: 1080px;
  } */
  @media (max-width: 320px) {
    width: 320px;
    height: 568px;
  }
`;

const Logo = styled.div`
  margin-top: 30px;
  margin-left: 19.8px;
  margin-right: 19.3px;
  width: 280px;
  height: 19.3px;
  object-fit: contain;
`;

const Title = styled.div`
  width: 159px;
  height: 31px;
  font-family: NotoSerifCJKkr;
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 1.1px;
  text-align: center;
  color: #ffffff;
  margin: 155.7px 0 20px;
`;

const Contents = styled.div`
  width: 180px;
  height: 47px;
  font-family: NotoSerifCJKkr;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 280px;
  height: 40px;
  border: solid 1px rgba(255, 255, 255, 0.5);
  display: grid;
  grid-template-columns: 9fr 1fr;
  align-items: center;
`;

const Input = styled.input`
  background-color: initial;
  border: none;
  font-size: 16px;
  padding-left: 16px;
  color: #ffffff;
`;

const Footer = styled.div`
  width: 113px;
  height: 19px;
  font-family: Spectral;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: center;
  color: #ffffff;
  @media (max-width: 1600px) {
    margin-top: 370px;
  }
  @media (max-width: 320px) {
    margin-top: 156px;
  }
`;

function Book() {
  const [value, setValue] = useState("");
  const [valid, setValid] = useState(false);

  const onChange = e => {
    const value = e.target.value;
    if (validator.validate(value)) {
      setValue(value);
      setValid(true);
    } else {
      setValue(value);
      setValid(false);
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    valid === true
      ? alert("감사합니다.")
      : alert("이메일 주소를 확인해 주세요.");
    setValue("");
  };

  return (
    <Wrapper>
      <Logo>
        <img src={logo} alt="log" />
      </Logo>
      <Title>뉴스레터 구독</Title>
      <Contents>
        잘 다녀오셨어요?
        <br /> 지적 여정을 시작합니다.
      </Contents>
      <Form onSubmit={onSubmit}>
        <Input placeholder="E-mail Address" value={value} onChange={onChange} />
        <img src={arrow} alt="button" />
      </Form>
      <Footer>© 2019 Threechairs.</Footer>
    </Wrapper>
  );
}

export default Book;
