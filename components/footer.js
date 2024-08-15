import { css } from "@emotion/css";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <section
      className={[
        css`
          margin-left: -5px;
          align-self: stretch;
          height: 552px;
          background-color: var(--color-whitesmoke-100);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 0px var(--padding-533xl) var(--padding-8xs);
          box-sizing: border-box;
          gap: var(--gap-43xl);
          max-width: 100%;
          flex-shrink: 0;
          text-align: left;
          font-size: var(--font-size-29xl);
          color: var(--color-gray-300);
          font-family: var(--font-montserrat);
          @media screen and (max-width: 1350px) {
            gap: var(--gap-12xl);
            padding-bottom: var(--padding-340xl);
            box-sizing: border-box;
          }
          @media screen and (max-width: 925px) {
            height: auto;
            gap: var(--gap-mini);
            padding-bottom: var(--padding-214xl);
            box-sizing: border-box;
          }
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          align-self: stretch;
          height: 552px;
          position: relative;
          background-color: var(--color-whitesmoke-100);
          display: none;
        `}
      />
      <div
        className={css`
          margin-top: -443px;
          width: 1909px;
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
            width: 779px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-71xl-5);
            flex-shrink: 0;
            max-width: 100%;
            @media screen and (max-width: 925px) {
              gap: var(--gap-26xl);
            }
            @media screen and (max-width: 450px) {
              gap: var(--gap-4xl);
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
              gap: var(--gap-56xl);
              @media screen and (max-width: 925px) {
                gap: var(--gap-18xl);
              }
              @media screen and (max-width: 450px) {
                gap: var(--gap-lgi);
              }
            `}
          >
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: center;
                padding: 0px var(--padding-3xl) 0px var(--padding-xl);
              `}
            >
              <div
                className={css`
                  width: 277px;
                  display: flex;
                  flex-direction: row;
                  align-items: flex-start;
                  justify-content: flex-start;
                  gap: var(--gap-xl);
                `}
              >
                <img
                  className={css`
                    height: 67px;
                    width: 67px;
                    position: relative;
                    z-index: 1;
                  `}
                  alt=""
                  src="/subtract.svg"
                />
                <div
                  className={css`
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: flex-start;
                    padding: var(--padding-2xs-2) 0px 0px;
                  `}
                >
                  <h1
                    className={css`
                      margin: 0;
                      align-self: stretch;
                      height: 46px;
                      position: relative;
                      font-size: inherit;
                      display: inline-block;
                      white-space: nowrap;
                      z-index: 1;
                      font-family: inherit;
                      @media screen and (max-width: 925px) {
                        font-size: var(--font-size-19xl);
                      }
                      @media screen and (max-width: 450px) {
                        font-size: var(--font-size-10xl);
                      }
                    `}
                  >
                    <b className={css``}>M</b>
                    <span
                      className={css`
                        color: var(--color-dimgray);
                      `}
                    >{`umair `}</span>
                  </h1>
                </div>
              </div>
            </div>
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: space-between;
                gap: var(--gap-xl);
                font-size: var(--nav-bar-text-21-size);
                color: var(--color-black);
                font-family: var(--nav-bar-text-21);
                @media screen and (max-width: 925px) {
                  flex-wrap: wrap;
                }
              `}
            >
              <div
                className={css`
                  position: relative;
                  letter-spacing: 0.03em;
                  display: inline-block;
                  min-width: 66px;
                  z-index: 1;
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-mid);
                  }
                `}
              >
                Home
              </div>
              <div
                className={css`
                  height: 32px;
                  position: relative;
                  letter-spacing: 0.03em;
                  display: inline-block;
                  min-width: 105px;
                  z-index: 1;
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-mid);
                  }
                `}
              >
                About Me
              </div>
              <div
                className={css`
                  position: relative;
                  letter-spacing: 0.03em;
                  display: inline-block;
                  min-width: 92px;
                  z-index: 1;
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-mid);
                  }
                `}
              >
                Services
              </div>
              <div
                className={css`
                  position: relative;
                  letter-spacing: 0.03em;
                  display: inline-block;
                  min-width: 89px;
                  z-index: 1;
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-mid);
                  }
                `}
              >
                Projects
              </div>
              <div
                className={css`
                  position: relative;
                  letter-spacing: 0.03em;
                  z-index: 1;
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-mid);
                  }
                `}
              >
                Testimonials
              </div>
              <div
                className={css`
                  position: relative;
                  letter-spacing: 0.03em;
                  display: inline-block;
                  min-width: 90px;
                  z-index: 1;
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-mid);
                  }
                `}
              >
                Contact
              </div>
            </div>
          </div>
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: center;
              padding: 0px var(--padding-xl);
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                gap: var(--gap-6xl);
              `}
            >
              <img
                className={css`
                  height: 32.5px;
                  width: 32.5px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                  min-height: 33px;
                  z-index: 1;
                `}
                alt=""
                src="/facebook--negative.svg"
              />
              <img
                className={css`
                  height: 32.5px;
                  width: 32.5px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                  min-height: 33px;
                  z-index: 1;
                `}
                alt=""
                src="/twitter--negative.svg"
              />
              <img
                className={css`
                  height: 32.5px;
                  width: 32.5px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                  min-height: 33px;
                  z-index: 1;
                `}
                alt=""
                src="/instagram--negative.svg"
              />
              <img
                className={css`
                  height: 32.5px;
                  width: 32.5px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                  min-height: 33px;
                  z-index: 1;
                `}
                alt=""
                src="/linkedin--negative.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <footer
        className={css`
          align-self: stretch;
          background-color: var(--color-dimgray);
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          padding: var(--padding-7xl) var(--padding-xl);
          box-sizing: border-box;
          flex-shrink: 0;
          max-width: 100%;
          z-index: 1;
          text-align: left;
          font-size: var(--nav-bar-text-21-size);
          color: var(--color-white);
          font-family: var(--nav-bar-text-21);
        `}
      >
        <div
          className={css`
            height: 84px;
            width: 1921px;
            position: relative;
            background-color: var(--color-dimgray);
            display: none;
            max-width: 100%;
          `}
        />
        <div
          className={css`
            position: relative;
            letter-spacing: 0.03em;
            z-index: 2;
            @media screen and (max-width: 450px) {
              font-size: var(--font-size-mid);
            }
          `}
        >
          <span className={css``}>{`© 2023 `}</span>
          <b
            className={css`
              color: var(--color-darkorange-100);
            `}
          >{`Mumair `}</b>
          <span className={css``}>All Rights Reserved , Inc.</span>
        </div>
      </footer>
    </section>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
