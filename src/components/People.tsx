import React from 'react'
import { Person as PersonType } from '../types';
import Person from './Person';
import { List, ListItem, Divider } from '@chakra-ui/react';

const People = ({ people }: { people: PersonType[] }) => {
    return (
        <List spacing={3} my={8}>
            { people.map((person, key) => (
                <React.Fragment key={key}>
                    <ListItem key={key}>
                        <Person person={person} />
                    </ListItem>
                    <Divider />
                </React.Fragment>
            ))}
        </List>
    )
}

export default People;