import urlShortener from "../assets/images/portfolio/urlShortener.png";
import Edgy from "../assets/images/portfolio/Edgy.jpeg";
import RestCountries from "../assets/images/portfolio/RestCountries.jpeg";
import Bankist from "../assets/images/portfolio/Bankist.jpeg";

const projectsData = [
  {
    id: "rest-countries",
    img: RestCountries,
    name: "Rest Countires",
    stack: ["< RESTful API />", "< CSS3 />", "< React.js />"],
    src: "https://restful-countries.vercel.app/",
    source: "https://github.com/catherineisonline/rest-countries",
    description:
      "REST Countries is a project made with API which also has a color theme switcher feature. You can view the list of all countries and find a specific one via search or by filtering regions. By navigating to the individual country page, you are able to see more details about the country like native name and even border countries.",
  },
  {
    id: "url-shortener",
    img: urlShortener,
    name: "URL Shortener",
    stack: ["< HTML5 />", "< CSS />", "< Vanilla JS />", "< RESTful API />"],
    src: "https://www.shortlyai.com/write/11745752/",
    source: "https://github.com/nalini1223/Arduino-Morse-Code-Translator",
    description:
      "In Morse code, each number and letter of the alphabet are represented by a series of dots and dashes. Create your own message in morse code using only one LED and an Arduino board. Morse Code Day (27th of April) pays tribute to this traditional form of communication that has been in practice for nearly 160 years. It involves using standardized sequences of two different signal durations: dots and dashes. It was named after Samuel F. B. Morse, that contributed to the telegraph invention.",
  },
  {
    id: "bankist",
    img: Bankist,
    name: "Bankist",
    stack: ["< Vanilla JS />", "< CSS3 />", "< HTML5 />"],
    src: "https://bankist-bank.vercel.app/",
    source: "https://github.com/catherineisonline/bankist",
    description:
      "Bankist is a fictional online bank and its goal is to practice DOM manipulation and user interaction. Bankist has an option to log in to the account and use different functionalities, almost like in an actual bank! By logging into your account you can transfer money to another account, take a loan or delete the account. Please check README for login info.",
  },
];

export { projectsData };
