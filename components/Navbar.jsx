import Link from 'next/link';
import Image from 'next/image';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import logo from '../assets/images/dreamcastle.jpg';

const Navbar = () => (
  <Flex p="0" borderBottom="1px" borderColor="gray.500" align ='center'>
    <Box fontSize="3xl" color="blue.400" fontWeight="bold">
      <Image src = {logo} width={300} height={150} alt="house" />
    </Box>
    <Spacer />
    <Box>
      +971 55 192 1339
      <Menu>
        <MenuButton as={IconButton} icon={<FcMenu size = {30}/>} variant="outlined" color="red.400" width = {150}/>
        <MenuList>
          <Link href="/" passHref>
            <MenuItem icon={<FcHome />}>Home</MenuItem>
          </Link>
          <Link href="/search" passHref>
            <MenuItem icon={<BsSearch />}>Search</MenuItem>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;