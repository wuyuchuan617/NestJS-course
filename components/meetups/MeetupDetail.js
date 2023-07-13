import classes from "./MeetupDetail.module.css";

function MeetupDetail(props) {
  const descriptionLines = props.description.split("\n");
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <div
        style={{
          textAlign: "left",
          padding: "100px 25vw",
          color: "#807669",
          lineHeight: "1.8",
        }}
      >
        {descriptionLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </section>
  );
}

export default MeetupDetail;
