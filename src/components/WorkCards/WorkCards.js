
function WorkCards(props) {
    return (
        <>
        <a target="_blank" className="text-decoration-none" rel="noreferrer" href={props.link}>
        <div className="card work-card mb-3 border-0 rounded-0">
        <div className="row g-0 rounded-0">
            <div className="col work-card">
                <div className="card-body">
                    <h5 className="card-title text-light">
                        {props.title}
                    </h5>
                    <p className="card-text text-muted">{props.desc}</p>
                </div>
            </div>
        </div>
        </div></a>
        </>
    );
  }
  
  export default WorkCards;