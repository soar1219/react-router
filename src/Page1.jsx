import { Link, useHistory } from "react-router-dom"

export const Page1 = () => {
    const arr = [...Array(100).keys()];

    const history = useHistory(); /* useHistoryを使えるようにする */

    const onClickDetailA = () => {
        history.push("/page1/detailA"); /* JSでリンク遷移する */
    }
    return(
        <>
            <h1>Page1です</h1>
            <Link to={{pathname: "/page1/detailA", state: arr}}>DetailA</Link>
            <br />
            <Link to="/page1/detailB">DetailB</Link>
            <br />
            <button onClick={onClickDetailA}>DetailA</button>
        </>
    )
}