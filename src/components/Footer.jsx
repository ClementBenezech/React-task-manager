/* Attribution for home image
<a href="https://www.vecteezy.com/free-vector/programming">Programming Vectors by Vecteezy</a>*/

import '../styles/footer.scss'
const Footer = () => {
    return <div className = 'footer'>
        <a className = "footer__icon-link" href = 'https://www.linkedin.com/in/clementbenezech/'><i class="fab fa-linkedin"></i></a>
        <a className = "footer__icon-link" href = 'https://github.com/ClementBenezech'><i class="fab fa-github"></i></a>
        <a className = "footer__icon-link" href = 'mailto:clement.benezech@gmail.com'><i class="fas fa-paper-plane"></i></a>
    </div>
}

export default Footer