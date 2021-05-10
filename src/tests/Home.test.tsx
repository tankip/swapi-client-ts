import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import Home from '../views/Home';
import { peopleSuccessMock, peopleErrorMock } from './mocks'

describe('Home Component Test', () => {
    
    const successMock = [peopleSuccessMock()]
    const errorMock = [peopleErrorMock()];

    it('should display loading message when fetching people', () => {
        const wrapper = render(
            <MockedProvider mocks={successMock} addTypename={false}>
                <Home />
            </MockedProvider>
        )
        expect(wrapper.getByTestId('loading')).toBeTruthy();
    });

    it('should render people list', async () => {

        await act(async () => {
            const wrapper = render(
                <MockedProvider mocks={successMock} addTypename={false}>
                    <BrowserRouter>
                        <Home />
                    </BrowserRouter>
                </MockedProvider>
            );
            await new Promise(resolve => setTimeout(resolve, 0));

            expect(wrapper.getByTestId('people')).toBeTruthy();
        });

    });

    it('should display an error when an error is encountered', async () => {
        await act(async () => {
            const wrapper = render(
                <MockedProvider mocks={errorMock} addTypename={false}>
                    <BrowserRouter>
                        <Home />
                    </BrowserRouter>
                </MockedProvider>
            );
            await new Promise(resolve => setTimeout(resolve, 0));

            expect(wrapper.getByTestId('error')).toBeTruthy();

        });
    });
});