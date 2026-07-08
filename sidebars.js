module.exports = {
  mySidebar: [
    'Inicio/inicio',
    {
      type: 'category',
      label: 'Guía principal',
      link: {
        type: 'doc',
        id: 'Inicio/Guia principal/introduccion',
      },
      items: [
        'Inicio/Guia principal/ruta',
        'Inicio/Guia principal/kana',
        'Inicio/Guia principal/vocabulario',
        'Inicio/Guia principal/gramatica',
        'Inicio/Guia principal/inmersion',
        'Inicio/Guia principal/mining'
      ],
    },
    {
      type: 'category',
      label: 'Configuración',
      items: [
        'Inicio/configuracion/YoruReader',
        'Inicio/configuracion/Anki',
        'Inicio/configuracion/Yomitan'
      ],
    },
    {
      type: 'category',
      label: 'Otras guías',
      items: ['Inicio/Otras guias/Guia general'],
    },
  ],
};