import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
	resources: {
		en: {
			translation: {
				about_01: `Hi. I am a junior frontend developer from Poland, currently
						transitioning from being a car detailing business owner to a career
						in programming.`,
				about_02: `In my work I am focusing on a TypeScript, JavaScript and React
						stack and have experience in building projects using React as well
						as full-stack web applications with Next.js.`,
				aboutTitle: 'About Me',
				techTitle: 'tech stack',
				projectsTitle: 'my projects',
				projectTech: 'Technologies',
				heroTitle: `I'm Michael`,
				heroSubtitle: 'Front-End Developer from Poland',
				heroBtn: 'my projects',
				seeMoreBtn: 'show more',
				seeLessBtn: 'show less',
				moreBtn: 'More',
				contactTitle: 'contact me',
			},
		},
		pl: {
			translation: {
				about_01:
					'Cześć. Jestem programistą frontendowym na poziomie juniora. Obecnie jestem w trakcie przechodzenia z prowadzenia własnej firmy zajmującej się detailingiem samochodowym do pracy jako programista. ',
				about_02:
					'W mojej pracy głównie skupiam się na TypeScript, JavaScript i React. Mam już doświadczenie w tworzeniu projektów w React oraz full-stackowych aplikacji webowych z Next.js.',
				aboutTitle: 'O Mnie',
				techTitle: 'umiejętności',
				projectsTitle: 'moje projekty',
				projectTech: 'Technologie',
				heroTitle: `Jestem Michał`,
				heroSubtitle: 'Front-End Developer',
				heroBtn: 'moje projekty',
				moreBtn: 'Więcej',
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
