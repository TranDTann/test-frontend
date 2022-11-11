import className from "classnames/bind";

import styles from "./Footer.module.scss";

const cx = className.bind(styles);

function Footer() {
  return (
    <div className={cx("wrapper")}>
      <p>Copyright © 2021</p>
    </div>
  );
}

export default Footer;
