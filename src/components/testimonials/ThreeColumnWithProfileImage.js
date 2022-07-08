import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ContentWithPaddingXl, Container } from "components/misc/Layouts.js";
import { SectionHeading as Heading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-7.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-8.svg";

const Subheading = tw(SubheadingBase)`text-center`;
const Testimonials = tw.div`flex flex-col lg:flex-row items-center lg:items-stretch`;
const TestimonialContainer = tw.div`mt-16 lg:w-1/3`;
const Testimonial = tw.div`px-4 text-center max-w-xs mx-auto flex flex-col items-center`;
const Image = tw.img`w-20 h-20 rounded-full`;
const Quote = tw.blockquote`mt-5 text-gray-600 font-medium leading-loose`;
const CustomerName = tw.p`mt-5 text-gray-900 font-semibold uppercase text-sm tracking-wide`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute left-0 top-0 h-56 w-56 opacity-15 transform -translate-x-2/3 -translate-y-12 text-teal-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute right-0 bottom-0 h-64 w-64 opacity-15 transform translate-x-2/3 text-yellow-500`}
`;

export default ({
  subheading = "Testimonials",
  heading = "Customer's Review",
  testimonials = [
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/darulkutub-f03ac.appspot.com/o/Team%2Ftariq.jfif?alt=media&token=b32067f5-0b91-4ac5-910d-f3f92b31feaf",
      quote:
        "Tariq is the manager of Noor Quran Mahal shop, he contains all the skills needed to become a successful manager and businessman. Tariq is very experienced in dealing with other and managing a business.",
      customerName: "Tariq Sahar"
    },
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/darulkutub-f03ac.appspot.com/o/Team%2Fsohail.jfif?alt=media&token=6098332f-2df4-4798-9847-d3a7a2fe062e",
      quote:
        "Sohail is the manager of Dar Ul Kutub Shop, he contains all the skills needed to become a successful manager and businessman. Sohail is very experienced in dealing with other and managing a business.",
      customerName: "Sohail Gul Zaman"
    },
    {
      imageSrc:
        "https://firebasestorage.googleapis.com/v0/b/darulkutub-f03ac.appspot.com/o/Team%2FProfilePic.jpeg?alt=media&token=0b5714aa-3f11-4cbc-bb3f-163575159e10",
      quote:
        "Saad is a Software Developer and tech enthusiast. Saad mantains the websites and apps for the business; saad is an up and coming tech lead. Saad also has some experience in development and documentations.",
      customerName: "Syed Saad Ullah Shah"
    }
  ]
}) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        <Heading>{heading}</Heading>
        <Testimonials>
          {testimonials.map((testimonial, index) => (
            <TestimonialContainer key={index}>
              <Testimonial>
                <Image src={testimonial.imageSrc} />
                <Quote>"{testimonial.quote}"</Quote>
                <CustomerName>- {testimonial.customerName}</CustomerName>
              </Testimonial>
            </TestimonialContainer>
          ))}
        </Testimonials>
      </ContentWithPaddingXl>

      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};
