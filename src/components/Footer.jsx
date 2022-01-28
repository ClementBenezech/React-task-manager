/* Attribution for home image
<a href="https://www.vecteezy.com/free-vector/programming">Programming Vectors by Vecteezy</a>*/

import '../styles/footer.scss'
const Footer = () => {
    return <div className = 'footer'>
        <a data-testid  ="footer__linkedIn" className = "footer__icon-link" href = 'https://www.linkedin.com/in/clementbenezech/'><i className="fab fa-linkedin"></i></a>
        <a data-testid  ="footer__github" className = "footer__icon-link" href = 'https://github.com/ClementBenezech'><i className="fab fa-github"></i></a>
        <a data-testid = "footer__email"className = "footer__icon-link" href = 'mailto:clement.benezech@gmail.com'><i className="fas fa-paper-plane"></i></a>
    </div>
}

export default Footer