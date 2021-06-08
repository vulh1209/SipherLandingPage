import React from 'react';
import styled from "styled-components";

const ButtonWrapper = styled.button`
  display: inline-block;
  background: transparent;
  border: none;
  box-sizing: border-box;
  margin: 0rem 0rem 0rem -10px;
`;

const Polygon = styled.polygon`
  fill: transparent;
`;

const Text = styled.text`
  font-family: "Chakra Petch";
  /* font-size: 20px;
  font-weight: bold; */
  text-transform: uppercase;
`;

export default function Button({ w, h, c1, c2, fw, fs, p_x, p_y, t, link, writeDeveloperData ,email,wallet,fullname}) {
    return (
        <div>
            {
                link
                &&
                (<ButtonWrapper onClick={() => window.location.href = `${link}`}>
                    {" "}
                    <svg
                        width={`${w}px`}
                        height={`${h}px`}
                        viewBox={`-10 -10 ${parseInt(w) + parseInt(p_x)} ${parseInt(h) + parseInt(p_y)}`}
                    >
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor={c1} />
                                <stop offset="100%" stopColor={c2} />
                            </linearGradient>
                        </defs>
                        <Polygon
                            stroke="url(#gradient)"
                            strokeWidth="5"
                            points={`0,0
                    ${(w - h / 2)},0
                    ${w},${h / 2}
                    ${w},${h}
                    0,${h}`}
                        />
                        <Text
                            fontSize={`${fs}`}
                            fontWeight={`${fw}`}
                            fill="url(#gradient)"
                            x={`${p_x}`}
                            text-anchor="middle"
                            y={`${(parseInt(h) + parseInt(p_y) + 8) / 2}`}
                        >
                            {t}
                        </Text>
                    </svg>
                </ButtonWrapper>)
            }
            {
                writeDeveloperData
                &&
                <ButtonWrapper onClick={(e) => writeDeveloperData(e, email,wallet,fullname)}>
                    {" "}
                    <svg
                        width={`${w}px`}
                        height={`${h}px`}
                        viewBox={`-10 -10 ${parseInt(w) + parseInt(p_x)} ${parseInt(h) + parseInt(p_y)}`}
                    >
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor={c1} />
                                <stop offset="100%" stopColor={c2} />
                            </linearGradient>
                        </defs>
                        <Polygon
                            stroke="url(#gradient)"
                            strokeWidth="5"
                            points={`0,0
                    ${(w - h / 2)},0
                    ${w},${h / 2}
                    ${w},${h}
                    0,${h}`}
                        />
                        <Text
                            fontSize={`${fs}`}
                            fontWeight={`${fw}`}
                            fill="url(#gradient)"
                            x={`${p_x}`}
                            text-anchor="middle"
                            y={`${(parseInt(h) + parseInt(p_y) + 8) / 2}`}
                        >
                            {t}
                        </Text>
                    </svg>
                </ButtonWrapper>
            }
        </div>
    );
};
