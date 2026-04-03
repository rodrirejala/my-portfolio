export const languages = {
  es: 'Español',
  en: 'English',
  pt: 'Português',
};

export const defaultLang = 'es';

const translations: Record<string, Record<string, Record<string, string>>> = {
  es: {
    nav: { home: 'Inicio', blog: 'Blog', about: 'Sobre mí' },
    home: { title: 'Hola, soy Rodrigo Rejala', intro: 'Desarrollo con Linux, Python, Astro y un poco de frontend', projects: 'Proyectos', contact: 'Contacto' },
    blog: { title: 'Blog', readMore: 'Leer más', noPosts: 'No hay posts aún' },
    footer: { madeWith: 'Hecho con' },
    common: { back: 'Volver' }
  },
  en: {
    nav: { home: 'Home', blog: 'Blog', about: 'About' },
    home: { title: "Hi, I'm Rodrigo Rejala", intro: 'I build things with Linux, Python, Astro and some frontend', projects: 'Projects', contact: 'Contact' },
    blog: { title: 'Blog', readMore: 'Read more', noPosts: 'No posts yet' },
    footer: { madeWith: 'Made with' },
    common: { back: 'Back' }
  },
  pt: {
    nav: { home: 'Início', blog: 'Blog', about: 'Sobre' },
    home: { title: 'Olá, eu sou Rodrigo Rejala', intro: 'Construo coisas com Linux, Python, Astro e um pouco de frontend', projects: 'Projetos', contact: 'Contato' },
    blog: { title: 'Blog', readMore: 'Ler mais', noPosts: 'Nenhum post ainda' },
    footer: { madeWith: 'Feito com' },
    common: { back: 'Voltar' }
  }
};

export function getLangFromUrl(url: URL): string {
  const lang = url.pathname.split('/')[1];
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: string) {
  const t = translations[lang] || translations[defaultLang];
  return (key: string) => {
    const keys = key.split('.');
    let value: any = t;
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };
}

export function getPathForLang(path: string, lang: string): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}
