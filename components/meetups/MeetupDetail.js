import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  const descriptionLines = props.description.split("\n");
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      {descriptionLines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </section>
  );
}

export default MeetupDetail;
