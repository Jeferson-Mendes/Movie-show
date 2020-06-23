import React from 'react';
import { render, fireEvent } from '@testing-library/react';
//import Nav from './index';
import Home from '../../pages/Home/index';

it('renders correnctly', ()=> {
    const { queryByTestId, queryByPlaceholderText } = render(<Home/>)

    expect(queryByTestId('form-field')).toBeTruthy()
    expect(queryByPlaceholderText('Search here')).toBeTruthy()
})

describe("Input value", () => {
    it('updates on change', () => {
        const { queryByPlaceholderText } = render(<Home/>)

        const searchInput = queryByPlaceholderText('Search here')

        fireEvent.change(searchInput, {target: {value: 'spiderman'}})

        expect(searchInput.value).toBe('spiderman')
    })
})

describe("Search button", () => {
    describe("with empty query", () => {
        it('does not trigger requestSearch function', () => {
            const requestSearch = jest.fn();

            const { queryByTestId } = render(<Home submit={requestSearch} />)
            fireEvent.click(queryByTestId('form-button'))
            expect(requestSearch).not.toHaveBeenCalled()
        })
    })
})