import Routes from "app/types/enums/Routes";
import { MainProps } from "./main/Main";
import HomePage from "./main/pages/home/HomePage";
import LoginPage from "./main/pages/login/LoginPage";
import { NavProps } from "./nav/Nav";

interface AppWidgetData {
    nav: NavProps;
    main: MainProps;
}

const data: AppWidgetData = {
    nav: {
        items: [
            {
                label: "Archivo",
                options: [
                    'Adjuntar archivo',
                    'Buscar...',
                ]
            },
            {
                label: "Contactos",
                options: [
                    'Agregar nuevo contacto',
                    'Eliminar contacto',
                    'Bloquear contacto',
                    'Buscar contacto',
                ]
            },
            {
                label: "Acciones",
                options: [
                    'Agregar emoticonos'
                ]
            },
            {
                label: "Herramientas",
                options: [
                    'Preferencias'
                ]
            },
            {
                label: "Ayuda",
                options: [
                    'Buscar...'
                ]
            },
        ],
    },
    main: {
        pages: [
            {
                route: Routes.HOME,
                component: HomePage
            },
            {
                route: Routes.LOGIN,
                component: LoginPage
            },
        ],
        userLoggedIn: {
            avatar: "https://picsum.photos/id/237/200/300",
            nick: '[b] Lorem Ipsum...... 😎 [ /b]',
            status: '(Conectado)',
            info: 'Una Nueva Noche Fria - CJS!!!!!!! 🎵🎵🎵🎵',
            contacts: [
                {
                  "nick": "Rose",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Laboris consectetur ex minim cillum reprehenderit aute est exercitation id consequat amet."
                },
                {
                  "nick": "Mona",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Adipisicing Lorem mollit qui consequat nulla officia do."
                },
                {
                  "nick": "Kathie",
                  "status": '(Conectado)',
                  "avatar": "https://picsum.photos/200",
                  "info": "Velit eiusmod aliquip nulla aliqua laborum enim amet."
                },
                {
                  "nick": "Jeri",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Sunt consectetur cillum consectetur minim reprehenderit."
                },
                {
                  "nick": "Helen",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Minim cillum excepteur Lorem est pariatur consequat id laboris reprehenderit ipsum sit magna aute."
                },
                {
                  "nick": "Barrett",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Tempor labore minim ullamco sint labore eu sunt do pariatur ea nulla est magna est."
                },
                {
                  "nick": "Mathews",
                  "status": '(Conectado)',
                  "avatar": "https://picsum.photos/200",
                  "info": "Do irure dolore sint reprehenderit nulla eu do laboris enim excepteur."
                },
                {
                  "nick": "Dollie",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Occaecat enim fugiat nostrud exercitation aliquip nulla reprehenderit reprehenderit laboris incididunt veniam ullamco pariatur."
                },
                {
                  "nick": "Wright",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Aliqua eiusmod non cupidatat dolor aute excepteur nostrud ex do minim."
                },
                {
                  "nick": "Mendoza",
                  "status": '(Conectado)',
                  "avatar": "https://picsum.photos/200",
                  "info": "Officia sunt do excepteur elit elit eiusmod cillum."
                },
                {
                  "nick": "Nunez",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Qui non et tempor sit magna officia tempor."
                },
                {
                  "nick": "Isabella",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Velit dolore laboris commodo cillum."
                },
                {
                  "nick": "Rutledge",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Irure labore enim in adipisicing enim ea pariatur in do minim in incididunt dolor ullamco."
                },
                {
                  "nick": "Walker",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Ad ea non nulla cillum."
                },
                {
                  "nick": "Joni",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Do qui qui pariatur incididunt."
                },
                {
                  "nick": "Lewis",
                  "status": '(Conectado)',
                  "avatar": "https://picsum.photos/200",
                  "info": "Quis quis voluptate eu in exercitation aliquip cupidatat Lorem."
                },
                {
                  "nick": "Mariana",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Nisi qui duis nulla proident pariatur voluptate Lorem ea elit velit enim."
                },
                {
                  "nick": "Fitzpatrick",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Est ex laboris culpa nulla sit nulla non officia eu est eu esse sunt esse."
                },
                {
                  "nick": "Tricia",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Consectetur mollit duis qui deserunt aute."
                },
                {
                  "nick": "Corina",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Reprehenderit excepteur elit ad aliquip nostrud et id."
                },
                {
                  "nick": "Williams",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Minim laboris culpa aliqua ex ut cupidatat."
                },
                {
                  "nick": "White",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Amet ut in Lorem voluptate reprehenderit eiusmod est irure minim ad nisi dolore adipisicing."
                },
                {
                  "nick": "Dodson",
                  "status": '(Conectado)',
                  "avatar": "https://picsum.photos/200",
                  "info": "Occaecat eu consectetur esse ullamco eiusmod anim magna in nisi do ad consequat."
                },
                {
                  "nick": "Iva",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Minim veniam eiusmod irure sunt minim occaecat amet irure id nostrud officia duis aliqua do."
                },
                {
                  "nick": "Susana",
                  "status": '(Conectado)',
                  "avatar": "https://picsum.photos/200",
                  "info": "Deserunt cillum veniam voluptate sunt est excepteur deserunt ullamco adipisicing minim reprehenderit sint est id."
                },
                {
                  "nick": "Roslyn",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Fugiat velit ut aliqua et qui nisi do et enim duis elit nostrud sit."
                },
                {
                  "nick": "Goodman",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Reprehenderit cillum aliquip eiusmod duis pariatur ullamco sit."
                },
                {
                  "nick": "Marcella",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Incididunt sit reprehenderit amet occaecat nulla amet quis culpa."
                },
                {
                  "nick": "Tameka",
                  "status": '(Conectado)',
                  "avatar": "https://picsum.photos/200",
                  "info": "Velit fugiat nostrud commodo id reprehenderit veniam ex consectetur velit amet amet nisi sint consectetur."
                },
                {
                  "nick": "Cooley",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Ad incididunt irure non voluptate consequat anim nisi est pariatur."
                },
                {
                  "nick": "Melisa",
                  "status": '(Conectado)',
                  "avatar": "https://picsum.photos/200",
                  "info": "Do commodo labore veniam irure laborum sit cillum irure et enim adipisicing quis aliqua est."
                },
                {
                  "nick": "Ethel",
                  "status": '(Conectado)',
                  "avatar": "https://picsum.photos/200",
                  "info": "Consequat Lorem est deserunt laboris qui sit tempor proident exercitation adipisicing in."
                },
                {
                  "nick": "Mack",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Cillum ut excepteur in anim dolor sint officia do quis labore sunt."
                },
                {
                  "nick": "Leonor",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Ut sunt quis esse aliqua nisi dolor proident commodo tempor ex."
                },
                {
                  "nick": "Berg",
                  "status": '',
                  "avatar": "https://picsum.photos/200",
                  "info": "Non do cillum enim incididunt reprehenderit id deserunt voluptate magna incididunt reprehenderit."
                }
              ]
        },
        ads: '¿Querés tu Iphone 3G HOY?!!!!'
    },
};

export default data;