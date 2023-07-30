"use client"
import styles from './cell.module.css'

// ok so cells take in the char to draw as well as which borders
// to draw so location is like so:
// tp -> top left, t -> top, etc
export default function Cell({character, location}) {
  const locationClass = (loc) => {
    switch(loc){
      case "tl":
        return styles.topLeft;
      case "t":
        return styles.top;
      case "tr":
        return styles.topRight;
      case "l":
        return styles.left;
      case "r":
        return styles.right;
      case "bl":
        return styles.bottomLeft;
      case "b":
        return styles.bottom;
      case "br":
        return styles.bottomRight;
      default:
        return styles.middle;
    }
  }

  return(
    <div className={[locationClass(location), styles.cell].join(" ")}>
      <p1 className={styles.cellContent}>{character}</p1>
    </div>
  );
};

