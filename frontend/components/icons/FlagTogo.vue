<template>
  <!-- Drapeau du Togo officiel SVG (5 bandes horizontales Vert / Jaune / Vert / Jaune / Vert + canton rouge avec étoile blanche) -->
  <svg
    viewBox="0 0 500 300"
    xmlns="http://www.w3.org/2000/svg"
    class="inline-block shrink-0 rounded-xs shadow-xs overflow-hidden"
    aria-label="Drapeau Togo"
  >
    <!-- 5 bandes (hauteur 60px chacune) -->
    <rect width="500" height="60" fill="#006A4E" />
    <rect y="60" width="500" height="60" fill="#FFCE00" />
    <rect y="120" width="500" height="60" fill="#006A4E" />
    <rect y="180" width="500" height="60" fill="#FFCE00" />
    <rect y="240" width="500" height="60" fill="#006A4E" />
    <!-- Canton rouge carré 180x180 (3 bandes de haut) -->
    <rect width="180" height="180" fill="#D21034" />
    <!-- Étoile blanche 5 branches au centre du canton (90, 90) -->
    <polygon
      fill="#FFFFFF"
      points="90,38 105,80 150,80 114,106 128,148 90,122 52,148 66,106 30,80 75,80"
    />
  </svg>
</template>
