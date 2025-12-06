export interface CourseItem {
  id: string;
  title: string;
  type: 'video' | 'pdf' | 'link';
  url: string;
}

export interface Course {
  id: string;
  title: string;
  thumbnail: string;
  link: string;
  items: CourseItem[];
  locked?: boolean;
  purchaseLink?: string;
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Plan A: Reconquista en 21 Días',
    thumbnail: 'https://i.ibb.co/CK8F67my/Editedimage-1765052659367.png',
    link: 'https://semloginplan.vercel.app/',
    locked: false,
    items: [
      {
        id: '1-1',
        title: 'Módulo 1 - Diagnóstico',
        type: 'video',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        id: '1-2',
        title: 'Cronograma 21 Días',
        type: 'pdf',
        url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'
      },
      {
        id: '1-3',
        title: 'Casos de Estudio',
        type: 'link',
        url: 'https://comprarplanseguro.shop/plan-a/'
      }
    ]
  },
  {
    id: '2',
    title: '⚠️ MANUAL CONFIDENCIAL – NO COMPARTIR',
    thumbnail: 'https://static-media.hotmart.com/LgGu0m_yZoDJ-tQyFlGt1v8YWbk=/300x300/filters:quality(100)/hotmart/product_pictures/43a66fef-99aa-44b1-9365-0b5379b5327b/Generatedimage_1764121962697.png',
    link: 'https://pay.hotmart.com/L100337728M?off=uo2v2p2i&bid=1765056809051',
    locked: true,
    purchaseLink: 'https://pay.hotmart.com/L100337728M?off=uo2v2p2i&bid=1765056809051',
    items: [
      {
        id: '2-1',
        title: 'Contenido Bloqueado',
        type: 'video',
        url: ''
      },
      {
        id: '2-2',
        title: 'Contenido Bloqueado',
        type: 'pdf',
        url: ''
      },
      {
        id: '2-3',
        title: 'Comprar Acceso',
        type: 'link',
        url: 'https://pay.hotmart.com/L100337728M?off=uo2v2p2i&bid=1765056809051'
      }
    ]
  },
  {
    id: '3',
    title: '⚠️ PROTOCOLO SECRETO – NO ABRIR EN PÚBLICO',
    thumbnail: 'https://static-media.hotmart.com/3C8rKJbwWjzYkRh3olCwpeoHgSI=/300x300/filters:quality(100)/hotmart/product_pictures/88103e0b-a7a6-4e74-9a7d-826f74e9c6a1/Editedimage_1764121841751.png',
    link: 'https://pay.hotmart.com/B100918128K?off=waf5qigo&bid=1765056925329',
    locked: true,
    purchaseLink: 'https://pay.hotmart.com/B100918128K?off=waf5qigo&bid=1765056925329',
    items: [
      {
        id: '3-1',
        title: 'Contenido Bloqueado',
        type: 'video',
        url: ''
      },
      {
        id: '3-2',
        title: 'Contenido Bloqueado',
        type: 'pdf',
        url: ''
      },
      {
        id: '3-3',
        title: 'Comprar Acceso',
        type: 'link',
        url: 'https://pay.hotmart.com/B100918128K?off=waf5qigo&bid=1765056925329'
      }
    ]
  },
  {
    id: '4',
    title: 'Consultoría Personalizada - Reconexión Estratégica',
    thumbnail: 'https://static-media.hotmart.com/japd0HSlpsd3Hugape7LLQpN_5U=/300x300/filters:quality(100)/hotmart/product_pictures/c35bfce8-ccef-4953-8e0e-be7ee0560590/imagem_gerada20250611T112151941.png',
    link: 'https://pay.hotmart.com/B100254351O?off=csguaiek&bid=1765057073540',
    locked: true,
    purchaseLink: 'https://pay.hotmart.com/B100254351O?off=csguaiek&bid=1765057073540',
    items: [
      {
        id: '4-1',
        title: 'Contenido Bloqueado',
        type: 'video',
        url: ''
      },
      {
        id: '4-2',
        title: 'Contenido Bloqueado',
        type: 'pdf',
        url: ''
      },
      {
        id: '4-3',
        title: 'Comprar Acceso',
        type: 'link',
        url: 'https://pay.hotmart.com/B100254351O?off=csguaiek&bid=1765057073540'
      }
    ]
  }
];