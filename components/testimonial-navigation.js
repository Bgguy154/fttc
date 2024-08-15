import { css } from "@emotion/css";
import PropTypes from "prop-types";

const TestimonialNavigation = ({ className = "" }) => {
  return (
    <div
      className={[
        css`
          width: 1838px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: center;
          padding: 0px var(--padding-xl);
          box-sizing: border-box;
          max-width: 100%;
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
          width: 932px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-29xl);
          max-width: 100%;
          @media screen and (max-width: 925px) {
            gap: var(--gap-5xl);
          }
        `}
      >
        <div
          className={css`
            width: 849px;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            padding: 0px var(--padding-xl) var(--padding-72xl);
            box-sizing: border-box;
            max-width: 100%;
          `}
        >
          <div
            className={css`
              width: 255px;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-4xs);
            `}
          >
            <div
              className={css`
                height: 16px;
                flex: 1;
                position: relative;
                border-radius: var(--br-5xs);
                background-color: var(--color-gainsboro-200);
              `}
            />
            <div
              className={css`
                height: 16px;
                flex: 1;
                position: relative;
                border-radius: var(--br-5xs);
                background-color: var(--color-darkorange-100);
              `}
            />
            <div
              className={css`
                height: 16px;
                flex: 1;
                position: relative;
                border-radius: var(--br-5xs);
                background-color: var(--color-gainsboro-200);
              `}
            />
            <div
              className={css`
                height: 16px;
                flex: 1;
                position: relative;
                border-radius: var(--br-5xs);
                background-color: var(--color-gainsboro-200);
              `}
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
              Lets Design Together
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
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px var(--padding-10xl);
            box-sizing: border-box;
            max-width: 100%;
          `}
        >
          <div
            className={css`
              flex: 1;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-6xl);
              max-width: 100%;
            `}
          >
            <div
              className={css`
                flex: 1;
                border-radius: var(--br-sm);
                background-color: var(--color-whitesmoke-100);
                border: 1px solid var(--color-darkgray);
                box-sizing: border-box;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                padding: var(--padding-xl) var(--padding-7xl) var(--padding-lgi);
                min-width: 178px;
                max-width: 100%;
              `}
            >
              <div
                className={css`
                  height: 75px;
                  width: 627px;
                  position: relative;
                  border-radius: var(--br-sm);
                  background-color: var(--color-whitesmoke-100);
                  border: 1px solid var(--color-darkgray);
                  box-sizing: border-box;
                  display: none;
                  max-width: 100%;
                `}
              />
              <input
                className={css`
                  width: 178px;
                  border: none;
                  outline: none;
                  font-family: var(--nav-bar-text-21);
                  font-size: var(--nav-bar-text-21-size);
                  background-color: transparent;
                  height: 32px;
                  position: relative;
                  letter-spacing: 0.03em;
                  color: var(--color-gray-200);
                  text-align: center;
                  display: inline-block;
                  padding: 0;
                  z-index: 1;
                  @media screen and (max-width: 450px) {
                    font-size: var(--font-size-mid);
                  }
                `}
                placeholder="Enter Your Email"
                type="text"
              />
            </div>
            <button
              className={css`
                cursor: pointer;
                border: none;
                padding: var(--padding-xl) var(--padding-17xl)
                  var(--padding-lgi);
                background-color: var(--color-darkorange-100);
                border-radius: var(--br-sm);
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                white-space: nowrap;
                &:hover {
                  background-color: var(--color-orangered);
                }
              `}
            >
              <div
                className={css`
                  height: 75px;
                  width: 222px;
                  position: relative;
                  border-radius: var(--br-sm);
                  background-color: var(--color-darkorange-100);
                  display: none;
                `}
              />
              <div
                className={css`
                  position: relative;
                  font-size: var(--sub-heading-24-size);
                  letter-spacing: 0.03em;
                  font-weight: 600;
                  font-family: var(--nav-bar-text-21);
                  color: var(--color-white);
                  text-align: center;
                  z-index: 1;
                `}
              >{`Contact Me `}</div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialNavigation.propTypes = {
  className: PropTypes.string,
};

export default TestimonialNavigation;
