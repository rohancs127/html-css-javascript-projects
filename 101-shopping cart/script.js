let buyNowButton = document.querySelector('.buy-now');

buyNowButton.addEventListener('click', ()=>{
    document.querySelector('.cart-container').classList.add('clicked-buy-now')
})