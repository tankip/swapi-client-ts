import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Person from '../components/Person';
import { people } from './mocks';

describe('Person Component', () => {
    it('should accept props and render a person', async () => {
        const wrapper = render(
            <BrowserRouter>
                <Person person={people[0]}/>
            </BrowserRouter>
        );
        const person = wrapper.getByTestId('personName');
        expect(person).toBeTruthy();
        expect(person.innerHTML).toContain('Luke Skywalker');
    })
})