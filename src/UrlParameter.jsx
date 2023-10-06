import {useParams} from "react-router-dom"

export const UrlParameter = () => {
    const { id } = useParams(); /* 動的なパラメータを取得する */
    return(
        <>
            <h1>UrlParameterです</h1>
            <p>パラメーターは{id}です</p>
        </>
    )
}