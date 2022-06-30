const swiperWrapper = document.getElementById('swiper-wrapper')
const swiperWrapperPortfolio = document.getElementById('swiper-wrapper-portfolio')
const languagesUsed = document.getElementById('languages-used')

const skills = [{
        language: "HTML",
        image: "https://i.ibb.co/yBRbj9J/5847f5bdcef1014c0b5e489c.png"
    },
    {
        language: "CSS",
        image: "https://i.ibb.co/whTbmLq/kisspng-web-development-cascading-style-sheets-css3-html-5ae480845f38f3-0110241015249245483901.png"
    },
    {
        language: "JavaScript",
        image: "https://i.ibb.co/f8R6xWt/kisspng-javascript-scalable-vector-graphics-logo-encapsula-javascript-le-ekran-grnts-almak-alpere-5b.png"
    },
    {
        language: "Bootstrap",
        image: "https://i.ibb.co/nDY0fqg/kisspng-responsive-web-design-bootstrap-sass-cascading-sty-framework-5acb894bc4c191-9841223815232883.png"
    },
    {
        language: "Sass",
        image: "https://i.ibb.co/F7bDJJd/kisspng-logo-scalable-vector-graphics-computer-icons-porta-sass-logos-download-5c59c780d82aa0-017842.png"
    },
    {
        language: "Git",
        image: "https://i.ibb.co/WpX0hZb/kisspng-computer-icons-pro-git-portable-network-graphics-i-git-book-pro-git-app-app-5b80546c513c68-2.png"
    },
    {
        language: "React.js",
        image: "https://i.ibb.co/KXQLD1j/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457-3471941815281223426081.png"
    },
    {
        language: "C",
        image: "https://i.ibb.co/yskBYNz/5a36954d40bea2-0735336615135266052652.png"
    }
]

const portfolio = [
    {
    name: "Alaska indumentaria",
    image: "https://i.ibb.co/PtfyTM4/aalaska.jpg",
    language: [
        "React.js",
        "JavaScript",
        "Css",
        "Semantic UI",
        "React Bootstrap"
    ],
    url: "https://alaskaindumentaria.vercel.app/",
    github: "https://github.com/LucasPerezz/alaskaIndumentaria-perez"
    },
    {
        name: "Batatacoin",
        image: "https://i.ibb.co/pXFMWKV/batatacoin.jpg",
        language: [
            "Html",
            "Css"
        ],
        url: "https://lucasperezz.github.io/batatacoin/",
        github: "https://github.com/LucasPerezz/batatacoin"
    }
]

const sectionSkills = (skills) => {
    skills.forEach((skill) => {
        const createSwiperSlide = document.createElement('div')
        createSwiperSlide.className = "swiper-slide skill--card__image"

        createSwiperSlide.innerHTML = `<img src=${skill.image} alt=${skill.language}>`


        swiperWrapper.appendChild(createSwiperSlide)
    })
}

const sectionPortfolio = () => {
    portfolio.forEach((proyect) => {
        const createSwiperSlidePortfolio = document.createElement('div')
        createSwiperSlidePortfolio.className = "swiper-slide"
        createSwiperSlidePortfolio.innerHTML = `
        <div class="card mb-3 card--container">
        <img src=${proyect.image} class="card-img-top" alt=${proyect.name}>
        <div class="card-body">
          <h5 class="card-title fs-2 my-3">${proyect.name}</h5>
          <div class="d-flex flex-wrap gap-3 mx-auto w-75 justify-content-center my-4" id="languages-used"></div>
          <div class="card--button">
            <button><a href=${proyect.github}>Github</a></button>
            <button><a href=${proyect.url}>Page</a></button>
          </div>
        </div>
      </div>
        `

        swiperWrapperPortfolio.appendChild(createSwiperSlidePortfolio);
    })

}



sectionSkills(skills)
sectionPortfolio(portfolio)