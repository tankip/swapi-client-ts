import { gql } from '@apollo/client';

export const PEOPLE_QUERY = gql`
    query GetPeople ($page: String!){
        people(page: $page) {
            count
            next
            previous
            results {
                name
                height
                mass
                gender
                homeworld
            }
        }
    }
`


export const SEARCH_QUERY = gql`
    query Search ($name: String!) {
        search(name: $name) {
            count
            results {
                name
                height
                mass
                gender
                homeworld
            }
        }
    }
`
