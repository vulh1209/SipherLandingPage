import React from 'react'
import styled from "styled-components";

import Button from "./components/Button";

const Wrap = styled.div`
  width: 100vw;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const lineWrap = styled.div`
  position: absolute;
  height: 1rem;
  top: 0rem;
  width:100rem;
  left:0;
  background-color:#FCD11F;
  z-index: 1;
`;
const Mid = styled.div`
  width: 80rem;
  background-image: url("/images/bg.svg");  
  background-repeat  : no-repeat;
  background-size: cover;
  z-index: 2;
`;
const Welcome = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  padding:6rem;
  flex-wrap: wrap;
`;
const WelcomeDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding-left: 5vw;
  width: 30rem;
  h1{
    font-size: 5rem;
  }
  h2{
    font-size: 4rem;
    font-weight: normal;
  }
  p{
    margin-bottom: 4rem;
  }
`;
const Content = styled.div`
  width: 80rem;
  background-image: url("/images/bgline.svg");  
  background-repeat  : no-repeat;
  background-size: contain;
`;
const FirstContent = styled.div`
  h1{
    font-size: 5rem;
    margin-bottom: 1.5rem;
  }
  h3{
    font-size: 4rem;
    font-weight: normal;
  }
  p{
    margin-bottom: 4rem;
  }
`;
const UniqueNFTs = styled.div`
  padding: 14.5rem 0rem 0rem 4rem;
  p{
    margin: 0rem;
    padding: 0.5rem 0rem 0rem 2rem;
    /* width: 52rem; */
  }
  h3{
    font-size: 2.5rem;
    padding: 0rem 0rem 0rem 2rem;
  }
  h1{
    padding: 0rem 0rem 0rem 2rem;
  }
`;
const UniqueNFTsP3 = styled.p`
  width: 52rem;
`;
const H5WithLine = styled.div`
  h5{
    font-size: 1.5rem;
    margin: 0rem;
    padding:1rem 1rem 0rem 2rem;
  }
`;
const H4WithLineLeft = styled.div`
  text-align: right;
  h4{
    font-size: 2rem;
    margin: 0rem;
    padding:0rem 1rem;
  }
  img{
    width: 28rem;
  }
`;
const H4WithLineRight = styled.div`
  h4{
    font-size: 2rem;
    margin: 0rem;
    padding:2rem 0rem 0rem 2rem;
    text-align: left;
  }
`;
const UniqueNFTsP1 = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding-left: 1rem;
`;
const UniqueNFTsP2 = styled.p`
  width: 36rem;
`;
const WalletList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  img{
    padding: 1.5rem 2rem 0rem 2rem;
    width: 3rem;
  }
`;
const SecondContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  h1{
    font-size: 5rem;
  }
  h3{
    font-size: 4rem;
    font-weight: normal;
  }
  p{
    margin-bottom: 4rem;
  }
`;
const SecondLeft = styled.div`
  width: 28rem;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-top: 16rem;
  h4{
    padding: 1rem 2rem 0rem 0rem;
  }
  p{
    padding:0rem 2rem 0rem 0rem;
    margin: 0rem 0rem 1rem 0rem;
    width: 24rem;
    text-align: right;
    text-align: justify;
  }
  ul{
    margin: 0.5rem 0rem;
    align-self: flex-start;
    margin-left: 2rem;
    color: #FCD11F;
  }
`;
const CardList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  img{
    padding: 0rem 2rem 0rem 0rem;
  }
`;
const SecondRight = styled.div`
  width: 40rem;  
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 12rem 0rem 0rem 3rem;
`;
const SecondRightP1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  padding-left:2rem;
  margin: 0.5rem 0rem;
  p{
    padding-left: 2rem;
    margin: 0rem;
  }
`;
const SecondRightIconList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  div{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  img{
    padding: 0.5rem 2rem;
  }
  p{
    margin: 0em 0rem 1rem 0rem;
  }
`;
const ThirdContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;
const ThirdHeader = styled.div`
  margin: 2rem 0rem 4rem 8rem;
  h1{
    font-size: 5rem; 
    margin-left : 4rem;
    height: 5rem;
  }
  img{
    margin-top: -1rem;
  }
`;
const ThirdLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-end;
  img{
    width: 24rem;
    margin-bottom: -20rem;
  }
`;
const ThirdRight = styled.div`
  width: 44rem;
`;
const ThirdRightItem = styled.div`
  text-align: left;
  padding-right: 8rem;
  padding: 2rem 8rem 2rem 0rem;
  div{    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 40rem;
  }
  h4{
    font-size: 2rem;
    margin: 0rem;
    padding:0rem 1rem;
  }
  h5{
    font-size: 1.2rem;
    color: #B3B89A;
  }
  img{
    align-self: flex-end;
    width: 42rem;
  }
  ul{
    margin: 0rem;
  }
`;
const FourTHContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 16rem;
    margin-left: -8rem;
    position: relative;
    form{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: 28rem;
    }
    label{
      text-align: left;
      font-size: 1rem;
      margin:0.5rem 0rem;
    }
    input{
      height: 2rem;
      background-color: #1EF6F930;
      margin: 0.5rem 0rem;
      width: 100%;
    }
    button{
      position: absolute;
      top:0rem;
      right:3.5rem
    }
`;
const FourTHHeader = styled.div`
  margin: 0rem 0rem 2rem 0rem;
  h1{
    font-size: 5rem; 
    margin-left : 4rem;
    height: 5rem;
  }
  img{
    margin-top: -1rem;
  }
  h2{
    font-size: 3rem;
    font-weight: normal;
    margin-left : 4rem;
  }
`;
const Socials = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 4rem;
  width: 28rem;
`;
const SocialList = styled.div`
  width: 28rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  img{
    padding: 2rem 0rem 8rem 0rem;
    width: 2rem;
  }
`;

export default function App() {
  return (
    <Wrap>
      <lineWrap/>
      <lineWrap topline="40rem"/>
      <lineWrap topline="60rem"/>
      <lineWrap topline="80rem"/>
      <Mid>
        <Welcome>
          <img src='/images/img_1.svg' alt="" />
          <WelcomeDescription>
            <h2>Welcome to</h2>
            <h1><span>SIPHΞR</span></h1>
            <p>What is Sipher?<br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <Button w='320' h='80' c1='#1EF6F9FF' c2='#FCD11FFF' fw='600' fs='30' p_x='80' p_y='10' t="SUBCRIBE" />
          </WelcomeDescription>
          <Content>
            <FirstContent>
              <UniqueNFTs>
                <h3>We create</h3>
                <h1><span>UNIQUE NFTs</span></h1>
                <UniqueNFTsP3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</UniqueNFTsP3>
                <H5WithLine>
                  <h5>Provable algorithm to generate NFTs as unique doge agent</h5>
                  <img src='/images/underline_1.svg' alt="" />
                </H5WithLine>
                <UniqueNFTsP1>
                  <img src='/images/img_2.svg' alt="" />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </UniqueNFTsP1>
                <H5WithLine>
                  <h5>Claim your ownership through smart contract</h5>
                  <img src='/images/underline_1.svg' alt="" />
                </H5WithLine>
                <UniqueNFTsP2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</UniqueNFTsP2>
                <H5WithLine>
                  <h5>View your collection on your Crypto Wallet</h5>
                  <img src='/images/underline_1.svg' alt="" />
                </H5WithLine>
                <UniqueNFTsP2>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</UniqueNFTsP2>
                <WalletList>
                  <img src='/images/metamask.svg' alt="" />
                  <img src='/images/binance.svg' alt="" />
                  <img src='/images/trust.svg' alt="" />
                  <img src='/images/walletconnect.svg' alt="" />
                </WalletList>
              </UniqueNFTs>
            </FirstContent>
            <SecondContent>
              <SecondLeft>
                <CardList>
                  <img src='/images/card_1.svg' alt="" />
                  <img src='/images/card_2.svg' alt="" />
                  <img src='/images/card_3.svg' alt="" />
                </CardList>
                <H4WithLineLeft>
                  <h4><span>PLAY TO EARN</span></h4>
                  <img src='/images/underline_left.svg' alt="" />
                </H4WithLineLeft>
                <p>Accompany your NTFs in Sipher's world games and get awesome rewards in both cryptocurrency and game assets.</p>
                <ul><li>SOCIAL GAMES</li></ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <ul><li>FIGHTING GAMES</li></ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <ul><li>FARMING GAMES</li></ul>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </SecondLeft>
              <SecondRight>
                <h2>And make your</h2>
                <h1><span>NFTs GO LIVE</span></h1>
                <img src='/images/underline_header.svg' alt="" />
                <H4WithLineRight>
                  <h4><span>CHAT WITH NFTs</span></h4>
                  <img src='/images/underline_right.svg' alt="" />
                </H4WithLineRight>
                <SecondRightP1>
                  <img src='/images/card_4.svg' alt="" />
                  <p>Each NFT you own becomes a companion you can chat with. They differ not only in appearance but also in personality and skills. And especially you can train them to grow.</p>
                </SecondRightP1>
                <SecondRightIconList>
                  <div>
                    <img src='/images/smile.svg' alt="" />
                    <p>Tell jokes</p>
                  </div>
                  <div>
                    <img src='/images/star.svg' alt="" />
                    <p>Fortune-telling</p>
                  </div>
                  <div>
                    <img src='/images/dolas.svg' alt="" />
                    <p>Hot deal hunter</p>
                  </div>
                </SecondRightIconList>
                <H4WithLineRight>
                  <h4><span>NFTs AS ASSISTANT</span></h4>
                  <img src='/images/underline_right.svg' alt="" />
                </H4WithLineRight>
                <SecondRightP1>
                  <img src='/images/money.svg' alt="" />
                  <p>Your NFTs may possess the knowledge of investing in cryptocurrencies like a guru and is always ready to give you Not-financial advices.</p>
                </SecondRightP1>
                <SecondRightP1>
                  <img src='/images/hand.svg' alt="" />
                  <p>Your NFTs may possess ability to keep track of your favorite cryptocurrencies to make notifications of your price settings</p>
                </SecondRightP1>
                <SecondRightP1>
                  <img src='/images/magic.svg' alt="" />
                  <p>Your NFTs may possess ability to follow up on your favorite cryptocurrency news to keep you updated ASAP.</p>
                </SecondRightP1>
              </SecondRight>
            </SecondContent>
            <ThirdContent>
              <ThirdLeft>
                <img src='/images/img_3.svg' alt="" />
              </ThirdLeft>
              <ThirdRight>
                <ThirdHeader>
                  <h1><span>ROADMAP</span></h1>
                  <img src='/images/underline_header_1.svg' alt="" />
                </ThirdHeader>
                <ThirdRightItem>
                  <div><h4><span>PHASE 1</span></h4><h5>Jun 2021  -  Jul 2021</h5></div>
                  <img src='/images/underline_left.svg' alt="" />
                  <ul>
                    <li>Objective 01 Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                    <li>Objective 01 Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                    <li>Objective 01 Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                  </ul>
                </ThirdRightItem>
                <ThirdRightItem>
                  <div><h4><span>PHASE 2</span></h4><h5>Jul 2021  -  Nov 2021</h5></div>
                  <img src='/images/underline_left.svg' alt="" />
                  <ul>
                    <li>Objective 01 Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                    <li>Objective 01 Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                    <li>Objective 01 Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                    <li>Objective 01 Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                    <li>Objective 01 Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                    <li>Objective 01 Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                  </ul>
                </ThirdRightItem>
                <ThirdRightItem>
                  <div><h4><span>PHASE 3</span></h4><h5>Nov 2021  -  Far future</h5></div>
                  <img src='/images/underline_left.svg' alt="" />
                  <ul>
                    <li>Objective 01 Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                    <li>Objective 01 Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                    <li>Objective 01 Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                    <li>Objective 01 Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                    <li>Objective 01 Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                    <li>Objective 01 Lorem ipsum dolor sit amet, consectetur adipiscing</li>
                  </ul>
                </ThirdRightItem>
              </ThirdRight>
            </ThirdContent>
            <FourTHContent>
            <Button w='240' h='80' c1='#1EF6F9FF' c2='#FCD11FFF' fw='600' fs='30' p_x='40' p_y='12' t="SUBCRIBE" />
              <FourTHHeader>
                <h2>Let’s join us</h2>
                <h1><span>LATEST NEWS</span></h1>
                <img src='/images/underline_header_1.svg' alt="" />
              </FourTHHeader>
              <form>
                <label>Email Address <span>*</span></label>
                <input />
                <label>Wallet Address</label>
                <input />
                <label>Your name</label>
                <input />
              </form>
              <Socials>
                <h3>VERY SOCIAL. MUST JOIN. WOW!</h3>
                <SocialList>
                  <img src='/images/icons/fb.svg' alt="" />
                  <img src='/images/icons/discord.svg' alt="" />
                  <img src='/images/icons/twitter.svg' alt="" />
                  <img src='/images/icons/insta.svg' alt="" />
                  <img src='/images/icons/linked.svg' alt="" />
                  <img src='/images/icons/telegram.svg' alt="" />
                </SocialList>
              </Socials>
            </FourTHContent>
          </Content>
        </Welcome>
      </Mid>
    </Wrap>
  )
}

