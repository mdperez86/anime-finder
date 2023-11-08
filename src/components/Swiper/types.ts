import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from "react";
import { SwiperProps as SwiperPropsBase } from "swiper/react";

export type SwiperProps = PropsWithChildren<
  SwiperPropsBase & {
    className?: string;
  }
>;

export type SwiperSlideProps = PropsWithChildren<
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>;
