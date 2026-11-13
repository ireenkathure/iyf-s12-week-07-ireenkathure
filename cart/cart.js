export function createCart() { return []; }
export function addToCart(cart, item) { return [...cart, item]; }
export function removeFromCart(cart, id) { return cart.filter((i) => i.id !== id); }
export function cartTotal(cart) { return cart.reduce((sum, i) => sum + i.price * i.qty, 0); }