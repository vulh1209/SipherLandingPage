import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import Button from "./components/Button";
// import realtimeDB from "./firebase.js";
// import { v4 as uuidv4 } from "uuid";
// import { Animated } from "react-animated-css";

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  p {
    font-size: 0.8rem;
  }
`;
const Mid = styled.div`
  width: 100%;
  background-image: url("/images/bg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 2;
  box-shadow: 0 0 16px 0 black;
  background-position: 50%;
`;
const Welcome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding: 6rem;
  flex-wrap: wrap;
`;
const HeaderWelcome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 90%;
  img {
    width: 18rem;
    margin-right: 2rem;
  }
`;
const WelcomeDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  /* padding-left: 5vw; */
  width: 18rem;
  h2 {
    font-size: 2rem;
    font-weight: normal;
    margin-bottom: 0.5rem;
  }
  p {
    margin: 0.5rem 0rem 0.5rem 0rem;
  }
`;
const Content = styled.div`
  width: 40rem;
  background-image: url("/images/bgline.svg");
  background-repeat: no-repeat;
  background-size: contain;
`;
const FirstContent = styled.div`
  h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
  h3 {
    font-size: 1rem;
    font-weight: normal;
  }
`;
const UniqueNFTs = styled.div`
  padding: 9.5rem 0rem 0rem 2.5rem;
  p {
    margin: 0rem;
    padding: 0rem 0rem 0.5rem 2rem;
    width: 80%;
  }
  h3 {
    font-size: 1rem;
    padding: 0rem 0rem 0rem 2rem;
  }
  h1 {
    padding: 0rem 0rem 0rem 2rem;
  }
`;
const UniqueNFTsP3 = styled.p`
  width: 40rem;
`;
const H5WithLine = styled.div`
  img {
    width: 70%;
  }
  h5 {
    font-size: 0.9rem;
    margin: 0rem;
    padding: 0rem 1rem 0rem 2rem;
  }
`;
const H4WithLineLeft = styled.div`
  text-align: right;
  h4 {
    font-size: 1.5rem;
    margin: 0rem;
    padding: 0rem;
  }
  img {
      margin-right: 1rem;
    width: 16rem;
  }
`;
const H4WithLineRight = styled.div`
  width: 80%;
  img {
    width: 80%;
  }
  h4 {
    font-size: 0.9rem;
    margin: 0rem;
    padding: 0.5rem 0rem 0rem 2rem;
    text-align: left;
  }
`;
const UniqueNFTsP1 = styled.div`
  width: 32rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 1rem;
  p {
    padding: 0rem 0rem 0.5rem 0rem;
    width: 12rem;
  }
  img {
    width: 14rem;
  }
`;
const UniqueNFTsP2 = styled.p`
  width: 24rem !important;
`;
const WalletList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  img {
    padding: 1rem 0rem 0rem 1.5rem;
    width: 2rem;
  }
`;
const SecondContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: -3rem;
  h1 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1rem;
    font-weight: normal;
  }
  p {
    margin-bottom: 4rem;
  }
`;
const SecondLeft = styled.div`
  width: 17rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-top: 4rem;
  h4 {
    padding: 1rem 1rem 0rem 0rem;
    font-size: 1rem;
  }
  p {
    padding: 0rem 1rem 0rem 0rem;
    margin: 0rem 0rem 1rem 0rem;
    width: 16rem;
    text-align: right;
    text-align: justify;
  }
  ul {
    margin: 0.5rem 0rem;
    align-self: flex-start;
    margin-left: -1rem;
    color: #fcd11f;
  }
`;
const CardList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  img {
    padding: 0rem 0rem 0rem 0rem;
    width: 80%;
  }
`;
const SecondRight = styled.div`
  width: 22rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0rem 0rem 0rem 1rem;
  .underline {
    width: 22rem;
  }
`;
const SecondRightP1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding-left: 2rem;
  margin: 0.5rem 0rem;
  p {
    padding-left: 2rem;
    padding-top: 0rem;
    margin: 0rem;
  }
  .P1img {
    width: 2.8rem;
  }
`;
const SecondRightIconList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  img {
    padding: 0.25rem 3rem;
    width: 1.5rem;
    height: 1.5rem;
  }
  p {
    margin: 0em 0rem 0.25rem 0rem;
  }
`;
const ThirdContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ThirdHeader = styled.div`
  margin: -0.5rem 0rem 0rem 8rem;
  h1 {
    font-size: 2rem;
    margin-left: 4rem;
  }
  img {
    margin-top: -1rem;
    width: 80%;
    margin-bottom: 2rem;
  }
`;
const ThirdLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  img {
    width: 16rem;
    margin-bottom: -6rem;
    margin-left: -4.5rem;
  }
`;
const ThirdRight = styled.div`
  width: 40rem;
`;
const ThirdRightItem = styled.div`
  text-align: left;
  padding: 0rem 1rem 0.5rem 0rem;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 26rem;
  }
  h4 {
    font-size: 1rem;
    margin: 0rem;
    padding: 0rem 1rem;
  }
  h5 {
    font-size: 0.9rem;
    color: #b3b89a;
  }
  img {
    align-self: flex-end;
    width: 26rem;
  }
  ul {
    margin: 0rem;
    font-size: 0.8rem;
    color: white;
  }
`;
const FourTHContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  margin-left: -12rem;
  position: relative;
  span {
    color: red;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 24rem;
  }
  label {
    text-align: left;
    font-size: 1rem;
    margin: 0.5rem 0rem;
  }
  input {
    height: 2rem;
    background-color: #1ef6f930;
    margin: 0.5rem 0rem;
    width: 100%;
    color: #1ef6f9;
    padding: 0rem 1rem;
  }
  button {
    position: absolute;
    top: 0rem;
    right: 3.5rem;
  }
`;
const FourTHHeader = styled.div`
  margin: 0rem 0rem 2rem 0rem;
  h1 {
    font-size: 2rem;
    margin-left: 4rem;
  }
  img {
    margin-top: -1rem;
    width: 28rem;
  }
  h2 {
    font-size: 2rem;
    font-weight: normal;
    margin-left: 4rem;
  }
`;
const Socials = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: ${(props) => (props.Subcribed ? "1rem" : "4rem")};
  width: 28rem;
  margin-left: 4rem;
`;
const SocialList = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img {
    padding: 2rem 0rem 8rem 0rem;
    width: 2rem;
  }
`;
const Subcribe = styled.img`
  position: absolute;
  top: 15rem;
  right: 1.5rem;
  width: 8rem;
`;
const ThirdHalfContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  padding-left: 3rem;
  position: relative;
`;
const Clock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  margin-bottom: 0.5rem;
  p {
    font-size: 2rem;
    margin-top: -3rem;
    background: -webkit-linear-gradient(
      180deg,
      #1ef6f9 0%,
      #fcd11f 42.7%,
      #1ef6f9 94.3%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
const ClockItem = styled.div`
  margin: 1rem;
  text-align: center;
  h1 {
    font-size: 2rem;
    margin-left: 4rem;
    height: 5rem;
    background-image: url("/images/bgClock.svg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 6rem;
    height: 6rem;
    margin: 0rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h5 {
    margin-top: 0.8rem;
    font-size: 1.2rem;
    color: white;
    font-weight: 500;
  }6
`;
const ThirdHalfHeader = styled.div`
  margin: 2.5rem 0rem 1rem -4rem;
  h1 {
    font-size: 2rem;
    margin-left: 4rem;
  }
  img {
    margin-top: -4rem;
    width: 24rem;
  }
  h2 {
    font-size: 1.5rem;
    font-weight: normal;
    margin-left: 4rem;
    font-weight: 1000;
  }
`;
const ComingSoonContent = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 12%;
  p {
    margin-left: 4%;
    margin-top: 0rem;
  }
  img{
      width: 24rem;
  }
`;

export default function PhoneX() {
  // const [DB, setDB] = useState([])
  const [emailtext, setemailtext] = useState("");
  const [wallettext, setwallettext] = useState("");
  const [fullnametext, setfullnametext] = useState("");
  const [Subcribed, setSubcribed] = useState(false);
  const [isEmail, setisEmail] = useState(true);
  const [isSuccess, setisSuccess] = useState(true);
  const [Timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const writeData = async (e, email = "", wallet = "", fullname = "") => {
    e.preventDefault();
    const EmailRegex =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
    if (email && EmailRegex.test(email)) {
      // realtimeDB.ref(`email/${uuidv4()}`).set({
      //   email: email,
      //   wallet: wallet,
      //   fullname: fullname
      // });
      const data = {
        email: emailtext,
        fullname: fullnametext,
        wallet: wallettext,
        phone: "",
        telegram: "",
      };
      console.log(data);
      const settings = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      const response = await fetch(
        "https://bot.sipher.xyz:3000/api/subscribe",
        settings
      );
      const _isSuccess = await response.json();
      setisSuccess(_isSuccess.success);
      console.log(_isSuccess);
      setemailtext("");
      setwallettext("");
      setfullnametext("");
      console.log("l??u xong");
      setSubcribed(true);
      setisEmail(true);
    } else {
      setisEmail(false);
      console.log("nh???p l???i");
    }
  };
  const tick = () => {
    let difference = new Date(2021, 7, 15, 0, 0, 0, 0) - new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24) - 30),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    setTimer(timeLeft);
  };
  useEffect(() => {
    console.log("phoneX");
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  }, []);
  return (
    <Wrap>
      <Mid>
        <Welcome>
          <HeaderWelcome>
            <ScrollAnimation animateIn="animate__fadeInLeft" duration="0.5">
              <img src="/images/img_1.png" alt="" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="animate__fadeInRight" duration="0.8">
              <WelcomeDescription>
                <h2>Welcome to</h2>
                <img src="/images/logo.svg" alt="" />
                <p>
                  What is Sipher?
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Consectetur adipiscing elit, sed do eiusmod tempor incididunt
                  ut labore et dolore magna aliqua.{" "}
                </p>
                <Button
                  link="#subcribe"
                  w="320"
                  h="80"
                  c1="#1EF6F9FF"
                  c2="#FCD11FFF"
                  fw="600"
                  fs="30"
                  p_x="80"
                  p_y="10"
                  t="SUBCRIBE"
                />
              </WelcomeDescription>
            </ScrollAnimation>
          </HeaderWelcome>
          <Content>
            <FirstContent>
              <UniqueNFTs>
                <ScrollAnimation animateIn="animate__fadeInLeft" duration="0.5">
                  <h3>We create 1</h3>
                  <h1>
                    <span>UNIQUE NFTs</span>
                  </h1>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInLeft"
                  duration="0.55"
                >
                  <UniqueNFTsP3>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </UniqueNFTsP3>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInLeft" duration="0.6">
                  <H5WithLine>
                    <h5>
                      Provable algorithm to generate NFTs as unique doge agent
                    </h5>
                    <img src="/images/underline_1.svg" alt="" />
                  </H5WithLine>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInLeft"
                  duration="0.65"
                >
                  <UniqueNFTsP1>
                    <img src="/images/img_2.svg" alt="" />
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Consectetur adipiscing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua.
                    </p>
                  </UniqueNFTsP1>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInLeft" duration="0.7">
                  <H5WithLine>
                    <h5>Claim your ownership through smart contract</h5>
                    <img src="/images/underline_1.svg" alt="" />
                  </H5WithLine>
                  <UniqueNFTsP2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </UniqueNFTsP2>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInLeft"
                  duration="0.75"
                >
                  <H5WithLine>
                    <h5>View your collection on your Crypto Wallet</h5>
                    <img src="/images/underline_1.svg" alt="" />
                  </H5WithLine>
                  <UniqueNFTsP2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </UniqueNFTsP2>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInLeft" duration="0.8">
                  <WalletList>
                    <img src="/images/metamask.svg" alt="" />
                    <img src="/images/binance.svg" alt="" />
                    <img src="/images/trust.svg" alt="" />
                    <img src="/images/walletconnect.svg" alt="" />
                  </WalletList>
                </ScrollAnimation>
              </UniqueNFTs>
            </FirstContent>
            <SecondContent>
              <SecondLeft>
                <CardList>
                  <ScrollAnimation animateIn="animate__fadeInLeft" duration="1">
                    <img src="/images/card_1.svg" alt="" />
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="animate__fadeInLeft"
                    duration="0.6"
                  >
                    <img src="/images/card_2.svg" alt="" />
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateIn="animate__fadeInLeft"
                    duration="0.2"
                  >
                    <img src="/images/card_3.svg" alt="" />
                  </ScrollAnimation>
                </CardList>
                <ScrollAnimation animateIn="animate__fadeInLeft" duration="0.5">
                  <H4WithLineLeft>
                    <h4>
                      <span>PLAY TO EARN</span>
                    </h4>
                    <img src="/images/underline_left.svg" alt="" />
                  </H4WithLineLeft>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInLeft"
                  duration="0.55"
                >
                  <p>
                    Accompany your NTFs in Sipher's world games and get awesome
                    rewards in both cryptocurrency and game assets.
                  </p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInLeft" duration="0.6">
                  <ul>
                    <li>SOCIAL GAMES</li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInLeft"
                  duration="0.65"
                >
                  <ul>
                    <li>FIGHTING GAMES</li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInLeft" duration="0.7">
                  <ul>
                    <li>FARMING GAMES</li>
                  </ul>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </ScrollAnimation>
              </SecondLeft>
              <SecondRight>
                <h2>And make your</h2>
                <h1>
                  <span>NFTs GO LIVE</span>
                </h1>
                <img
                  className="underline"
                  src="/images/underline_header.svg"
                  alt=""
                />
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  duration="0.55"
                >
                  <H4WithLineRight>
                    <h4>
                      <span>CHAT WITH NFTs</span>
                    </h4>
                    <img src="/images/underline_right.svg" alt="" />
                  </H4WithLineRight>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  duration="0.6"
                >
                  <SecondRightP1>
                    <img className="P1img" src="/images/card_4.svg" alt="" />
                    <p>
                      Each NFT you own becomes a companion you can chat with.
                      They differ not only in appearance but also in personality
                      and skills. And especially you can train them to grow.
                    </p>
                  </SecondRightP1>
                  <SecondRightIconList>
                    <div>
                      <img src="/images/smile.svg" alt="" />
                      <p>Tell jokes</p>
                    </div>
                    <div>
                      <img src="/images/star.svg" alt="" />
                      <p>Fortune-telling</p>
                    </div>
                    <div>
                      <img src="/images/dolas.svg" alt="" />
                      <p>Hot deal hunter</p>
                    </div>
                  </SecondRightIconList>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  duration="0.65"
                >
                  <H4WithLineRight>
                    <h4>
                      <span>NFTs AS ASSISTANT</span>
                    </h4>
                    <img src="/images/underline_right.svg" alt="" />
                  </H4WithLineRight>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  duration="0.7"
                >
                  <SecondRightP1>
                    <img className="P1img" src="/images/money.svg" alt="" />
                    <p>
                      Your NFTs may possess the knowledge of investing in
                      cryptocurrencies like a guru and is always ready to give
                      you Not-financial advices.
                    </p>
                  </SecondRightP1>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  duration="0.75"
                >
                  <SecondRightP1>
                    <img className="P1img" src="/images/hand.svg" alt="" />
                    <p>
                      Your NFTs may possess ability to keep track of your
                      favorite cryptocurrencies to make notifications of your
                      price settings
                    </p>
                  </SecondRightP1>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  duration="0.8"
                >
                  <SecondRightP1>
                    <img className="P1img" src="/images/magic.svg" alt="" />
                    <p>
                      Your NFTs may possess ability to follow up on your
                      favorite cryptocurrency news to keep you updated ASAP.
                    </p>
                  </SecondRightP1>
                </ScrollAnimation>
              </SecondRight>
            </SecondContent>
            <ThirdContent>
              <ThirdLeft>
                <ScrollAnimation animateIn="animate__fadeInLeft" duration="0.8">
                  <img src="/images/img_3.svg" alt="" />
                </ScrollAnimation>
              </ThirdLeft>
              <ThirdRight>
                <ScrollAnimation
                  animateIn="animate__fadeInRight"
                  duration="0.8"
                >
                  <ThirdHeader>
                    <h1>
                      <span>ROADMAP</span>
                    </h1>
                    <img src="/images/underline_header_1.svg" alt="" />
                  </ThirdHeader>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInLeft" duration="0.5">
                  <ThirdRightItem>
                    <div>
                      <h4>
                        <span>PHASE 1</span>
                      </h4>
                      <h5>Jun 2021 - Jul 2021</h5>
                    </div>
                    <img src="/images/underline_left.svg" alt="" />
                    <ul>
                      <li>
                        Objective 01 Lorem ipsum dolor sit amet, consectetur
                        adipiscing
                      </li>
                      <li>
                        Objective 01 Lorem ipsum dolor sit amet, consectetur
                        adipiscing
                      </li>
                      <li>
                        Objective 01 Lorem ipsum dolor sit amet, consectetur
                        adipiscing
                      </li>
                    </ul>
                  </ThirdRightItem>
                </ScrollAnimation>
                <ScrollAnimation
                  animateIn="animate__fadeInLeft"
                  duration="0.55"
                >
                  <ThirdRightItem>
                    <div>
                      <h4>
                        <span>PHASE 2</span>
                      </h4>
                      <h5>Jul 2021 - Nov 2021</h5>
                    </div>
                    <img src="/images/underline_left.svg" alt="" />
                    <ul>
                      <li>
                        Objective 01 Lorem ipsum dolor sit amet, consectetur
                        adipiscing
                      </li>
                      <li>
                        Objective 01 Lorem ipsum dolor sit amet, consectetur
                        adipiscing
                      </li>
                      <li>
                        Objective 01 Lorem ipsum dolor sit amet, consectetur
                        adipiscing
                      </li>
                      <li>
                        Objective 01 Lorem ipsum dolor sit amet, consectetur
                        adipiscing
                      </li>
                      <li>
                        Objective 01 Lorem ipsum dolor sit amet, consectetur
                        adipiscing
                      </li>
                      <li>
                        Objective 01 Lorem ipsum dolor sit amet, consectetur
                        adipiscing
                      </li>
                    </ul>
                  </ThirdRightItem>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInLeft" duration="0.6">
                  <ThirdRightItem>
                    <div>
                      <h4>
                        <span>PHASE 3</span>
                      </h4>
                      <h5>Nov 2021 - Far future</h5>
                    </div>
                    <img src="/images/underline_left.svg" alt="" />
                    <ul>
                      <li>
                        Objective 01 Lorem ipsum dolor sit amet, consectetur
                        adipiscing
                      </li>
                      <li>
                        Objective 01 Lorem ipsum dolor sit amet, consectetur
                        adipiscing
                      </li>
                      <li>
                        Objective 01 Lorem ipsum dolor sit amet, consectetur
                        adipiscing
                      </li>
                      <li>
                        Objective 01 Lorem ipsum dolor sit amet, consectetur
                        adipiscing
                      </li>
                      <li>
                        Objective 01 Lorem ipsum dolor sit amet, consectetur
                        adipiscing
                      </li>
                      <li>
                        Objective 01 Lorem ipsum dolor sit amet, consectetur
                        adipiscing
                      </li>
                    </ul>
                  </ThirdRightItem>
                </ScrollAnimation>
              </ThirdRight>
            </ThirdContent>
            <ThirdHalfContent>
              <ScrollAnimation animateIn="animate__fadeInRight" duration="0.6">
                <ThirdHalfHeader>
                  <h2>SIPHERs</h2>
                  <h1>
                    <span>COMING SOON</span>
                  </h1>
                  <img src="/images/underline_header_1.svg" alt="" />
                </ThirdHalfHeader>
              </ScrollAnimation>
              <ScrollAnimation animateIn="animate__fadeInRight" duration="0.7">
                <Clock>
                  <ClockItem>
                    <h1>
                      <span>{Timer.days}</span>
                    </h1>
                    <h5>DAYS</h5>
                  </ClockItem>
                  <p>:</p>
                  <ClockItem>
                    <h1>
                      <span>{Timer.hours}</span>
                    </h1>
                    <h5>HOURS</h5>
                  </ClockItem>
                  <p>:</p>
                  <ClockItem>
                    <h1>
                      <span>{Timer.minutes}</span>
                    </h1>
                    <h5>MINUTES</h5>
                  </ClockItem>
                  <p>:</p>
                  <ClockItem>
                    <h1>
                      <span>{Timer.seconds}</span>
                    </h1>
                    <h5>SECOUNDS</h5>
                  </ClockItem>
                </Clock>
              </ScrollAnimation>
              <ScrollAnimation animateIn="animate__fadeInRight" duration="0.8">
                <ComingSoonContent>
                  <img src="/images/underline_right.svg" alt="" />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </ComingSoonContent>
              </ScrollAnimation>
            </ThirdHalfContent>
            <FourTHContent>
              {/* <Button w='240' h='80' c1='#1EF6F9FF' c2='#FCD11FFF' fw='600' fs='30' p_x='40' p_y='12' t="SUBCRIBE" writeData={writeData} email={emailtext} wallet={wallettext} fullname={fullnametext} /> */}
              {emailtext && (
                <Subcribe
                  src="/images/btnActive.svg"
                  alt=""
                  onClick={(e) =>
                    writeData(e, emailtext, wallettext, fullnametext)
                  }
                />
              )}
              {!emailtext && <Subcribe src="/images/btnDeactive.svg" alt="" />}
              <ScrollAnimation animateIn="animate__fadeInLeft" duration="0.5">
                <FourTHHeader id="subcribe">
                  <h2>Let???s join us</h2>
                  <h1>
                    <span>LATEST NEWS</span>
                  </h1>
                  <img src="/images/underline_header_1.svg" alt="" />
                </FourTHHeader>
              </ScrollAnimation>
              <ScrollAnimation animateIn="animate__fadeInLeft" duration="0.55">
                <form>
                  <label>
                    Email Address{" "}
                    <span>
                      * {!isEmail && "Please check your email! "}{" "}
                      {!isSuccess && "This email has already Subcribed"}
                    </span>
                  </label>
                  <input
                    onChange={(e) => setemailtext(e.target.value)}
                    value={emailtext}
                  />
                  <label>Wallet Address</label>
                  <input
                    onChange={(e) => setwallettext(e.target.value)}
                    value={wallettext}
                  />
                  <label>Your name</label>
                  <input
                    onChange={(e) => setfullnametext(e.target.value)}
                    value={fullnametext}
                  />
                </form>
              </ScrollAnimation>
              {Subcribed && <h4>THANK YOU FOR SUBCRIBING!</h4>}
              <ScrollAnimation animateIn="animate__fadeInLeft" duration="0.6">
                <Socials Subcribed={Subcribed}>
                  <h3>VERY SOCIAL. MUST JOIN. WOW!</h3>
                  <SocialList>
                    <img src="/images/icons/fb.svg" alt="" />
                    <img src="/images/icons/discord.svg" alt="" />
                    <img src="/images/icons/twitter.svg" alt="" />
                    <img src="/images/icons/insta.svg" alt="" />
                    <img src="/images/icons/linked.svg" alt="" />
                    <img src="/images/icons/telegram.svg" alt="" />
                  </SocialList>
                </Socials>
              </ScrollAnimation>
            </FourTHContent>
          </Content>
        </Welcome>
      </Mid>
    </Wrap>
  );
}
