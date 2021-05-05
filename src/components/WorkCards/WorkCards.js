function WorkCards(props) {
  return (
      <a className="card work-card border-0" target="_blank" rel="noreferrer" href={props.link}>
          
      <img src={props.img} className="card-img border-0 work-img" alt={props.title} />
      <div className="card-img-overlay border-0">
        <h5 class="card-title text-light">{props.title}</h5>
        <p class="card-text text-light">{props.desc}</p>
      </div>
    </a>
    
  );
}

export default WorkCards;
