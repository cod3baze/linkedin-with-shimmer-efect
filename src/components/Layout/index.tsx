import React from "react";
// COMPONENTS
import MobileHeader from "../MobileHeader";
import DesktopHeader from "../DesktopHeader";
import AdBanner from "../AdBanner";
import LeftColumn from "../LeftColumn";
import MiddleColumn from "../MiddleColumn";
import RightColumn from "../RightColumn";
// STYLES | STATICS
import { Container } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <MobileHeader />
      <DesktopHeader />

      <span>
        <AdBanner />
      </span>

      <main>
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </main>
    </Container>
  );
};

export default Layout;
