export type Person = {
    name: string;
    height: string;
    mass: string;
    gender: string;
    homeworld: string;
}

export type SearchResult = {
    count: number;
    results: [Person];
}

export type PeopleResult = {
    count: number;
    next: string;
    previous: string;
    results: [Person];
}

export type PeopleQuery = {
    people: PeopleResult;
}

export type SeachQuery = {
    search: SearchResult;
}

export type LocationState = {
    person: Person;
}