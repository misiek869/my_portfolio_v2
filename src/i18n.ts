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
				goBackBtn: 'Go Back',
				notFoundProject: `Can't find project`,
				skillsTitle: 'My Skills',
			},
		},
		pl: {
			translation: {
				about_01:
					'Cześć! Mam na imię Michał i uczę się frontend developmentu z myślą o wejściu się do świata IT.',
				about_02:
					'Na co dzień prowadzę własną firmę zajmującą się detailingiem samochodowym, ale od dłuższego czasu to kodowanie coraz mocniej przyciąga moją uwagę – aż w końcu stało się czymś, w co postanowiłem wejść na poważnie.',
				about_03:
					'Nie mam jeszcze komercyjnego doświadczenia ani dyplomu z informatyki, ale mam coś innego: determinację, konsekwencję i konkretne umiejętności, które rozwijam każdego dnia. Uczyłem się samodzielnie, a przez pół roku uczestniczyłem w mentoringu w ramach programu DevMentor, gdzie pracowałem z doświadczonym programistą nad rozwojem praktycznych umiejętności.',
				about_04:
					'Dzisiaj najlepiej czuję się w React, Next.js i Tailwind CSS. Znam również dobrze TypeScript, JavaScript, CSS oraz podstawy Node.js. Buduję projekty – zarówno frontendowe, jak i full-stackowe – kilka z nich możesz zobaczyć poniżej.',
				about_05:
					'Szukam swojej pierwszej pracy jako frontend developer. Chcę uczyć się od bardziej doświadczonych programistów, rozwijać się w realnych produktach i wnosić do zespołu świeżą energię, odpowiedzialność i gotowość do działania.',
				about_06:
					'Jeśli szukasz kogoś, kto na serio chce wejść w IT i nie boi się pracy – odezwij się.',
				aboutTitle: 'O Mnie',
				techTitle: 'umiejętności',
				projectsTitle: 'moje projekty',
				projectTech: 'Technologie',
				heroTitle: `Jestem Michał`,
				heroSubtitle: 'Front-End Developer',
				heroBtn: 'moje projekty',
				moreBtn: 'Więcej',
				contactTitle: 'kontakt',
				goBackBtn: 'Powrót do strony głównej',
				notFoundProject: 'Nie ma takiego projektu',
				skillsTitle: 'Moje Umiejętności',
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
