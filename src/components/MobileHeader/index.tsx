import React from "react";

import { Container, ProfileCircle, SearchInput, MessageIcon } from "./styles";

const MobileHeader: React.FC = () => {
  return (
    <Container>
      <ProfileCircle src="https://github.com/eliasallex.png" />
      <SearchInput />
      <MessageIcon />
    </Container>
  );
};

export default MobileHeader;
