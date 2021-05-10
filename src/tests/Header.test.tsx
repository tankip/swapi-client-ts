import { Router } from 'react-router-dom'
import { render } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import Header from '../components/ui/Header'


describe('Header Component', () => {
    const renderWithRouter = (component: JSX.Element) => {
        const history = createMemoryHistory()
        return {
            ...render(
                <Router history={history}>
                    {component}
                </Router>
            )
        }
    }
    it('should render the header element', () => {
        const { getByTestId } = renderWithRouter(<Header />)
        expect(getByTestId('heading').innerHTML).toContain('Star Wars - People');
    })
})
