import { GraphQLError } from 'graphql';
import { PEOPLE_QUERY, SEARCH_QUERY } from '../../schemas';

export const peopleSuccessMock = () => {
    return {
        request: {
            query: PEOPLE_QUERY,
            variables: {
                page: "1"
            },
        },
        result: {
            data: {
                people: {
                    count: 20,
                    next: "http://swapi.dev/api/people/?page=2",
                    previous: null,
                    results: [
                        {
                            name: "Luke Skywalker",
                            height: "172",
                            mass: "77",
                            gender: "male",
                            homeworld: "http://swapi.dev/api/planets/1/"
                        },
                        {
                            name: "C-3PO",
                            height: "167",
                            mass: "75",
                            gender: "n/a",
                            homeworld: "http://swapi.dev/api/planets/1/"
                        }
                    ]
                }
            }
        }
    }
}

export const peopleErrorMock = () => {
    return {
        request: {
            query: PEOPLE_QUERY,
            variables: {
                page: 1
            },
        },
        result: {
            errors: [new GraphQLError('String cannot represent a non string value: 1')]
        }
    }
}

export const searchSuccessMock = () => {
    return {
        request: {
            query: SEARCH_QUERY,
            variables: {
                name: "Beru Whitesun lars"
            },
        },
        result: {
            data: {
                search: {
                    count: 1,
                    results: [
                        {
                            name: "Beru Whitesun lars",
                            height: "165",
                            mass: "75",
                            gender: "male",
                            homeworld: "http://swapi.dev/api/planets/1/",
                            __typename: "Person"
                        }
                    ],
                    __typename: "SearchResult"
                },
                __typename: "SearchQuery"
            }
        }
    }
}

export const searchErrorMock = () => {
    return {
        request: {
            query: SEARCH_QUERY,
            variables: {
                name: 100
            },
        },
        result: {
            errors: [new GraphQLError('String cannot represent a non string value: 100')]
        }
    }
}