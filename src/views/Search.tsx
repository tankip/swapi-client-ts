import React from 'react'
import { useLazyQuery } from '@apollo/client';
import { SEARCH_QUERY } from '../schemas';
import { SeachQuery } from '../types';
import People from '../components/People';
import { Input, Button, Flex, Spacer, Heading, Alert, AlertIcon } from "@chakra-ui/react"
import Loading from '../components/ui/Loading';

const Search = () => {

    const [searchText, setSearchText] = React.useState<string>('');
    const [searchPeople, { loading, error, data }] = useLazyQuery<SeachQuery>(SEARCH_QUERY);

    const handleSearch = () => {
        searchPeople({
            variables: {
                name: searchText
            }
        })
    }

    return (
        <>
            <Heading mt={8} as="h4" size="lg">Search</Heading>
            <Flex my={8}>
                <Input
                    placeholder="Search by name"
                    name="searchText"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    mr={4}
                />
                <Spacer />
                <Button variant="outline" onClick={handleSearch}>search</Button>

            </Flex>

            {loading && <Loading />}

            {error &&
                <Alert status="error">
                    <AlertIcon />
                    {error.message}
                </Alert>
            }

            {data && data.search.count > 0 && <People people={data.search.results} />}

            {data && data.search.count === 0 &&
            <Alert status="warning">
                <AlertIcon />
                Did not find a person with the given name
            </Alert>
            }
        </>

    )
}

export default Search
