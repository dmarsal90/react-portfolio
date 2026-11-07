import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { I18nProvider, useI18n } from './i18n';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Hero } from './sections/Hero';
import { Projects } from './sections/Projects';
import { Experience } from './sections/Experience';
import { Skills } from './sections/Skills';
import { About } from './sections/About';
import { Contact } from './sections/Contact';

const Page = () => {
    const { t } = useI18n();
    return (
        <div className="App">
            <a className="skip-link" href="#main">{t.nav.skip}</a>
            <NavBar/>
            <main id="main" tabIndex={-1}>
                <Hero/>
                <Experience/>
                <Skills/>
                <About/>
                <Projects/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    );
};

function App() {
    return (
        <I18nProvider>
            <Page/>
        </I18nProvider>
    );
}

export default App
