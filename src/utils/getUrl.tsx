export function getUrl(
  pathname: string,
  searchParams: Record<string, unknown>
) {
  const params = Object.entries(searchParams).reduce(
    (current, [key, value]) => {
      if (value != undefined) {
        if (Array.isArray(value)) {
          value.forEach((item, index) => {
            current.append(`${key}[${index}]`, item);
          });
        } else {
          current.append(key, `${value}`);
        }
      }
      return current;
    },
    new URLSearchParams()
  );

  if (params.size > 0) {
    return `${pathname}?${params}`;
  }

  return pathname;
}
