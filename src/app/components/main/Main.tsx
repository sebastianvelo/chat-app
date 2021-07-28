import { DefaultTheme } from "app/styles/Themes";
import Page from "app/types/page/Page";
import React from "react";
import { Route } from "react-router-dom";
import Stylist, { TransitionProperty } from "stylist/Stylist";
import { FooterProps } from "./pages/home/footer/Footer";
import { HomePageProps } from "./pages/home/HomePage";

const MainStyle = Stylist.builder()
    .mix(DefaultTheme)
    .inMobile({
        transition: [TransitionProperty.ALL, 300],
    })
    .build();

export interface MainProps extends FooterProps, HomePageProps {
    pages: Page[];
}

const Main: React.FC<MainProps> = (props: MainProps) => {
    const getJSX = (Component: React.FC<any>) => <Component {...props} />;

    const closeAllDetails = () => {
        const details = Array.from(document.querySelectorAll('nav details'));
        details.forEach(detail => detail.removeAttribute("open"));
    }

    return (
        <main className={MainStyle} onClick={closeAllDetails}>
            {props.pages.map((page: Page, i: number) => (
                <Route key={i} path={page.route}>
                    {getJSX(page.component)}
                </Route>
            ))}
        </main>
    );
}

export default Main;