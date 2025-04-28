import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: {
				welcome: 'Welcome to our website',
				about: `	I am a junior frontend developer from Poland, currently
						transitioning from being a car detailing business owner to a career
						in programming. I am primarily focusing on a TypeScript/JavaScript
						stack and have experience in building projects using React as well
						as full-stack web applications with Next.js.`,
				aboutTitle: 'About Me',
				techTitle: 'tech stack',
				projectsTitle: 'my projects',
				projectTech: 'project tech',
				heroTitle: `I'm Michael`,
				heroSubtitle: 'Front-End Developer from Poland',
				heroBtn: 'my projects',
				seeMoreBtn: 'show more',
				seeLessBtn: 'show less',
				contactTitle: 'contact me',
			},
		},
		pl: {
			translation: {
				welcome: 'Witamy na naszej stronie',
				about:
					'Jestem programistą frontendowym na poziomie juniora. Obecnie jestem w trakcie przechodzenia z prowadzenia własnej firmy zajmującej się detailingiem samochodowym do pracy jako programista. Głównie skupiam się na TypeScript i JavaScript. Mam już doświadczenie w tworzeniu projektów w React oraz full-stackowych aplikacji webowych z Next.js.',
				aboutTitle: 'O Mnie',
				techTitle: 'umiejętności',
				projectsTitle: 'moje projekty',
				projectTech: 'użyte technologie',
				heroTitle: `Jestem Michał`,
				heroSubtitle: 'Front-End Developer',
				heroBtn: 'moje projekty',
				seeMoreBtn: 'pokaż więcej',
				seeLessBtn: 'pokaż mniej',
				contactTitle: 'kontakt',
			},
		},
	},
	lng: 'pl',
	fallbackLng: 'pl',
	interpolation: {
		escapeValue: false,
	},
})

export default i18n
