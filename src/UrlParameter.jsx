import {useParams, useLocation} from "react-router-dom"

export const UrlParameter = () => {
    const { id } = useParams(); /* 動的なパラメータを取得する */
    const {search} = useLocation();
    const query = new URLSearchParams(search); /* URLSearchParamsはクエリパラメータを使うためのメソッドを用意してくれている */
    return(
        <>
            <h1>UrlParameterです</h1>
            <p>パラメーターは{id}です</p>
            <p>クエリパラメーターは{query.get("name")}です</p> {/* ?配下のクエリを取得する */}
        </>
    )
}