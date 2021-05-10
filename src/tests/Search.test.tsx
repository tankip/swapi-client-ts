import { MockedProvider } from '@apollo/client/testing';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';

import Search from '../views/Search';
import { searchSuccessMock, searchErrorMock } from './mocks'

describe('Search Component Test', () => {

    const successMock = [searchSuccessMock()]
    const errorMock = [searchErrorMock()];      

    it('should render search input', () => {
        const wrapper = render(<Search />);

        const searchText = wrapper.getByTestId('searchText');
        expect(searchText).toBeTruthy();
    });

    it('should pass name to search input', () => {
        const wrapper = render(<Search />);
        const inputEl = wrapper.getByTestId('searchText');
        userEvent.type(inputEl, 'Beru Whitesun lars');
        expect(wrapper.getByTestId('searchText')).toHaveValue('Beru Whitesun lars');
    });

    it('should show loading when name is added and button clicked', async () => {

        await act(async () => {
            const wrapper = render(
                <MockedProvider mocks={successMock} addTypename={false}>
                    <BrowserRouter>
                        <Search />
                    </BrowserRouter>
                </MockedProvider>
            );
            const inputEl = wrapper.getByTestId('searchText');
            userEvent.type(inputEl, 'Beru Whitesun lars');
            const button = wrapper.getByTestId('button');
            button.click();
            await new Promise(resolve => setTimeout(resolve, 0));
            expect(wrapper.getByTestId('loading')).toBeTruthy();
        });

    });

    it('should render search result list', async () => {

        await act(async () => {
            const wrapper = render(
                <MockedProvider mocks={successMock} addTypename={false}>
                    <BrowserRouter>
                        <Search />
                    </BrowserRouter>
                </MockedProvider>
            );
            const inputEl = wrapper.getByTestId('searchText');
            userEvent.paste(inputEl, 'Beru Whitesun lars');
            await new Promise(resolve => setTimeout(resolve, 0));
            const button = wrapper.getByTestId('button');
            button.click();
            await new Promise(resolve => setTimeout(resolve, 0));
            expect(wrapper.getByTestId('loading')).toBeTruthy();
            await new Promise(resolve => setTimeout(resolve, 0));
            expect(wrapper.getByTestId('people')).toBeTruthy();
        });

    });

    it('should display an error when an error is encountered', async () => {
        await act(async () => {
            const wrapper = render(
                <MockedProvider mocks={errorMock} addTypename={true}>
                    <BrowserRouter>
                        <Search />
                    </BrowserRouter>
                </MockedProvider>
            );
            const button = wrapper.getByTestId('button');
            button.click();
            await new Promise(resolve => setTimeout(resolve, 0));
            expect(wrapper.getByTestId('loading')).toBeTruthy();
            await new Promise(resolve => setTimeout(resolve, 0));
            expect(wrapper.getByTestId('error')).toBeTruthy();

        });
    });
});