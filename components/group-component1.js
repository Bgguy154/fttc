import React from "react";
import { css } from "@emotion/css";
import PropTypes from "prop-types";

const GroupComponent1 = ({ className = "" }) => {
  return (
    <div
      className={[
        css`
          margin-left: -1149px;
          width: 1087px;
          border-radius: var(--br-sm);
          background-color: var(--color-whitesmoke-100);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: var(--padding-36xl) var(--padding-29xl) var(--padding-34xl);
          box-sizing: border-box;
          position: relative;
          gap: var(--gap-2xs);
          flex-shrink: 0;
          max-width: 100%;
          text-align: justify;
          font-size: var(--font-size-13xl);
          color: var(--color-darkorange-100);
          font-family: var(--nav-bar-text-21);
          @media screen and (max-width: 1825px) {
            flex-wrap: wrap;
          }
          @media screen and (max-width: 1350px) {
            padding-left: var(--padding-5xl);
            padding-right: var(--padding-5xl);
            box-sizing: border-box;
          }
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          height: 344px;
          width: 1087px;
          position: relative;
          border-radius: var(--br-sm);
          background-color: var(--color-whitesmoke-100);
          display: none;
          max-width: 100%;
          z-index: 0;
        `}
      />
      <div
        className={css`
          height: 235px;
          width: 235px;
          position: relative;
          border-radius: 50%;
          background-color: var(--color-gainsboro-200);
          z-index: 1;
        `}
      />
      <div
        className={css`
          width: 452px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px var(--padding-374xl) 0px 0px;
          box-sizing: border-box;
          row-gap: 20px;
          max-width: 100%;
          @media screen and (max-width: 925px) {
            flex-wrap: wrap;
          }
          @media screen and (max-width: 450px) {
            padding-right: var(--padding-177xl);
            box-sizing: border-box;
          }
        `}
      >
        <h3
          className={css`
            margin: 0;
            width: 18px;
            position: relative;
            font-size: inherit;
            letter-spacing: 0.02em;
            font-weight: 700;
            font-family: inherit;
            display: inline-block;
            z-index: 1;
            @media screen and (max-width: 925px) {
              font-size: var(--font-size-7xl);
            }
            @media screen and (max-width: 450px) {
              font-size: var(--sub-p-19-size);
            }
          `}
        >
          “
        </h3>
        <div
          className={css`
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-188xl) 0px 0px;
            box-sizing: border-box;
            min-width: 27px;
            font-size: var(--sub-p-19-size);
            color: var(--color-black);
          `}
        >
          <div
            className={css`
              align-self: stretch;
              position: relative;
              letter-spacing: 0.02em;
              z-index: 2;
            `}
          >
            CEO
          </div>
        </div>
      </div>
      <div
        className={css`
          width: 76px;
          position: absolute;
          margin: 0 !important;
          bottom: 81px;
          left: 312px;
          font-size: var(--sub-heading-24-size);
          letter-spacing: 0.02em;
          font-weight: 500;
          color: var(--color-black);
          display: inline-block;
          z-index: 1;
          @media screen and (max-width: 450px) {
            font-size: var(--sub-p-19-size);
          }
        `}
      >
        Name
      </div>
      <div
        className={css`
          width: 253px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: var(--padding-6xl) 0px 0px;
          box-sizing: border-box;
          font-size: var(--nav-bar-text-21-size);
          color: var(--color-darkslategray);
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            justify-content: flex-start;
          `}
        >
          <div
            className={css`
              width: 698px;
              height: 146px;
              position: relative;
              letter-spacing: 0.02em;
              display: inline-block;
              flex-shrink: 0;
              max-width: 276%;
              z-index: 1;
              @media screen and (max-width: 450px) {
                font-size: var(--font-size-mid);
              }
            `}
          >
            Lorem  urna velit neque mattis id tellus arcu condimentum.
            Augue dictum dolor elementum convallis dignissim malesuada commodo
            ultrices.
          </div>
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: 0px var(--padding-8xs);
              margin-top: -40px;
              font-size: var(--font-size-13xl);
              color: var(--color-darkorange-100);
            `}
          >
            <h3
              className={css`
                margin: 0;
                position: relative;
                font-size: inherit;
                letter-spacing: 0.02em;
                font-weight: 700;
                font-family: inherit;
                display: inline-block;
                min-width: 18px;
                z-index: 2;
                @media screen and (max-width: 925px) {
                  font-size: var(--font-size-7xl);
                }
                @media screen and (max-width: 450px) {
                  font-size: var(--sub-p-19-size);
                }
              `}
            >
              “
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
};
const CenteredGroupComponent1 = () => {
  return (
    <div
      className={css`
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 100vh;
        background-color: var(--color-background); /* Optional: background color */
      `}
    >
      <GroupComponent1 />
    </div>
  )
}

export default GroupComponent1;
