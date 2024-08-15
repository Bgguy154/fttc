import FrameComponent from "../components/frame-component";
import { css } from "@emotion/css";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent2 from "../components/frame-component2";
import GroupComponent1 from "../components/group-component1";
import GroupComponent from "../components/group-component";
import GroupComponent2 from "../components/group-component2";
import TestimonialNavigation from "../components/testimonial-navigation";
import Footer from "../components/footer";

const LandingPage = () => {
  return (
    <div
      className={css`
        width: 100%;
        height: 5600px;
        position: relative;
        background-color: var(--color-white);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        padding: var(--padding-42xl) 0px 691px;
        box-sizing: border-box;
        gap: 72px;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        font-size: var(--sub-heading-24-size);
        color: var(--color-black);
        font-family: var(--nav-bar-text-21);
        @media screen and (max-width: 1350px) {
          height: auto;
          gap: var(--gap-17xl);
        }
        @media screen and (max-width: 925px) {
          gap: var(--gap-lg);
        }
      `}
    >
      <FrameComponent />
      <div
        className={css`
          border-radius: var(--br-xs);
          background-color: var(--color-whitesmoke-100);
          border: 0.4px solid var(--color-dimgray);
          display: none;
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
      <div
        className={css`
          border-radius: var(--br-xs);
          background-color: var(--color-whitesmoke-100);
          border: 0.4px solid var(--color-dimgray);
          display: none;
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
      <div
        className={css`
          border-radius: var(--br-xs);
          background-color: var(--color-whitesmoke-100);
          border: 0.4px solid var(--color-dimgray);
          display: none;
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
      <FrameComponent1 />
      <FrameComponent2 />
      <section
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          justify-content: flex-start;
          padding: 0px 0px 619px;
          box-sizing: border-box;
          gap: 87px;
          max-width: 100%;
          flex-shrink: 0;
          @media screen and (max-width: 1350px) {
            gap: 43px;
            padding-bottom: 402px;
            box-sizing: border-box;
          }
          @media screen and (max-width: 925px) {
            gap: var(--gap-3xl);
            padding-bottom: 261px;
            box-sizing: border-box;
          }
          @media screen and (max-width: 450px) {
            padding-bottom: 170px;
            box-sizing: border-box;
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
            padding: 0px 392px;
            box-sizing: border-box;
            gap: var(--gap-43xl);
            max-width: 100%;
            @media screen and (max-width: 1825px) {
              flex-wrap: wrap;
              justify-content: center;
            }
            @media screen and (max-width: 1350px) {
              padding-left: var(--padding-177xl);
              padding-right: var(--padding-177xl);
              box-sizing: border-box;
            }
            @media screen and (max-width: 925px) {
              gap: var(--gap-12xl);
              padding-left: var(--padding-79xl);
              padding-right: var(--padding-79xl);
              box-sizing: border-box;
            }
            @media screen and (max-width: 450px) {
              gap: var(--gap-mini);
              padding-left: var(--padding-xl);
              padding-right: var(--padding-xl);
              box-sizing: border-box;
            }
          `}
        >
          <GroupComponent1 />
          <GroupComponent />
        </div>
        <TestimonialNavigation />
      </section>
      <Footer />
    </div>
  );
};

export default LandingPage;
