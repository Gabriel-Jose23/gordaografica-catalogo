// Dados das sessões e produtos
const catalogData = {
    sessions: [
        {
            id: 'cartoes',
            name: 'Panfletos / Cartões',
            icon: '📄💳',
            description: 'Produtos para divulgação rápida.',
            products: [
                { name: 'Panfletos 10×14', description: '1.000 UN', price: 'R$ 124,99/1000un', image: 'img/teste.png' },
                { name: 'Panfletos 14×20', description: '1.000 UN', price: 'R$ 234,99/1000un', image: 'img/teste.png' },
                { name: 'Panfletos 7×10', description: '5.000  UN', price: '169,99/5000un', image: 'img/teste.png' },
                { name: 'Panfletos 10×14', description: '2.500 UN', price: 'R$ 129,99/2.500un', image: 'img/teste.png' },
                { name: 'Panfletos 14×20', description: '2.500 UN', price: 'R$ 274,99/2.500un', image: 'img/teste.png' },
                { name: 'Cartão de visita couchê 300g total frente', description: '500 UN', price: 'R$ 94,99/500un', image: 'img/teste.png' },
                { name: 'Cartão de visita couchê 300g total frente', description: '1.000 UN', price: 'R$ 104,99/1.000un', image: 'img/teste.png' },
                { name: 'Cartão de visita couchê 300g frente e verso laminação fosca', description: '500 UN', price: 'R$ 129,99/500un', image: 'img/teste.png' },
                { name: 'Cartão de visita couchê 300g frente e verso laminação fosca', description: '1.000 UN', price: 'R$ 169,99/1.000un', image: 'img/teste.png' }
            ]
        },
        {
            id: 'folders',
            name: 'Sublimação',
            icon: '☕',
            description: 'Sublimações em geral',
            products: [
                { name: 'Caneca sublimada cerâmica', description: '', price: 'R$ 24,99/un', image: 'img/teste.png' },
                { name: 'Caneca sublimada + arte', description: '', price: 'R$ 29,99/un', image: 'img/teste.png' },
                { name: 'Azulejo 10×10 sublimado', description: '', price: 'R$ 14,99/un', image: 'img/teste.png' },
                { name: 'Azulejo 20×20 sublimado', description: '', price: 'R$ 21,99', image: 'img/teste.png' },
                { name: 'Azulejo 20×30 sublimado', description: '', price: 'R$ 34,99', image: 'img/teste.png' },
                { name: 'Placa de metal 20×28 sublimada', description: '', price: 'R$ 34,99', image: 'img/teste.png' }
            ]
        },
        {
            id: 'banners',
            name: 'Fotos',
            icon: '️📷',
            description: 'Eternize memórias.',
            products: [
                { name: 'Foto 20×27 1 UN', description: '', price: 'R$ 9,99', image: 'img/teste.png' },
                { name: 'Foto 14×20 2 UN', description: '', price: 'R$ 9,99', image: 'img/teste.png' },
                { name: 'Foto 14×10 4 UN', description: '', price: 'R$ 9,99', image: 'img/teste.png' },
                { name: 'Fotos polaroides 6 UN', description: '', price: 'R$ 11,99', image: 'img/teste.png' },
                { name: 'Fotos polaroides 12 UN mini', description: '', price: 'R$ 11,99', image: 'img/teste.png' }
            ]
        },
        {
            id: 'cadernos',
            name: 'Banners/Faixas',
            icon: '📃',
            description: 'Comunicação visual',
            products: [
                { name: 'Banner 50×50', description: '', price: 'R$ 19,99/un', image: 'img/teste.png' },
                { name: 'Banner 70×70', description: '', price: 'R$ 29,99/un', image: 'img/teste.png' },
                { name: 'Banner 70×90', description: '', price: 'R$ 34,99/un', image: 'img/teste.png' },
                { name: 'Banner 90×90', description: '', price: 'R$ 44,99/un', image: 'img/teste.png' },
                { name: 'Banner 90×1,10', description: '', price: 'R$ 59,99/un', image: 'img/teste.png' },
                { name: 'Banner 1,10×1,10', description: '', price: 'R$ 69,99/un', image: 'img/teste.png' },
                { name: 'Banner 1,10×1,30', description: '', price: 'R$ 84,99/un', image: 'img/teste.png' },
                { name: 'Banner 1,30×1,50', description: '', price: 'R$ 114,99/un', image: 'img/teste.png' },
                { name: 'Banner tamanho personalizado', description: '', price: 'R$ 0,00 Consultar o valor no whatsapp', image: 'img/teste.png' }
            ]
        },
        {
            id: 'embalagens',
            name: 'Adesivos',
            icon: '📦',
            description: 'Adesivos vinil',
            products: [
                { name: 'Caixa Pequena', description: '10x10x5cm, papelão 300g', price: 'R$ 2,50/un', image: 'img/caixa-pequena.jpg' },
                { name: 'Caixa Média', description: '20x15x10cm, papelão 400g', price: 'R$ 5,00/un', image: 'img/caixa-media.jpg' },
                { name: 'Sacola Personalizada', description: 'Papel kraft, alça papel', price: 'R$ 3,00/un', image: 'img/sacola-personalizada.jpg' },
                { name: 'Embalagem Pizza', description: 'Papelão resistente, janela', price: 'R$ 4,00/un', image: 'img/embalagem-pizza.jpg' }
            ]
        },
        {
            id: 'serigrafia',
            name: 'Presentes personalizados casal',
            icon: '💞',
            description: 'Torne cada momento especial',
            products: [
                { name: 'Camiseta Estampada', description: 'Silk 1 cor, cotton', price: 'R$ 15,00/un', image: 'img/camiseta-estampada.jpg' },
                { name: 'Boné Estampado', description: 'Silk 1 cor, frente', price: 'R$ 25,00/un', image: 'img/bone-estampado.jpg' },
                { name: 'Caneca Personalizada', description: 'Sublimação, corescheia', price: 'R$ 22,00/un', image: 'img/caneca-personalizada.jpg' },
                { name: 'Tecido Estampado', description: 'Silk metro, cotton', price: 'R$ 30,00/m', image: 'img/tecido-estampado.jpg' }
            ]
        },
        {
            id: 'serigrafia',
            name: 'Cortadores/carimbos biscoito',
            icon: '🍪',
            description: 'Alavanque sua criatividade na cozinha',
            products: [
                { name: 'Camiseta Estampada', description: 'Silk 1 cor, cotton', price: 'R$ 15,00/un', image: 'img/camiseta-estampada.jpg' },
                { name: 'Boné Estampado', description: 'Silk 1 cor, frente', price: 'R$ 25,00/un', image: 'img/bone-estampado.jpg' },
                { name: 'Caneca Personalizada', description: 'Sublimação, corescheia', price: 'R$ 22,00/un', image: 'img/caneca-personalizada.jpg' },
                { name: 'Tecido Estampado', description: 'Silk metro, cotton', price: 'R$ 30,00/m', image: 'img/tecido-estampado.jpg' }
            ]
        },
        {
            id: 'serigrafia',
            name: 'Brindes personalizados',
            icon: '🎁',
            description: 'Brindes para todas as ocasiões',
            products: [
                { name: 'Camiseta Estampada', description: 'Silk 1 cor, cotton', price: 'R$ 15,00/un', image: 'img/camiseta-estampada.jpg' },
                { name: 'Boné Estampado', description: 'Silk 1 cor, frente', price: 'R$ 25,00/un', image: 'img/bone-estampado.jpg' },
                { name: 'Caneca Personalizada', description: 'Sublimação, corescheia', price: 'R$ 22,00/un', image: 'img/caneca-personalizada.jpg' },
                { name: 'Tecido Estampado', description: 'Silk metro, cotton', price: 'R$ 30,00/m', image: 'img/tecido-estampado.jpg' }
            ]
        },
        {
            id: 'serigrafia',
            name: 'Personalizados para festas',
            icon: '🎉',
            description: 'Personalizados completos',
            products: [
                { name: 'Camiseta Estampada', description: 'Silk 1 cor, cotton', price: 'R$ 15,00/un', image: 'img/camiseta-estampada.jpg' },
                { name: 'Boné Estampado', description: 'Silk 1 cor, frente', price: 'R$ 25,00/un', image: 'img/bone-estampado.jpg' },
                { name: 'Caneca Personalizada', description: 'Sublimação, corescheia', price: 'R$ 22,00/un', image: 'img/caneca-personalizada.jpg' },
                { name: 'Tecido Estampado', description: 'Silk metro, cotton', price: 'R$ 30,00/m', image: 'img/tecido-estampado.jpg' }
            ]
        },
        {
            id: 'serigrafia',
            name: 'Personalizados para Eventos',
            icon: '✨',
            description: 'Use a criatividade no seu evento',
            products: [
                { name: 'Camiseta Estampada', description: 'Silk 1 cor, cotton', price: 'R$ 15,00/un', image: 'img/camiseta-estampada.jpg' },
                { name: 'Boné Estampado', description: 'Silk 1 cor, frente', price: 'R$ 25,00/un', image: 'img/bone-estampado.jpg' },
                { name: 'Caneca Personalizada', description: 'Sublimação, corescheia', price: 'R$ 22,00/un', image: 'img/caneca-personalizada.jpg' },
                { name: 'Tecido Estampado', description: 'Silk metro, cotton', price: 'R$ 30,00/m', image: 'img/tecido-estampado.jpg' }
            ]
        }
    ]
};

// Renderizar sessões na página inicial
function renderSessions() {
    const grid = document.getElementById('sessionsGrid');
    if (!grid) return;
    
    grid.innerHTML = catalogData.sessions.map(session => `
        <div class="session-card" onclick="openSession('${session.id}')">
            <div class="icon">${session.icon}</div>
            <h3>${session.name}</h3>
            <p>${session.description}</p>
        </div>
    `).join('');
}

// Abrir sessão de produtos
function openSession(sessionId) {
    // Atualiza o hash da URL
    if (window.location.hash !== '#' + sessionId) {
        window.location.hash = '#' + sessionId;
        return; // Aguardar o evento hashchange para evitar duplicidade
    }
    const session = catalogData.sessions.find(s => s.id === sessionId);
    if (!session) return;
    document.querySelector('.sessions-section').style.display = 'none';
    let productsView = document.getElementById('productsView');
    if (!productsView) {
        productsView = document.createElement('div');
        productsView.id = 'productsView';
        productsView.className = 'products-view';
        document.querySelector('main').appendChild(productsView);
    }
    productsView.innerHTML = `
        <button class="back-button" onclick="closeProducts()">
            ← Voltar às Sessões
        </button>
        <h2>${session.icon} ${session.name}</h2>
        <p class="subtitle">${session.description}</p>
        <div class="products-grid">
            ${session.products.map(product => `
                <div class="product-card">
                    <div class="product-image">
                        ${product.image ? `<img src="${product.image}" alt="${product.name}" style="width:100%;height:100%;object-fit:cover;">` : '🖼️'}
                    </div>
                    <div class="product-info">
                        <h4>${product.name}</h4>
                        <p class="description">${product.description}</p>
                        <p class="price">${product.price}</p>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
    productsView.classList.add('active');
    productsView.style.display = 'block';
}

// Voltar para sessões
function closeProducts() {
    // Remove o hash da URL
    if (window.location.hash) {
        history.pushState('', document.title, window.location.pathname + window.location.search);
    }
    const productsView = document.getElementById('productsView');
    if (productsView) {
        productsView.classList.remove('active');
        productsView.style.display = 'none';
    }
    document.querySelector('.sessions-section').style.display = 'block';
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderSessions();
    // Se houver hash na URL ao carregar, abrir a seção correspondente
    if (window.location.hash) {
        const sessionId = window.location.hash.replace('#', '');
        if (catalogData.sessions.some(s => s.id === sessionId)) {
            openSession(sessionId);
        }
    }
});

// Ouve mudanças no hash para navegação direta
window.addEventListener('hashchange', () => {
    const sessionId = window.location.hash.replace('#', '');
    if (catalogData.sessions.some(s => s.id === sessionId)) {
        openSession(sessionId);
    } else {
        closeProducts();
    }
});