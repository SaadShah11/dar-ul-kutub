import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";

import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
import SearchBar from "components/misc/SearchBar"

//Tailwind Model
//import Model from "components/cards/BooksModel.js";

//MUI
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-blue-600! text-gray-100!`}
  }
`;

const TabContent = tw(
  motion.div
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(
  motion.a
)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-blue-600`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default ({
  heading = "Checkout our Books",
  tabs = {
    Popular: [
      {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/darulkutub-f03ac.appspot.com/o/shopbooks%2FBook1.jpeg?alt=media&token=78da9dce-976b-4667-a149-3a63ee4cc21c",
        title: "الرسالةالجامعه لوصف العلوم النافعة",
        content: "الرسالةالجامعه لوصف العلوم النافعة",
        price: "$5.99",
        rating: "5.0",
        reviews: "87"
      },
      {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/darulkutub-f03ac.appspot.com/o/shopbooks%2FBook2.jpeg?alt=media&token=2ec6d74d-398e-45a2-8f49-619ea909214f",
        title: "تاسيس التقديس",
        content: "تاسيس التقديس",
        price: "$2.99",
        rating: "4.8",
        reviews: "32"
      },
      {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/darulkutub-f03ac.appspot.com/o/shopbooks%2FBook3.jpeg?alt=media&token=17f328a2-bb92-43ac-a5aa-cf4f15e85bfb",
        title: "الرسالةالجامعه لوصف العلوم النافعة",
        content: "الرسالةالجامعه لوصف العلوم النافعة",
        price: "$7.99",
        rating: "4.9",
        reviews: "89"
      },
      {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/darulkutub-f03ac.appspot.com/o/shopbooks%2FBook4.jpeg?alt=media&token=6cf8a46c-9613-46a4-875a-7333b01522e3",
        title: "تاسيس التقديس",
        content: "تاسيس التقديس",
        price: "$8.99",
        rating: "4.6",
        reviews: "12"
      },
      {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/darulkutub-f03ac.appspot.com/o/shopbooks%2FBook5.jpeg?alt=media&token=216870ee-3122-49ef-b0e7-04dbcec7ed6c",
        title: "الرسالةالجامعه لوصف العلوم النافعة",
        content: "الرسالةالجامعه لوصف العلوم النافعة",
        price: "$7.99",
        rating: "4.2",
        reviews: "19"
      },
      {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/darulkutub-f03ac.appspot.com/o/shopbooks%2FBook6.jpeg?alt=media&token=98fe410b-0c8f-4efd-b681-54d7122c5209",
        title: "تاسيس التقديس",
        content: "تاسيس التقديس",
        price: "$2.99",
        rating: "5.0",
        reviews: "61"
      },
      {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/darulkutub-f03ac.appspot.com/o/shopbooks%2FBook7.jpeg?alt=media&token=84dd54a9-1a8f-43bc-a992-8528d0b17516",
        title: "الرسالةالجامعه لوصف العلوم النافعة",
        content: "الرسالةالجامعه لوصف العلوم النافعة",
        price: "$3.99",
        rating: "4.2",
        reviews: "95"
      },
      {
        imageSrc:
          "https://firebasestorage.googleapis.com/v0/b/darulkutub-f03ac.appspot.com/o/shopbooks%2FBook8.jpeg?alt=media&token=62189841-38c5-4564-9e22-40aba536b56a",
        title: "تاسيس التقديس",
        content: "تاسيس التقديس",
        price: "$3.99",
        rating: "3.9",
        reviews: "26"
      },
    ],
    New: getRandomCards(),
  },
  primaryButtonText = "See More",
  primaryButtonUrl = "https://timerse.com",
  buttonRounded = true,
  displayBoolean
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);
  const PrimaryButton = tw.button`font-bold px-8 lg:px-10 py-3 rounded bg-blue-600 text-gray-100 hocus:bg-blue-900 focus:shadow-outline focus:outline-none transition duration-300 	`;

  const [openReviewModal, setOpenReviewModal] = React.useState(false);

  const handleOpenReviewModal = () => {
    setOpenReviewModal(true);
  };

  const handleCloseReviewModal = () => {
    setOpenReviewModal(false);
  };

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl
                key={index}
                active={activeTab === tabName}
                onClick={() => setActiveTab(tabName)}
              >
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>
        {displayBoolean ? <div style={{
          "display": "flex",
          "justify-content": "center",
          "marginTop": 30
        }}><SearchBar /></div> : <></>}
        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              },
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card
                  className="group"
                  href={card.url}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardRatingContainer>
                      <CardRating>
                        <StarIcon />
                        {card.rating}
                      </CardRating>
                      <CardReview>({card.reviews})</CardReview>
                    </CardRatingContainer>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto",
                        },
                        rest: {
                          opacity: 0,
                          height: 0,
                        },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CardButton onClick={handleOpenReviewModal}>View</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                    <CardPrice>{card.price}</CardPrice>
                  </CardText>
                </Card>
                <Modal
                  // className={classes.modal}
                  open={openReviewModal}
                  onClose={handleCloseReviewModal}
                  closeAfterTransition
                  style={{
                    width: "100%",
                    // maxWidth: "100vw",
                    maxHeight: "100%",
                    position: "fixed",
                    top: "2%",
                    // right: "18%",
                    left: '0%',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    "background-color": "#3182ce"
                  }}

                ><MainFeature card={card} /></Modal>
              </CardContainer>
            ))}
          </TabContent>
        ))}
        <div style={{
          "display": "flex",
          "justify-content": "center",
          "marginTop": 30
        }}>
          <PrimaryButton
            buttonRounded={buttonRounded}
            as="a"
            href={primaryButtonUrl}
          >
            {primaryButtonText}
          </PrimaryButton>
        </div>
      </ContentWithPaddingXl>

      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container >
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = () => {
  const cards = [
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/darulkutub-f03ac.appspot.com/o/shopbooks%2FBook1.jpeg?alt=media&token=78da9dce-976b-4667-a149-3a63ee4cc21c",
      title: "الرسالةالجامعه لوصف العلوم النافعة",
      content: "الرسالةالجامعه لوصف العلوم النافعة",
      price: "$5.99",
      rating: "5.0",
      reviews: "87",
      url: "https://www.youtube.com/",
    },
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/darulkutub-f03ac.appspot.com/o/shopbooks%2FBook2.jpeg?alt=media&token=2ec6d74d-398e-45a2-8f49-619ea909214f",
      title: "تاسيس التقديس",
      content: "تاسيس التقديس",
      price: "$2.99",
      rating: "4.8",
      reviews: "32",
      url: "#",
    },
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/darulkutub-f03ac.appspot.com/o/shopbooks%2FBook3.jpeg?alt=media&token=17f328a2-bb92-43ac-a5aa-cf4f15e85bfb",
      title: "الرسالةالجامعه لوصف العلوم النافعة",
      content: "الرسالةالجامعه لوصف العلوم النافعة",
      price: "$7.99",
      rating: "4.9",
      reviews: "89",
      url: "#",
    },
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/darulkutub-f03ac.appspot.com/o/shopbooks%2FBook4.jpeg?alt=media&token=6cf8a46c-9613-46a4-875a-7333b01522e3",
      title: "تاسيس التقديس",
      content: "تاسيس التقديس",
      price: "$8.99",
      rating: "4.6",
      reviews: "12",
      url: "#",
    },
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/darulkutub-f03ac.appspot.com/o/shopbooks%2FBook5.jpeg?alt=media&token=216870ee-3122-49ef-b0e7-04dbcec7ed6c",
      title: "الرسالةالجامعه لوصف العلوم النافعة",
      content: "الرسالةالجامعه لوصف العلوم النافعة",
      price: "$7.99",
      rating: "4.2",
      reviews: "19",
      url: "#",
    },
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/darulkutub-f03ac.appspot.com/o/shopbooks%2FBook6.jpeg?alt=media&token=98fe410b-0c8f-4efd-b681-54d7122c5209",
      title: "تاسيس التقديس",
      content: "تاسيس التقديس",
      price: "$2.99",
      rating: "5.0",
      reviews: "61",
      url: "#",
    },
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/darulkutub-f03ac.appspot.com/o/shopbooks%2FBook7.jpeg?alt=media&token=84dd54a9-1a8f-43bc-a992-8528d0b17516",
      title: "الرسالةالجامعه لوصف العلوم النافعة",
      content: "الرسالةالجامعه لوصف العلوم النافعة",
      price: "$3.99",
      rating: "4.2",
      reviews: "95",
      url: "#",
    },
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/darulkutub-f03ac.appspot.com/o/shopbooks%2FBook8.jpeg?alt=media&token=62189841-38c5-4564-9e22-40aba536b56a",
      title: "تاسيس التقديس",
      content: "تاسيس التقديس",
      price: "$3.99",
      rating: "3.9",
      reviews: "26",
      url: "#",
    },
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};
