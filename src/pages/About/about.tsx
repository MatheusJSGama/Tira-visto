import { NavLink } from '../../components/NavLink/nav-link';

export function About() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2 px-8 text-center">
      <h1 className="text-4xl font-bold">Página ainda em contrução</h1>
      <NavLink
        to="/"
        className="rounded-button bg-dark-blue p-4 text-white duration-300 hover:opacity-90"
      >
        Voltar para a Página principal
      </NavLink>
    </div>
  );
}
