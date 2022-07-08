import React from "react";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithVideo.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColWithButton.js";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2.js";
import TabGrid from "components/cards/TabCardGrid.js";
import Testimonial from "components/testimonials/ThreeColumnWithProfileImage.js";
import DownloadApp from "components/cta/DownloadApp.js";
//import Footer from "components/footers/SimpleFiveColumn";
import Footer from "components/footers/MiniCenteredFooter.js";
// import Footer from "components/footers/FiveColumnWithInputForm.js";

import chefIconImageSrc from "images/chef-icon.svg";
import celebrationIconImageSrc from "images/celebration-icon.svg";
import shopIconImageSrc from "images/shop-icon.svg";

export default () => {
  const Subheading = tw.span`tracking-wider text-sm font-medium`;
  const HighlightedText = tw.span`bg-blue-600 text-gray-100 px-4 transform -skew-x-12 inline-block`;
  const HighlightedTextInverse = tw.span`bg-gray-100 text-primary-500 px-4 transform -skew-x-12 inline-block`;
  const Description = tw.span`inline-block mt-8`;
  //const heading = tw.span`text-blue-600`;
  const imageCss = tw`rounded-6xl`;
  return (
    <AnimationRevealPage>
      <Hero
        heading={
          <>
            Amazing & Affordable{" "}
            <HighlightedText>Books Near You.</HighlightedText>
          </>
        }
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc="https://firebasestorage.googleapis.com/v0/b/darulkutub-f03ac.appspot.com/o/darulkutub_shop.jfif?alt=media&token=564e3f36-59dc-4fcd-aceb-c7f48a9901a6"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="Search Now"
        watchVideoButtonText="Meet The Team"
      />
      <MainFeature
        subheading={<Subheading>Established Since 2000</Subheading>}
        heading={
          <>
            We've been selling for
            <wbr /> <HighlightedText>over 21 years.</HighlightedText>
          </>
        }
        description={
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </Description>
        }
        buttonRounded={false}
        textOnLeft={false}
        primaryButtonText="About Us"
        imageSrc={
          "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        }
        imageCss={imageCss}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 -translate-x-1/2 md:w-32 md:h-32 opacity-25`}
      />
      {/* TabGrid Component also accepts a tabs prop to customize the tabs and its content directly. Please open the TabGrid component file to see the structure of the tabs props.*/}
      <TabGrid
        heading={
          <>
            Checkout our <HighlightedText>Books.</HighlightedText>
          </>
        } displayBoolean={false}
      />
      <Testimonial
        subheading=""
        heading={
          <>
            Our <HighlightedText>Team.</HighlightedText>
          </>
        }
      />
      <Footer />
    </AnimationRevealPage>
  );
};
