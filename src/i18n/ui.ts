// All user-facing text for the site, in both languages.
// To change wording, edit it here — every component reads from this file.
export type Lang = 'en' | 'es';
export const languages: Record<Lang, string> = { en: 'English', es: 'Español' };
export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    meta: {
      home: {
        title: "E's Sweet Cakes — custom cakes in Faribault, Minnesota",
        description:
          'Custom cakes made to order by Esperanza Perez in Faribault, Minnesota. See past cakes, flavors, and sizes, then request a quote.',
      },
      gallery: {
        title: 'Gallery — E’s Sweet Cakes',
        description:
          'Past cakes made to order by Esperanza Perez in Faribault, Minnesota — birthdays, quinceañeras, baptisms, baby showers, and more.',
      },
    },
    skip: 'Skip to content',
    nav: { gallery: 'Gallery', flavors: 'Flavors', sizes: 'Sizes', order: 'Order', about: 'About' },
    hero: {
      title: 'Custom cakes, made to order in Faribault.',
      sub: "Esperanza Perez bakes every cake herself, in her own kitchen, one at a time. Tell her what the day is and she'll tell you what it costs.",
      cta: 'Request a quote',
      note: 'She replies within two days.',
    },
    galleryHome: {
      title: 'Gallery',
      lede: "A few cakes she's made for other people's days.",
      more: 'See all cakes',
    },
    galleryPage: {
      back: 'Back to the main page',
      title: 'Gallery',
      lede: "Every cake here was made to order in Esperanza's kitchen. Yours won't look exactly like any of them — bring a photo or an idea and she'll build from there.",
      ctaPre: 'Seen enough?',
      ctaLink: 'Request a quote',
    },
    occasions: {} as Record<string, string>,
    flavors: {
      title: 'Flavors',
      lede: "Mix and match. If you want something that isn't here, ask.",
      cakeHead: 'Cake',
      fillingHead: 'Filling',
      frostingHead: 'Frosting',
      cake: ['Vanilla', 'Strawberry', 'Chocolate', 'Mocha', 'Tres leches', 'Neapolitan', 'Carrot', 'Tiramisu'],
      filling: ['Strawberry', 'Peach', 'Pineapple', 'Coconut', 'Mango', 'Mexican caramel', 'No filling'],
      frosting: ['Chantilly', 'Cream cheese'],
      frostingNote: 'Chantilly is the standard on most cakes; cream cheese on request.',
    },
    pricing: {
      title: 'Sizes and pricing',
      caption: "Base prices for a single-layer cake. Flavors and fillings don't change the price.",
      size: 'Size',
      servings: 'Servings',
      basePrice: 'Base price',
      ask: 'Ask',
      sizes: {
        '6" round': '6" round',
        '8" round': '8" round',
        '10" round': '10" round',
        'Half sheet': 'Half sheet',
        'Full sheet': 'Full sheet',
      } as Record<string, string>,
      customNote: 'Tiers, sculpted shapes, and fondant work are quoted separately.',
      deliveryNote: 'Delivery is available for large celebration cakes — weddings and quinceañeras — at higher quotes. Everything else is pickup in Faribault.',
    },
    about: {
      title: 'About',
      body: "Esperanza Perez has been baking cakes out of her kitchen in Faribault for four years. She takes one or two orders a week, which means every cake gets her whole attention — the crumb, the fill, the finish. She'd rather turn down a date than hand you something she isn't proud to send.",
    },
    form: {
      title: 'Request a quote',
      lede: "One week's notice at least — longer if you want special decoration. Pickup in Faribault; delivery only for large celebration cakes.",
      labels: {
        name: 'Your name',
        email: 'Email',
        phone: 'Phone',
        eventDate: 'Event date',
        eventType: 'Event',
        size: 'Size',
        flavor: 'Cake flavor',
        filling: 'Filling',
        frosting: 'Frosting',
        budget: 'Budget',
        description: 'What are you picturing?',
      },
      placeholderDesc: "Colors, theme, how many people, anything you've seen that you liked.",
      choose: 'Choose one',
      eventTypes: ['Birthday', 'Wedding', 'Graduation', 'Anniversary', 'Quinceañera', 'Baby shower', 'Retirement', 'Other'],
      budgets: ['Under $75', '$75 – $150', '$150 – $300', '$300 or more', 'Not sure yet'],
      submit: 'Request a quote',
      reassure: 'Nothing is charged. This starts a conversation.',
      js: {
        sending: 'Sending your request…',
        success: {
          h3: 'Your request is in.',
          p1: "Esperanza reads every request herself. She'll email you at {email} within two days with a price and the details to work out.",
          p2: "Nothing is booked yet — your date isn't held until she writes back to confirm it.",
        },
        fail: {
          h3: "That didn't go through.",
          tmpl: "The form couldn't reach Esperanza — {reason}. Email her directly at {email} with your date and what you're after, and she'll take it from there.",
          notConnected: "it isn't connected yet",
          server: 'the order service returned an error ({status})',
          dropped: 'the connection dropped',
        },
        errors: {
          name: "Add your name so she knows who's asking.",
          emailEmpty: 'She needs an email to send the quote to.',
          emailInvalid: 'Add an @ and a domain, like name@email.com.',
          phoneEmpty: 'A phone number gives her a second way to reach you.',
          phoneShort: 'That looks short — include the area code.',
          dateEmpty: 'Pick the date of the event.',
          dateSoon: 'She needs at least a week — pick a later date.',
          eventType: 'Pick what the event is.',
          size: 'Pick a size.',
          flavor: 'Pick a cake flavor.',
          filling: 'Pick a filling.',
          frosting: 'Pick a frosting.',
          budget: 'Pick a budget so she can steer the design.',
          description: 'A sentence or two about the cake helps her quote it.',
        },
      },
    },
    footer: {
      line1: 'Pickup in Faribault, Minnesota · delivery for large orders',
      line2: 'She replies within two days.',
    },
    lang: {
      modalTitle: 'Choose your language',
      english: 'English',
      spanish: 'Español',
      switchLabel: 'Language',
    },
  },

  es: {
    meta: {
      home: {
        title: "E's Sweet Cakes — pasteles personalizados en Faribault, Minnesota",
        description:
          'Pasteles personalizados hechos por encargo por Esperanza Pérez en Faribault, Minnesota. Mira pasteles anteriores, sabores y tamaños, y pide una cotización.',
      },
      gallery: {
        title: 'Galería — E’s Sweet Cakes',
        description:
          'Pasteles hechos por encargo por Esperanza Pérez en Faribault, Minnesota — cumpleaños, quinceañeras, bautizos, baby showers y más.',
      },
    },
    skip: 'Saltar al contenido',
    nav: { gallery: 'Galería', flavors: 'Sabores', sizes: 'Tamaños', order: 'Pedido', about: 'Acerca' },
    hero: {
      title: 'Pasteles personalizados, hechos por encargo en Faribault.',
      sub: 'Esperanza Pérez hornea cada pastel ella misma, en su propia cocina, uno a la vez. Cuéntale qué se celebra y ella te dice el precio.',
      cta: 'Pedir una cotización',
      note: 'Responde en un plazo de dos días.',
    },
    galleryHome: {
      title: 'Galería',
      lede: 'Algunos pasteles que ha hecho para los días especiales de otras personas.',
      more: 'Ver todos los pasteles',
    },
    galleryPage: {
      back: 'Volver a la página principal',
      title: 'Galería',
      lede: 'Cada pastel aquí fue hecho por encargo en la cocina de Esperanza. El tuyo no será idéntico a ninguno — trae una foto o una idea y ella parte de ahí.',
      ctaPre: '¿Ya lo viste?',
      ctaLink: 'Pide una cotización',
    },
    occasions: {
      Birthday: 'Cumpleaños',
      'First birthday': 'Primer cumpleaños',
      'Baby shower': 'Baby shower',
      Baptism: 'Bautizo',
      Quinceañera: 'Quinceañera',
      Celebration: 'Celebración',
    } as Record<string, string>,
    flavors: {
      title: 'Sabores',
      lede: 'Combínalos a tu gusto. Si quieres algo que no está aquí, pregúntale.',
      cakeHead: 'Pastel',
      fillingHead: 'Relleno',
      frostingHead: 'Betún',
      cake: ['Vainilla', 'Fresa', 'Chocolate', 'Moca', 'Tres leches', 'Napolitano', 'Zanahoria', 'Tiramisú'],
      filling: ['Fresa', 'Durazno', 'Piña', 'Coco', 'Mango', 'Cajeta', 'Sin relleno'],
      frosting: ['Chantilly', 'Queso crema'],
      frostingNote: 'El chantilly es el estándar en la mayoría de los pasteles; queso crema a pedido.',
    },
    pricing: {
      title: 'Tamaños y precios',
      caption: 'Precios base para un pastel de una capa. Los sabores y rellenos no cambian el precio.',
      size: 'Tamaño',
      servings: 'Porciones',
      basePrice: 'Precio base',
      ask: 'Consultar',
      sizes: {
        '6" round': 'Redondo de 6"',
        '8" round': 'Redondo de 8"',
        '10" round': 'Redondo de 10"',
        'Half sheet': 'Media plancha',
        'Full sheet': 'Plancha entera',
      } as Record<string, string>,
      customNote: 'Los pisos, las formas esculpidas y el trabajo en fondant se cotizan por separado.',
      deliveryNote: 'Hay entrega disponible para pasteles grandes de celebración — bodas y quinceañeras — en cotizaciones mayores. Todo lo demás es para recoger en Faribault.',
    },
    about: {
      title: 'Acerca',
      body: 'Esperanza Pérez lleva cuatro años haciendo pasteles desde su cocina en Faribault. Acepta uno o dos pedidos por semana, así que cada pastel recibe toda su atención — la miga, el relleno, el acabado. Prefiere rechazar una fecha antes que entregarte algo de lo que no esté orgullosa.',
    },
    form: {
      title: 'Pedir una cotización',
      lede: 'Con al menos una semana de anticipación — más si quieres decoración especial. Recoger en Faribault; entrega solo para pasteles grandes de celebración.',
      labels: {
        name: 'Tu nombre',
        email: 'Correo electrónico',
        phone: 'Teléfono',
        eventDate: 'Fecha del evento',
        eventType: 'Evento',
        size: 'Tamaño',
        flavor: 'Sabor del pastel',
        filling: 'Relleno',
        frosting: 'Betún',
        budget: 'Presupuesto',
        description: '¿Qué tienes en mente?',
      },
      placeholderDesc: 'Colores, tema, cuántas personas, cualquier cosa que hayas visto y te haya gustado.',
      choose: 'Elige una opción',
      eventTypes: ['Cumpleaños', 'Boda', 'Graduación', 'Aniversario', 'Quinceañera', 'Baby shower', 'Jubilación', 'Otro'],
      budgets: ['Menos de $75', '$75 – $150', '$150 – $300', '$300 o más', 'Aún no estoy seguro'],
      submit: 'Pedir una cotización',
      reassure: 'No se cobra nada. Esto inicia una conversación.',
      js: {
        sending: 'Enviando tu solicitud…',
        success: {
          h3: 'Tu solicitud se envió.',
          p1: 'Esperanza lee cada solicitud ella misma. Te escribirá a {email} en un plazo de dos días con un precio y los detalles por definir.',
          p2: 'Todavía no hay nada reservado — tu fecha no queda apartada hasta que ella te confirme por escrito.',
        },
        fail: {
          h3: 'No se pudo enviar.',
          tmpl: 'El formulario no pudo comunicarse con Esperanza — {reason}. Escríbele directamente a {email} con tu fecha y lo que buscas, y ella sigue desde ahí.',
          notConnected: 'todavía no está conectado',
          server: 'el servicio de pedidos devolvió un error ({status})',
          dropped: 'se perdió la conexión',
        },
        errors: {
          name: 'Escribe tu nombre para que sepa quién le escribe.',
          emailEmpty: 'Necesita un correo para enviarte la cotización.',
          emailInvalid: 'Incluye una @ y un dominio, como nombre@correo.com.',
          phoneEmpty: 'Un teléfono le da una segunda forma de contactarte.',
          phoneShort: 'Se ve corto — incluye la clave de área.',
          dateEmpty: 'Elige la fecha del evento.',
          dateSoon: 'Necesita al menos una semana — elige una fecha posterior.',
          eventType: 'Elige qué tipo de evento es.',
          size: 'Elige un tamaño.',
          flavor: 'Elige un sabor de pastel.',
          filling: 'Elige un relleno.',
          frosting: 'Elige un betún.',
          budget: 'Elige un presupuesto para que pueda orientar el diseño.',
          description: 'Una o dos frases sobre el pastel le ayudan a cotizarlo.',
        },
      },
    },
    footer: {
      line1: 'Recoger en Faribault, Minnesota · entrega para pedidos grandes',
      line2: 'Responde en un plazo de dos días.',
    },
    lang: {
      modalTitle: 'Elige tu idioma',
      english: 'English',
      spanish: 'Español',
      switchLabel: 'Idioma',
    },
  },
} as const;

export function getLang(locale: string | undefined): Lang {
  return locale === 'es' ? 'es' : 'en';
}

// Map any path to its equivalent in the target language.
export function localizePath(path: string, target: Lang): string {
  let base = path.replace(/^\/es(\/|$)/, '/');
  if (base === '') base = '/';
  return target === 'es' ? (base === '/' ? '/es/' : '/es' + base) : base;
}
