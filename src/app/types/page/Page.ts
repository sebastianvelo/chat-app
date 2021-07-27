import Routes from "../enums/Routes";

type Page = {
    route: Routes;
    component: React.FC<any>;
}
export default Page;