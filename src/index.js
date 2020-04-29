import { h, Component, createContext } from 'preact';
import { Router } from 'preact-router';
import { Link } from 'preact-router/match';
import CookieConsent from "react-cookie-consent";


import logo from './assets/logo.png'
import logoDark from './assets/logo-dark.png'
import './assets/styles/global.css';

// Routes
import Home from './routes/home.js';
import Form from './routes/form.js';

// Components
import { Dialog } from './components/dialog.js';
import { PWAPrompt } from './components/pwaPrompt';

export const Action = createContext({})

export default class App extends Component {

	state = {
		results: {},
		isHomepage: true,
		isPopupOpen: false,
		popupNumbers: [],
	}

	handleRoute = e => {
		this.currentUrl = e.url;
		this.setState({ isHomepage: e.url.replace(/\?.*/g, "") === "/" });
	};

	setPopupNumbers = (e, numberArray) => {
		e.preventDefault();

		this.setState({
			popupNumbers: numberArray,
			isPopupOpen: true
		})
	}

	closePopup = (e) => {
		if (e.currentTarget === e.target) {
			this.setState({ isPopupOpen: false })
		}
	}

	componentDidMount() {
		if (location.hostname === "localhost") {
			fetch(process.env.PREACT_APP_SAMPLE_DATA_SOURCE)
				.then(r => r.json())
				.then(json => {
					this.setState({
						results: json,
						resultBkp: json
					})
				})
		} else {
			fetch(`${process.env.PREACT_APP_DATA_SOURCE}`)
				.then(r => r.json())
				.then(json => {
					this.setState({
						results: json,
						resultBkp: json
					});
				});
		}
	}

	componentDidUpdate() {
		const { isPopupOpen } = this.state;

		const root = document.documentElement;
		root.style.setProperty('--popup-visible', isPopupOpen ? 'hidden' : 'initial')
	}

	render(props, { isHomepage, results, popupNumbers, isPopupOpen }) {
		return (
			<Action.Provider value={{ setPopupNumbers: this.setPopupNumbers }}>
				<div id="app" class="px-5 max-w-screen-md mx-auto">
					<nav class="flex justify-center md:justify-end items-center">
						{
							isHomepage
								? <Link class="m-5 bg-blue-500 inline-block hover:bg-blue-700 text-white font-bold px-2 py-1 rounded" href="/form">➕ Aggiungi un'attività</Link>
								: <Link class="m-5 text-blue-500 hover:text-blue-800" href="/">Ritorna alla ricerca</Link>
						}
					</nav>
					<h1 class="font-sans text-4xl md:text-5xl lg:text-6xl pt-10 text-gray-800 text-center capitalize logo">
						<img src={logo} className="light" alt={`Logo di ${process.env.PREACT_APP_CITY} a domicilio`} />
						<img src={logoDark} className="dark" alt={`Logo di ${process.env.PREACT_APP_CITY} a domicilio. Versione chiara per sfondi scuri.`} />
					</h1>
					<Router onChange={this.handleRoute}>
						<Home path="/" results={results} />
						<Form path="/form" results={results} />
					</Router>
				</div>
				<Dialog isOpen={isPopupOpen} closePopup={this.closePopup} telNumbers={popupNumbers} />
				<CookieConsent
					location="bottom"
					buttonText="Ok, ho letto."
				>
					<a style="text-decoration: underline;" target="_blank" rel="noopener noreferrer" href="https://api.6emme.it/livornoadomicilio/informativa.pdf">Dichiaro di aver preso visione dell'informativa</a> e mi assumo ogni responsabilità inerente al servizio offerto
				</CookieConsent>
				<PWAPrompt />
			</Action.Provider>
		);
	}
}
