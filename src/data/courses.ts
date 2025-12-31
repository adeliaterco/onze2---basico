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

export interface Banner {
  id: string;
  imageUrl: string;
  link?: string; // ← OPCIONAL: deixe vazio '' se não quiser redirecionar
  alt: string;
}

// ⬇️ BANNER - INSIRA O LINK DA IMAGEM AQUI
export const banner: Banner = {
  id: 'banner-1',
  imageUrl: 'https://i.ibb.co/bM8t6D9c/Editedimage-1767213542337.jpg', // ← Cole o link da imagem aqui
  link: 'https://pay.hotmart.com/N100236449C?off=stok9rjn', // ← Deixe vazio '' para não redirecionar, ou cole um link para tornar clicável
  alt: 'Banner Promocional'
};

export const courses: Course[] = [
  {
    id: '1',
    title: 'PRP Reconquista',
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
    title: 'RELACIÓN SALUDABLE',
    thumbnail: 'https://i.ibb.co/cKY8gznp/Editedimage-1766799871174.png',
    link: 'https://pay.hotmart.com/N100236449C?off=stok9rjn',
    locked: true,
    purchaseLink: 'https://pay.hotmart.com/N100236449C?off=stok9rjn',
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
        url: 'https://pay.hotmart.com/N100236449C?off=stok9rjn'
      }
    ]
  }
];