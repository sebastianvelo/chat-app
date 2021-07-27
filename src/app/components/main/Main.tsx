import { DefaultTheme } from "app/styles/Themes";
import Routes from "app/types/enums/Routes";
import Page from "app/types/page/Page";
import React from "react";
import { Route } from "react-router-dom";
import Stylist, { TransitionProperty } from "stylist/Stylist";

const MainStyle = Stylist.builder()
    .mix(DefaultTheme)
    .inMobile({
        transition: [TransitionProperty.ALL, 300],
    })
    .build();

export interface MainProps {
    pages: Page[];
}

const Main: React.FC<MainProps> = (props: MainProps) => {
    const getJSX = (Component: React.FC<any>, route: Routes) => <Component />;
    return (
        <main className={MainStyle}>
            {props.pages.map((page: Page, i: number) => (
                <Route key={i} path={page.route}>
                    {getJSX(page.component, page.route)}
                </Route>
            ))}
        </main>
    );
}

export default Main;