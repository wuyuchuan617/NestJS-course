import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  const descriptionLines = props.description.split("\n");
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1
        style={{ letterSpacing: "0.2em", fontSize: "1.1rem", color: "#807669" }}
      >
        {props.title}
      </h1>
      <p style={{ letterSpacing: "0.1em", fontSize: "12px", color: "#807669" }}>
        {props.publishTime ? new Date(props.publishTime).toDateString() : ""}
      </p>
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
