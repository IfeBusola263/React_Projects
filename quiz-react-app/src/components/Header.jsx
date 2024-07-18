import appLogo from '../assets/quiz-logo.png';

export default function Header(){
    return(
        <header>
            <img src={appLogo} alt="" />
            <h1>ReactQuiz</h1>
        </header>
    )
}