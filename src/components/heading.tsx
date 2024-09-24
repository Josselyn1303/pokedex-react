export function Heading() {
  return (
    <>
      <h1 className="text-center text-5xl font-seminold">React Pokedex</h1>;
      <h2 className="text-lg text-center mt-4">
        Aplicación demo para aprender a consumir el API{" "}
        <a
          href="https://pokeapi.co/"
          target="blank"
          className="text-primary hover: underline"
        >
          PokeAPI
        </a>
      </h2>
    </>
  );
}
