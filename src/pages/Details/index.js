import { useParams } from "react-router-dom"

export function Details() {
    const { id } = useParams();
    console.log(id);

    return (
        <h1>Pagina de detalhes</h1>
    )
}