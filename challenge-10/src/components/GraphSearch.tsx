import { useGraph } from "../hooks/useGraph";
import { useGraphSearch } from "../hooks/useGraphSearch";
import type IPerson from "../interfaces/person.interface";
import { Button } from "./shared/Button";

export const GraphSearch = () => {
  //* Context
  const { graph } = useGraph();

  //* Custom hooks
  const { citySearch, people, handleCitySearch, handleSubmit } = useGraphSearch();

  return (
    <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold">Buscar personas por ciudad</h2>
      <div className="flex flex-col gap-2">
        <label htmlFor="city-relation" className="font-medium">
          Ciudad:
        </label>
        <select
          name="city-search"
          id="city-search"
          className="p-2 font-light border border-gray-300 shadow-sm rounded"
          value={citySearch}
          onChange={handleCitySearch}
        >
          <option value="">Seleccione una ciudad</option>

          {graph.cities.map((city) => (
            <option key={city.name} value={city.name}>{city.name}</option>
          ))}
        </select>
      </div>

      <div className="w-full flex gap-2 [&>button]:w-full">
        <Button text="Buscar Personas" type="submit" variant="primary" />
      </div>

      {people && (<>
        <h3 className="text-xl font-semibold">Lista de Personas</h3>
        <ul>
          {people.map((person: IPerson) => (
            <li key={person.name}>{person.name} - Edad: {person.age}</li>
          ))}
        </ul></>)}
    </form>
  );
};
