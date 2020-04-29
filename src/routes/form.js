import { route } from 'preact-router';

const handleFormSubmit = (e) => {
	let data = {};

	const form = e.target
	const { elements } = form

	for (const field of elements) {
		data[field.name] = field.value
	}

	fetch(`${process.env.PREACT_APP_DATA_SOURCE}/api/save`, {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data) // body data type must match "Content-Type" header,
	})
		.then(res => res.json())
		.then(res => {
			if (res.success) {
				alert('Negozio aggiunto con successo. Verrai reindirizzato alla homepage!');
				route('/');
				window.location.reload()

			} else {
				alert(`Errore imprevisto: ${res.message}`)
			}
		});
	e.preventDefault()
}

export default function Form({ results }) {
	let resultsArray = [];
	for (const i in results) {
		const element = results[i];
		resultsArray.push({
			name: i,
			text: `${element.icon} ${i}`
		})
	}

	return (
		<div>
			<div class="">
				<form name="contact" method="post" id="add-shop" onsubmit={(e) => handleFormSubmit(e)}>
					<p>
						<input type="hidden" name="form-name" value="contact" />
					</p>
					<p class="my-5">
						<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Nome
						<input class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" required type="text" name="name" />
						</label>
					</p>
					<p class="my-5">
						<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Numero di telefono (facoltativo)
						<input class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="tel" inputmode="numeric" name="tel" />
							<small>Inserisci il numero di telefono dove vuoi essere contattato. Es: 0586123456 oppure 3291234567</small>
						</label>
					</p>
					<p class="my-5">
						<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Email (facoltativo)
                  <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" name="mail" />
						</label>
					</p>
					<p class="my-5">
						<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Sito Web (facoltativo)
						<input class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="url" name="site" />
							<small>Inserisci il link del sito web. Esempio: https://nomesito.it</small>
						</label>
					</p>
					<p class="my-5">
						<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Tipologia di servizio
						<select class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" name="type">
								<option disabled selected>Seleziona una tipologia</option>
								{
									resultsArray.map(i => <option value={i.name}>{i.text}</option>)
								}
							</select>
						</label>
					</p>
					<p class="my-5">
						<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Consegna in tutta la provincia</label>
						<input type="checkbox" name="province-delivery" />
					</p>
					<p class="my-5">
						<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Note (facoltativo)
						<textarea class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" name="note" />
						</label>
					</p>
					<p class="input-alt-mg">
						<label>
							{
								// Honeypot
							}Cognome
							<input type="text" name="cognome" autocomplete="off" />
						</label>
					</p>
					<p>
						<label>
							<input style="margin-right: 10px" type="checkbox" name="privacy" required />
							L’ azienda provvederà a fornire il servizio in totale autonomia e lo Studio non è in alcun modo responsabile della correttezza delle informazioni inserite dalle Aziende, della regolarità dei servizi resi, dei prezzi stabiliti e della corretta esecuzione degli ordini e delle consegne.
							Lo Studio declina, altresì, ogni responsabilità derivante dal mancato rispetto da parte delle Aziende delle prescrizioni indicate nei DPCM relativi al periodo emergenziale e/o in qualsiasi altra Legge o Provvedimento emanato dalle Autorità.
						</label>
					</p>
					<p class="my-5">
						<button class="block w-full bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" type="submit">Invia</button>
					</p>
				</form>
			</div>
		</div>
	);
}
