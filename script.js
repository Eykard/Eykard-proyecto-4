// Base64 Thumbnails Auxiliary Registry for Foolproof PDF Generation
window.PDF_THUMBNAILS = {
    "assets/logo_pagina.png": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==",
    "assets/ferrari_sf90.jpg": "https://tse3.mm.bing.net/th/id/OIP.hbgkOs2QfLbGv2stLzi_kwHaFJ?r=0&pid=Api&h=220&P=0",
    "assets/lamborghini_revuelto.jpg": "https://tse4.mm.bing.net/th/id/OIP.CpVp92YF4sxnwzECzypZMAHaEK?r=0&pid=Api&h=220&P=0",
    "assets/porsche_gt3rs.jpg": "https://tse2.mm.bing.net/th/id/OIP.d2LdNg20fKLvnUWXT-3wwgHaE8?r=0&pid=Api&h=220&P=0",
    "assets/rolls_royce_ghost.jpg": "https://www.conceptcarz.com/images/Rolls-Royce/rolls-ghost-extended-expressionism-2-1280.jpg",
    "assets/ducati_panigale.jpg": "https://images.ctfassets.net/x7j9qwvpvr5s/5JLIQMDKqnoI5Xpt18Oweu/900b79b96d85a7204950509038e9a4d7/Panigale-V4-SP2-06-Track-gallery-1920x1080.jpg",
    "assets/bmw_m1000rr.jpg": "https://www.carolenash.com/images/librariesprovider6/blog-posts/bmw-m-1000-rr-2.jpg?sfvrsn=8387dd0d_1",
    "assets/ferrari_logo.png": "https://tse1.mm.bing.net/th/id/OIP.erUIuN9IAgb9cwkErUZQRAHaGB?r=0&pid=Api&h=220&P=0",
    "assets/lamborghini_logo.png": "https://crystalpng.com/wp-content/uploads/2025/07/Lamborghini-Logo-02-1024x1024.png",
    "assets/porsche_logo.png": "https://tse3.mm.bing.net/th/id/OIP.4NVQVc3SuMXGPAmN4LX3wAHaGB?r=0&pid=Api&h=220&P=0",
    "assets/rolls_royce_logo.png": "https://tse1.mm.bing.net/th/id/OIP.46PSQjeJxCUVAU2kjDMU-QHaGB?r=0&pid=Api&h=220&P=0",
    "assets/ducati_logo.png": "https://tse1.mm.bing.net/th/id/OIP.5U9rlTqp-BMRHg6KzdGQwAHaHa?r=0&pid=Api&h=220&P=0",
    "assets/bmw_logo.png": "https://tse1.mm.bing.net/th/id/OIP.SdMoBN6Lp0Fn5dfJ4abM3AHaGB?r=0&pid=Api&h=220&P=0"
};

// Global State & Data Source
let vehiclesData = {
    "vehiculos": [
        {
            "codigo": 101,
            "marca": "Ferrari",
            "logo": "assets/ferrari_logo.png",
            "tipo": "Deportivo",
            "modelo": "SF90 Stradale",
            "caracteristicas": "Motor V8 Híbrido Twin-Turbo 986 HP | 0-100 km/h en 2.5s",
            "imagen": "assets/ferrari_sf90.jpg",
            "numeroPuertas": 2,
            "motor": "4.0L V8 + 3 Motores Eléctricos",
            "combustible": "Híbrido Enchufable",
            "categoria": "vehiculos",
            "precio_compra": 520000,
            "precio_venta": 625000,
            "precio_alquiler_hora": 450,
            "precio_alquiler_dia": 3500,
            "oferta_alquiler": "⚡ 15% OFF en fin de semana",
            "existencia": 3
        },
        {
            "codigo": 102,
            "marca": "Lamborghini",
            "logo": "assets/lamborghini_logo.png",
            "tipo": "Superdeportivo",
            "modelo": "Revuelto V12",
            "caracteristicas": "V12 Híbrido 1,015 HP | Tracción Integral AWD",
            "imagen": "assets/lamborghini_revuelto.jpg",
            "numeroPuertas": 2,
            "motor": "6.5L V12 Natural Aspirado",
            "combustible": "Híbrido Premium",
            "categoria": "vehiculos",
            "precio_compra": 580000,
            "precio_venta": 689000,
            "precio_alquiler_hora": 520,
            "precio_alquiler_dia": 4100,
            "oferta_alquiler": "🔥 Seguro Platinum incluido",
            "existencia": 2
        },
        {
            "codigo": 103,
            "marca": "Porsche",
            "logo": "assets/porsche_logo.png",
            "tipo": "Pista / GT",
            "modelo": "911 GT3 RS",
            "caracteristicas": "Aerodinámica activa DRS | 518 HP Bóxer",
            "imagen": "assets/porsche_gt3rs.jpg",
            "numeroPuertas": 2,
            "motor": "4.0L 6-Cilindros Bóxer",
            "combustible": "Gasolina 98 Octanos",
            "categoria": "vehiculos",
            "precio_compra": 240000,
            "precio_venta": 298000,
            "precio_alquiler_hora": 300,
            "precio_alquiler_dia": 2400,
            "oferta_alquiler": "🌟 Kit de Telemetría Pro Gratis",
            "existencia": 4
        },
        {
            "codigo": 104,
            "marca": "Rolls-Royce",
            "logo": "assets/rolls_royce_logo.png",
            "tipo": "Sedán de Lujo",
            "modelo": "Ghost Extended",
            "caracteristicas": "Confort supremo V12 | Cabina estelar Bespoke",
            "imagen": "assets/rolls_royce_ghost.jpg",
            "numeroPuertas": 4,
            "motor": "6.75L V12 Twin-Turbo",
            "combustible": "Gasolina Premium",
            "categoria": "vehiculos",
            "precio_compra": 350000,
            "precio_venta": 415000,
            "precio_alquiler_hora": 380,
            "precio_alquiler_dia": 2900,
            "oferta_alquiler": "👑 Chófer privado de cortesía",
            "existencia": 2
        }
    ],
    "motos": [
        {
            "codigo": 201,
            "marca": "Ducati",
            "logo": "assets/ducati_logo.png",
            "tipo": "Superbike",
            "modelo": "Panigale V4 R",
            "caracteristicas": "Derivada de MotoGP | 240.5 HP con escape Akrapovic",
            "imagen": "assets/ducati_panigale.jpg",
            "numeroPuertas": 0,
            "motor": "998cc Desmosedici Stradale R",
            "combustible": "Gasolina de Alto Rendimiento",
            "categoria": "motos",
            "precio_compra": 38000,
            "precio_venta": 46500,
            "precio_alquiler_hora": 120,
            "precio_alquiler_dia": 950,
            "oferta_alquiler": "🏁 Casco Arai réplica incluido",
            "existencia": 5
        },
        {
            "codigo": 202,
            "marca": "BMW Motorrad",
            "logo": "assets/bmw_logo.png",
            "tipo": "Superbike",
            "modelo": "M 1000 RR",
            "caracteristicas": "Alas de fibra de carbono | 212 HP",
            "imagen": "assets/bmw_m1000rr.jpg",
            "numeroPuertas": 0,
            "motor": "999cc 4-Cilindros en Línea ShiftCam",
            "combustible": "Gasolina 98 Octanos",
            "categoria": "motos",
            "precio_compra": 33000,
            "precio_venta": 39900,
            "precio_alquiler_hora": 100,
            "precio_alquiler_dia": 820,
            "oferta_alquiler": "⚡ 20% OFF en alquiler semanal",
            "existencia": 3
        }
    ]
};

let cart = [];
let currentFilter = 'todos';

document.addEventListener("DOMContentLoaded", () => {
    loadCatalogData();
    setupSearchListener();
});

async function loadCatalogData() {
    try {
        const response = await fetch('vehiculo.json');
        if (response.ok) {
            const data = await response.json();
            if (data && (data.vehiculos || data.motos)) {
                vehiclesData = data;
            }
        }
    } catch (e) {
        console.warn("fetch vehiculo.json local falló, utilizando respaldo embebido en JS garantizado.");
    }
    renderCatalog();
}

function filterCatalog(category, btnElement) {
    currentFilter = category;
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    if (btnElement) btnElement.classList.add('active');
    renderCatalog();
}

function setupSearchListener() {
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
        renderCatalog(e.target.value.toLowerCase());
    });
}

function getAllItems() {
    let all = [];
    if (vehiclesData.vehiculos) all = all.concat(vehiclesData.vehiculos);
    if (vehiclesData.motos) all = all.concat(vehiclesData.motos);
    return all;
}

function renderCatalog(searchQuery = '') {
    const grid = document.getElementById('catalogGrid');
    grid.innerHTML = '';
    
    let items = getAllItems();
    
    if (currentFilter !== 'todos') {
        items = items.filter(item => item.categoria === currentFilter);
    }

    if (searchQuery.trim() !== '') {
        items = items.filter(item => 
            item.marca.toLowerCase().includes(searchQuery) ||
            item.modelo.toLowerCase().includes(searchQuery) ||
            item.motor.toLowerCase().includes(searchQuery) ||
            item.tipo.toLowerCase().includes(searchQuery)
        );
    }

    document.getElementById('catalogCount').innerText = `${items.length} unidades encontradas`;

    if (items.length === 0) {
        grid.innerHTML = `
            <div class="col-12 text-center py-5">
                <div class="p-5 bg-dark rounded-4 border border-secondary">
                    <i class="fas fa-car-tunnel text-muted fs-1 mb-3"></i>
                    <h4 class="text-white">No se encontraron unidades</h4>
                    <p class="text-muted">Prueba con otro término de búsqueda o categoría.</p>
                </div>
            </div>
        `;
        return;
    }

    items.forEach(item => {
        const resolvedImg = window.PDF_THUMBNAILS[item.imagen] || item.imagen;
        const resolvedLogo = window.PDF_THUMBNAILS[item.logo] || item.logo;

        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4';
        col.innerHTML = `
            <div class="vehicle-card shadow-sm">
                <div class="card-img-wrapper">
                    <span class="offer-badge"><i class="fas fa-tag me-1"></i> ${item.oferta_alquiler}</span>
                    <div class="brand-logo-badge shadow">
                        <img src="${resolvedLogo}" alt="${item.marca}" onerror="this.src='https://placehold.co/50x50/111/fff?text=L'">
                    </div>
                    <img src="${resolvedImg}" alt="${item.modelo}" onerror="this.src='https://placehold.co/600x400/11/00d2ff?text=Luxury+Motors'">
                </div>
                <div class="p-4 d-flex flex-column flex-grow-1">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <div>
                            <span class="text-info text-uppercase fs-xs fw-bold" style="font-size: 0.75rem; letter-spacing: 1px;">${item.marca}</span>
                            <h4 class="text-white fw-bold mb-0">${item.modelo}</h4>
                        </div>
                        <span class="badge bg-secondary text-light">${item.tipo}</span>
                    </div>
                    
                    <p class="text-muted small mb-3 flex-grow-1" style="min-height: 38px;">${item.caracteristicas}</p>
                    
                    <div class="bg-dark p-2.5 rounded-3 mb-3 border border-secondary border-opacity-25 small">
                        <div class="d-flex justify-content-between mb-1">
                            <span class="text-muted"><i class="fas fa-gears text-info me-1"></i> Motor:</span>
                            <span class="text-light text-end text-truncate" style="max-width: 170px;" title="${item.motor}">${item.motor}</span>
                        </div>
                        <div class="d-flex justify-content-between mb-1">
                            <span class="text-muted"><i class="fas fa-gas-pump text-warning me-1"></i> Combustible:</span>
                            <span class="text-light">${item.combustible}</span>
                        </div>
                        <div class="d-flex justify-content-between">
                            <span class="text-muted"><i class="fas fa-boxes-stacked text-success me-1"></i> Stock:</span>
                            <span class="text-success fw-bold">${item.existencia} disponibles</span>
                        </div>
                    </div>

                    <div class="mb-3">
                        <div class="d-flex justify-content-between align-items-center mb-1">
                            <span class="text-muted small">Precio Venta Definitiva:</span>
                            <span class="price-sale">$${item.precio_venta.toLocaleString()} USD</span>
                        </div>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="text-muted small">Tarifa Alquiler (24h):</span>
                            <span class="price-rental">$${item.precio_alquiler_dia.toLocaleString()} USD/día</span>
                        </div>
                    </div>

                    <div class="row g-2 mt-auto">
                        <div class="col-6">
                            <button class="btn btn-outline-warning w-100 fw-bold rounded-pill py-2 btn-sm" onclick="openRentalModal(${item.codigo})">
                                <i class="fas fa-key me-1"></i> Alquilar
                            </button>
                        </div>
                        <div class="col-6">
                            <button class="btn btn-info w-100 fw-bold rounded-pill py-2 btn-sm text-dark" onclick="buyItemDirect(${item.codigo})">
                                <i class="fas fa-cart-shopping me-1"></i> Comprar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        grid.appendChild(col);
    });
}

function openRentalModal(codigo) {
    const item = getAllItems().find(i => i.codigo === codigo);
    if (!item) return;

    const modalBody = document.getElementById('rentalModalBody');
    const todayStr = new Date().toISOString().split('T')[0];

    modalBody.innerHTML = `
        <div class="row align-items-center">
            <div class="col-md-5 mb-3 mb-md-0">
                <img src="${window.PDF_THUMBNAILS[item.imagen] || item.imagen}" class="img-fluid rounded-3 border border-secondary" alt="${item.modelo}">
            </div>
            <div class="col-md-7">
                <span class="text-info fw-bold small">${item.marca}</span>
                <h4 class="text-white fw-bold mb-2">${item.modelo}</h4>
                <p class="text-muted small mb-3">${item.caracteristicas}</p>
                
                <div class="mb-3">
                    <span class="badge bg-dark border border-secondary text-warning me-2"><i class="fas fa-sun me-1"></i> Diario: $${item.precio_alquiler_dia} USD</span>
                    <span class="badge bg-dark border border-secondary text-info"><i class="fas fa-clock me-1"></i> Por Hora: $${item.precio_alquiler_hora} USD</span>
                </div>

                <div class="row g-2 mb-3">
                    <div class="col-6">
                        <label class="form-label small">Modalidad</label>
                        <select id="rentalModeSelect" class="form-select form-select-sm" onchange="calculateRentalTotal(${item.precio_alquiler_dia}, ${item.precio_alquiler_hora})">
                            <option value="dia">Por Día(s)</option>
                            <option value="hora">Por Hora(s)</option>
                        </select>
                    </div>
                    <div class="col-6">
                        <label id="durationLabel" class="form-label small">Cantidad Días</label>
                        <input type="number" id="rentalDurationInput" class="form-control form-control-sm" value="3" min="1" max="90" oninput="calculateRentalTotal(${item.precio_alquiler_dia}, ${item.precio_alquiler_hora})">
                    </div>
                </div>

                <div class="mb-3">
                    <label class="form-label small">Fecha de Inicio del Alquiler</label>
                    <input type="date" id="rentalStartDate" class="form-control form-control-sm" value="${todayStr}">
                </div>

                <div class="alert alert-dark border border-warning p-2 small mb-0" style="background: rgba(255, 152, 0, 0.05);">
                    <div class="d-flex justify-content-between mb-1">
                        <span class="text-light">Tarifa Aplicada:</span>
                        <span id="unitRateDisplay" class="text-warning fw-bold">$${item.precio_alquiler_dia} USD / día</span>
                    </div>
                    <div class="d-flex justify-content-between mb-1">
                        <span class="text-light">Depósito de Fianza (Reembolsable):</span>
                        <span class="text-info fw-bold">$500.00 USD</span>
                    </div>
                    <div class="d-flex justify-content-between border-top border-secondary pt-1 mt-1">
                        <strong class="text-white">Subtotal Estimado:</strong>
                        <strong id="rentalSubtotalDisplay" class="text-success fs-6">$1,550.00 USD</strong>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('confirmRentalBtn').onclick = () => addRentalToCart(item);

    const rentalModal = new bootstrap.Modal(document.getElementById('rentalModal'));
    rentalModal.show();
    calculateRentalTotal(item.precio_alquiler_dia, item.precio_alquiler_hora);
}

function calculateRentalTotal(dailyRate, hourlyRate) {
    const mode = document.getElementById('rentalModeSelect').value;
    const duration = parseInt(document.getElementById('rentalDurationInput').value) || 1;
    const durationLabel = document.getElementById('durationLabel');
    const unitRateDisplay = document.getElementById('unitRateDisplay');
    const subtotalDisplay = document.getElementById('rentalSubtotalDisplay');

    let unitRate = 0;
    if (mode === 'dia') {
        durationLabel.innerText = 'Cantidad Días';
        unitRate = dailyRate;
        unitRateDisplay.innerText = `$${unitRate} USD / día`;
    } else {
        durationLabel.innerText = 'Cantidad Horas';
        unitRate = hourlyRate;
        unitRateDisplay.innerText = `$${unitRate} USD / hora`;
    }

    const subtotal = (unitRate * duration) + 500;
    subtotalDisplay.innerText = `$${subtotal.toLocaleString()} USD (Incl. Fianza)`;
}

function addRentalToCart(item) {
    const mode = document.getElementById('rentalModeSelect').value;
    const duration = parseInt(document.getElementById('rentalDurationInput').value) || 1;
    const startDate = document.getElementById('rentalStartDate').value;
    const unitRate = mode === 'dia' ? item.precio_alquiler_dia : item.precio_alquiler_hora;
    const rentalSubtotal = (unitRate * duration) + 500;

    const cartItem = {
        id: `${item.codigo}-rent-${Date.now()}`,
        codigo: item.codigo,
        marca: item.marca,
        modelo: item.modelo,
        imagen: item.imagen,
        tipo: 'Alquiler',
        modalidad: mode === 'dia' ? 'Día(s)' : 'Hora(s)',
        duracion: duration,
        fechaInicio: startDate,
        precioUnitario: unitRate,
        fianza: 500,
        subtotal: rentalSubtotal,
        detalleText: `Alquiler: ${duration} ${mode === 'dia' ? 'Día(s)' : 'Hora(s)'} (Desde ${startDate})`
    };

    cart.push(cartItem);
    updateCartBadges();

    bootstrap.Modal.getInstance(document.getElementById('rentalModal')).hide();
    Swal.fire({
        icon: 'success',
        title: '¡Alquiler Agregado!',
        text: `${item.marca} ${item.modelo} añadido correctamente al carrito.`,
        background: '#111622',
        color: '#fff',
        confirmButtonColor: '#00d2ff',
        timer: 2000
    });
}

function buyItemDirect(codigo) {
    const item = getAllItems().find(i => i.codigo === codigo);
    if (!item) return;

    const cartItem = {
        id: `${item.codigo}-buy-${Date.now()}`,
        codigo: item.codigo,
        marca: item.marca,
        modelo: item.modelo,
        imagen: item.imagen,
        tipo: 'Venta',
        modalidad: 'Adquisición Definitiva',
        duracion: 1,
        fechaInicio: new Date().toISOString().split('T')[0],
        precioUnitario: item.precio_venta,
        fianza: 0,
        subtotal: item.precio_venta,
        detalleText: 'Adquisición Vehicular Definitiva'
    };

    cart.push(cartItem);
    updateCartBadges();

    Swal.fire({
        icon: 'success',
        title: '¡Vehículo Añadido para Compra!',
        text: `${item.marca} ${item.modelo} listo para facturación definitiva.`,
        background: '#111622',
        color: '#fff',
        confirmButtonColor: '#ffd700',
        timer: 2000
    });
}

function updateCartBadges() {
    document.getElementById('navCartBadge').innerText = cart.length;
    document.getElementById('floatCartBadge').innerText = cart.length;
}

function openCartModal() {
    const modalBody = document.getElementById('cartModalBody');
    
    if (cart.length === 0) {
        modalBody.innerHTML = `
            <div class="text-center py-5">
                <i class="fas fa-cart-arrow-down text-muted fs-1 mb-3"></i>
                <h4 class="text-white">Tu carrito está vacío</h4>
                <p class="text-muted">Explora nuestro catálogo y selecciona vehículos para compra o alquiler.</p>
            </div>
        `;
    } else {
        let html = `
            <div class="table-responsive">
                <table class="table table-dark table-hover align-middle mb-0">
                    <thead>
                        <tr class="text-secondary small">
                            <th>Unidad</th>
                            <th>Tipo</th>
                            <th>Detalle / Modalidad</th>
                            <th>Precio Unit. / Fianza</th>
                            <th>Subtotal</th>
                            <th class="text-center">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
        `;

        cart.forEach((item, index) => {
            html += `
                <tr>
                    <td>
                        <div class="d-flex align-items-center gap-3">
                            <img src="${window.PDF_THUMBNAILS[item.imagen] || item.imagen}" width="60" height="42" class="rounded object-fit-cover border border-secondary" alt="">
                            <div>
                                <h6 class="text-white fw-bold mb-0">${item.marca} ${item.modelo}</h6>
                                <small class="text-muted">Código: LME-${item.codigo}</small>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span class="badge ${item.tipo === 'Venta' ? 'bg-success' : 'bg-info text-dark'}">${item.tipo}</span>
                    </td>
                    <td class="small text-light">${item.detalleText}</td>
                    <td>$${item.precioUnitario.toLocaleString()} ${item.fianza > 0 ? `<br><small class="text-info">(Incl. $500 Fianza)</small>` : ''}</td>
                    <td class="fw-bold text-warning">$${item.subtotal.toLocaleString()} USD</td>
                    <td class="text-center">
                        <button class="btn btn-sm btn-outline-danger rounded-circle" onclick="removeFromCart(${index})" title="Eliminar Ítem">
                            <i class="fas fa-trash-can"></i>
                        </button>
                    </td>
                </tr>
            `;
        });

        const subtotalSum = cart.reduce((acc, i) => acc + i.subtotal, 0);

        html += `
                    </tbody>
                </table>
            </div>
            <div class="mt-4 p-3 bg-dark rounded-3 border border-secondary d-flex justify-content-between align-items-center flex-wrap gap-3">
                <div>
                    <span class="text-muted small d-block">Desglose Financiero General:</span>
                    <span class="text-white fw-bold fs-5">Total Carrito: $${subtotalSum.toLocaleString()} USD</span>
                    <span class="text-success small ms-3">(Impuestos ITBIS 18% Exentos por Régimen Diplomático / Corporativo VIP)</span>
                </div>
                <button class="btn btn-warning fw-bold text-dark rounded-pill px-4" onclick="proceedToCheckout()">
                    <i class="fas fa-credit-card me-1"></i> Proceder al Checkout
                </button>
            </div>
        `;

        modalBody.innerHTML = html;
    }

    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    cartModal.show();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartBadges();
    openCartModal();
}

function clearCart() {
    cart = [];
    updateCartBadges();
    openCartModal();
}

function proceedToCheckout() {
    if (cart.length === 0) {
        Swal.fire({
            icon: 'warning',
            title: 'Carrito Vacío',
            text: 'Debe agregar al menos un vehículo o moto para proceder al pago.',
            background: '#111622',
            color: '#fff',
            confirmButtonColor: '#00d2ff'
        });
        return;
    }

    const cartModalEl = document.getElementById('cartModal');
    const cartModalInstance = bootstrap.Modal.getInstance(cartModalEl);
    if (cartModalInstance) cartModalInstance.hide();

    const totalSum = cart.reduce((acc, i) => acc + i.subtotal, 0);
    document.getElementById('checkoutTotalModalDisplay').innerText = `$${totalSum.toLocaleString()} USD`;

    const checkoutModal = new bootstrap.Modal(document.getElementById('checkoutModal'));
    checkoutModal.show();
}

function loadDefaultDemoData() {
    document.getElementById('clientName').value = "Ing. Eykard Onassis De Los Santos";
    document.getElementById('clientId').value = "402-1234567-5";
    document.getElementById('clientLicense').value = "DO-8875625-VIP (Vigente)";
    document.getElementById('clientPhone').value = "+1 (809) 555-2993";
    document.getElementById('clientEmail').value = "LUxuryOnassis@Eykardcars.com";
    document.getElementById('clientAddress').value = "Av. Anacaona #105, Torre Bella Vista, Santo Domingo, D.N.";
    document.getElementById('clientCard').value = "4532 8901 2345 8899";
    document.getElementById('clientCardExp').value = "12/28";
    document.getElementById('clientCardCvv').value = "789";

    Swal.fire({
        icon: 'success',
        title: 'Datos VIP Restaurados',
        text: 'Formulario rellenado con las credenciales corporativas del Ing. Eykard De Los Santos.',
        background: '#111622',
        color: '#fff',
        confirmButtonColor: '#00d2ff',
        timer: 2000
    });
}

function processPaymentAndGeneratePDF() {
    if (cart.length === 0) return;

    const clientName = document.getElementById('clientName').value.trim();
    const clientId = document.getElementById('clientId').value.trim();
    const clientLicense = document.getElementById('clientLicense').value.trim();
    const clientPhone = document.getElementById('clientPhone').value.trim();
    const clientEmail = document.getElementById('clientEmail').value.trim();
    const clientAddress = document.getElementById('clientAddress').value.trim();

    if (!clientName || !clientId || !clientPhone || !clientEmail) {
        Swal.fire({
            icon: 'error',
            title: 'Campos Incompletos',
            text: 'Por favor complete todos los datos requeridos de facturación.',
            background: '#111622',
            color: '#fff',
            confirmButtonColor: '#ff0055'
        });
        return;
    }

    const checkoutModalEl = document.getElementById('checkoutModal');
    const checkoutInstance = bootstrap.Modal.getInstance(checkoutModalEl);
    if (checkoutInstance) checkoutInstance.hide();

    document.querySelectorAll('.modal-backdrop').forEach(el => el.remove());
    document.body.classList.remove('modal-open');
    document.body.style.removeProperty('padding-right');
    document.body.style.removeProperty('overflow');

    Swal.fire({
        title: 'Procesando Transacción VIP...',
        text: 'Blindando pasarela de pago y generando documento oficial PDF...',
        background: '#111622',
        color: '#fff',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });

    setTimeout(() => {
        generateOfficialPDFDocument(clientName, clientId, clientLicense, clientPhone, clientEmail, clientAddress);
    }, 800);
}

function generateOfficialPDFDocument(clientName, clientId, clientLicense, clientPhone, clientEmail, clientAddress) {
    const hasSales = cart.some(i => i.tipo === 'Venta');
    const hasRentals = cart.some(i => i.tipo === 'Alquiler');

    let docTitle = "FACTURA DE VENTA Y CONTRATO DE ALQUILER";
    let filePrefix = "factura_de_venta_y_contrato_de_alquiler";
    if (hasSales && !hasRentals) {
        docTitle = "FACTURA DE VENTA";
        filePrefix = "factura_de_venta";
    } else if (!hasSales && hasRentals) {
        docTitle = "CONTRATO DE ALQUILER Y ACUERDO DE RESPONSABILIDAD";
        filePrefix = "contrato_de_alquiler_y_acuerdo_de_responsabilidad";
    }

    const docCode = `LME-${Math.floor(100000 + Math.random() * 900000)}`;
    const currentDate = new Date().toLocaleString();
    const logoBase64 = window.PDF_THUMBNAILS["assets/logo_pagina.png"] || "https://placehold.co/100x100/111/00d2ff?text=LME";

    let rowsHtml = '';
    let subtotalSum = 0;

    cart.forEach((item, index) => {
        subtotalSum += item.subtotal;
        const thumb = window.PDF_THUMBNAILS[item.imagen] || item.imagen;
        const badgeColor = item.tipo === 'Venta' ? '#2e7d32' : '#0284c7';

        rowsHtml += `
            <tr>
                <td style="padding: 8px; border-bottom: 1px solid #e5e5e5; text-align: center; color: #333333 !important;">${index + 1}</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e5e5; text-align: center;">
                    <img src="${thumb}" width="55" height="38" style="object-fit: cover; border-radius: 4px; border: 1px solid #ccc;" crossorigin="anonymous">
                </td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e5e5;">
                    <strong style="color: #111111 !important; font-size: 11px;">${item.marca} ${item.modelo}</strong><br>
                    <span style="font-size: 9px; color: #555555 !important;">Código: LME-${item.codigo}</span>
                </td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e5e5; text-align: center;">
                    <span style="background: ${badgeColor}; color: #ffffff; padding: 2px 8px; border-radius: 10px; font-size: 8.5px; font-weight: bold;">${item.tipo}</span>
                </td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e5e5; font-size: 9.5px; color: #333333 !important;">
                    ${item.detalleText}
                </td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e5e5; text-align: right; color: #333333 !important;">
                    $${item.precioUnitario.toLocaleString()} ${item.fianza > 0 ? '<br><span style="font-size: 8px; color: #0284c7;">(+ $500 Fianza)</span>' : ''}
                </td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e5e5; text-align: center; color: #333333 !important;">1</td>
                <td style="padding: 8px; border-bottom: 1px solid #e5e5e5; text-align: right; font-weight: bold; color: #111111 !important;">
                    $${item.subtotal.toLocaleString()}
                </td>
            </tr>
        `;
    });

    let legalFooterBlock = '';
    if (hasRentals) {
        legalFooterBlock = `
            <div style="margin-top: 15px; padding: 10px 14px; background: #fafafa !important; border: 1px solid #e5e5e5; border-radius: 6px; font-size: 9.5px; color: #333333 !important; line-height: 1.45;">
                <h5 style="margin: 0 0 6px 0; font-size: 10.5px; font-weight: bold; color: #111111 !important; text-transform: uppercase;">
                    Acuerdo de Responsabilidad y Términos de Alquiler:
                </h5>
                <p style="margin: 0 0 4px 0; color: #333333 !important;"><strong style="color: #111111 !important;">1. Custodia del Bien:</strong> El arrendatario se compromete a operar la unidad bajo las leyes de tránsito vigentes, no exceder los límites de velocidad y mantener el vehículo en óptimas condiciones mecánicas y estéticas.</p>
                <p style="margin: 0 0 4px 0; color: #333333 !important;"><strong style="color: #111111 !important;">2. Cobertura & Deducible:</strong> La unidad cuenta con póliza de seguro completa con deducible del 10% en caso de colisión comprobada. Daños por negligencia, ingesta de alcohol o sustancias ilícitas son de responsabilidad exclusiva del arrendatario.</p>
                <p style="margin: 0 0 4px 0; color: #333333 !important;"><strong style="color: #111111 !important;">3. Política de Combustible:</strong> La unidad se entrega con tanque lleno y debe ser devuelta en las mismas condiciones. De lo contrario, se aplicará el cargo estándar de reposición.</p>
            </div>

            <table style="width: 100%; margin-top: 30px; font-size: 10px; text-align: center;" cellpadding="0" cellspacing="0">
                <tr>
                    <td style="width: 45%; vertical-align: top;">
                        <div style="border-top: 1px solid #333; padding-top: 6px; margin: 0 20px;">
                            <strong style="color: #111111 !important;">LUXURY MOTORS ELITE CORP.</strong><br>
                            <span style="font-size: 9px; color: #555555 !important;">Firma Autorizada / Departamento Comercial</span>
                        </div>
                    </td>
                    <td style="width: 10%;"></td>
                    <td style="width: 45%; vertical-align: top;">
                        <div style="border-top: 1px solid #333; padding-top: 6px; margin: 0 20px;">
                            <strong style="color: #111111 !important;">${clientName}</strong><br>
                            <span style="font-size: 9px; color: #555555 !important;">Doc ID: ${clientId} (Cliente / Arrendatario)</span>
                        </div>
                    </td>
                </tr>
            </table>
        `;
    } else {
        legalFooterBlock = `
            <div style="margin-top: 20px; padding: 10px; background: #fdfdfd; border-left: 3px solid #2e7d32; font-size: 9.5px; color: #444 !important;">
                <strong style="color: #111 !important;">Garantía de Satisfacción:</strong> Unidad vendida con garantía certificada de 3 años o 60,000 km, traspaso legal garantizado y asistencia vial 24/7 de cortesía durante el primer año. Licencia de Conducir: ${clientLicense}.
            </div>
        `;
    }

    const htmlStringDefinitivo = `
        <div class="pdf-doc-root" style="background: #ffffff !important; color: #111111 !important; font-family: 'Helvetica', 'Arial', sans-serif; padding: 25px; width: 794px; box-sizing: border-box;">
            <!-- Header -->
            <div style="text-align: center; border-bottom: 2px solid #111111; padding-bottom: 12px; margin-bottom: 15px;">
                <img src="${logoBase64}" width="55" height="55" style="border-radius: 50%; object-fit: cover; margin-bottom: 6px;" crossorigin="anonymous">
                <h2 style="margin: 0; font-size: 18px; font-weight: 800; color: #111111 !important; letter-spacing: 1.5px;">LUXURY MOTORS ELITE CORP.</h2>
                <div style="font-size: 9px; color: #555555 !important; margin-top: 3px;">
                    Av. Anacaona #105, Torre Empresarial Elite, Piso 14 | Tel: +1 (809) 555-ELITE | info@luxurymotors.com
                </div>
                <div style="margin-top: 8px;">
                    <span style="background: #111111; color: #ffffff !important; font-size: 11px; font-weight: bold; padding: 4px 16px; border-radius: 4px; text-transform: uppercase;">
                        ${docTitle}
                    </span>
                </div>
            </div>

            <!-- Metadata Grid -->
            <table style="width: 100%; margin-bottom: 15px; font-size: 9.5px; background: #f8f9fa !important; border: 1px solid #e9ecef; border-radius: 6px;" cellpadding="8" cellspacing="0">
                <tr>
                    <td style="width: 50%; vertical-align: top; color: #333333 !important;">
                        <strong style="color: #111111 !important; font-size: 10px;">DATOS DEL CLIENTE:</strong><br>
                        <span style="color: #111111 !important;"><strong style="color: #111111 !important;">Nombre:</strong> ${clientName}</span><br>
                        <span style="color: #333333 !important;"><strong style="color: #111111 !important;">Identificación (Cédula):</strong> ${clientId}</span><br>
                        <span style="color: #333333 !important;"><strong style="color: #111111 !important;">Licencia:</strong> ${clientLicense}</span><br>
                        <span style="color: #333333 !important;"><strong style="color: #111111 !important;">Teléfono:</strong> ${clientPhone}</span><br>
                        <span style="color: #333333 !important;"><strong style="color: #111111 !important;">Correo:</strong> ${clientEmail}</span><br>
                        <span style="color: #333333 !important;"><strong style="color: #111111 !important;">Dirección:</strong> ${clientAddress}</span>
                    </td>
                    <td style="width: 50%; vertical-align: top; border-left: 1px solid #e9ecef; color: #333333 !important; padding-left: 12px;">
                        <strong style="color: #111111 !important; font-size: 10px;">DETALLES DE LA TRANSACCIÓN:</strong><br>
                        <span style="color: #111111 !important;"><strong style="color: #111111 !important;">No. Documento:</strong> ${docCode}</span><br>
                        <span style="color: #333333 !important;"><strong style="color: #111111 !important;">Fecha & Hora:</strong> ${currentDate}</span><br>
                        <span style="color: #333333 !important;"><strong style="color: #111111 !important;">Método de Pago:</strong> Tarjeta Crédito VIP (**** 8899)</span><br>
                        <span style="color: #2e7d32 !important;"><strong style="color: #2e7d32 !important;">Estado:</strong> Procesado & Confirmado</span><br>
                        <span style="color: #333333 !important;"><strong style="color: #111111 !important;">Agente Emisor:</strong> Sistema Automatizado JPV Pro</span>
                    </td>
                </tr>
            </table>

            <!-- Items Table -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 15px; font-size: 9.5px;" cellpadding="0" cellspacing="0">
                <thead>
                    <tr style="background: #111111 !important; color: #ffffff !important;">
                        <th style="padding: 6px; text-align: center; width: 4%; color: #ffffff !important;">#</th>
                        <th style="padding: 6px; text-align: center; width: 12%; color: #ffffff !important;">Foto</th>
                        <th style="padding: 6px; text-align: left; width: 28%; color: #ffffff !important;">Vehículo / Modelo</th>
                        <th style="padding: 6px; text-align: center; width: 11%; color: #ffffff !important;">Tipo</th>
                        <th style="padding: 6px; text-align: left; width: 21%; color: #ffffff !important;">Detalle</th>
                        <th style="padding: 6px; text-align: right; width: 10%; color: #ffffff !important;">Precio</th>
                        <th style="padding: 6px; text-align: center; width: 4%; color: #ffffff !important;">Cant.</th>
                        <th style="padding: 6px; text-align: right; width: 10%; color: #ffffff !important;">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowsHtml}
                </tbody>
            </table>

            <!-- Totals Table -->
            <table style="width: 100%; margin-bottom: 15px;" cellpadding="0" cellspacing="0">
                <tr>
                    <td style="width: 60%; vertical-align: top; font-size: 9px; color: #555555 !important; padding-right: 15px;">
                        * Este documento constituye una certificación legal y comercial de los servicios y compras pactadas con Luxury Motors Elite Corp. Todo vehículo cuenta con inspección técnica certificada de 150 puntos.
                    </td>
                    <td style="width: 40%; vertical-align: top;">
                        <table style="width: 100%; font-size: 10px;" cellpadding="4" cellspacing="0">
                            <tr>
                                <td style="color: #333333 !important;">Subtotal Bruto:</td>
                                <td style="text-align: right; color: #111111 !important; font-weight: bold;">$${subtotalSum.toLocaleString()} USD</td>
                            </tr>
                            <tr>
                                <td style="color: #333333 !important;">Impuestos & Tasas:</td>
                                <td style="text-align: right; color: #111111 !important;">$0.00 (Exento VIP)</td>
                            </tr>
                            <tr>
                                <td style="border-top: 2px solid #111111; color: #111111 !important; font-weight: 800; font-size: 11px;">TOTAL GENERAL:</td>
                                <td style="border-top: 2px solid #111111; text-align: right; color: #111111 !important; font-weight: 800; font-size: 11px;">$${subtotalSum.toLocaleString()} USD</td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>

            <!-- Legal Clauses & Signatures -->
            ${legalFooterBlock}

            <!-- Bottom Stamp -->
            <div style="margin-top: 25px; border-top: 1px dashed #ccc; padding-top: 8px; text-align: center; font-size: 8.5px; color: #888888 !important;">
                Documento generado automáticamente por el Sistema E-Commerce & Alquiler de Vehículos Premium | Arquitectura por Ing. Eykard De Los Santos
            </div>
        </div>
    `;

    const opt = {
        margin: [8, 8, 8, 8],
        filename: `${filePrefix}_${docCode}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
            scale: 2,
            scrollY: 0,
            scrollX: 0,
            useCORS: true,
            logging: false
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    setTimeout(() => {
        html2pdf().set(opt).from(htmlStringDefinitivo).save().then(() => {
            cart = [];
            updateCartBadges();
            Swal.fire({
                icon: 'success',
                title: '¡Documento PDF Generado!',
                text: `Se ha descargado exitosamente el archivo ${filePrefix}_${docCode}.pdf`,
                background: '#111622',
                color: '#fff',
                confirmButtonColor: '#00d2ff'
            });
        }).catch(err => {
            console.error(err);
            Swal.fire({
                icon: 'error',
                title: 'Error de Generación',
                text: 'Ocurrió un inconveniente al compilar el documento PDF.',
                background: '#111622',
                color: '#fff',
                confirmButtonColor: '#ff0055'
            });
        });
    }, 350);
}

// Global exposure
window.filterCatalog = filterCatalog;
window.openCartModal = openCartModal;
window.openCheckoutModal = proceedToCheckout;
window.openRentalModal = openRentalModal;
window.buyItemDirect = buyItemDirect;
window.calculateRentalTotal = calculateRentalTotal;
window.removeFromCart = removeFromCart;
window.clearCart = clearCart;
window.proceedToCheckout = proceedToCheckout;
window.loadDefaultDemoData = loadDefaultDemoData;
window.processPaymentAndGeneratePDF = processPaymentAndGeneratePDF;