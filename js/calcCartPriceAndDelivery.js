const calcCartPriceAndDelivery = () => {
  const cartItems = document.querySelectorAll('.cart-item')
  const totalPriceEl = document.querySelector('.total-price')
  const deliveryCost = document.querySelector('.delivery-cost')
  const cartDelivery = document.querySelector('[data-cart-delivery]')
  const deliveryHint = document.querySelector('.text-gray')

  let totalPrice = 0;

  cartItems.forEach((item) => {
    const amountEl = item.querySelector('[data-counter]');
    const priceEl = item.querySelector('.price__currency');
    const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText)

    totalPrice += currentPrice
  })

  totalPriceEl.innerText = totalPrice

  if (totalPrice > 0) {
    cartDelivery.classList.remove('none')
  } else {
    cartDelivery.classList.add('none')
  }

  if (totalPrice >= 10) {
    deliveryCost.classList.add('free')
    deliveryCost.innerText = 'free'

    deliveryHint.classList.add('none')
  } else {
    deliveryCost.classList.remove('free')
    deliveryCost.innerText = '3$'

    deliveryHint.classList.remove('none')
  }
}
