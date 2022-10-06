export default {
  global: {
    componenteFormativo: 'Costos de producción y análisis financiero',
    descripcionCurso:
      'Determinar el costo de los bienes producidos en la empresa es el punto de partida para determinar el valor de venta de estos. Teniendo claridad de los sistemas de medición aplicables a nómina, inventarios y otros costos de fabricación es posible estimar la verdadera rentabilidad del negocio y tomar las medidas más apropiadas para una correcta administración.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Nómina',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tipos de contrato',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Normatividad ambiental ',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Costos de producción ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Elementos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Clasificación',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Metodología',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Cálculo',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Inventarios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Sistemas',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Aplicación',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Análisis financiero',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Evaluación',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Indicadores',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Planes de mejora',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Decreto 2663 de 1950. [Código Sustantivo del Trabajo]. Esta edición se trabajó sobre la publicación de la Edición Oficial del Código Sustantivo del Trabajo, con sus modificaciones, ordenada por el artículo 46 del Decreto Ley 3743 de 1950, la cual fue publicada en el Diario Oficial No 27.622 del 7 de junio de 1951, compilando los Decretos 2663 y 3743 de 1950 y 905 de 1951. Junio 7 de 1950.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=33104#:~:text=Nadie%20puede%20impedir%20el%20trabajo,se%20prevean%20en%20la%20ley',
    },
    {
      referencia:
        'Ley 21 de 1982. Por la cual se modifica el régimen del Subsidio Familiar y se dictan otras disposiciones. Febrero 5 de 1982. DO No. 35.939.  ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=4827',
    },
    {
      referencia:
        'Ley 52 de 1975. Por la cual se reconocen los intereses anuales a las cesantías de los trabajadores particulares. Diciembre 18 de 1975. DO No. 34.475 ',
      link:
        'https://www.alcaldiabogota.gov.co/sisjur/normas/Norma1.jsp?i=87488 ',
    },
    {
      referencia:
        'Ley 27 de 1974. Por la cual se dictan normas sobre la creación y sostenimiento de Centros de atención integral de Preescolar, para los hijos de empleados y trabajadores de los sectores públicos y privados. Diciembre 20 de 1974. ',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=10580#:~:text=Se%20dictan%20normas%20sobre%20la,1%20a%204',
    },
    {
      referencia:
        'Ministerio del Trabajo. (2019). Cotización a la seguridad social – aportes. Ministerio del Trabajo.',
      link:
        'https://www.mintrabajo.gov.co/empleo-y-pensiones/empleo/subdireccion-de-formalizacion-y-proteccion-del-empleo/formalizacion-laboral/cotizacion-a-la-seguridad-social-aportes',
    },
  ],
  glosario: [
    {
      termino: 'Capital de trabajo',
      significado:
        'Recursos líquidos disponibles para mantener la operación (efectivo, cuentas por cobrar a corto plazo, inventarios de alta rotación, etc.).',
    },
    {
      termino: 'Contratante',
      significado:
        'Quien solicita al contratista que desarrolle una actividad. ',
    },
    {
      termino: 'Contratista',
      significado: 'Quien desarrolla la actividad para la cual es solicitado.',
    },
    {
      termino: 'Tasa de retorno',
      significado: 'Rentabilidad que ofrece una inversión.',
    },
  ],
  complementario: [
    {
      tema: 'Costos de producción ',
      referencia:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021).  Sistema de costeo [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=E7yMcPXQ7Ps',
    },
    {
      tema: 'Costos de producción ',
      referencia:
        'Mora, J. (2020). Liquidación nómina Colombia. [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=oeN-ZytHwx4',
    },
    {
      tema: 'Indicadores ',
      referencia:
        'Instituto Nacional de Contadores Públicos de Colombia. (2012). INCP. Principales indicadores financieros y de gestión. ',
      tipo: 'Página web',
      link: 'https://incp.org.co/Site/2012/agenda/7-if.pdf',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Avilán Lozano',
        cargo: 'Experto temático',
        centro: 'Centro Agropecuario la Granja - Regional Tolima',
      },
      {
        nombre: 'Ana Vela Rodríguez Velásquez ',
        cargo: 'Diseño instruccional',
        cenro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Asesor metodológico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edgar Mauricio Cortés García',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Melina Tatiana Quintero Rodriguez',
        cargo: 'Validación Contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'John Jairo Arciniegas González',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Jhon Fredy Rodriguez Castiblanco',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
