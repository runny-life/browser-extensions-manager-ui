const DATA_URL = '/data.json';

export async function loadExtensions() {
  const response = await fetch(DATA_URL);

  if (!response.ok) {
    throw new Error(`Failed to load extensions: ${response.status}`);
  }

  console.log(response);

  return response.json();
}
