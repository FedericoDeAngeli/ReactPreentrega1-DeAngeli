export const getCartQuantity = (cart) => {
    let count = 0;

    cart.forEach((item) => {
        count += item.quantity;
    })
    return count;
}

export const totalCart = (cart) => {
return cart.reduce((sum, item) => sum + item.quantity*item.price, 0)
}

export const itemInOrder = (cart) => {
    return cart.map((item) => ({
        id: item.id,
        quantity: item.quantity,
        price: item.price,
        title: item.title,

}))
}
 