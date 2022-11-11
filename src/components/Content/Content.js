import className from "classnames/bind";

import styles from "./Content.module.scss";

const cx = className.bind(styles);

function Content() {
  return (
    <div className={cx("wrapper")}>
      <img src="./logoNCC.png" className={cx("logo")} alt="logo" />
      <div className={cx("header")}>
        <h3>Lorem ipsum dolor sit asmet?</h3>
        <p className={cx("des-header")}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique
          consequat placerat. Vestibulum auctor pellentesque sem, eu posuere
          erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis,
          ligula in mattis sodales, augue justo tristique nulla, sed lacinia
          ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh
          auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque
          suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet
          luctus augue tristique eu. Donec vulputate odio neque, sed semper
          turpis pellentesque a.
        </p>
      </div>
      <div className={cx("container")}>
        <div className={cx("item")}>
          <h4>Lorem ipsum dolor sit amet</h4>
          <img src="./icon1.png" alt="icon1" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
            sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
            accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
            massa in metus bibendum congue. Pellentesque ultrices liquam egestas
            nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel
            sodales est ullamcorper id. Aenean consequat condimentum velit ut
            tempor. Nam porta massa in metus bibendum congue. Pellentesque
            ultrices vestibulum mattis.
          </p>
        </div>
        <div className={cx("item")}>
          <h4>Lorem ipsum dolor sit amet</h4>
          <img src="./icon2.png" alt="icon2" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
            sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
            accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
            massa in metus bibendum congue. Pellentesque ultrices liquam egestas
            nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel
            sodales est ullamcorper id. Aenean consequat condimentum velit ut
            tempor. Nam porta massa in metus bibendum congue. Pellentesque
            ultrices vestibulum mattis.
          </p>
        </div>
        <div className={cx("item")}>
          <h4>Lorem ipsum dolor sit amet</h4>
          <img src="./icon3.png" alt="icon3" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui
            sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit
            accumsan. Aenean consequat condimentum velit ut tempor. Nam porta
            massa in metus bibendum congue. Pellentesque ultrices liquam egestas
            nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel
            sodales est ullamcorper id. Aenean consequat condimentum velit ut
            tempor. Nam porta massa in metus bibendum congue. Pellentesque
            ultrices vestibulum mattis.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
