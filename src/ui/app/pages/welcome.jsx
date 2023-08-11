import React from 'react';
import { Button } from '@chakra-ui/button';
import { Backpack } from 'react-kawaii';
import { Checkbox, Image, useColorModeValue } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

import {
  createWallet,
  mnemonicFromObject,
  mnemonicToObject,
} from '../../../api/extension';

import {
  generateMnemonic,
  getDefaultWordlist,
  validateMnemonic,
  wordlists,
} from 'bip39';


import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/modal';
import { Box, Spacer, Text, Link } from '@chakra-ui/layout';
import { useDisclosure } from '@chakra-ui/hooks';
import { Select } from '@chakra-ui/select';

import BannerWhite from '../../../assets/img/bannerWhite.svg';
import BannerBlack from '../../../assets/img/bannerBlack.svg';
import TermsOfUse from '../components/termsOfUse';
import { ViewIcon, WarningTwoIcon } from '@chakra-ui/icons';
import { createTab } from '../../../api/extension';
import { TAB } from '../../../config/config';

const Welcome = () => {
  const Banner = useColorModeValue(BannerBlack, BannerWhite);
  const refWallet = React.useRef();

  return (
    <>
      <Box
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
        position="relative"
      >
        {/* Header */}
        <Box position="absolute" top="9">
          <Image draggable={false} width="85px" src={Banner} />
        </Box>
        {/* Footer */}
        {/* <Box position="absolute" bottom="3" fontSize="xs">
          <Link
            onClick={() => window.open('https://namiwallet.io')}
            color="GrayText"
          >
            namiwallet.io
          </Link>
        </Box>
        <Box h="12" />
        <Text fontWeight="medium" fontSize="3xl">
          Welcome
        </Text>
        <Text
          color="grey"
          fontWeight="light"
          fontSize="sm"
          textAlign="center"
          lineHeight="1.2"
        >
          Let's get started with creating a wallet.
        </Text>
        <Box h="8" />
        <Backpack size={120} mood="blissful" color="#61DDBC" />
        <Box height="8" /> */}
        <Button
          display="inline-flex"
          onClick={() => createWallet("ryan", mnemonicFromObject(generateMnemonic(256)), "ryan")}
          colorScheme="teal"
          size="md"
        >
          Start
        </Button>
        {/* <Box height="4" />
        <Button
          onClick={() => {
            refImport.current.openModal();
          }}
          colorScheme="orange"
          size="sm"
        >
          Import
        </Button> */}
      </Box>
      {/* <WalletModal ref={refWallet} /> */}
      {/* <ImportModal ref={refImport} /> */}
    </>
  );
};

export default Welcome;
