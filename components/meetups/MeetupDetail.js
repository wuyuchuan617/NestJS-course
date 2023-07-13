import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  const descriptionLines = props.description.split("\n");
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <div className={classes.description}>
        {descriptionLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </section>
  );
}

export default MeetupDetail;
