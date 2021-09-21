import styled from "styled-components";


export const Container = styled.div `
    display: flex;
    margin-right: 4.6rem;
    margin-left: 12.938rem;
    
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 4.75rem;
    margin-right: 13.438rem;
    margin-left: 13.438rem;

    .menu{
        display: flex;
        align-items: center;
        
    }

    .menu li{
        margin-left: 21px;
        font-family: 'Montserrat', sans-serif;
    }

    .menu li a{
        color: rgba(32, 32, 40, 0.8);
        padding: 1rem;
    }
`

export const Body = styled.div`
    .conteudo{
        margin-top: 18.625rem;
    }
    .conteudo h1{
        margin-bottom: 1rem;
        font-family: 'Montserrat', sans-serif;
        font-size: 2.25rem;
        color: rgba(32, 32, 40, 0.8);
    }

    .conteudo p{
        font-family: 400,'Montserrat', sans-serif;
        margin-bottom: 2rem;
        color: rgba(32, 32, 40, 0.6);
    }

    .conteudo a{
        color: white;
        padding: 0.688rem 1.5rem;
        background: rgba(122, 66, 161, 0.7);
        border-radius: 0.5rem;
        
    }

    .cabecalho{
        margin-left: 13.438rem;
        margin-right: 17.875rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        h2{

            color: #202028; 
            font-size: 1.563rem;
            font-family: 900, 'Montserrat', sans-serif;
        }
    }

    .cabecalho .elementos{
        display: flex;
        li{
            margin-left: 2rem;
            font-family:'Montserrat', sans-serif;
            font-size: 1rem;
            color: #202028;;
        }
    }

    .container{
        max-width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3.125rem;
    }

    .container .carrossel{
        display: flex;
        overflow-x: auto;
        background-color: tomato;
        scroll-behavior: smooth;
    }

    .container .item{
        align-items: center;
        background-color: white;
        border-radius: 0.5rem;
        padding: 0.625rem;
        width: 184.32px;
    }

    .container .item .conteudoItem{
        display: grid;
        justify-content: center;
    }

    .container .item .conteudoItem .imageItem{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .container .item .conteudoItem .info{
        margin-top: 0.688rem;
        font-family: 700, 'Montserrat', sans-serif;
    }

    .container .item .conteudoItem .info .preco{

        margin-bottom: 1.125rem;
        color: rgba(32, 32, 40, 0.8);
        font-style: bold;
        font-size: 1.125rem;
    }
    
    .container .item .conteudoItem .info .titulo{
        font-size: 1rem;
        color: rgba(32, 32, 40, 0.8);
    }

    .container .item .conteudoItem .info .autor{
        font-family: 400,'Montserrat', sans-serif;
        color: rgba(32, 32, 40, 0.8);
        margin-top: 5px;
        font-size: 0.90rem;
    }

    .conteudoItem .botao{
        display: flex;
        align-items: center;
        justify-content: left;
        margin-top: 1.75rem;
    }

    .conteudoItem .botao a{
        font-family: 900, 'Montserrat', sans-serif;
        color: white;
        font-style: bold;
        border-radius: 0.625rem;
        background-color: #9BA0FC;
        padding: 10px 11.02px 10px 11.02px;
    }

    .conteudoItem .botao img{
        margin-left: 1rem;
    }


    


`

export const Footer = styled.div`


`