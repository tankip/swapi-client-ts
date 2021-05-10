import React from 'react'
import { Link as ReachLink } from 'react-router-dom';
import { Link, Flex, Spacer, IconButton } from "@chakra-ui/react"
import { ViewIcon } from '@chakra-ui/icons'

import { Person as PersonType } from '../types'

const Person = ({ person }: { person: PersonType }) => {
    return (
        <Link as={ReachLink} to={{
            pathname: '/person',
            state: {
                person
            }
        }} data-testid="personName">
            <Flex>
                {person.name}
                <Spacer />
                <IconButton isRound aria-label="view person" icon={<ViewIcon />} />
            </Flex>
        </Link>
    )
}

export default Person
