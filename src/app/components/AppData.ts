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
        chatNav: {
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
        userLoggedIn: {
            avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
            nick: '[b] Sébástíán...... 😎 [ /b]',
            status: '(Conectado)',
            info: 'Una Nueva Noche Fria - CJS!!!!!!! 🎵🎵🎵🎵',
            contacts: [
                {
                    avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                    nick: '🟩 ( --- / /// Lorem Pipsum // / /_-- ))',
                    status: '(Conectado)',
                    info: 'CUMBIAAAA!!! 🎵',
                },
                {
                    avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                    nick: '🟩 ( --- / /// Lorem Pipsum // / /_-- ))',
                    status: '(Conectado)',
                    info: 'CUMBIAAAA!!! 🎵',
                },
                {
                    avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                    nick: '🟩 ( --- / /// Lorem Pipsum // / /_-- ))',
                    status: '(Conectado)',
                    info: 'CUMBIAAAA!!! 🎵',
                },
                {
                    avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                    nick: '🟩 ( --- / /// Lorem Pipsum // / /_-- ))',
                    status: '(Conectado)',
                    info: 'CUMBIAAAA!!! 🎵',
                },
                {
                    avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                    nick: '🟩 ( --- / /// Lorem Pipsum // / /_-- ))',
                    status: '(Conectado)',
                    info: 'CUMBIAAAA!!! 🎵',
                },
                {
                    avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                    nick: '🟩 ( --- / /// Lorem Pipsum // / /_-- ))',
                    status: '(Conectado)',
                    info: 'CUMBIAAAA!!! 🎵',
                },
                {
                    avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                    nick: '🟩 ( --- / /// Lorem Pipsum // / /_-- ))',
                    status: '(Conectado)',
                    info: 'CUMBIAAAA!!! 🎵',
                },
                {
                    avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                    nick: '🟩 ( --- / /// Lorem Pipsum // / /_-- ))',
                    status: '(Conectado)',
                    info: 'CUMBIAAAA!!! 🎵',
                },
                {
                    avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                    nick: '🟩 ( --- / /// Lorem Pipsum // / /_-- ))',
                    status: '(Conectado)',
                    info: 'CUMBIAAAA!!! 🎵',
                },
                {
                    avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                    nick: '🟩 ( --- / /// Lorem Pipsum // / /_-- ))',
                    status: '(Conectado)',
                    info: 'CUMBIAAAA!!! 🎵',
                },
                {
                    avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                    nick: '🟩 ( --- / /// Lorem Pipsum // / /_-- ))',
                    status: '(Conectado)',
                    info: 'CUMBIAAAA!!! 🎵',
                },
                {
                    avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                    nick: '🟩 ( --- / /// Lorem Pipsum // / /_-- ))',
                    status: '(Conectado)',
                    info: 'CUMBIAAAA!!! 🎵',
                },
                {
                    avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                    nick: '🟩 ( --- / /// Lorem Pipsum // / /_-- ))',
                    status: '(Conectado)',
                    info: 'CUMBIAAAA!!! 🎵',
                },
                {
                    avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                    nick: '🟩 ( --- / /// Lorem Pipsum // / /_-- ))',
                    status: '(Conectado)',
                    info: 'CUMBIAAAA!!! 🎵',
                },
                {
                    avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                    nick: '🟩 ( --- / /// Lorem Pipsum // / /_-- ))',
                    status: '(Conectado)',
                    info: 'CUMBIAAAA!!! 🎵',
                },
                {
                    avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                    nick: '⬜ ( --- / /// Lorem Pipsum // / /_-- ))',
                    status: '',
                    info: 'CUMBIAAAA!!! 🎵',
                },
                {
                    avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                    nick: '⬜ ( --- / /// Lorem Pipsum // / /_-- ))',
                    status: '',
                    info: 'CUMBIAAAA!!! 🎵',
                },
                {
                    avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                    nick: '⬜ ( --- / /// Lorem Pipsum // / /_-- ))',
                    status: '',
                    info: 'CUMBIAAAA!!! 🎵',
                },
                {
                    avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                    nick: '⬜ ( --- / /// Lorem Pipsum // / /_-- ))',
                    status: '',
                    info: 'CUMBIAAAA!!! 🎵',
                },
                {
                    avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                    nick: '⬜ ( --- / /// Lorem Pipsum // / /_-- ))',
                    status: '',
                    info: 'CUMBIAAAA!!! 🎵',
                },
                {
                    avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                    nick: '⬜ ( --- / /// Lorem Pipsum // / /_-- ))',
                    status: '',
                    info: 'CUMBIAAAA!!! 🎵',
                },
                {
                    avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                    nick: '⬜ ( --- / /// Lorem Pipsum // / /_-- ))',
                    status: '',
                    info: 'CUMBIAAAA!!! 🎵',
                },
                {
                    avatar: "https://pbs.twimg.com/media/BHYpVqTCEAAgTCt.jpg",
                    nick: '⬜ ( --- / /// Lorem Pipsum // / /_-- ))',
                    status: '',
                    info: 'CUMBIAAAA!!! 🎵',
                },
            ]
        },
        ads: '¿Querés tu Iphone 3G HOY?!!!!'
    },
};

export default data;