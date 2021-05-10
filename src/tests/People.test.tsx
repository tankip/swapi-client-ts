import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import People from '../components/People';
import { people } from './mocks';

describe('People Component', () => {
    it('should accept props render a list of people', async () => {
        const wrapper = render(
            <BrowserRouter>
                <People people={people} />
            </BrowserRouter>
        );
        expect(wrapper.getByTestId('people')).toBeTruthy();
        expect(wrapper.getAllByTestId('person').length).toBe(3);
    })
})