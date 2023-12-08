function scrollToCards() {
    const cards = document.querySelector('.card-container');
    if(cards) {
        cards.scrollIntoView({ behavior: 'smooth' });
    }
}
