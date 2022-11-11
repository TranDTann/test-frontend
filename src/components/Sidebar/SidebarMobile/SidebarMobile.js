import className from "classnames/bind";

import styles from "./SidebarMobile.module.scss";

const cx = className.bind(styles);

function SidebarMobile() {
  return (
    <div className={cx("wrapper")}>
      <ul className={cx("list")}>
        <li>Home</li>
        <li>Services</li>
        <li>News</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default SidebarMobile;
