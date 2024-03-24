/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
export function Header(){
  return(
    <div className="navbar  bg-base-200 text-base-content drop-shadow-2xl">
      <div className="navbar-start visible md:invisible">
      <label htmlFor="drawer" className="btn btn-ghost btn-circle drawer-button">Pages</label>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl" href="/">DragonForgeCode</a>
      </div>
      <div className=" navbar-end">
        <label htmlFor="categories" className="drawer-button btn">Categories</label>
      </div>
    </div>
  );
}