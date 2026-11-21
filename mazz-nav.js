(function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  const isInicio = currentPage === 'index.html' || currentPage === '';
  const isInnovacion = [
    'generador-de-contrasenas.html'
  ].includes(currentPage);
  const isFinanzas = [
    'informe-de-mercado.html',
    'aprende-a-leer-earnings.html',
    'opera-bien-cedears.html',
    'calculadora-renta-fija.html',
    'test-inversor.html'
  ].includes(currentPage);
  const isAcerca = currentPage === 'acerca.html';
  const isContacto = currentPage === 'contacto.html';

  const navHTML = `
  <nav class="mazz-navbar" id="mazzNavbar">
    <div class="nav-container">
      <a href="index.html" class="nav-brand">Mazz Manager<span>©</span></a>

      <button type="button" class="nav-toggle" id="navToggle" onclick="toggleMobileNav()" aria-label="Abrir menú">
        <i class="fas fa-bars" id="navToggleIcon"></i>
      </button>

      <ul class="nav-links" id="navLinks">
        <li class="nav-item">
          <a href="index.html" class="nav-link ${isInicio ? 'active' : ''}"><i class="fas fa-house"></i> Inicio</a>
        </li>

        <!-- PILAR 1: INNOVACIÓN -->
        <li class="nav-item" id="dropdownInnovacion">
          <button type="button" class="nav-link ${isInnovacion ? 'active' : ''}" onclick="toggleDropdown('dropdownInnovacion')">
            <span><i class="fas fa-microchip"></i> Innovación</span>
            <i class="fas fa-chevron-down"></i>
          </button>
          <ul class="nav-dropdown">
            <li class="nav-dropdown-header">Posteos</li>
            <li><a href="#" class="coming-soon" onclick="return false;"><i class="fas fa-clock"></i> Nuevos recursos próximamente</a></li>
            <div class="nav-dropdown-divider"></div>
            <li class="nav-dropdown-header">Herramientas</li>
            <li>
              <a href="generador-de-contrasenas.html">
                <i class="fas fa-shield-halved"></i> Generador de Contraseñas
              </a>
            </li>
            <div class="nav-dropdown-divider"></div>
            <li class="nav-dropdown-header">Tutoriales</li>
            <li><a href="#" class="coming-soon" onclick="return false;"><i class="fas fa-clock"></i> Nuevos recursos próximamente</a></li>
          </ul>
        </li>

        <!-- PILAR 2: FINANZAS -->
        <li class="nav-item" id="dropdownFinanzas">
          <button type="button" class="nav-link ${isFinanzas ? 'active' : ''}" onclick="toggleDropdown('dropdownFinanzas')">
            <span><i class="fas fa-chart-line"></i> Finanzas</span>
            <i class="fas fa-chevron-down"></i>
          </button>
          <ul class="nav-dropdown">
            <li class="nav-dropdown-header">Mercados</li>
            <li>
              <a href="informe-de-mercado.html">
                <i class="fas fa-newspaper"></i> Informe de Mercados
              </a>
            </li>

            <div class="nav-dropdown-divider"></div>
            <li class="nav-dropdown-header">Learn (Aprender)</li>
            <li>
              <a href="aprende-a-leer-earnings.html">
                <i class="fas fa-book-open"></i> Aprende a Leer Earnings
              </a>
            </li>
            <li>
              <a href="opera-bien-cedears.html">
                <i class="fas fa-layer-group"></i> Operá Bien CEDEARs
              </a>
            </li>

            <div class="nav-dropdown-divider"></div>
            <li class="nav-dropdown-header">Herramientas & Tutoriales</li>
            <li>
              <a href="calculadora-renta-fija.html">
                <i class="fas fa-calculator"></i> Calculadora Renta Fija Pro
              </a>
            </li>
            <li>
              <a href="test-inversor.html">
                <i class="fas fa-sliders"></i> Test del Inversor
              </a>
            </li>
          </ul>
        </li>

        <!-- PILAR 3: MENTALIDAD -->
        <li class="nav-item" id="dropdownMentalidad">
          <button type="button" class="nav-link" onclick="toggleDropdown('dropdownMentalidad')">
            <span><i class="fas fa-brain"></i> Mentalidad</span>
            <i class="fas fa-chevron-down"></i>
          </button>
          <ul class="nav-dropdown">
            <li class="nav-dropdown-header">Posteos</li>
            <li>
              <a href="acerca.html#mentalidad">
                <i class="fas fa-compass"></i> Enfoque & Psicología Operativa
              </a>
            </li>
            <li><a href="#" class="coming-soon" onclick="return false;"><i class="fas fa-clock"></i> Nuevos recursos próximamente</a></li>
          </ul>
        </li>

        <li class="nav-item">
          <a href="acerca.html" class="nav-link ${isAcerca ? 'active' : ''}"><i class="fas fa-user-tie"></i> Acerca de</a>
        </li>

        <li class="nav-item">
          <a href="contacto.html" class="nav-link ${isContacto ? 'active' : ''}"><i class="fas fa-envelope"></i> Contacto</a>
        </li>
      </ul>
    </div>
  </nav>`;

  const target = document.getElementById('mazz-nav-root');
  if (target) {
    target.outerHTML = navHTML;
  } else {
    document.body.insertAdjacentHTML('afterbegin', navHTML);
  }
})();

function toggleMobileNav() {
  const navLinks = document.getElementById('navLinks');
  const icon = document.getElementById('navToggleIcon');
  navLinks.classList.toggle('mobile-open');
  icon.className = navLinks.classList.contains('mobile-open') ? 'fas fa-xmark' : 'fas fa-bars';
}

function toggleDropdown(id) {
  const target = document.getElementById(id);
  const wasOpen = target.classList.contains('open');
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('open'));
  if (!wasOpen) target.classList.add('open');
}

document.addEventListener('click', function (e) {
  const navbar = document.getElementById('mazzNavbar');
  if (navbar && !navbar.contains(e.target)) {
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('open'));
  }
});
