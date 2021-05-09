import React from 'react'
import { useLocation, useHistory } from 'react-router-dom';
import { Wrap, Box, Heading, Text, Flex, Spacer, Button } from '@chakra-ui/react';

import { LocationState } from '../types'

const PersonDetail = () => {
    const history = useHistory();
    const location = useLocation();

    const state = location.state as LocationState;

    if (!state) {
        history.push('/');
    }

    return (
        <>
            { state?.person && (
                <>
                    <Flex my={4}>
                        <Spacer />
                        <Button
                            variant="outline"
                            onClick={() => history.goBack()}
                        >
                            Go Back
                    </Button>
                    </Flex>
                    <Wrap spacing="30px">

                        <Box w="100%" bg="gray.100" p={4}>
                            <Heading as="h4" size="sm">Name</Heading>
                            <Text>{state.person.name}</Text>
                        </Box>
                        <Box w="100%" bg="gray.100" p={4}>
                            <Heading as="h4" size="sm">Gender</Heading>
                            <Text>{state.person.gender}</Text>
                        </Box>
                        <Box w="100%" bg="gray.100" p={4}>
                            <Heading as="h4" size="sm">Height</Heading>
                            <Text>{state.person.height}</Text>
                        </Box>
                        <Box w="100%" bg="gray.100" p={4}>
                            <Heading as="h4" size="sm">Mass</Heading>
                            <Text>{state.person.mass}</Text>
                        </Box>
                        <Box w="100%" bg="gray.100" p={4}>
                            <Heading as="h4" size="sm">Homwe World</Heading>
                            <Text>{state.person.homeworld}</Text>
                        </Box>
                    </Wrap>
                </>
            )}
        </>
    )
}

export default PersonDetail
