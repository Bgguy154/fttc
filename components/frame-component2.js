import { css } from "@emotion/css";
import WebDesignsCategory from "./web-designs-category";
import PropTypes from "prop-types";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section
      className={[
        css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          padding: 0px var(--padding-xl) 0px var(--padding-4xl);
          box-sizing: border-box;
          max-width: 100%;
          flex-shrink: 0;
          text-align: center;
          font-size: var(--h2-65-size);
          color: var(--color-black);
          font-family: var(--nav-bar-text-21);
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          width: 1423px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-87xl);
          max-width: 100%;
          @media screen and (max-width: 925px) {
            gap: var(--gap-34xl);
          }
          @media screen and (max-width: 450px) {
            gap: var(--gap-7xl);
          }
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px 0px var(--padding-14xl);
            box-sizing: border-box;
            gap: var(--gap-5xl);
            max-width: 100%;
          `}
        >
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: center;
              padding: 0px var(--padding-4xl) 0px var(--padding-xl);
              box-sizing: border-box;
              max-width: 100%;
            `}
          >
            <div
              className={css`
                width: 932px;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: flex-start;
                gap: var(--gap-mini);
                max-width: 100%;
              `}
            >
              <div
                className={css`
                  align-self: stretch;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: center;
                  padding: 0px var(--padding-xl) 0px var(--padding-3xl);
                `}
              >
                <h1
                  className={css`
                    margin: 0;
                    position: relative;
                    font-size: inherit;
                    letter-spacing: 0.03em;
                    font-weight: 600;
                    font-family: inherit;
                    @media screen and (max-width: 925px) {
                      font-size: var(--font-size-33xl);
                    }
                    @media screen and (max-width: 450px) {
                      font-size: var(--font-size-20xl);
                    }
                  `}
                >
                  Services
                </h1>
              </div>
              <div
                className={css`
                  align-self: stretch;
                  height: 101px;
                  position: relative;
                  font-size: var(--nav-bar-text-21-size);
                  letter-spacing: 0.03em;
                  display: inline-block;
                  flex-shrink: 0;
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-mid);
                  }
                `}
              >
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
                nibh lectus netus in. Aliquet donec morbi convallis pretium
              </div>
            </div>
          </div>
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              align-items: flex-start;
              justify-content: center;
              gap: var(--gap-12xl);
              max-width: 100%;
              text-align: left;
              font-size: var(--font-size-13xl);
              @media screen and (max-width: 925px) {
                gap: var(--gap-mini);
              }
            `}
          >
            <div
              className={css`
                flex: 1;
                border-radius: var(--br-sm);
                background-color: var(--color-whitesmoke-100);
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: var(--padding-38xl) var(--padding-lg)
                  var(--padding-3xs);
                box-sizing: border-box;
                gap: var(--gap-7xl);
                min-width: 304px;
                max-width: 100%;
                text-align: center;
              `}
            >
              <div
                className={css`
                  width: 330px;
                  height: 346px;
                  position: relative;
                  border-radius: var(--br-sm);
                  background-color: var(--color-whitesmoke-100);
                  display: none;
                  max-width: 100%;
                `}
              />
              <div
                className={css`
                  width: 70px;
                  height: 70px;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  position: relative;
                `}
              >
                <div
                  className={css`
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    margin: 0 !important;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      top: 0px;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      max-width: 100%;
                      overflow: hidden;
                      max-height: 100%;
                      z-index: 1;
                    `}
                    alt=""
                    src="/vector.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 23.8px;
                      left: 56.3px;
                      width: 2.7px;
                      height: 2.7px;
                      z-index: 2;
                    `}
                    alt=""
                    src="/vector-1.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 20.5px;
                      left: 6.6px;
                      width: 12.3px;
                      height: 9.3px;
                      z-index: 2;
                    `}
                    alt=""
                    src="/vector-2.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 20.5px;
                      left: 22.7px;
                      width: 16.9px;
                      height: 2.7px;
                      z-index: 2;
                    `}
                    alt=""
                    src="/vector-3.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 27.1px;
                      left: 22.7px;
                      width: 16.9px;
                      height: 2.7px;
                      z-index: 2;
                    `}
                    alt=""
                    src="/vector-4.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 46.8px;
                      left: 30.3px;
                      width: 12.3px;
                      height: 9.3px;
                      z-index: 2;
                    `}
                    alt=""
                    src="/vector-5.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 46.8px;
                      left: 46.5px;
                      width: 16.9px;
                      height: 2.7px;
                      z-index: 2;
                    `}
                    alt=""
                    src="/vector-6.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 53.3px;
                      left: 46.5px;
                      width: 16.9px;
                      height: 2.7px;
                      z-index: 2;
                    `}
                    alt=""
                    src="/vector-7.svg"
                  />
                </div>
              </div>
              <div
                className={css`
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-mini);
                `}
              >
                <h3
                  className={css`
                    margin: 0;
                    height: 48px;
                    position: relative;
                    font-size: inherit;
                    letter-spacing: 0.03em;
                    font-weight: 600;
                    font-family: inherit;
                    display: inline-block;
                    min-width: 96px;
                    z-index: 1;
                    @media screen and (max-width: 925px) {
                      font-size: var(--font-size-7xl);
                    }
                    @media screen and (max-width: 450px) {
                      font-size: var(--sub-p-19-size);
                    }
                  `}
                >
                  UI/UX
                </h3>
                <div
                  className={css`
                    align-self: stretch;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-start;
                    padding: 0px 0px 0px var(--padding-9xs);
                    text-align: left;
                    font-size: var(--sub-p-19-size);
                  `}
                >
                  <div
                    className={css`
                      height: 120px;
                      flex: 1;
                      position: relative;
                      letter-spacing: 0.03em;
                      display: inline-block;
                      z-index: 1;
                    `}
                  >
                    Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam
                    diam interdum
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                flex: 1;
                border-radius: var(--br-sm);
                background-color: var(--color-whitesmoke-100);
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: var(--padding-35xl) var(--padding-lg)
                  var(--padding-3xs);
                box-sizing: border-box;
                gap: var(--gap-base);
                min-width: 304px;
                max-width: 100%;
              `}
            >
              <div
                className={css`
                  width: 330px;
                  height: 346px;
                  position: relative;
                  border-radius: var(--br-sm);
                  background-color: var(--color-whitesmoke-100);
                  display: none;
                  max-width: 100%;
                `}
              />
              <img
                className={css`
                  width: 72px;
                  height: 82px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                  z-index: 1;
                `}
                loading="lazy"
                alt=""
                src="/layer-1.svg"
              />
              <h3
                className={css`
                  margin: 0;
                  position: relative;
                  font-size: inherit;
                  letter-spacing: 0.03em;
                  font-weight: 600;
                  font-family: inherit;
                  z-index: 1;
                  @media screen and (max-width: 925px) {
                    font-size: var(--font-size-7xl);
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--sub-p-19-size);
                  }
                `}
              >{`Web Design `}</h3>
              <div
                className={css`
                  align-self: stretch;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  padding: 0px 0px 0px var(--padding-9xs);
                  font-size: var(--sub-p-19-size);
                `}
              >
                <div
                  className={css`
                    height: 120px;
                    flex: 1;
                    position: relative;
                    letter-spacing: 0.03em;
                    display: inline-block;
                    z-index: 1;
                  `}
                >
                  Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam
                  diam interdum
                </div>
              </div>
            </div>
            <div
              className={css`
                flex: 1;
                border-radius: var(--br-sm);
                background-color: var(--color-whitesmoke-100);
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: var(--padding-32xl) var(--padding-lg)
                  var(--padding-3xs);
                box-sizing: border-box;
                gap: var(--gap-lgi-5);
                min-width: 304px;
                max-width: 100%;
              `}
            >
              <div
                className={css`
                  width: 330px;
                  height: 346px;
                  position: relative;
                  border-radius: var(--br-sm);
                  background-color: var(--color-whitesmoke-100);
                  display: none;
                  max-width: 100%;
                `}
              />
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  padding: 0px var(--padding-9xs);
                `}
              >
                <img
                  className={css`
                    height: 82.5px;
                    width: 47px;
                    position: relative;
                    z-index: 1;
                  `}
                  loading="lazy"
                  alt=""
                  src="/group-18.svg"
                />
              </div>
              <div
                className={css`
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-mini);
                `}
              >
                <h3
                  className={css`
                    margin: 0;
                    position: relative;
                    font-size: inherit;
                    letter-spacing: 0.03em;
                    font-weight: 600;
                    font-family: inherit;
                    z-index: 1;
                    @media screen and (max-width: 925px) {
                      font-size: var(--font-size-7xl);
                    }
                    @media screen and (max-width: 450px) {
                      font-size: var(--sub-p-19-size);
                    }
                  `}
                >
                  App Design
                </h3>
                <div
                  className={css`
                    align-self: stretch;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-start;
                    padding: 0px 0px 0px var(--padding-9xs);
                    font-size: var(--sub-p-19-size);
                  `}
                >
                  <div
                    className={css`
                      height: 120px;
                      flex: 1;
                      position: relative;
                      letter-spacing: 0.03em;
                      display: inline-block;
                      z-index: 1;
                    `}
                  >
                    Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam
                    diam interdum
                  </div>
                </div>
              </div>
            </div>
            <div
              className={css`
                flex: 1;
                border-radius: var(--br-sm);
                background-color: var(--color-whitesmoke-100);
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                padding: var(--padding-38xl) var(--padding-lg)
                  var(--padding-3xs);
                box-sizing: border-box;
                gap: var(--gap-7xl);
                min-width: 304px;
                max-width: 100%;
              `}
            >
              <div
                className={css`
                  width: 330px;
                  height: 346px;
                  position: relative;
                  border-radius: var(--br-sm);
                  background-color: var(--color-whitesmoke-100);
                  display: none;
                  max-width: 100%;
                `}
              />
              <div
                className={css`
                  width: 82px;
                  height: 70px;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  position: relative;
                `}
              >
                <div
                  className={css`
                    height: 100%;
                    width: 100%;
                    position: absolute;
                    margin: 0 !important;
                    top: 0px;
                    right: 0px;
                    bottom: 0px;
                    left: 0px;
                  `}
                >
                  <img
                    className={css`
                      position: absolute;
                      height: 100%;
                      width: 100%;
                      top: 0px;
                      right: 0px;
                      bottom: 0px;
                      left: 0px;
                      max-width: 100%;
                      overflow: hidden;
                      max-height: 100%;
                      z-index: 1;
                    `}
                    alt=""
                    src="/vector-8.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 6.8px;
                      left: 19.6px;
                      width: 9.7px;
                      height: 10.2px;
                      z-index: 2;
                    `}
                    alt=""
                    src="/vector-9.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 6.8px;
                      left: 6.6px;
                      width: 9.7px;
                      height: 10.2px;
                      z-index: 2;
                    `}
                    alt=""
                    src="/vector-10.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 6.8px;
                      left: 32.7px;
                      width: 9.7px;
                      height: 10.2px;
                      z-index: 2;
                    `}
                    alt=""
                    src="/vector-11.svg"
                  />
                  <img
                    className={css`
                      position: absolute;
                      top: 36.3px;
                      left: 39.4px;
                      width: 3.2px;
                      height: 3.4px;
                      z-index: 2;
                    `}
                    alt=""
                    src="/vector-12.svg"
                  />
                </div>
              </div>
              <div
                className={css`
                  align-self: stretch;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-mini);
                `}
              >
                <h3
                  className={css`
                    margin: 0;
                    position: relative;
                    font-size: inherit;
                    letter-spacing: 0.03em;
                    font-weight: 600;
                    font-family: inherit;
                    z-index: 1;
                    @media screen and (max-width: 925px) {
                      font-size: var(--font-size-7xl);
                    }
                    @media screen and (max-width: 450px) {
                      font-size: var(--sub-p-19-size);
                    }
                  `}
                >{`Graphic Design `}</h3>
                <div
                  className={css`
                    align-self: stretch;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-start;
                    padding: 0px 0px 0px var(--padding-9xs);
                    font-size: var(--sub-p-19-size);
                  `}
                >
                  <div
                    className={css`
                      height: 120px;
                      flex: 1;
                      position: relative;
                      letter-spacing: 0.03em;
                      display: inline-block;
                      z-index: 1;
                    `}
                  >
                    Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam
                    diam interdum
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={css`
            width: 1404px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            padding: 0px var(--padding-xl);
            box-sizing: border-box;
            max-width: 100%;
            text-align: left;
            color: var(--color-gray-300);
          `}
        >
          <div
            className={css`
              width: 936px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-54xl);
              max-width: 100%;
              @media screen and (max-width: 1350px) {
                gap: var(--gap-17xl);
              }
              @media screen and (max-width: 925px) {
                gap: var(--gap-lg);
              }
            `}
          >
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px 0px 0px var(--padding-mini);
                box-sizing: border-box;
                max-width: 100%;
              `}
            >
              <div
                className={css`
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-3xl);
                  max-width: 100%;
                `}
              >
                <div
                  className={css`
                    align-self: stretch;
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: center;
                    padding: 0px var(--padding-2xl) 0px var(--padding-xl);
                  `}
                >
                  <h1
                    className={css`
                      margin: 0;
                      height: 98px;
                      position: relative;
                      font-size: inherit;
                      letter-spacing: 0.03em;
                      font-weight: 600;
                      font-family: inherit;
                      display: inline-block;
                      @media screen and (max-width: 925px) {
                        font-size: var(--font-size-33xl);
                      }
                      @media screen and (max-width: 450px) {
                        font-size: var(--font-size-20xl);
                      }
                    `}
                  >
                    My Projects
                  </h1>
                </div>
                <div
                  className={css`
                    align-self: stretch;
                    position: relative;
                    font-size: var(--nav-bar-text-21-size);
                    letter-spacing: 0.03em;
                    color: var(--color-black);
                    text-align: center;
                    @media screen and (max-width: 450px) {
                      font-size: var(--font-size-mid);
                    }
                  `}
                >
                  Lorem ipsum dolor sit amet consectetur. Mollis erat duis
                  aliquam mauris est risus lectus. Phasellus consequat urna
                  tellus
                </div>
              </div>
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: center;
                gap: var(--gap-mid);
                max-width: 100%;
                text-align: center;
                font-size: var(--sub-heading-24-size);
                color: var(--color-black);
                @media screen and (max-width: 925px) {
                  flex-wrap: wrap;
                }
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                  padding: 0px var(--padding-8xs) 0px 0px;
                `}
              >
                <div
                  className={css`
                    border-radius: var(--br-xs);
                    background-color: var(--color-whitesmoke-100);
                    border: 0.4px solid var(--color-dimgray);
                    display: flex;
                    flex-direction: row;
                    align-items: flex-start;
                    justify-content: flex-start;
                    padding: var(--padding-4xs) var(--padding-lgi);
                  `}
                >
                  <div
                    className={css`
                      position: relative;
                      letter-spacing: 0.03em;
                      display: inline-block;
                      min-width: 31px;
                      @media screen and (max-width: 450px) {
                        font-size: var(--sub-p-19-size);
                      }
                    `}
                  >
                    All
                  </div>
                </div>
              </div>
              <div
                className={css`
                  border-radius: var(--br-xs);
                  background-color: var(--color-whitesmoke-100);
                  border: 0.4px solid var(--color-dimgray);
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  padding: var(--padding-4xs) var(--padding-lgi);
                  z-index: 3;
                `}
              >
                <div
                  className={css`
                    position: relative;
                    letter-spacing: 0.03em;
                    line-height: 36.8px;
                    display: inline-block;
                    min-width: 69px;
                    @media screen and (max-width: 450px) {
                      font-size: var(--sub-p-19-size);
                    }
                  `}
                >
                  UI/UX
                </div>
              </div>
              <button
                className={css`
                  cursor: pointer;
                  border: 0.4px solid var(--color-dimgray);
                  padding: var(--padding-4xs) var(--padding-xl);
                  background-color: var(--color-darkorange-100);
                  border-radius: var(--br-xs);
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  white-space: nowrap;
                  &:hover {
                    background-color: var(--color-orangered);
                    border: 0.4px solid var(--color-gray-100);
                    box-sizing: border-box;
                  }
                `}
              >
                <div
                  className={css`
                    position: relative;
                    font-size: var(--sub-heading-24-size);
                    letter-spacing: 0.03em;
                    font-family: var(--nav-bar-text-21);
                    color: var(--color-white);
                    text-align: center;
                  `}
                >
                  Web Design
                </div>
              </button>
              <button
                className={css`
                  cursor: pointer;
                  border: 0.4px solid var(--color-dimgray);
                  padding: var(--padding-4xs) var(--padding-lgi);
                  background-color: var(--color-whitesmoke-100);
                  border-radius: var(--br-xs);
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  white-space: nowrap;
                  &:hover {
                    background-color: var(--color-gainsboro-100);
                    border: 0.4px solid var(--color-gray-100);
                    box-sizing: border-box;
                  }
                `}
              >
                <div
                  className={css`
                    height: 36px;
                    position: relative;
                    font-size: var(--sub-heading-24-size);
                    letter-spacing: 0.03em;
                    font-family: var(--nav-bar-text-21);
                    color: var(--color-black);
                    text-align: center;
                    display: inline-block;
                  `}
                >
                  App Design
                </div>
              </button>
              <button
                className={css`
                  cursor: pointer;
                  border: 0.4px solid var(--color-dimgray);
                  padding: var(--padding-4xs) var(--padding-lgi);
                  background-color: var(--color-whitesmoke-100);
                  border-radius: var(--br-xs);
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  white-space: nowrap;
                  &:hover {
                    background-color: var(--color-gainsboro-100);
                    border: 0.4px solid var(--color-gray-100);
                    box-sizing: border-box;
                  }
                `}
              >
                <div
                  className={css`
                    height: 36px;
                    position: relative;
                    font-size: var(--sub-heading-24-size);
                    letter-spacing: 0.03em;
                    font-family: var(--nav-bar-text-21);
                    color: var(--color-black);
                    text-align: center;
                    display: inline-block;
                  `}
                >
                  Graphic Design
                </div>
              </button>
            </div>
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: center;
            padding: 0px 0px var(--padding-14xl);
            box-sizing: border-box;
            gap: var(--gap-25xl);
            max-width: 100%;
            text-align: left;
            font-size: var(--sub-p-19-size);
            color: var(--color-darkorange-100);
            @media screen and (max-width: 925px) {
              gap: var(--gap-3xl);
            }
          `}
        >
          <div
            className={css`
              flex: 1;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-18xl);
              min-width: 334px;
              max-width: 100%;
              @media screen and (max-width: 450px) {
                gap: var(--gap-lg);
              }
            `}
          >
            <div
              className={css`
                align-self: stretch;
                border-radius: var(--br-xs);
                background-color: var(--color-antiquewhite);
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding: 0px var(--padding-8xl) 0px var(--padding-20xl);
                box-sizing: border-box;
                max-width: 100%;
              `}
            >
              <div
                className={css`
                  align-self: stretch;
                  width: 445px;
                  position: relative;
                  border-radius: var(--br-xs);
                  background-color: var(--color-antiquewhite);
                  display: none;
                  max-width: 100%;
                `}
              />
              <div
                className={css`
                  height: 489px;
                  flex: 1;
                  position: relative;
                  max-width: 100%;
                `}
              >
                <img
                  className={css`
                    position: absolute;
                    height: 100%;
                    top: 0px;
                    bottom: 0px;
                    left: 105px;
                    max-height: 100%;
                    width: 274px;
                    object-fit: cover;
                    z-index: 1;
                  `}
                  loading="lazy"
                  alt=""
                  src="/web-designs@2x.png"
                />
                <img
                  className={css`
                    position: absolute;
                    top: 84px;
                    left: 0px;
                    width: 274px;
                    height: 405px;
                    object-fit: cover;
                    z-index: 2;
                  `}
                  alt=""
                  src="/web-designs-1@2x.png"
                />
              </div>
              <div
                className={css`
                  height: 533px;
                  width: 445px;
                  position: relative;
                  border-radius: var(--br-xs);
                  background: linear-gradient(
                    179.83deg,
                    rgba(255, 235, 219, 0),
                    #ffebdb,
                    #545454
                  );
                  display: none;
                  max-width: 100%;
                `}
              />
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: var(--gap-3xs);
                max-width: 100%;
              `}
            >
              <div
                className={css`
                  position: relative;
                  letter-spacing: 0.03em;
                  display: inline-block;
                  min-width: 119px;
                `}
              >{`Web Design `}</div>
              <b
                className={css`
                  position: relative;
                  font-size: var(--sub-heading-24-size);
                  letter-spacing: 0.03em;
                  color: var(--color-black);
                  @media screen and (max-width: 450px) {
                    font-size: var(--sub-p-19-size);
                  }
                `}
              >{`AirCalling Landing Page Design `}</b>
            </div>
          </div>
          <WebDesignsCategory
            webDesigns="/web-designs-2@2x.png"
            webDesigns1="/web-designs-3@2x.png"
            businessLandingPageDesign="Business Landing Page Design "
          />
          <WebDesignsCategory
            webDesigns="/web-designs-4@2x.png"
            webDesigns1="/web-designs-5@2x.png"
            businessLandingPageDesign="Ecom Web Page Design "
          />
        </div>
        <div
          className={css`
            width: 1412px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            padding: 0px var(--padding-xl);
            box-sizing: border-box;
            max-width: 100%;
          `}
        >
          <div
            className={css`
              width: 932px;
              display: flex;
              flex-direction: column;
              align-items: flex-end;
              justify-content: flex-start;
              gap: var(--gap-mini);
              max-width: 100%;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: center;
                padding: 0px var(--padding-xl) 0px var(--padding-3xl);
              `}
            >
              <h1
                className={css`
                  margin: 0;
                  position: relative;
                  font-size: inherit;
                  letter-spacing: 0.03em;
                  font-weight: 600;
                  font-family: inherit;
                  @media screen and (max-width: 925px) {
                    font-size: var(--font-size-33xl);
                  }
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-20xl);
                  }
                `}
              >
                Testimonials
              </h1>
            </div>
            <div
              className={css`
                align-self: stretch;
                height: 101px;
                position: relative;
                font-size: var(--nav-bar-text-21-size);
                letter-spacing: 0.03em;
                display: inline-block;
                flex-shrink: 0;
                @media screen and (max-width: 450px) {
                  font-size: var(--font-size-mid);
                }
              `}
            >
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
              nibh lectus netus in. Aliquet donec morbi convallis pretium
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
