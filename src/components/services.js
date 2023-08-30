const productos = [
    {id:"1",name:"Pimienta Blanca", precio:"100 (los 100g)", categoria:"especias", image:"/img/especias.jpg"},
    {id:"2",name:"Cúrcuma", precio:"250 (los 100g)", categoria:"especias",image:"/img/especias.jpg"},
    {id:"3",name:"Pimentón Español", precio:"200 (los 100g)", categoria:"especias", image:"/img/especias.jpg"},
    {id:"4",name:"Curry", precio:"150 (los 100g)", categoria:"especias", image:"/img/especias.jpg"},
    {id:"5",name:"Copos de Maíz con azucar", precio:"180 (los 100g)", categoria:"cereales", image:"/img/cereales.jpg"},
    {id:"6",name:"Mix Sport", precio:"300 (los 100g)", categoria:"cereales", image:"/img/cereales.jpg"},
    {id:"7",name:"Granola", precio:"250 (los 100g)", categoria:"cereales", image:"/img/cereales.jpg"},
    {id:"8",name:"Bolitas de Chocolate", precio:"300 (los 100g)", categoria:"cereales", image:"/img/cereales.jpg"},
    {id:"9",name:"DogChow", precio:"800 (1Kg)", categoria:"balanceados", image:"/img/balanceados.jpg"},
    {id:"10",name:"Sabrositos", precio:"450 (1Kg)", categoria:"balanceados", image:"/img/balanceados.jpg"},
    {id:"11",name:"Eukanuba", precio:"1500 (1Kg)", categoria:"balanceados", image:"/img/balanceados.jpg"},
    {id:"12",name:"Performance", precio:"1000 (1Kg)", categoria:"balanceados", image:"/img/balanceados.jpg"}
]

export const obtenerProducto = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            if(producto){
                resolve(producto)
            }else{
                reject("Producto no encontrado")
                
            }
        }, 2000)
    })
}

export const obtenerProductos = (category)=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
          const productosfiltrados = category ? productos.filter((product) => product.categoria === category): productos; 
        resolve(productosfiltrados)
        }, 2000)
    })
}