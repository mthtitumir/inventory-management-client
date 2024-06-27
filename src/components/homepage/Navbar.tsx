const Navbar = () => {
  return (
    <div className=" bg-sky-100">
      <div className="flex py-3 container mx-auto">
        <div className="w-1/2">
          <h4 className="text-xl">Inventory</h4>
        </div>
        <div className="w-1/2">
          <ul
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              listStyle: "none",
            }}
          >
            <li>Features</li>
            <li>Pricing</li>
            <li>About Us</li>
            <li>
              <button className="border-main rounded-sm py-1 px-3 text-center text-sm">
                Login
              </button>
            </li>
            <li>
              <button className="border-main rounded-sm py-1 px-3 text-center text-sm">
                Try Demo Version
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
