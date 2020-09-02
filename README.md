# sergsmith64-react

1. npm i react-router
* [ReactTraining](https://reacttraining.com/react-router/core/guides/quick-start)

2. npm i react-bootstrap bootstrap
* [Bootstrap: DOCs](https://react-bootstrap.github.io)

3. add dirs 'Pages', 'Components'

4. add files 'Header.js'

5. create Navbar in Header.js and standart dark Bootstrap Navbar Menu

##

6. npm i react-router-dom

7. add Pages: Home, About, Contacts, Blog

8. For work Routing:
* string: <Nav.Link href="/"> Home </Nav.Link>
* changes: <Nav.Link as={Link} to ="/">Home</Nav.Link>

9. Slider (CarouselBox) place in Home

10. Tabs in About

11. Form in Contacts

12. First use scss-style: npm i node-sass

13. add margin-top: 60px (as class="containerContent") for About, Blog & Contacts

14. add CardDeck & Card

15. add Post in Blog

16. add "homepage" in package.json & add .htaccess - only for hosting

##

17. DELETE homepage & .htaccess

18. Для размещения сайта в Firebase Hosting требуется интерфейс командной строки Firebase.
( Hosting a site on Firebase Hosting requires a Firebase CLI )
Устанавливаю глобально!
npm install -g firebase-tools

19. npm run build

20. firebase login

21. Инициируйте проект
Выполните эту команду в корневом каталоге приложения:
firebase init

22. firebase deploy: https://sergsmith64-react.web.app/

23. npm i axios --save

24. testing axios

~~~javascript
componentDidMount() {
    axios.get('https://sergsmith64-react.firebaseio.com/quiz.json').then(response => {
        console.log(response);
    })
}
~~~


### Memory

## GH-PAGES

"homepage": "https://sergsmith64.github.io/sergsmith64-react/",