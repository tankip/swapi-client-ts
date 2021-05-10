import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { people } from './mocks';
import PersonDetail from '../views/PersonDetail';

describe('PersonDetail Component', () => {
    it('should accept props and render a person details', async () => {
        const history = createBrowserHistory();
        const state = {
            person: people[0]
        };
        history.push('/person', state);

        const wrapper = render(
            <Router history={history}>
                <PersonDetail />
            </Router>
        );
        const person = wrapper.getByTestId('personDetail');
        expect(person).toBeTruthy();
        expect(person.innerHTML).toContain('Luke Skywalker');
    });

    it('should redirect to home page when person is not set', async () => {
        const history = createBrowserHistory();
        const state = undefined;
        history.push('/person', state);

        render(
            <Router history={history}>
                <PersonDetail />
            </Router>
        );
        expect(history.location.pathname).toEqual('/');
    });
});