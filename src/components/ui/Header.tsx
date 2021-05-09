import React from 'react'
import { Link as ReachLink } from 'react-router-dom';
import { Flex, Spacer, Heading, Divider, Link, Center } from '@chakra-ui/react';

const Header = () => {
    return (
        <>
        <Flex mt={2}>
            <Heading as="h2" size="lg">Star Wars - People</Heading>
            <Spacer />
            <Center>
                <Link as={ReachLink} to={'/'} mr={4}> Home </Link>
                <Divider orientation="vertical" />
                <Link as={ReachLink} to={'/search'} ml={4}> Search </Link>
            </Center>
        </Flex>
        <Divider mt={2}/>
        </>
    )
}

export default Header
