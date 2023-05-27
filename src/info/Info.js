import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"
import mock6 from "../img/mock6.png"

export let colors = ["#364F6B", "#FC5185"];
export let colors2 = ["#000B21", "#000B21"];

export const info = {
    firstName: "Achraf",
    lastName: "Ait M'Barek",
    initials: "ASH",
    position: "A Front End Engineer",
    selfPortrait: self,
    gradient: `-webkit-linear-gradient(135deg, ${colors})`,
    gradient2: `-webkit-linear-gradient(135deg,${colors2})`,
    baseColor: colors[0],
    miniBio: [
        {
            emoji: '🎸',
            text: 'Fueled by Flamenco Guitar'
        },
        {

            emoji: "💻",
            text: "Front End Engineer At MEDIA EXPERTS"
        },
        {
            emoji: '🌎',
            text: 'Based in the Morocco'
        },
        {
            emoji: "📧",
            text: "aitmbarekachraf@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://github.com/achrafaitmbarek/",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/achraf-ait-m-barek-/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://twitter.com/ait_ashraf",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
    ],
    bio: ``,
    skills:
    {
        proficientWith: ['JavaScript', 'React', 'Git', 'Github', 'Material UI', 'HTML5', 'CSS3', 'Sass', 'Tailwind CSS'],
        exposedTo: ['nodejs', 'python', 'JavaEE']
    }
    ,
    hobbies: [
        {
            label: 'Playing Guitar',
            emoji: '🎸'
        },
        {
            label: 'Cooking',
            emoji: '🌶'
        },
        {
            label: 'Arranging Music',
            emoji: '🎶'
        }
    ],
    portfolio: [
        {
            title: "Prospirit Platform",
            live: "https://github.com/achrafaitmbarek/",
            source: "https://github.com/achrafaitmbarek/InstitutPolytech",
            image: mock1
        },
        {
            title: "Digital Agency Website",
            live: "https://mediaexperts.ma/",
            source: "https://github.com/achrafaitmbarek/",
            image: mock2
        },
        {
            title: "Control Quality Sector",
            live: " https://mmselec.com/",
            source: "https://github.com/achrafaitmbarek/",
            image: mock3
        },
        {
            title: "Movie Boking Website ",
            live: "https://github.com/achrafaitmbarek/",
            source: "https://github.com/achrafaitmbarek/",
            image: mock4
        },
        {
            title: "level Up Club",
            live: "https://levelupclub.vercel.app/",
            source: "https://github.com/achrafaitmbarek/",
            image: mock5
        },
        {
            title: "Movie Pedia",
            live: "https://github.com/achrafaitmbarek/",
            source: "https://github.com/achrafaitmbarek/",
            image: mock6
        }
    ]
}