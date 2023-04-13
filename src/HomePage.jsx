import "./HomePage.css";

export default function HomePage() {
    return (
        <div className="container">
            <h1 className="row">Home Page</h1>
            <p>Cette ToDo App a été réalisé dans le cadre d'un projet en Développement Web à base de React.
                Elle permet de créer des tâches à faire, de les modifier, de les supprimer et de les marquer comme terminées.
                On peut également filtrer les tâches en fonction de leur état et de leur priorité.
                On peut également trier les tâches en fonction de leur état et de leur priorité.
            </p>
            <div className="container text-center">
                <div className="row">
                    <div className="col">
                        <img src="https://avatars.githubusercontent.com/u/94119375?v=4" alt="Tristan Gautier" width="200" height="200" className="clickable rounded-circle stretched-link" onClick={() => {
                            window.open("https://github.com/Dr4kiel", "_blank").focus();
                        }} />
                    </div>
                </div>
            </div>
            <p className="row text-center">Tristan GAUTIER de L'IUT de Laval</p>
        </div>
    )
}