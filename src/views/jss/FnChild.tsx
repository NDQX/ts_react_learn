import { createUseStyles } from "react-jss";
import { titStyle } from './jss'

const useTitStyle = createUseStyles(titStyle);

const FnChild = (props) => {
  const classes = useTitStyle(props);

  return (
    <div
      className={classes.tit}
      style={{ height: "100px", border: "1px solid block", marginTop: "20px" }}
    >
      FnChild
    </div>
  );
};

export default FnChild;
