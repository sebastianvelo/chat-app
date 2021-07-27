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
                label: "File",
            },
            {
                label: "Contacts",
            },
            {
                label: "Actions",
            },
            {
                label: "Tools",
            },
            {
                label: "Help",
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