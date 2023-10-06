import { Page2 } from "../Page2";
import { UrlParameter } from "../UrlParameter";

export const Page2Routes = [
    {
        path:"/",
        exact: true,
        children:<Page2 />
    },
    {
        path:"/:id", /* :配下がURLパラメーターを扱うことを指定する */
        exact: false,
        children:<UrlParameter />
    },
]