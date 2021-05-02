const endpoint = `https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`;
let nextPage
fetch(endpoint)
    .then((res) => res.json())
    .then((data) => {
        console.log(data.products)
        const AllProducts = data.products.reduce((register, data) => {
            register += `
                
                <li class="cardWindow">
                <img class"cardImage" src="http:${data.image}" alt="${data.name}" />        
                <h1 class="cardTitle">${data.name}</h1>
                <p class="cardSubtitle">${data.description}</p>
                <strike class="cardStrike">De: R$${data.oldPrice}</strike>
                <h3 class="cardPrice">Por: R$${data.price}</h3>
                <p class="cardInstallments">ou ${data.installments.count}x de R$ ${data.installments.value}</p>
                <button class="cardButton">Comprar</button>
                </li>`;

            return register;

        }, "");

        nextPage = "https://" + data.nextPage

        const ul = document.querySelector('[data-js="products"]');
        ul.innerHTML = AllProducts;


    });


function showingMore() {
    fetch(nextPage)
        .then((res) => res.json())
        .then((data) => {
            console.log(data.products)
            const nextProducts = data.products.reduce((register, data) => {
                register += `
                
                <li class="cardWindow">
                <img class"cardImage" src="http:${data.image}" alt="${data.name}" />        
                <h1 class="cardTitle">${data.name}</h1>
                <p class="cardSubtitle">${data.description}</p>
                <strike class="cardStrike">De: R$${data.oldPrice}</strike>
                <h3 class="cardPrice">Por: R$${data.price}</h3>
                <p class="cardInstallments">ou ${data.installments.count}x de R$ ${data.installments.value}</p>
                <button class="cardButton">Comprar</button>
                </li>`;

                return register;

            }, "");



            const ul = document.querySelector('[data-js="next-page-products"]');
            ul.innerHTML = nextProducts;


        });


}


function validatingNewsletter() {
    let form = document.forms["shareNews"]

    if (form["friendName"].value == "") {
        alert("Verifique o nome do seu amigo!")
    } else if (!form["friendEmail".value.match(/.@./)]) {
        alert("O campo de email deve conter um email válido!")

    } else
        return false

}

function validatingSendingData() {
    let form = document.forms["sendingData"]

    if (form["userName"].value == "") {
        alert("Verifique seu nome!")

    } else if (!form["userEmail"].value.match(/.@./)) {
        alert("O campo de email deve conter um email válido!")

    } else if (form["userCPF"].value.length !== 14) {
        alert("O campo de email deve conter 14 dígitos ")

    } else if (!form["userGender"].checked && !form["userGender"].checked) {
        alert("Escolha seu género!")


    } else
        return false;
}