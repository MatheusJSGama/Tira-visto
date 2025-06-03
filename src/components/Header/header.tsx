import clsx from 'clsx';
import { NavLink } from '../NavLink/nav-link';
import { Link } from 'react-router-dom';
import { useIsLargeScreen } from './is-large-screen';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  isHome: boolean;
}

export function Header(props: HeaderProps) {
  const isLargeScreen = useIsLargeScreen();

  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    if (!isOpen) {
      setIsVisible(true);
      setIsOpen(true);
    } else {
      setIsOpen(false);
      setTimeout(() => {
        setIsVisible(false);
      }, 800);
    }
  };

  return (
    <div
      className={clsx('px-8 sml:px-[60px]', {
        'w-[1432px]': isLargeScreen,
        'w-full': !isLargeScreen,
      })}
    >
      <header
        className={clsx('flex py-[30px] md:justify-between', {
          'max-w-[538px] self-start': props.isHome === true && isLargeScreen,
        })}
      >
        <Menu className="mr-4 md:hidden" onClick={toggleMenu} />
        {isVisible && (
          <>
            <div
              className={clsx(
                'fixed inset-0 z-2 w-0 animate-slideInOVerlay bg-black/80',
                isOpen ? 'animate-slideInOVerlay' : 'animate-slideOutOVerlay',
              )}
              onClick={toggleMenu}
            ></div>
            <div
              className={clsx(
                'fixed inset-0 z-3 flex flex-col items-center justify-center bg-white',
                isOpen ? 'animate-slideIn' : 'animate-slideOut',
              )}
            >
              <X
                className={clsx(
                  'absolute top-16 left-8 text-3xl',
                  isOpen ? 'animate-fadeIn' : 'animate-fadeOut',
                )}
                onClick={toggleMenu}
                aria-label="Fechar menu"
              />
              <nav
                className={clsx(
                  'absolute top-24 left-8 flex w-full flex-col',
                  isOpen ? 'animate-fadeIn' : 'animate-fadeOut',
                )}
              >
                <NavLink to={'/'} onClick={toggleMenu}>
                  Home
                </NavLink>
                <NavLink to={'/Quem-somos'} onClick={toggleMenu}>
                  Quem somos
                </NavLink>
                <NavLink to={'/Servicos'} onClick={toggleMenu}>
                  Serviços
                </NavLink>
                <NavLink to={'/Contatos'} onClick={toggleMenu}>
                  Contato
                </NavLink>
              </nav>
            </div>
          </>
        )}

        <Link to={'/'}>
          <img src="/logo.svg" alt="Logotipo Tirar Visto" />
        </Link>
        <nav className="gapp-1 hidden items-center md:flex">
          <NavLink to={'/'}>Home</NavLink>
          <NavLink to={'/Quem-somos'}>Quem somos</NavLink>
          <NavLink to={'/Servicos'}>Serviços</NavLink>
          <NavLink to={'/Contatos'}>Contato</NavLink>
        </nav>
      </header>
    </div>
  );
}
