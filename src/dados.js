
const produtos = [
    {
        id: 1,
        nome: "Spicy Burguer",
        descricao: "Hamburguer de 250g, queijo, tomate, alface e cebola",
        preco: 24.90,
        foto: "https://jornadajs-food.s3.amazonaws.com/spicy.png"
    },

    {
        id: 2,
        nome: "Sanduba",
        descricao: "Sanduiche natural, alface, tomate, pão integral e orégano",
        preco: 22.00,
        foto: "https://jornadajs-food.s3.amazonaws.com/sanduba.png"
    },

    {
        id: 3,
        nome: "Super Burguer",
        descricao: "Hamburguer de 300g, molho, queijo, tomate, alface e cebola",
        preco: 29.90,
        foto: "https://jornadajs-food.s3.amazonaws.com/super.png"
    },

    {
        id: 4,
        nome: "Mega",
        descricao: "Hamburguer de 400g, maionese, bacon, queijo, tomate, alface e cebola",
        preco: 34.90,
        foto: "https://jornadajs-food.s3.amazonaws.com/mega.png"
    },

    {
        id: 5,
        nome: "Penne",
        descricao: "Penne ao molho especial de tomates rústicos, ervas aromáticas e cebola",
        preco: 27.00,
        foto: "https://jornadajs-food.s3.amazonaws.com/penne.png"
    },

    {
        id: 6,
        nome: "Fritas",
        descricao: "Batata frita crocante com molho especial de maionese da casa",
        preco: 14.90,
        foto: "https://jornadajs-food.s3.amazonaws.com/fritas.png"
    },

    {
        id: 7,
        nome: "Coca-Cola",
        descricao: "Hamburguer de 250g, queijo, tomate, alface e cebola",
        preco: 9.90,
        foto: "https://jornadajs-food.s3.amazonaws.com/coca.png"
    }

]


const pedidos = [
    {id_pedido: 541561, dt: "14/01/2024", total: 150.30},
    {id_pedido: 541562, dt: "16/01/2024", total: 32.50},
    {id_pedido: 541563, dt: "20/01/2024", total: 90.30},
    {id_pedido: 541564, dt: "21/01/2024", total: 100.00},
    {id_pedido: 541565, dt: "23/01/2024", total: 70.90},
    {id_pedido: 541566, dt: "27/01/2024", total: 105.90},
    {id_pedido: 541567, dt: "30/02/2024", total: 50.00}
]

const carrinho = [
    {
        id: 1,
        nome: "X-Tudo",
        preco: 20.00,
        foto: "https://jornadajs-food.s3.amazonaws.com/super.png",
        qtd: 2
    },

    {
        id: 2,
        nome: "X-Salada",
        preco: 15.00,
        foto: "https://jornadajs-food.s3.amazonaws.com/super.png",
        qtd: 1
    }
]

export {produtos, pedidos, carrinho}