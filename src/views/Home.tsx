import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { PeopleQuery } from '../types';
import { PEOPLE_QUERY } from '../schemas';
import People from '../components/People';
import { Box, Flex, Spacer, Button, Circle, Alert, AlertIcon } from '@chakra-ui/react';
import Loading from '../components/ui/Loading';

const Home = () => {

    const [page, setPage] = useState<number>(1);

    const { loading, error, data } = useQuery<PeopleQuery>(PEOPLE_QUERY, {
        variables: {
            page: page.toString()
        }
    });

    const handlePage = (value: string | null) => {
        if (value) {
            const newPage = Number(value.replace(/\D/g, ''));
            setPage(newPage);
        }
    }

    useEffect(() => {
        const page = Number(sessionStorage.getItem('page') || 1)
        setPage(page);
    }, []);

    useEffect(() => {
        sessionStorage.setItem('page', JSON.stringify(page))
    }, [page]);

    return (
        <Box my={8}>
            {loading && <Loading />}
            {error &&
                <Alert status="error" data-testid="error">
                    <AlertIcon />
                    {error.message}
                </Alert>
            }
            { data?.people.results && <People people={data?.people.results} />}
            <Flex>
                {
                    data?.people.previous &&
                    <Button
                        variant="outline"
                        onClick={() => handlePage(data?.people.previous)}
                    >
                        Previous
                    </Button>
                }
                <Spacer />
                {!loading && data && <Circle size="40px" bg="gray.100">
                    {page}
                </Circle>
                }
                <Spacer />
                {
                    data?.people.next &&
                    <Button
                        variant="outline"
                        onClick={() => handlePage(data?.people.next)}
                    >
                        Next
                    </Button>
                }
            </Flex>
        </Box>
    )
}

export default Home
