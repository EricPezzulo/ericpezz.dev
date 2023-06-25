import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface EmailProps {
  fullName: string;
  email: string;
  message: string;
}

export const ContactEmail = ({ fullName, email, message }: EmailProps) => {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Preview>ericpezz.dev - You have a new message</Preview>
        <Body className="font-sans" style={main}>
          <Container style={container}>
            <Img
              src="https://i.imgur.com/snQtTK0.png"
              width="40"
              height="33"
              alt="ericpezzdev"
            />
            <Section>
              <Text style={text}>{fullName} has sent you a message,</Text>
              <Text style={text}>{message}</Text>
              <Text style={text}>Contact Information:</Text>
              <Text style={text}>
                {fullName}
                <br />
                {email}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;

const main = {
  backgroundColor: "#f6f9fc",
  padding: "10px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #f0f0f0",
  padding: "45px",
};

const text = {
  fontSize: "16px",
  fontFamily:
    "'Open Sans', 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif",
  fontWeight: "300",
  color: "#404040",
  lineHeight: "26px",
};
