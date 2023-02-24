const productsContainer = document.querySelector('#products-container');

getProducts()

async function getProducts() {
	const productsArray = await fetch('https://63e08d9159bb472a742402db.mockapi.io/rolls-shop')
		.then(response => response.json())

	renderProducts(productsArray)
}

function renderProducts(productsArray) {
	productsArray.forEach((item) => {
		const productHTML = `
          <div class="col-md-6">
						<div class="card mb-4" data-id="${item.id}">
							<img class="product-img" src="${item.imgSrc}" alt="${item.title}">
							<div class="card-body text-center">
								<h4 class="item-title">${item.title}</h4>
								<p><small data-items-in-box class="text-muted">${item.itemsInBox} units</small></p>

								<div class="details-wrapper">
									<div class="items counter-wrapper">
										<div class="items__control" data-action="minus">-</div>
										<div class="items__current" data-counter>1</div>
										<div class="items__control" data-action="plus">+</div>
									</div>

									<div class="price">
										<div class="price__weight">${item.weight}g.</div>
										<div class="price__currency">${item.price}$</div>
									</div>

								</div>

								<button data-cart type="button" class="btn btn-block btn-outline-warning">
									+ Add
								</button>

							</div>
						</div>
					</div>`

		productsContainer.insertAdjacentHTML('beforeend', productHTML)
	})

}