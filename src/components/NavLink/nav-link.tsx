import { Link, useLocation, type LinkProps } from 'react-router-dom';

export type NavLinkProps = LinkProps;

export function NavLink(props: LinkProps) {
  const { pathname } = useLocation();

  return (
    <Link
      data-current={pathname === props.to}
      className="hover:text-light-ice rounded-md p-3 duration-300 hover:bg-dark-blue hover:text-white data-[current=true]:font-bold"
      {...props}
    />
  );
}
