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
                    'Buscar...',
                    'Buscar...',
                    'Buscar...',
                ]
            },
            {
                label: "Acciones",
                options: [
                    'Home'
                ]
            },
            {
                label: "Herramientas",
                options: [
                    'Home'
                ]
            },
            {
                label: "Ayuda",
                options: [
                    'Home'
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
        ]
    },
};

export default data;