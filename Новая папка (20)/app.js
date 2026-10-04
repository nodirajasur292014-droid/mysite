(() => {
    const themeKey = 'cineMarketTheme';
    const root = document.documentElement;
    root.dataset.theme = localStorage.getItem(themeKey) === 'light' ? 'light' : 'dark';

    const header = document.querySelector('.header');
    if (!header) return;

    const themeButton = document.createElement('button');
    const themeIcon = document.createElement('span');
    themeButton.type = 'button';
    themeButton.className = 'theme-toggle';
    themeButton.append(themeIcon);
    themeIcon.setAttribute('aria-hidden', 'true');

    const updateThemeButton = () => {
        const isLight = root.dataset.theme === 'light';
        themeIcon.textContent = isLight ? '\u263e' : '\u2600';
        themeButton.title = isLight ? 'Включить темную тему' : 'Включить светлую тему';
        themeButton.setAttribute('aria-label', themeButton.title);
    };

    themeButton.addEventListener('click', () => {
        root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
        localStorage.setItem(themeKey, root.dataset.theme);
        updateThemeButton();
    });

    (header.querySelector('.header-actions') || header).append(themeButton);
    updateThemeButton();
})();

const moviesData = [
    { id: 1, title: "Интерстеллар", genre: "scifi", price: "Подписка", rating: 8.7, reviews: 1240, img: "./images/OIP.webp" },
    { id: 2, title: "Безумный Макс: Дорога ярости", genre: "action", price: "Подписка", rating: 8.1, reviews: 986, img: "./images/OIP (1).webp" },
    { id: 3, title: "Дюна: Часть вторая", genre: "scifi", price: "Подписка", rating: 8.8, reviews: 1532, img: "./images/OIP (2).webp" },
    { id: 4, title: "Миссия невыполнима", genre: "action", price: "Подписка", rating: 7.9, reviews: 624, img: "./images/OIP (3).webp" },
    { id: 5, title: "Оппенгеймер", genre: "drama", price: "Подписка", rating: 8.6, reviews: 1187, img: "./images/OIP (4).webp" },
    { id: 6, title: "Kingsman: Начало", genre: "scifi", price: "Подписка", rating: 8.8, reviews: 1724, img: "./images/OIP (11).webp" },
    { id: 7, title: "Джон Уик 4", genre: "action", price: "Подписка", rating: 7.7, reviews: 803, img: "./images/OIP (6).webp" },
    { id: 8, title: "Побег из Шоушенка", genre: "drama", price: "Подписка", rating: 9.1, reviews: 2310, img: "./images/101209.jpg" },
    { id: 9, title: "Гладиатор II", genre: "action", price: "Премьера", rating: 7.4, reviews: 318, img: "./images/poster128831_3.webp" },
    { id: 10, title: "Аватар: Путь воды", genre: "scifi", price: "Подписка", rating: 7.8, reviews: 905, img: "./images/fcd68d_FiGo-IWaMAYix1V.jpg" },
    { id: 11, title: "Тёмный рыцарь", genre: "action", price: "Подписка", rating: 8.0, reviews: 2145, img: "./images/black.jpg" },
    { id: 12, title: "Мстители: Финал", genre: "action", price: "Премьера", rating: 9.9, reviews: 1898, img: "./images/Avengers.jpg" },
    { id: 13, title: "Зеленая миля", genre: "drama", price: "Подписка", rating: 8.9, reviews: 1642, img: "./images/1920x.webp" },
    { id: 14, title: "Марсианин", genre: "scifi", price: "Подписка", rating: 8.2, reviews: 1096, img: "./images/OIP (7).webp" },
    { id: 15, title: "Дэдпул и Росомаха", genre: "action", price: "Подписка", rating: 8.8, reviews: 1984, img: "./images/original_54070227.jpg" }
];

const shopData = [
    { id: 101, title: "Футболка 'Cyberpunk'", price: 79999.990, img: "./images/OIP (8).webp" },
    { id: 102, title: "Коллекционная фигурка", price: 289999.990, img: "./images/OIP (9).webp" },
    { id: 103, title: "VR-гарнитура Cinema", price: 3999999.990, img: "./images/OIP (10).webp" },
    { id: 104, title: "Термокружка с логотипом", price: 19999.990, img: "./images/1be254e8-c55c-4d75-83b8-4427003aa998.jpg" }
];

let searchQuery = '';

function renderMovies(filter = 'all') {
    const grid = document.getElementById('moviesGrid');
    if (!grid) return;
    grid.innerHTML = '';
    
    const filtered = moviesData.filter(movie => {
        const matchesGenre = filter === 'all' || movie.genre === filter;
        const matchesSearch = movie.title.toLocaleLowerCase('ru').includes(searchQuery);
        return matchesGenre && matchesSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '<p class="search-empty">Фильмы не найдены</p>';
        return;
    }
    
    filtered.forEach(movie => {
        let clickAction = "alert('Запуск воспроизведения: " + movie.title + "')";
        if (movie.id === 12) {
            clickAction = "window.location.href='watch.html'";
        } else if (movie.id === 9) {
            clickAction = "window.location.href='watch-gladiator.html'";
        } else if (movie.id === 10) {
            clickAction = "window.location.href='avatar.html'";
        }
        else if (movie.id === 7) {
            clickAction = "window.location.href='Dzhon-uik.html'";
        }
        else if (movie.id === 8) {
            clickAction = "window.location.href='pobeg-iz-shoyshenka.html'";
        }
        else if (movie.id === 5) {
            clickAction = "window.location.href='oppenhaimer.html'";
        }
        else if (movie.id === 11) {
            clickAction = "window.location.href='batman.html'";
        }
        else if (movie.id === 13) {
            clickAction = "window.location.href='the-green-mile.html'";
        }
        else if (movie.id === 14) {
            clickAction = "window.location.href='marsianin.html'";
        }

        else if (movie.id === 1) {  
            clickAction = "window.location.href='interstellar.html'";
        }
        else if (movie.id === 2) {
            clickAction = "window.location.href='mad-max.html'";
         }
           else if (movie.id === 4) {
            clickAction = "window.location.href='mission.html'";
        }

        else if (movie.id === 3) {
            clickAction = "window.location.href='dune.html'";
        }
        else if (movie.id === 6) {
            clickAction = "window.location.href='kingsman.html'";
        }
        else if (movie.id === 15) {
            clickAction = "window.location.href='deadpool.html'";   
        }
        grid.innerHTML += `
            <div class="movie-card">
                <img src="${movie.img}" alt="${movie.title}" class="card-img">
                <div class="card-info">
                    <h3>${movie.title}</h3>
                    <div class="movie-rating" aria-label="Рейтинг ${movie.rating} из 10">
                        <span class="rating-stars" aria-hidden="true">★</span>
                        <strong>${movie.rating}</strong>
                        <span class="review-count">(${movie.reviews} отзывов)</span>
                    </div>
                    <p>${movie.price}</p>
                    <button class="btn primary-btn" style="width: 100%; justify-content: center; font-size: 13px;" onclick="${clickAction}">
                        <i class="fa-solid fa-play"></i> Смотреть
                    </button>
                </div>
            </div>
        `;
    });
}

function renderShop() {
    const grid = document.getElementById('shopGrid');
    if (!grid) return;
    grid.innerHTML = '';
    const filtered = shopData.filter(item => item.title.toLocaleLowerCase('ru').includes(searchQuery));
    if (filtered.length === 0) {
        grid.innerHTML = '<p class="search-empty">Товары не найдены</p>';
        return;
    }
    filtered.forEach(item => {
        grid.innerHTML += `
            <div class="shop-card">
                <img src="${item.img}" alt="${item.title}" class="card-img">
                <div class="card-info">
                    <h3>${item.title}</h3>
                    <div class="card-footer">
                        <span class="price">${item.price} сум</span>
                        <button class="btn primary-btn" onclick="addToCart(${item.id})">
                            <i class="fa-solid fa-cart-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}

function addToCart(id) {
    const item = shopData.find(i => i.id === id);
    let cart = JSON.parse(localStorage.getItem('cineMarketCart')) || [];
    cart.push(item);
    localStorage.setItem('cineMarketCart', JSON.stringify(cart));
    updateCartBadge();
    alert(`Товар "${item.title}" добавлен в корзину!`);
}

function updateCartBadge() {
    const countElem = document.getElementById('cartCount');
    if (!countElem) return;
    let cart = JSON.parse(localStorage.getItem('cineMarketCart')) || [];
    countElem.innerText = cart.length;
}

const balanceStorageKey = 'cineMarketBalance';

function getBalance() {
    const balance = Number(localStorage.getItem(balanceStorageKey));
    return Number.isFinite(balance) && balance >= 0 ? Math.round(balance) : 0;
}

function formatBalance(balance) {
    return `${balance.toLocaleString('ru-RU', { maximumFractionDigits: 0 })} сум`;
}

function updateBalanceDisplays() {
    const formattedBalance = formatBalance(getBalance());
    document.querySelectorAll('#mobileBalance, #desktopBalanceAmount, #profileBalance').forEach(element => {
        element.textContent = formattedBalance;
    });
}

window.addEventListener('pageshow', updateBalanceDisplays);
window.addEventListener('storage', event => {
    if (event.key === balanceStorageKey) updateBalanceDisplays();
});

function topUpBalance(amount) {
    const value = Math.round(Number(amount));
    if (!Number.isFinite(value) || value <= 0) return false;
    localStorage.setItem(balanceStorageKey, String(getBalance() + value));
    updateBalanceDisplays();
    return true;
}

function chargeBalance(amount) {
    const value = Math.round(Number(amount));
    const balance = getBalance();
    if (!Number.isFinite(value) || value <= 0) return false;
    if (balance < value) {
        alert('Недостаточно денег. Пополните баланс и попробуйте снова.');
        return false;
    }
    localStorage.setItem(balanceStorageKey, String(balance - value));
    updateBalanceDisplays();
    return true;
}

const desktopBalanceButton = document.getElementById('desktopBalance');
if (desktopBalanceButton) {
    desktopBalanceButton.addEventListener('click', () => {
        const amount = prompt('Введите сумму пополнения в сумах:');
        if (amount !== null && !topUpBalance(amount)) {
            alert('Введите сумму больше нуля.');
        }
    });
}

const topUpForm = document.getElementById('topUpForm');
if (topUpForm) {
    topUpForm.addEventListener('submit', event => {
        event.preventDefault();
        const amountInput = document.getElementById('topUpAmount');
        const message = document.getElementById('topUpMessage');
        if (topUpBalance(amountInput.value)) {
            message.textContent = 'Баланс успешно пополнен.';
            amountInput.value = '';
        } else {
            message.textContent = 'Введите сумму больше нуля.';
        }
    });
}

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        document.querySelector('.header')?.classList.remove('search-open');
    });
}

const openCartBtn = document.getElementById('openCart');
if (openCartBtn) {
    openCartBtn.addEventListener('click', () => {
        window.location.href = 'cart.html';
    });
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        renderMovies(e.target.getAttribute('data-filter'));
    });
});

const siteSearch = document.getElementById('siteSearch');
const siteSearchInput = document.getElementById('siteSearchInput');
const searchSubmit = document.getElementById('searchSubmit');
const siteHeader = document.querySelector('.header');

function updateCatalogSearch() {
    searchQuery = siteSearchInput.value.trim().toLocaleLowerCase('ru');
    const activeFilter = document.querySelector('.filter-btn.active')?.getAttribute('data-filter') || 'all';
    renderMovies(activeFilter);
    renderShop();
}

if (siteSearch && siteSearchInput && searchSubmit) {
    siteSearchInput.addEventListener('input', updateCatalogSearch);

    siteSearch.addEventListener('submit', event => {
        event.preventDefault();
        updateCatalogSearch();
        siteHeader.classList.remove('search-open');
        searchSubmit.setAttribute('aria-expanded', 'false');

        const movieMatches = moviesData.some(movie => movie.title.toLocaleLowerCase('ru').includes(searchQuery));
        const resultSection = movieMatches ? document.getElementById('movies') : document.getElementById('shop');
        resultSection?.scrollIntoView({ behavior: 'smooth' });
        siteSearchInput.blur();
    });

    searchSubmit.addEventListener('click', event => {
        if (window.matchMedia('(max-width: 600px)').matches && !siteHeader.classList.contains('search-open')) {
            event.preventDefault();
            navMenu?.classList.remove('active');
            siteHeader.classList.add('search-open');
            searchSubmit.setAttribute('aria-expanded', 'true');
            siteSearchInput.focus();
        }
    });

    siteSearchInput.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
            siteHeader.classList.remove('search-open');
            searchSubmit.setAttribute('aria-expanded', 'false');
            siteSearchInput.blur();
        }
    });
}

window.addEventListener('DOMContentLoaded', () => {
    renderMovies();
    renderShop();
    updateCartBadge();
});

if (!document.getElementById('authModal') && document.getElementById('actionBtn')) {
    document.body.insertAdjacentHTML('beforeend', `
        <div class="auth-modal" id="authModal" aria-hidden="true">
            <div class="auth-dialog" role="dialog" aria-modal="true" aria-labelledby="authTitle">
                <button class="auth-close" id="closeAuth" type="button" aria-label="Закрыть">&times;</button>
                <h2 id="authTitle">Вход в аккаунт</h2>
                <div class="auth-tabs">
                    <button class="auth-tab active" id="loginTab" type="button">Войти</button>
                    <button class="auth-tab" id="registerTab" type="button">Регистрация</button>
                </div>
                <form id="loginForm">
                    <div id="registerFields" hidden>
                        <label for="registerNickname">Никнейм</label>
                        <input id="registerNickname" type="text" autocomplete="nickname">
                        <label for="registerPhone">Номер телефона</label>
                        <input id="registerPhone" type="tel" autocomplete="tel" placeholder="+998 90 123 45 67">
                    </div>
                    <label for="loginEmail">Email</label>
                    <input id="loginEmail" type="email" placeholder="you@example.com" required>
                    <label for="loginPassword">Пароль</label>
                    <input id="loginPassword" type="password" minlength="4" required>
                    <p class="auth-error" id="authError" role="alert"></p>
                    <button class="btn primary-btn auth-submit" type="submit" id="authSubmit">Войти</button>
                </form>
            </div>
        </div>
    `);
}

const openLoginBtn = document.getElementById('openLogin');
const mobileProfileBtn = document.getElementById('mobileProfile');
const authModal = document.getElementById('authModal');
const closeAuthBtn = document.getElementById('closeAuth');
const loginForm = document.getElementById('loginForm');
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');
const authTitle = document.getElementById('authTitle');
const authSubmit = document.getElementById('authSubmit');
const authError = document.getElementById('authError');
const registerFields = document.getElementById('registerFields');
const registerNickname = document.getElementById('registerNickname');
const registerPhone = document.getElementById('registerPhone');
let authMode = 'login';

// Функция обновления состояния кнопки в шапке
function updateHeaderAuthButton() {
    const savedUser = localStorage.getItem('cineMarketUser');
    document.querySelectorAll('.desktop-balance, .mobile-balance').forEach(balance => {
        balance.style.display = savedUser ? '' : 'none';
    });
    const profileButtons = [openLoginBtn, mobileProfileBtn].filter(Boolean);
    if (profileButtons.length === 0) return;

    if (savedUser) {
        profileButtons.forEach(button => {
            button.innerText = 'Профиль';
            button.onclick = () => {
                navMenu?.classList.remove('active');
                window.location.href = 'profile.html';
            };
        });
    } else {
        profileButtons.forEach(button => {
            button.innerText = 'Войти';
            button.onclick = () => {
                navMenu?.classList.remove('active');
                if (authModal) {
                    authModal.classList.add('active');
                    authModal.setAttribute('aria-hidden', 'false');
                }
            };
        });
    }
}

if (closeAuthBtn && authModal) {
    closeAuthBtn.addEventListener('click', () => {
        authModal.classList.remove('active');
        authModal.setAttribute('aria-hidden', 'true');
    });
}

// Закрытие модального окна по клику вне его области
window.addEventListener('click', (e) => {
    if (e.target === authModal) {
        authModal.classList.remove('active');
        authModal.setAttribute('aria-hidden', 'true');
    }
});

function setAuthMode(mode) {
    authMode = mode;
    const isLogin = mode === 'login';
    authTitle.innerText = isLogin ? 'Вход в аккаунт' : 'Регистрация';
    authSubmit.innerText = isLogin ? 'Войти' : 'Зарегистрироваться';
    loginTab.classList.toggle('active', isLogin);
    registerTab.classList.toggle('active', !isLogin);
    registerFields.hidden = isLogin;
    registerNickname.required = !isLogin;
    registerPhone.required = !isLogin;
    authError.innerText = '';
}

if (loginTab && registerTab) {
    loginTab.addEventListener('click', () => setAuthMode('login'));
    registerTab.addEventListener('click', () => setAuthMode('register'));
}

// Обработка отправки формы входа
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim().toLowerCase();
        const password = document.getElementById('loginPassword').value;
        const savedAccount = JSON.parse(localStorage.getItem('cineMarketAccount'));

        if (authMode === 'register') {
            const nickname = registerNickname.value.trim();
            const phone = registerPhone.value.trim();
            localStorage.setItem('cineMarketAccount', JSON.stringify({ email, password, nickname, phone }));
            localStorage.setItem(balanceStorageKey, '0');
            updateBalanceDisplays();
        } else if (!savedAccount || String(savedAccount.email).trim().toLowerCase() !== email || savedAccount.password !== password) {
            authError.innerText = 'Неверный email или пароль.';
            return;
        }
        
        // Сохраняем данные сессии
        localStorage.setItem('cineMarketUser', email);
        const movieStateKeys = [
            'avatarState', 'temnyj_rycarState', 'duneState', 'dzhonUikState',
            'interstellarState', 'madMaxState', 'marsianinState', 'missionState',
            'oppenhaimerState', 'pobegIzShoyshenkaState', 'the-green-mileState',
            'gladiatorState', 'avengersState'
        ];
        movieStateKeys.forEach(key => {
            if (localStorage.getItem(key) !== 'paid') {
                localStorage.setItem(key, 'unpaid');
            }
        });

        alert('Успешный вход в систему!');
        if (authModal) {
            authModal.classList.remove('active');
            authModal.setAttribute('aria-hidden', 'true');
        }
        
        // Обновляем вид кнопки в шапке
        updateHeaderAuthButton();
        if (document.getElementById('actionBtn')) window.location.reload();
    });
}

// Проверяем при загрузке страницы
window.addEventListener('storage', event => {
    if (event.key === 'cineMarketUser' && document.getElementById('actionBtn')) {
        window.location.reload();
    }
});

window.addEventListener('pageshow', event => {
    if (event.persisted && document.getElementById('actionBtn')) {
        window.location.reload();
    }
});

window.addEventListener('DOMContentLoaded', () => {
    updateHeaderAuthButton();
    updateBalanceDisplays();

    const authModalRequested = new URLSearchParams(window.location.search).get('auth') === 'login';
    if (authModalRequested && !localStorage.getItem('cineMarketUser') && authModal) {
        setAuthMode('login');
        authModal.classList.add('active');
        authModal.setAttribute('aria-hidden', 'false');
    }

    const movieActionButton = document.getElementById('actionBtn');
    if (movieActionButton && !localStorage.getItem('cineMarketUser')) {
        const accessScreen = document.getElementById('accessScreen');
        const accessTitle = document.getElementById('accessTitle');
        const accessDesc = document.getElementById('accessDesc');
        const movieVideo = document.getElementById('movieVideo');

        if (accessTitle) accessTitle.textContent = 'Для просмотра требуется аккаунт';
        if (accessDesc) accessDesc.textContent = 'Войдите в систему или зарегистрируйтесь, чтобы получить доступ к фильму.';
        if (accessScreen) accessScreen.style.display = 'flex';
        if (movieVideo) movieVideo.style.display = 'none';
        movieActionButton.textContent = 'Войти или зарегистрироваться';
        movieActionButton.onclick = () => {
            setAuthMode('login');
            authModal.classList.add('active');
            authModal.setAttribute('aria-hidden', 'false');
        };
    }

    // Остальные функции (рендер фильмов и магазина)
    if (typeof renderMovies === 'function') renderMovies();
    if (typeof renderShop === 'function') renderShop();
    if (typeof updateCartBadge === 'function') updateCartBadge();
});

const languageTranslations = {
    en: {
        'Главная': 'Home',
        'Карзина': 'Cart',
        'Корзина': 'Cart',
        'о компании': 'About us',
        'Войти': 'Sign in',
        'Профиль': 'Profile',
        'На главную': 'Back to home',
        'Премьера сезона': 'Season premiere',
        'Смотри блокбастеры и покупай мерч в один клик': 'Watch blockbusters and shop merchandise in one click',
        'Погрузись в мир кинематографа с подпиской нового поколения и официальными коллекционными товарами.': 'Explore cinema with a next-generation subscription and official collectibles.',
        'Смотреть кино': 'Browse movies',
        'Смотреть онлайн': 'Watch online',
        'В магазин': 'Visit shop',
        'Кинотеатр и Сериалы': 'Movies and TV Shows',
        'Все': 'All',
        'Боевики': 'Action',
        'Фантастика': 'Sci-Fi',
        'драма': 'Drama',
        'Драма': 'Drama',
        'Кино-Маркетплейс': 'Movie Marketplace',
        'Эксклюзивный мерч, одежда и гаджеты': 'Exclusive merchandise, clothing, and gadgets',
        'Тарифные планы': 'Plans',
        'Выбери свой уровень доступа к контенту': 'Choose your content access plan',
        'Стартовый': 'Starter',
        'плюс': 'Plus',
        'Премиум': 'Premium',
        'Премиум +': 'Premium +',
        'Премиум Про': 'Premium Pro',
        'Хит': 'Popular',
        'Доступ в HD качестве': 'HD streaming',
        'Доступ в Full HD качестве': 'Full HD streaming',
        'Доступ 2K качестве': '2K streaming',
        'Доступ в 4K качестве': '4K streaming',
        'Доступ в 8K качестве': '8K streaming',
        'экран одновременно': 'simultaneous screen(s)',
        'Выбрать': 'Choose plan',
        'Ваша корзина': 'Your cart',
        'Итого:': 'Total:',
        'Оформить заказ': 'Place order',
        'Вход в аккаунт': 'Sign in to your account',
        'Регистрация': 'Create account',
        'Зарегистрироваться': 'Sign up',
        'Никнейм': 'Nickname',
        'Номер телефона': 'Phone number',
        'Для просмотра требуется аккаунт': 'An account is required to watch',
        'Войдите в систему или зарегистрируйтесь, чтобы получить доступ к фильму.': 'Sign in or create an account to access this movie.',
        'Фильм доступен для покупки': 'This movie is available to purchase',
        'Доступ открыт!': 'Access granted!',
        'Нажмите на треугольник воспроизведения, чтобы запустить фильм.': 'Press play to start the movie.',
        'Войти или зарегистрироваться': 'Sign in or create an account',
        'СМОТРЕТЬ ФИЛЬМ': 'WATCH MOVIE',
        'Купить фильм': 'Buy movie',
        'Мои покупки и фильмы': 'My purchases and movies',
        'У вас пока нет купленных премиум-фильмов.': 'You have no premium movies yet.',
        'Управление аккаунтом': 'Account settings',
        'Статус подписки:': 'Subscription status:',
        'Базовый / Активен': 'Basic / Active',
        'Выйти из аккаунта': 'Sign out',
        'История просмотров': 'Watch history',
        'Вчера, 21:45': 'Yesterday, 9:45 PM',
        '3 дня назад': '3 days ago',
        'Избранные фильмы': 'Favorite movies',
        'Пользователь': 'User',
        'Гость': 'Guest',
        'Вход не выполнен': 'Not signed in',
        'Смотреть': 'Watch',
        'Ваша корзина товаров': 'Your shopping cart',
        'Ваша корзина пуста': 'Your cart is empty',
        'Добавьте товары из маркетплейса на главной странице.': 'Add items from the marketplace on the home page.',
        'Перейти в магазин': 'Go to the shop',
        'Удалить': 'Remove',
        'Итого к оплате': 'Order total',
        'Товары': 'Items',
        'Сумма:': 'Amount:',
        'Все права защищены.': 'All rights reserved.',
        'Интерстеллар': 'Interstellar',
        'Безумный Макс: Дорога ярости': 'Mad Max: Fury Road',
        'Дюна: Часть вторая': 'Dune: Part Two',
        'Kingsman: Начало': 'Kingsman: The Beginning',
        'миссия невыполнима': 'Mission: Impossible',
        'Оппенгеймер': 'Oppenheimer',
        'Джон Уик 4': 'John Wick 4',
        'Побег из Шоушенка': 'The Shawshank Redemption',
        'Гладиатор II': 'Gladiator II',
        'Аватар: Путь воды': 'Avatar: The Way of Water',
        'Тёмный рыцарь': 'The Dark Knight',
        'Мстители: Финал': 'Avengers: Endgame',
        'Зеленая миля': 'The Green Mile',
        'Зелёная миля': 'The Green Mile',
        'Марсианин': 'The Martian',
        'Дэдпул и Росомаха': 'Deadpool & Wolverine',
        'Футболка \'Cyberpunk\'': 'Cyberpunk T-shirt',
        'Коллекционная фигурка': 'Collectible figure',
        'VR-гарнитура Cinema': 'Cinema VR headset',
        'Термокружка с логотипом': 'Logo travel mug',
        'Запуск воспроизведения: ': 'Starting playback: ',
        ' добавлен в корзину!': ' added to cart!',
        'Заказ успешно оформлен! Спасибо за покупку в CineMarket.': 'Order placed successfully! Thanks for shopping at CineMarket.',
        'Успешный вход в систему!': 'Signed in successfully!',
        'Неверный email или пароль.': 'Incorrect email or password.',
        'Вы вышли из системы.': 'You have signed out.',
        'Выбран тариф ': 'Selected plan: ',
        'Базовый': 'Basic',
        'Активен': 'Active'
    },
    uz: {
        'Главная': 'Bosh sahifa',
        'Карзина': 'Savatcha',
        'Корзина': 'Savatcha',
        'о компании': 'Biz haqimizda',
        'Войти': 'Kirish',
        'Профиль': 'Profil',
        'На главную': 'Bosh sahifaga',
        'Премьера сезона': 'Mavsum premyerasi',
        'Смотри блокбастеры и покупай мерч в один клик': 'Kinolarni tomosha qiling va mahsulotlarni bir bosishda xarid qiling',
        'Погрузись в мир кинематографа с подпиской нового поколения и официальными коллекционными товарами.': 'Yangi avlod obunasi va rasmiy kolleksion mahsulotlar bilan kino olamiga sho‘ng‘ing.',
        'Смотреть кино': 'Kinolarni ko‘rish',
        'Смотреть онлайн': 'Onlayn tomosha',
        'В магазин': 'Do‘konga o‘tish',
        'Кинотеатр и Сериалы': 'Filmlar va seriallar',
        'Все': 'Barchasi',
        'Боевики': 'Jangari',
        'Фантастика': 'Fantastika',
        'драма': 'Drama',
        'Драма': 'Drama',
        'Кино-Маркетплейс': 'Kino marketpleysi',
        'Эксклюзивный мерч, одежда и гаджеты': 'Eksklyuziv mahsulotlar, kiyim va gadjetlar',
        'Тарифные планы': 'Tarif rejalari',
        'Выбери свой уровень доступа к контенту': 'Kontentdan foydalanish rejasini tanlang',
        'Стартовый': 'Boshlang‘ich',
        'плюс': 'Plus',
        'Премиум': 'Premium',
        'Премиум +': 'Premium +',
        'Премиум Про': 'Premium Pro',
        'Хит': 'Ommabop',
        'Доступ в HD качестве': 'HD sifatida tomosha qilish',
        'Доступ в Full HD качестве': 'Full HD sifatida tomosha qilish',
        'Доступ 2K качестве': '2K sifatida tomosha qilish',
        'Доступ в 4K качестве': '4K sifatida tomosha qilish',
        'Доступ в 8K качестве': '8K sifatida tomosha qilish',
        'экран одновременно': 'ta ekran bir vaqtda',
        'Выбрать': 'Tanlash',
        'Ваша корзина': 'Savatchangiz',
        'Итого:': 'Jami:',
        'Оформить заказ': 'Buyurtma berish',
        'Вход в аккаунт': 'Hisobga kirish',
        'Регистрация': 'Ro‘yxatdan o‘tish',
        'Зарегистрироваться': 'Ro‘yxatdan o‘tish',
        'Никнейм': 'Taxallus',
        'Номер телефона': 'Telefon raqami',
        'Для просмотра требуется аккаунт': 'Tomosha qilish uchun hisob kerak',
        'Войдите в систему или зарегистрируйтесь, чтобы получить доступ к фильму.': 'Filmni tomosha qilish uchun tizimga kiring yoki ro‘yxatdan o‘ting.',
        'Фильм доступен для покупки': 'Filmni xarid qilish mumkin',
        'Доступ открыт!': 'Kirishga ruxsat berildi!',
        'Нажмите на треугольник воспроизведения, чтобы запустить фильм.': 'Filmni boshlash uchun ijro tugmasini bosing.',
        'Войти или зарегистрироваться': 'Kirish yoki ro‘yxatdan o‘tish',
        'СМОТРЕТЬ ФИЛЬМ': 'FILMNI TOMOSHA QILISH',
        'Купить фильм': 'Filmni xarid qilish',
        'Мои покупки и фильмы': 'Xaridlarim va filmlarim',
        'У вас пока нет купленных премиум-фильмов.': 'Sizda hali xarid qilingan premium filmlar yo‘q.',
        'Управление аккаунтом': 'Hisobni boshqarish',
        'Статус подписки:': 'Obuna holati:',
        'Базовый / Активен': 'Asosiy / Faol',
        'Выйти из аккаунта': 'Hisobdan chiqish',
        'История просмотров': 'Ko‘rishlar tarixi',
        'Вчера, 21:45': 'Kecha, 21:45',
        '3 дня назад': '3 kun oldin',
        'Избранные фильмы': 'Sevimli filmlar',
        'Пользователь': 'Foydalanuvchi',
        'Гость': 'Mehmon',
        'Вход не выполнен': 'Tizimga kirilmagan',
        'Смотреть': 'Tomosha qilish',
        'Ваша корзина товаров': 'Xarid savatchangiz',
        'Ваша корзина пуста': 'Savatchangiz bo‘sh',
        'Добавьте товары из маркетплейса на главной странице.': 'Bosh sahifadagi marketpleysdan mahsulot qo‘shing.',
        'Перейти в магазин': 'Do‘konga o‘tish',
        'Удалить': 'O‘chirish',
        'Итого к оплате': 'To‘lov uchun jami',
        'Товары': 'Mahsulotlar',
        'Сумма:': 'Jami summa:',
        'Все права защищены.': 'Barcha huquqlar himoyalangan.',
        'Интерстеллар': 'Interstellar',
        'Безумный Макс: Дорога ярости': 'Telba Maks: G‘azab yo‘li',
        'Дюна: Часть вторая': 'Dune: Ikkinchi qism',
        'Миссия невыполнима': 'Mission: Impossible',
        'миссия невыполнима': 'Mission: Impossible',
        'Оппенгеймер': 'Oppenheimer',
        'Дэдпул и Росомаха': 'Deadpool va Wolverine',
        'Джон Уик 4': 'John Wick 4',
        'Побег из Шоушенка': 'Shoushenkdan qochish',
        'Гладиатор II': 'Gladiator II',
        'Аватар: Путь воды': 'Avatar: Suv yo‘li',
        'Темный рыцарь': 'Qora ritsar',
        'Тёмный рыцарь': 'Qora ritsar',
        'Мстители: Финал': 'Qasoskorlar: Intiho',
        'Зеленая миля': 'Yashil mil',
        'Зелёная миля': 'Yashil mil',
        'Марсианин': 'Marslik',
        
        'Футболка \'Cyberpunk\'': 'Cyberpunk futbolkasi',
        'Коллекционная фигурка': 'Kolleksion haykalcha',
        'VR-гарнитура Cinema': 'Cinema VR garniturasi',
        'Термокружка с логотипом': 'Logotipli termokrujka',
        'Запуск воспроизведения: ': 'Ijro boshlanmoqda: ',
        ' добавлен в корзину!': ' savatchaga qo‘shildi!',
        'Заказ успешно оформлен! Спасибо за покупку в CineMarket.': 'Buyurtma muvaffaqiyatli rasmiylashtirildi! CineMarket’dan xarid qilganingiz uchun rahmat.',
        'Успешный вход в систему!': 'Tizimga muvaffaqiyatli kirdingiz!',
        'Неверный email или пароль.': 'Email yoki parol noto‘g‘ri.',
        'Вы вышли из системы.': 'Hisobdan chiqdingiz.',
        'Выбран тариф ': 'Tanlangan tarif: ',
        'Базовый': 'Asosiy',
        'Активен': 'Faol'
    }
};

const languageNames = { ru: 'Русский', en: 'English', uz: 'O‘zbekcha' };
const savedLanguage = localStorage.getItem('cineMarketLanguage');
let currentLanguage = ['ru', 'en', 'uz'].includes(savedLanguage) ? savedLanguage : 'ru';
let languageObserver;
let languageUpdateQueued = false;

function normalizeLanguageText(value) {
    return value.replace(/\s+/g, ' ').trim();
}

function russianEquivalent(normalized) {
    if (Object.hasOwn(languageTranslations.en, normalized)) return normalized;

    const matchingRussian = Object.keys(languageTranslations.en).find((key) =>
        languageTranslations.en[key] === normalized || languageTranslations.uz[key] === normalized
    );
    if (matchingRussian) return matchingRussian;

    const yearMatch = normalized.match(/^(.+?)( \(\d{4}\))$/);
    if (yearMatch) {
        const russianTitle = russianEquivalent(yearMatch[1]);
        if (russianTitle) return `${russianTitle}${yearMatch[2]}`;
    }

    const pageTitleMatch = normalized.match(/^(.+) — (?:Watch online|Onlayn tomosha)$/);
    if (pageTitleMatch) {
        const russianTitle = russianEquivalent(pageTitleMatch[1]);
        if (russianTitle) return `${russianTitle} — Смотреть онлайн`;
    }

    const translatedPurchaseMatch = normalized.match(/^(?:Buy movie|Filmni xarid qilish) \((.+)\)$/);
    if (translatedPurchaseMatch) return `Купить фильм (${translatedPurchaseMatch[1]})`;

    const translatedPriceMatch = normalized.match(/^([\d.]+) (?:UZS \/ month|so‘m \/ oy)$/);
    if (translatedPriceMatch) return `${translatedPriceMatch[1]} сум / мес`;

    if (normalized === 'Subscription' || normalized === 'Obuna') return 'Подписка';
    if (normalized === 'Premiere' || normalized === 'Premyera') return 'Премьера';

    const localizedAmountMatch = normalized.match(/^([\d.]+) (?:UZS|so‘m)$/);
    if (localizedAmountMatch) return `${localizedAmountMatch[1]} сум`;

    const localizedDescriptionMatch = normalized.match(/^Purchase access to “(.+)” to start watching\.$/)
        || normalized.match(/^Tomosha qilishni boshlash uchun “(.+)” filmiga kirish huquqini xarid qiling\.$/);
    if (localizedDescriptionMatch) {
        const russianTitle = russianEquivalent(localizedDescriptionMatch[1]);
        if (russianTitle) return `Приобретите доступ к фильму «${russianTitle}», чтобы начать просмотр.`;
    }

    const translatedItemsMatch = normalized.match(/^(Items|Mahsulotlar) \((\d+)\):$/);
    if (translatedItemsMatch) return `Товары (${translatedItemsMatch[2]}):`;

    let composedRussian = normalized;
    Object.keys(languageTranslations.en).sort((left, right) => right.length - left.length).forEach((key) => {
        const localized = [languageTranslations.en[key], languageTranslations.uz[key]];
        localized.forEach((phrase) => {
            if (phrase && phrase !== key && composedRussian.includes(phrase)) {
                composedRussian = composedRussian.replaceAll(phrase, key);
            }
        });
    });
    if (composedRussian !== normalized) return composedRussian;

    return null;
}

function translatedValue(value, language) {
    const normalized = normalizeLanguageText(value);
    if (!normalized) return value;
    const russianText = russianEquivalent(normalized);
    const leadingWhitespace = value.match(/^\s*/)?.[0] || '';
    const trailingWhitespace = value.match(/\s*$/)?.[0] || '';
    const preserveWhitespace = (text) => `${leadingWhitespace}${text}${trailingWhitespace}`;
    if (!russianText) return value;

    if (language === 'ru') {
        return preserveWhitespace(russianText);
    }

    const translations = languageTranslations[language];
    let result = translations[russianText];
    const yearMatch = russianText.match(/^(.+?)( \(\d{4}\))$/);
    const pageTitleMatch = russianText.match(/^(.+) — Смотреть онлайн$/);
    if (!result && yearMatch) {
        const translatedTitle = translatedValue(yearMatch[1], language);
        if (translatedTitle !== yearMatch[1]) result = `${translatedTitle}${yearMatch[2]}`;
    }
    if (!result && pageTitleMatch) {
        const translatedTitle = translatedValue(pageTitleMatch[1], language);
        const watchOnline = language === 'en' ? 'Watch online' : 'Onlayn tomosha';
        if (translatedTitle !== pageTitleMatch[1]) result = `${translatedTitle} — ${watchOnline}`;
    }
    if (!result) {
        const purchaseMatch = normalized.match(/^Купить фильм \((.+)\)$/);
        if (purchaseMatch) {
            const label = language === 'en' ? 'Buy movie' : 'Filmni xarid qilish';
            result = `${label} (${purchaseMatch[1]})`;
        }
    }
    if (!result) {
        const descriptionMatch = normalized.match(/^Приобретите доступ к фильму «(.+)», чтобы начать просмотр\.$/);
        if (descriptionMatch) {
            const title = translatedValue(descriptionMatch[1], language);
            result = language === 'en'
                ? `Purchase access to “${title}” to start watching.`
                : `Tomosha qilishni boshlash uchun “${title}” filmiga kirish huquqini xarid qiling.`;
        }
    }
    if (!result) {
        const priceMatch = normalized.match(/^([\d.]+) сум \/ мес$/);
        if (priceMatch) result = language === 'en' ? `${priceMatch[1]} UZS / month` : `${priceMatch[1]} so‘m / oy`;
    }
    if (!result) {
        const amountMatch = normalized.match(/^([\d.]+) (?:сум|с)$/);
        if (amountMatch) result = `${amountMatch[1]} ${language === 'en' ? 'UZS' : 'so‘m'}`;
    }
    if (!result && normalized === 'Ваша корзина товаров') {
        result = language === 'en' ? 'Your shopping cart' : 'Xarid savatchangiz';
    }
    if (!result && normalized === 'Подписка') result = language === 'en' ? 'Subscription' : 'Obuna';
    if (!result && normalized === 'Премьера') result = language === 'en' ? 'Premiere' : 'Premyera';
    if (!result) {
        let composedTranslation = russianText;
        Object.keys(languageTranslations.en).sort((left, right) => right.length - left.length).forEach((key) => {
            if (translations[key] && composedTranslation.includes(key)) {
                composedTranslation = composedTranslation.replaceAll(key, translations[key]);
            }
        });
        if (composedTranslation !== russianText) result = composedTranslation;
    }
    if (!result) return value;

    return preserveWhitespace(result);
}

function translateDocument() {
    document.documentElement.lang = currentLanguage;
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let textNode;
    while ((textNode = walker.nextNode())) {
        if (textNode.parentElement.closest('script, style, .language-switcher')) continue;
        textNode.nodeValue = translatedValue(textNode.nodeValue, currentLanguage);
    }

    document.querySelectorAll('[placeholder], [title], [aria-label], img[alt]').forEach((element) => {
        ['placeholder', 'title', 'aria-label', 'alt'].forEach((attribute) => {
            if (element.hasAttribute(attribute)) {
                element.setAttribute(attribute, translatedValue(element.getAttribute(attribute), currentLanguage));
            }
        });
    });
}

function scheduleTranslation() {
    if (languageUpdateQueued) return;
    languageUpdateQueued = true;
    requestAnimationFrame(() => {
        languageUpdateQueued = false;
        translateDocument();
    });
}

function setLanguage(language) {
    currentLanguage = language;
    localStorage.setItem('cineMarketLanguage', language);
    const toggle = document.querySelector('.language-toggle');
    if (toggle) {
        toggle.textContent = `${language.toUpperCase()} ▾`;
        toggle.title = `Язык: ${languageNames[language]}`;
    }
    document.querySelectorAll('.language-options button').forEach((button) => {
        const active = button.dataset.language === language;
        button.classList.toggle('active', active);
        button.setAttribute('aria-checked', String(active));
    });
    translateDocument();
}

function addLanguageSwitcher() {
    const header = document.querySelector('.header');
    if (!header || header.querySelector('.language-switcher')) return;

    const switcher = document.createElement('div');
    switcher.className = 'language-switcher';
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'language-toggle';
    toggle.setAttribute('aria-haspopup', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', 'languageOptions');
    switcher.append(toggle);

    const options = document.createElement('div');
    options.className = 'language-options';
    options.id = 'languageOptions';
    options.setAttribute('role', 'group');
    options.setAttribute('aria-label', 'Выберите язык / Choose a language / Tilni tanlang');
    options.hidden = true;
    toggle.addEventListener('click', () => {
        options.hidden = !options.hidden;
        toggle.setAttribute('aria-expanded', String(!options.hidden));
    });

    Object.entries(languageNames).forEach(([language, label]) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'language-option';
        button.dataset.language = language;
        button.setAttribute('role', 'menuitemradio');
        button.textContent = label;
        button.title = label;
        button.addEventListener('click', () => {
            setLanguage(language);
            options.hidden = true;
            toggle.setAttribute('aria-expanded', 'false');
            toggle.focus();
        });
        options.append(button);
    });
    switcher.append(options);

    document.addEventListener('click', (event) => {
        if (!switcher.contains(event.target)) {
            options.hidden = true;
            toggle.setAttribute('aria-expanded', 'false');
        }
    });
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && !options.hidden) {
            options.hidden = true;
            toggle.setAttribute('aria-expanded', 'false');
            toggle.focus();
        }   
    });

    const headerActions = header.querySelector('.header-actions');
    if (headerActions) header.insertBefore(switcher, headerActions);
    else header.append(switcher);

    const style = document.createElement('style');
    style.textContent = `
        .language-switcher { position: relative; display: flex; flex: 0 0 auto; align-items: center; }
        .language-switcher button { padding: 8px 10px; border: 1px solid var(--border); border-radius: 5px; background: var(--card-bg); color: var(--text-muted); font: 600 12px/1 'Segoe UI', Tahoma, sans-serif; cursor: pointer; }
        .language-switcher button:hover, .language-switcher button.active { color: var(--text-main); border-color: var(--accent); background: var(--accent); }
        .language-options { position: absolute; top: calc(100% + 8px); right: 0; z-index: 1101; display: grid; gap: 4px; min-width: 132px; padding: 5px; border: 1px solid var(--border); border-radius: 6px; background: var(--card-bg); box-shadow: 0 8px 24px rgba(0, 0, 0, .35); }
        .language-options[hidden] { display: none; }
        .language-options button { width: 100%; text-align: left; }
        .language-options button.active { color: var(--text-main); border-color: var(--accent); background: var(--accent); }
        @media (max-width: 600px) { .language-switcher button { padding: 7px 8px; font-size: 11px; } }
    `;
    document.head.append(style);
}

function translateDialogMessage(message) {
    if (currentLanguage === 'ru') return message;
    let translated = translatedValue(message, currentLanguage);
    if (translated !== message) return translated;

    const playbackMatch = message.match(/^Запуск воспроизведения: (.+)$/);
    if (playbackMatch) {
        return `${translatedValue('Запуск воспроизведения: ', currentLanguage)}${translatedValue(playbackMatch[1], currentLanguage)}`;
    }
    const addedMatch = message.match(/^Товар "(.+)" добавлен в корзину!$/);
    if (addedMatch) {
        return `${currentLanguage === 'en' ? 'Item' : 'Mahsulot'} “${translatedValue(addedMatch[1], currentLanguage)}”${translatedValue(' добавлен в корзину!', currentLanguage)}`;
    }
    return message;
}

function initializeLanguageTools() {
    addLanguageSwitcher();
    setLanguage(currentLanguage);
    languageObserver = new MutationObserver(scheduleTranslation);
    languageObserver.observe(document.body, { childList: true, characterData: true, subtree: true });

    const originalAlert = window.alert.bind(window);
    const originalConfirm = window.confirm.bind(window);
    window.alert = (message) => originalAlert(translateDialogMessage(String(message)));
    window.confirm = (message) => originalConfirm(translateDialogMessage(String(message)));
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeLanguageTools, { once: true });
} else {
    initializeLanguageTools();
}