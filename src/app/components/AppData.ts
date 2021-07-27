import Routes from "app/types/enums/Routes";
import { FooterProps } from "./footer/Footer";
import { MainData } from "./main/Main";
import HomePage from "./main/pages/home/HomePage";
import LoginPage from "./main/pages/login/LoginPage";
import { NavProps } from "./nav/Nav";

interface AppWidgetData {
    nav: NavProps;
    main: MainData;
    footer: FooterProps
}

const data: AppWidgetData = {
    nav: {
        header: 'BestTemplate',
        links: [
            {
                pathname: Routes.HOME,
                label: "Home",
                active: false
            },
            {
                pathname: Routes.ABOUT,
                label: "About",
                active: false
            },
            {
                pathname: Routes.MORE,
                label: "More",
                active: false
            },
            {
                pathname: Routes.LOGIN,
                label: "Login",
                active: false
            },
        ],
        menu: {
            items: [
                {
                    pathname: Routes.HOME,
                    label: "Profile",
                },
                {
                    pathname: Routes.HOME,
                    label: "Settings",
                },
            ],
            toggler: {
                alt: 'Avatar',
                src: 'https://picsum.photos/200'
            }
        }
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
    footer: {
        columns: [
            {
                title: 'Title 1',
                links: [
                    {
                        pathname: Routes.HOME,
                        label: "Link 1"
                    },
                    {
                        pathname: Routes.ABOUT,
                        label: "Link 2"
                    },
                    {
                        pathname: Routes.MORE,
                        label: "Link 3"
                    },
                    {
                        pathname: Routes.LOGIN,
                        label: "Link 4"
                    }
                ]
            },
            {
                title: 'Title 2',
                links: [
                    {
                        pathname: Routes.HOME,
                        label: "Link 1"
                    },
                    {
                        pathname: Routes.ABOUT,
                        label: "Link 2"
                    },
                    {
                        pathname: Routes.MORE,
                        label: "Link 3"
                    },
                    {
                        pathname: Routes.LOGIN,
                        label: "Link 4"
                    }
                ]
            },
            {
                title: 'Title 3',
                links: [
                    {
                        pathname: Routes.HOME,
                        label: "Link 1"
                    },
                    {
                        pathname: Routes.ABOUT,
                        label: "Link 2"
                    },
                    {
                        pathname: Routes.MORE,
                        label: "Link 3"
                    },
                    {
                        pathname: Routes.LOGIN,
                        label: "Link 4"
                    }
                ]
            },
            {
                title: 'Title 4',
                links: [
                    {
                        pathname: Routes.HOME,
                        label: "Link 1"
                    },
                    {
                        pathname: Routes.ABOUT,
                        label: "Link 2"
                    },
                    {
                        pathname: Routes.MORE,
                        label: "Link 3"
                    },
                    {
                        pathname: Routes.LOGIN,
                        label: "Link 4"
                    }
                ]
            }
        ],
        copyright: '© Copyright 1998 - 2021. All Rights Reserved.'
    }
};

export default data;