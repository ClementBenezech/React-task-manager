import Footer from './Footer'
import {render, screen} from '@testing-library/react'

    
    test('Footer links are displayed', () => {
        //Rendering the footer component
        render(<Footer />)

        //Checking that links point to the right url / email adress.
        expect(screen.getByTestId('footer__linkedIn').href).toContain('https://www.linkedin.com')
        expect(screen.getByTestId('footer__github').href).toContain('https://github.com')
        expect(screen.getByTestId('footer__email').href).toContain('clement.benezech@gmail.com')
    })
