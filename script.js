// Dados das sessões e produtos
const catalogData = {
    sessions: [
        {
            id: 'cartoes',
            name: 'Cartões de Visita',
            icon: '💳',
            description: 'Diversos modelos de cartões de visita personalizados',
            products: [
                { name: 'Cartão Standard', description: 'Papel couchê 300g, cores 4x0', price: 'R$ 50,00/100un', image: 'img/teste.png' },
                { name: 'Cartão Premium', description: 'Papel supremo 300g, verniz localized', price: 'R$ 80,00/100un', image: 'img/cartao-premium.jpg' },
                { name: 'Cartão Luxo', description: 'Papel metalizado, hotstamp dourado', price: 'R$ 150,00/100un', image: 'img/cartao-luxo.jpg' },
                { name: 'Cartão Reciclado', description: 'Papel 100% reciclado, visual eco', price: 'R$ 70,00/100un', image: 'img/cartao-reciclado.jpg' }
            ]
        },
        {
            id: 'folders',
            name: 'Folders e Panfletos',
            icon: '📄',
            description: 'Material promocional em diversos formatos',
            products: [
                { name: 'Folder A4', description: 'Papel couchê 90g, dobra 1', price: 'R$ 0,30/un', image: 'img/folder-a4.jpg' },
                { name: 'Folder A5', description: 'Papel couchê 115g, dobra 2', price: 'R$ 0,25/un', image: 'img/folder-a5.jpg' },
                { name: 'Panfleto 1/4', description: 'Papel jornal 58g, cores 4x0', price: 'R$ 0,12/un', image: 'img/panfleto-1-4.jpg' },
                { name: 'Flyer Quadrado', description: '15x15cm, papel couchê 150g', price: 'R$ 0,40/un', image: 'img/flyer-quadrado.jpg' }
            ]
        },
        {
            id: 'banners',
            name: 'Banners e Faixas',
            icon: '️',
            description: 'Material de grande formato para divulgação',
            products: [
                { name: 'Banner Lona', description: 'Lona 440g, ilhós a cada 50cm', price: 'R$ 45,00/m²', image: 'img/banner-lona.jpg' },
                { name: 'Faixa de Rua', description: 'Lona front 300g, dupla face', price: 'R$ 55,00/m²', image: 'img/faixa-rua.jpg' },
                { name: 'Rollup', description: '80x200cm, base metálica', price: 'R$ 180,00/un', image: 'img/rollup.jpg' },
                { name: 'Banner Canvas', description: 'Tecido canvas, moldura alumíno', price: 'R$ 60,00/m²', image: 'img/banner-canvas.jpg' }
            ]
        },
        {
            id: 'cadernos',
            name: 'Cadernos Personalizados',
            icon: '📓',
            description: 'Cadernos e agendas com sua marca',
            products: [
                { name: 'Caderno A5', description: 'Capa dura, 100 páginas, espiral', price: 'R$ 12,00/un', image: 'img/caderno-a5.jpg' },
                { name: 'Agenda Personalizada', description: 'Capa personalizada,ano', price: 'R$ 25,00/un', image: 'img/agenda-personalizada.jpg' },
                { name: 'Caderno Eco', description: 'Capa reciclada, miolo 80g', price: 'R$ 8,00/un', image: 'img/caderno-eco.jpg' },
                { name: 'Bloco de Notas', description: 'A6, 50 folhas, colado', price: 'R$ 5,00/un', image: 'img/bloco-notas.jpg' }
            ]
        },
        {
            id: 'embalagens',
            name: 'Embalagens',
            icon: '📦',
            description: 'Caixas e embalagens personalizadas',
            products: [
                { name: 'Caixa Pequena', description: '10x10x5cm, papelão 300g', price: 'R$ 2,50/un', image: 'img/caixa-pequena.jpg' },
                { name: 'Caixa Média', description: '20x15x10cm, papelão 400g', price: 'R$ 5,00/un', image: 'img/caixa-media.jpg' },
                { name: 'Sacola Personalizada', description: 'Papel kraft, alça papel', price: 'R$ 3,00/un', image: 'img/sacola-personalizada.jpg' },
                { name: 'Embalagem Pizza', description: 'Papelão resistente, janela', price: 'R$ 4,00/un', image: 'img/embalagem-pizza.jpg' }
            ]
        },
        {
            id: 'serigrafia',
            name: 'Serigrafia',
            icon: '👕',
            description: 'Estampas em tecidos e produtos',
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