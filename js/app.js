// ==========================================================================
// MODERN ART GALLERY - NAVIGATION FUNCTIONALITY
// ==========================================================================

class GalleryApp {
  constructor() {
    this.homePage = document.querySelector('.home');
    this.locationPage = document.querySelector('.location');
    this.init();
  }

  init() {
    this.bindEvents();
    this.showHomePage(); // Mostrar página de inicio por defecto
  }

  bindEvents() {
    // Event listeners para navegación
    document.addEventListener('click', (e) => {
      // Botón "Our Location"
      if (e.target.closest('a[href="#location"]')) {
        e.preventDefault();
        this.showLocationPage();
      }

      // Botón "Back to Home"
      if (e.target.closest('a[href="#home"]')) {
        e.preventDefault();
        this.showHomePage();
      }
    });

    // Navegación con teclado (accesibilidad)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.showHomePage();
      }
    });
  }

  showHomePage() {
    if (this.homePage && this.locationPage) {
      this.homePage.style.display = 'block';
      this.locationPage.style.display = 'none';
      
      // Actualizar título de página
      document.title = 'Modern Art Gallery - Galería de Arte Moderno';
      
      // Scroll al top
      window.scrollTo(0, 0);
      
      // Focus management para accesibilidad
      this.homePage.focus();
    }
  }

  showLocationPage() {
    if (this.homePage && this.locationPage) {
      this.homePage.style.display = 'none';
      this.locationPage.style.display = 'block';
      
      // Actualizar título de página
      document.title = 'Our Location - Modern Art Gallery';
      
      // Scroll al top
      window.scrollTo(0, 0);
      
      // Focus management para accesibilidad
      this.locationPage.focus();
    }
  }
}

// ==========================================================================
// SMOOTH SCROLL ENHANCEMENT
// ==========================================================================

class SmoothScroll {
  constructor() {
    this.init();
  }

  init() {
    // Añadir smooth scroll a todos los enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const targetId = anchor.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

// ==========================================================================
// ACCESSIBILITY ENHANCEMENTS
// ==========================================================================

class AccessibilityEnhancements {
  constructor() {
    this.init();
  }

  init() {
    this.addFocusManagement();
    this.addKeyboardNavigation();
    this.addAriaLabels();
  }

  addFocusManagement() {
    // Mejorar el manejo del focus para botones
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('focus', (e) => {
        e.target.classList.add('btn--focused');
      });
      
      btn.addEventListener('blur', (e) => {
        e.target.classList.remove('btn--focused');
      });
    });
  }

  addKeyboardNavigation() {
    // Navegación con Enter y Space para botones
    document.querySelectorAll('.btn').forEach(btn => {
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          btn.click();
        }
      });
    });
  }

  addAriaLabels() {
    // Añadir aria-labels dinámicamente si no existen
    document.querySelectorAll('img').forEach(img => {
      if (!img.alt && !img.getAttribute('aria-label')) {
        img.setAttribute('aria-label', 'Imagen de la galería');
      }
    });
  }
}

// ==========================================================================
// PERFORMANCE OPTIMIZATIONS
// ==========================================================================

class PerformanceOptimizations {
  constructor() {
    this.init();
  }

  init() {
    this.lazyLoadImages();
    this.preloadCriticalResources();
  }

  lazyLoadImages() {
    // Implementar lazy loading para imágenes no críticas
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  }

  preloadCriticalResources() {
    // Precargar imágenes críticas
    const criticalImages = [
      './img/mobile/image-hero@2x.jpg',
      './img/tablet/image-hero@2x.jpg',
      './img/desktop/image-hero@2x.jpg'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }
}

// ==========================================================================
// INITIALIZE APPLICATION
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Inicializar todas las funcionalidades
  new GalleryApp();
  new SmoothScroll();
  new AccessibilityEnhancements();
  new PerformanceOptimizations();
  
  // Log para desarrollo
  console.log('🎨 Modern Art Gallery - Application initialized');
});