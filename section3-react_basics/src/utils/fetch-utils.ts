
// create generic fetch data function that gets some response back and
export const getData = async <T> (url: string): Promise<T>  => {
    const response = await fetch(url);
    return await response.json();
}