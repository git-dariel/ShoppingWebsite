import React from "react";
import {
  FooterContainer,
  FooterSection,
  FooterLink,
} from "../styles/Section/Footer";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <h4>About Us</h4>
        <FooterLink href="#apple-section">Our Story</FooterLink>
        <FooterLink href="https://www.apple.com/careers/us/">
          Careers
        </FooterLink>
      </FooterSection>
      <FooterSection>
        <h4>Customer Service</h4>
        <FooterLink href="https://www.apple.com/ph/contact/">
          Contact Us
        </FooterLink>
        <FooterLink href="https://locate.apple.com/ph/en/service">
          Returns & Exchanges
        </FooterLink>
      </FooterSection>
      <FooterSection>
        <h4>Legal</h4>
        <FooterLink href="https://www.apple.com/legal/privacy/en-ww/">
          Privacy Policy
        </FooterLink>
        <FooterLink href="https://www.apple.com/legal/internet-services/terms/site.html">
          Terms of Service
        </FooterLink>
      </FooterSection>
    </FooterContainer>
  );
};

export default Footer;
