"use client";

import { Children, ReactElement } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  Swiper as SwiperBase,
  SwiperSlide as SwiperSlideBase,
} from "swiper/react";
import classNames from "classnames";

import { SwiperProps, SwiperSlideProps } from "./types";
import "./styles.css";

export function Swiper({ children, ...props }: SwiperProps) {
  return (
    <SwiperBase
      spaceBetween={16}
      slidesPerView={1}
      loop
      {...props}
      modules={[Autoplay, Pagination]}
      autoplay={{ pauseOnMouseEnter: true }}
      pagination={{
        clickable: true,
        bulletClass:
          "inline-flex w-2 h-2 m-1 rounded-full bg-accent-500 transition-all",
        bulletActiveClass: "scale-150",
      }}
    >
      {Children.map(children, (child, index) => (
        <SwiperSlideBase
          key={(child as ReactElement)?.key ?? index}
          virtualIndex={index}
        >
          {child}
        </SwiperSlideBase>
      ))}
    </SwiperBase>
  );
}

export function SwiperSlide({
  children,
  className,
  ...props
}: SwiperSlideProps) {
  return (
    <div {...props} className={classNames(className)}>
      {children}
    </div>
  );
}
