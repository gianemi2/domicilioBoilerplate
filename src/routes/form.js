export default function Form() {
	return (
		<div class="">
			<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
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
						<select class="bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-lg py-2 px-4 block w-full appearance-none leading-normal" name="tipologia">
							<option disabled selected>Seleziona una tipologia</option>
							<option value="Salute">Salute</option>
							<option value="gelateria">Gelateria</option>
							<option value="macelleria">Macelleria</option>
							<option value="panifici">Panifici</option>
							<option value="generi_alimentari">Generi Alimentari</option>
							<option value="ristorazione">Ristorazione</option>
							<option value="pesce_fresco">Pesce Fresco</option>
							<option value="enoteca_e_birre">Enoteca e Birre</option>
							<option value="frutta_fresca">Frutta Fresca</option>
							<option value="supermercati">Supermercati</option>
							<option value="pasticceria">Pasticceria</option>
							<option value="pizzeria">Pizzeria</option>
							<option value="lavanderia">Lavanderia</option>
							<option value="prodotti_per_animali">Prodotti per Animali</option>
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
	);
}
