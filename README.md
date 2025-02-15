<h1 align="center">CurrencyTrainer: Plataforma de visualização em tempo real para preços de criptomoedas</h1>

<div align="center" >

![Badge em Desenvolvimento](http://img.shields.io/static/v1?label=STATUS&message=FINALIZADO&color=GREEN&style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScripts](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/VITE-%234747c6?style=for-the-badge&logo=vite&logoColor=yellow&logoSize=100px)
![Css](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

</div>

## Sumário

* [Descrição](#descrição)
* [Requisitos](#requisitos)
* [Ferramentas](#ferramentas)
* [Dificuldades](#dificuldades)
* [Resultados](#resultados)
* [Como_Usar](#como_usar)
* [Conclusão](#conclusao)


## Descrição

Plataforma web para monitoramento de criptomoedas em tempo real, oferecendo informações detalhadas como nome da moeda, valor de mercado, preço atual, volume de transações e variação percentual nas últimas 24 horas. O sistema inclui uma barra de busca para localizar rapidamente moedas específicas e exibe dados organizados em uma tabela de fácil leitura. Com uma interface moderna e tema escuro, o projeto é ideal para traders, investidores e entusiastas que desejam acompanhar o desempenho e as tendências do mercado de criptomoedas de forma prática e eficiente.


## Requisitos

- [x] **Exibição de criptomoedas**:
   - Listar informações sobre criptomoedas, incluindo nome, símbolo, valor de mercado, preço atual, volume de transações e variação percentual nas últimas 24 horas.
   - Mostrar variações positivas ou negativas com destaque (cores verde para alta e vermelho para queda).

- [x] **Barra de busca**:
   - Permitir que o usuário pesquise criptomoedas pelo nome ou símbolo.
   - Atualizar a tabela dinamicamente com os resultados da busca.

- [x] **Atualização de dados em tempo real**:
   - Buscar dados atualizados regularmente usando APIs de mercado de criptomoedas.

- [x] **Organização em tabela**:
   - Exibir informações organizadas em colunas com cabeçalhos claros: Moeda, Valor de Mercado, Preço, Volume, Mudança 24h.

- [x] **Responsividade**:
   - Adaptar a interface para diferentes tamanhos de tela (desktop, tablet, mobile).

- [x] **Tema escuro**:
   - Implementar um layout com tema escuro para facilitar a leitura e oferecer um visual moderno.


## Ferramentas

**React**: Biblioteca JavaScript para criar interfaces de usuário reutilizáveis e dinâmicas.  
**JavaScript**: Linguagem de programação para páginas web interativas e dinâmicas.  
**TypeScript**: Superconjunto de JavaScript com tipagem estática para maior segurança.  
**Vite**: Ferramenta de build rápida e moderna para projetos front-end com HMR.  
**CSS3**: Linguagem para estilizar e formatar elementos visuais de páginas web.  

## Dificuldades

Tive dificuldades na hora de configurar a integração com a API, principalmente no tratamento das respostas para garantir que os dados fossem exibidos corretamente no site.

## Resultados

Consegui fazer a aplicação, apesar dos problemas

<div align="center">

![alt text](<images/Screenshot from 2025-01-07 18-26-49.png>)

![alt text](<images/Screenshot from 2025-01-07 18-27-00.png>)

</div>


### Imanges para dispositivos moveis


<div align="center">

![asda](images/image.png)

![alt text](<images/image copy.png>)

</div>




## Como_Usar

1. Faça o git clone do repositorio:

`https://github.com/and3510/CurrencyTracker_Project.git`

2. Vai na pasta:

`cd CurrencyTracker_Project`

3. Instale o npm:

`npm install`

4. Agora é só rodar:

`npm run dev`


## Conclusao

O projeto **CurrencyTrainer** foi uma plataforma de monitoramento de criptomoedas em tempo real, permitindo a exibição de dados como preço, volume e variação de mercado. Superando desafios na integração com a API, a aplicação oferece uma interface responsiva e moderna. Utilizando **React**, **TypeScript** e **Vite**, o projeto atendeu aos requisitos de usabilidade e eficiência. Foi uma excelente oportunidade de aprendizado e desenvolvimento de habilidades em tecnologias web e integração de APIs.