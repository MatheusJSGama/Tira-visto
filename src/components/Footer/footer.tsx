import { MoveUpRight } from 'lucide-react';
import { NavLink } from '../NavLink/nav-link';

export function Footer() {
  return (
    <div className="mt-16 flex w-full flex-col items-center md:mt-36">
      <div className="flex w-full max-w-[1432px] flex-col items-center gap-20 px-8 sml:px-[60px]">
        <div className="flex w-full flex-col items-center justify-between xxl:flex-row">
          <div className="mb-4 flex w-full flex-col items-center xxl:w-[456px] xxl:items-start">
            <span className="mb-3 text-center text-4xl md:text-title-L xxl:text-left">
              Está com alguma dúvida?
            </span>
            <p className="mb-10 text-center text-gray-600 xxl:text-left">
              Entre em contato através do nosso canal direto ao cliente através
              do botão abaixo
            </p>
            <button className="w-fit rounded-[40px] bg-dark-blue px-5 py-4 text-white">
              Central de atendimento
            </button>
          </div>

          <div className="flex w-full flex-col gap-3.5 xxl:w-[500px]">
            <div className="flex justify-between">
              <span className="text-2xl md:text-[40px]">Receba novidades</span>
              <MoveUpRight />
            </div>
            <hr />
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-10 xxll:flex-row xxll:justify-between">
          <div className="flex w-full flex-col items-center gap-5 self-end md:justify-center xxll:w-[451px] xxll:flex-col xxll:items-start">
            <span className="font-semibold">Siga em nossa redes:</span>
            <ul className="flex flex-wrap justify-center gap-2 sml:w-auto sml:flex-nowrap md:gap-5">
              <li className="w-2/5 rounded-button border border-black p-1.5 text-center sml:w-auto sml:px-5 sml:py-2.5">
                Instagram
              </li>
              <li className="w-2/5 rounded-button border border-black p-1.5 text-center sml:w-auto sml:px-5 sml:py-2.5">
                X
              </li>
              <li className="w-2/5 rounded-button border border-black p-1.5 text-center sml:w-auto sml:px-5 sml:py-2.5">
                Facebook
              </li>
              <li className="w-2/5 rounded-button border border-black p-1.5 text-center sml:w-auto sml:px-5 sml:py-2.5">
                Youtube
              </li>
            </ul>
          </div>

          <div className="flex justify-between gap-2 font-footer sm:gap-8 md:w-[612px]">
            <div className="flex w-20 flex-col gap-5 md:w-[120px]">
              <span className="font-medium">Empresa</span>
              <nav className="flex flex-col gap-3 text-sm text-gray-600 sm:text-base">
                <NavLink to="/" className="p-0">
                  Home
                </NavLink>
                <NavLink to="/Quem-somos" className="p-0">
                  Quem somos
                </NavLink>
                <NavLink to="/servicos" className="p-0">
                  Serviços
                </NavLink>
                <NavLink to="/contatos" className="p-0">
                  Contato
                </NavLink>
              </nav>
            </div>

            <div className="flex w-20 flex-col gap-5 md:w-[120px]">
              <span className="font-medium">Novidades</span>
              <nav className="flex flex-col gap-3 text-sm text-gray-600 sm:text-base">
                <NavLink to="" className="p-0">
                  Passaporte
                </NavLink>
                <NavLink to="" className="p-0">
                  Visto
                </NavLink>
                <NavLink to="" className="p-0">
                  Entrevisa
                </NavLink>
                <NavLink to="" className="p-0">
                  Polícia federal
                </NavLink>
              </nav>
            </div>

            <div className="flex w-20 flex-col gap-5 md:w-[120px]">
              <span className="font-medium">Suporte</span>
              <nav className="flex flex-col gap-3 text-sm text-gray-600 sm:text-base">
                <NavLink to="/" className="p-0 uppercase">
                  faq
                </NavLink>
                <NavLink to="" className="p-0">
                  Contato
                </NavLink>
                <NavLink to="" className="p-0">
                  Duvidas Frequentes
                </NavLink>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[70px] flex w-full flex-col items-center justify-center">
        <hr className="w-full text-gray-600" />
        <span className="mt-[31px] mb-[31px] px-8 text-center text-sm">
          © 2025 Tirar Visto - Todos os Direitos Reservados
        </span>
      </div>
    </div>
  );
}
