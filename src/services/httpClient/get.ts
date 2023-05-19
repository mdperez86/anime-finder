export async function get<T>(
  endpoint: string,
  params: Record<string, string | number | boolean> = {},
  options?: RequestInit
) {
  try {
    const url = new URL(endpoint, process.env.API_URL);
    Object.entries(params).forEach(([key, value]) => {
      if (value != undefined) {
        url.searchParams.append(key, `${value}`);
      }
    });
    const response = await fetch(url, options);
    if (response.status >= 400) {
      throw await response.json();
    }
    return response.json() as Promise<T>;
  } catch (e) {
    return Promise.reject(e);
  }
}
