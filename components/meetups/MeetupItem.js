import { useRouter } from "next/router";

import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push("/" + props.id);
  }

  return (
    <>
      <li className={classes.item}>
        <Card onClick={showDetailsHandler}>
          <div className={classes.image} onClick={showDetailsHandler}>
            <img src={props.image} alt={props.title} />
          </div>
          <div className={classes.content} onClick={showDetailsHandler}>
            <h3>{props.title}</h3>
            {/* <p>{props.address}</p> */}
          </div>
          {/* <div className={classes.actions}>
            <button onClick={showDetailsHandler}>MORE</button>
          </div> */}
        </Card>
      </li>
    </>
  );
}

export default MeetupItem;
