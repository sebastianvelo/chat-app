import { DefaultTheme } from "app/styles/Themes";
import Routes from "app/types/enums/Routes";
import Page from "app/types/page/Page";
import React from "react";
import { Route } from "react-router-dom";
import Stylist, { Sizing, TransitionProperty } from "stylist/Stylist";
import PageWrapper from "./pages/PageWrapper";

const MainStyle = Stylist.builder()
    .mix(DefaultTheme)
    .inMobile({
        height: Sizing.SCREEN,
        padding: 5,
        transition: [TransitionProperty.ALL, 300]
    })
    .build();

export interface MainData {
    pages: Page[];
}

interface MainProps extends MainData {
    setLinkActive: (route: Routes) => void;
}

const Main: React.FC<MainProps> = (props: MainProps) => {
    const getJSX = (Component: React.FC<any>, route: Routes) => <Component />;
    return (
        <main className={MainStyle}>
            {props.pages.map((page: Page, i: number) => (
                <Route key={i} path={page.route}>
                    <PageWrapper route={page.route} setLinkActive={props.setLinkActive}>{getJSX(page.component, page.route)}</PageWrapper>
                </Route>
            ))}
        </main>
    );
}

export default Main;