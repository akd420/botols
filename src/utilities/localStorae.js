const getStoredCart = () => {
    const storedCard = localStorage.getItem('cart');
    return storedCard ? JSON.parse(storedCard) : [];
}
const savedToDb = id => {
    const cart = JSON.stringify(id);
    localStorage.setItem('cart', cart);
}
const addToDb = id => {
    const cart = getStoredCart();
    cart.push(id);
    savedToDb(cart);
}
const removeFromDb = id => {
    const cart = getStoredCart();
    const remaining = cart.filter(item => item !== id);
    savedToDb(remaining);
}
export { addToDb, getStoredCart, removeFromDb}