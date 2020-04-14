import { route } from 'preact-router';

const handleFormSubmit = (e) => {
	let data = {};

	const form = e.target
	const { elements } = form

	for (const field of elements) {
		data[field.name] = field.value
	}

	// eslint-disable-next-line no-undef
	data.token = captchatoken


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

export default function Form() {

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
						<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Numero di telefono
						<input class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" inputmode="numeric" name="tel" />
						</label>
					</p>
					<p class="my-5">
						<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Email
                  <input class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" name="mail" />
						</label>
					</p>
					<p class="my-5">
						<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Sito Web
						<input class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" name="site" />
						</label>
					</p>
					<p class="my-5">
						<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Tipologia di servizio
						<select class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" name="type">
								<option disabled selected>Seleziona una tipologia</option>
								<option value="salute">Salute</option>
								<option value="gelaterie">Gelateria</option>
								<option value="macellerie">Macelleria</option>
								<option value="panifici">Panifici</option>
								<option value="generi alimentari">Generi Alimentari</option>
								<option value="ristorazione">Ristorazione</option>
								<option value="pesce fresco e surgelato">Pesce Fresco</option>
								<option value="enoteca e birre">Enoteca e Birre</option>
								<option value="frutta e verdura">Frutta e verdura</option>
								<option value="supermercati">Supermercati</option>
								<option value="pasticceria">Pasticceria</option>
								<option value="pizzerie">Pizzeria</option>
								<option value="lavanderie">Lavanderia</option>
								<option value="prodotti e servizi per animali">Prodotti per Animali</option>
								<option value="informatica">Informatica</option>
								<option value="gastronomia e friggitoria">gastronomia e friggitoria</option>
								<option value="prodotti per bambini">prodotti per bambini</option>
								<option value="piante e fiori">piante e fiori</option>
								<option value="senza glutine">senza glutine</option>
							</select>
						</label>
					</p>
					<p class="my-5">
						<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Consegna in tutta la provincia</label>
						<input type="checkbox" name="province-delivery" />
					</p>
					<p class="my-5">
						<label class="lock text-gray-800 ml-2 font-bold md:text-right mb-1 md:mb-0 pr-4">Note
						<textarea class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" type="text" name="note" />
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
