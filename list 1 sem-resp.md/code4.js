
    const itens = ['Item1', 'Item 2', 'Item 3'];

    const lista = document.getElementById('minhaLista');

    lista.innerHTML = itens.map(item => `<li>${item}</li>`).join('');