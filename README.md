# 🐻 Haba - Landing Page

Página web profesional para descargar Haba, una aplicación de control de gastos inteligente, diseñada con filosofía Bauhaus.

## 📋 Características

- ✨ **Diseño Premium**: Estética Bauhaus minimalista con geometría limpia
- 🎨 **Paleta Moderna**: Colores vibrantes pero suaves (índigo, mint, rosa, amarillo mostaza)
- 🐻 **Mascota Integrada**: Oso Haba ilustrado con anteojos celestes y calculadora
- 📱 **Responsive**: Funciona perfectamente en desktop, tablet y móvil
- ⚡ **Animaciones Sutiles**: Transiciones smooth y efectos parallax
- 🎯 **Optimizado**: Landing page rápida y eficiente
- ♿ **Accesible**: Buenas prácticas de a11y y contraste

## 🛠️ Estructura de Archivos

```
Haba-page/
├── index.html          # HTML semántico
├── styles.css          # Diseño responsivo con variables CSS
├── script.js           # JavaScript funcional (sin dependencias)
└── README.md           # Este archivo
```

## 🚀 Uso Local

1. **Clonar o descargar** este repositorio
2. **Abrir `index.html`** en un navegador (o usar un servidor local)

```bash
# Opción 1: Servidor Python
python3 -m http.server 8000

# Opción 2: Servidor Node.js
npx http-server

# Luego visita: http://localhost:8000
```

## 📦 Desplegar en GitHub Pages

### Opción 1: Direct Upload (Sin Git)
1. Crea un **nuevo repositorio público** en GitHub llamado `{usuario}.github.io`
2. Sube los archivos (`index.html`, `styles.css`, `script.js`)
3. La página estará disponible en: `https://{usuario}.github.io`

### Opción 2: Con Git (Recomendado)

```bash
# Inicializar repositorio
git init
git add .
git commit -m "Inicial: Haba Landing Page"

# Añadir remoto
git remote add origin https://github.com/{usuario}/{usuario}.github.io.git

# Publicar
git branch -M main
git push -u origin main
```

**La página estará live en 1-2 minutos en:** `https://{usuario}.github.io`

### Opción 3: GitHub Pages en Rama Específica
Si deseas usar una rama específica o subdirectorio:

1. Ve a **Settings → Pages**
2. Selecciona la rama y carpeta
3. GitHub publicará automáticamente

## 🎨 Personalización

### Cambiar Colores
Edita las **variables CSS** en `styles.css`:

```css
:root {
    --color-primary: #5C5AE8;        /* Azul-violeta principal */
    --color-accent-pink: #E535AB;    /* Rosa */
    --color-accent-yellow: #F5A623;  /* Mostaza */
    --color-accent-mint: #06B6D4;    /* Celeste */
    --color-accent-green: #10B981;   /* Verde menta */
    --color-accent-purple: #8B5CF6;  /* Lila */
}
```

### Cambiar Link de Descarga
En `script.js`, busca `showDownloadNotification()`:

```javascript
setTimeout(() => {
    console.log(`Iniciando descarga para ${platform}`);
    window.location.href = 'https://tu-enlace-descarga.com/app.exe';
}, 500);
```

### Modificar Contenido
- **Títulos y textos**: Edita directamente en `index.html`
- **Mascota**: Modifica el SVG en la sección Hero
- **Características**: Añade/elimina tarjetas en la sección Features

## 🔧 Funcionalidades JavaScript

- ✅ Navbar sticky con efecto scroll
- ✅ Smooth scroll para enlaces internos
- ✅ Animaciones al scroll (Intersection Observer)
- ✅ Contador animado de descargas
- ✅ Notificaciones visuales
- ✅ Parallax subtil
- ✅ Soporte para tema oscuro (opcional)

## 📊 Performance

- **Tamaño total**: ~50KB (sin comprimir)
- **Cero dependencias**: HTML, CSS y JS puro
- **Lighthouse**: Ideal para scores altos
- **SEO**: Semántica HTML5 completa

## 🌐 Compatibilidad

- ✅ Chrome/Chromium (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Edge (v90+)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Checklist antes de publicar

- [ ] Actualizar link de descarga real en `script.js`
- [ ] Cambiar redes sociales/enlaces en footer
- [ ] Verificar que todos los links funcionan
- [ ] Probar en móvil y tablet
- [ ] Verificar accesibilidad (colores, contraste)
- [ ] Añadir favicon personalizado
- [ ] Configurar analytics (Google Analytics, etc.)
- [ ] Probar descarga en navegador

## 📝 Meta Tags Recomendados

Considera añadir en `<head>`:

```html
<meta name="theme-color" content="#5C5AE8">
<meta name="description" content="Descarga Haba - Control inteligente de gastos">
<meta property="og:title" content="Haba - Control de Gastos">
<meta property="og:image" content="https://tu-imagen.jpg">
<link rel="icon" type="image/svg+xml" href="data:...">
```

## 🐛 Troubleshooting

**Q: La página no se ve correctamente en GitHub Pages**
- A: Asegúrate de que el repositorio sea público y que `index.html` esté en la raíz

**Q: Los estilos no cargan**
- A: Verifica que `styles.css` esté en la misma carpeta que `index.html`

**Q: Las animaciones van lentas**
- A: Reduce las duraciones en `script.js` o desactiva parallax en móviles

## 📄 Licencia

Este proyecto es parte de Haba. Libre de usar y modificar.

---

**Hecho con ❤️ siguiendo principios Bauhaus: Forma sigue a la función.**
