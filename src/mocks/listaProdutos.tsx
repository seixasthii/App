const lista_produtos = {
    itens: {
        titulo:"Produtos disponíveis",
        lista: [
            {
                id:1,
                nome: "Turbina",
                descricao:"Aquele segredinho para dar mais potência e segurança ao seu motor!",
                imagem: require('../../assets/images.jpeg'),
                slider: [require('../../assets/Turbocompressor.jpg'),
                         require('../../assets/turbo2.jpeg'),


                ]
            },
            {
                id:2,
                nome: "Escapamento",
                descricao: "Diversos tipos de escapamentos, para alto desempenho e também para quem deseja um ronco esportivo.",
                imagem: require('../../assets/bmw.jpg'),
                slider: [require('../../assets/tipoescape.jpeg'),
                    require('../../assets/norme.jpeg'),
                    require('../../assets/intae.jpeg'),
                ]
            },
            {
                id:3,
                nome: "Rodas",
                descricao: "Diferentes tipos, modelos e cores de rodas. Para quem sempre sonhou em desfilar com a roda bonita!",
                imagem: require('../../assets/rodinha.jpeg'),
                slider: [require('../../assets/orbital.jpg'),
                    require('../../assets/roda2.jpg'),
                    require('../../assets/roda1.jpg'),
                    require('../../assets/bbs.jpg'),

                ]
            } 
            
        ]
    }
}
export default lista_produtos ;