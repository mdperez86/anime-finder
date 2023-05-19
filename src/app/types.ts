export type PageProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type LayoutProps = React.PropsWithChildren<{
  params: { [key: string]: string };
}>;
