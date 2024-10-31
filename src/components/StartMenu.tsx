const StartMenu: React.FC<{
  show: boolean;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
  title: React.ReactNode;
  children: React.ReactNode;
}> = ({ show, setShow, title, children }) => {
  return (
    <>
      {show && (
        <div id="start-menu">
          <h3 className="font-tegomin">
            「pLot_404」<span className="font-sofia">Halloween Novel Game</span>
          </h3>
          <h1 className="text-4xl sm:text-5xl p-5 md:text-6xl md:p-4 w-full">
            <span className="font-sofia">{title}</span>
          </h1>
          <br />
          <p className="text-sm w-5/6 m-auto md:w-1/2 lg:text-base">{children}</p>
          <button
            type="button"
            onClick={() => {
              setShow(false);
            }}
            className="w-full relative my-8 py-2 px-6 border-t-2 border-b-2 border-white before:absolute before:top-[-10px] before:left-2.5 before:w-[2px] before:h-[calc(100%_+_20px)] before:bg-white after:absolute after:top-[-10px] after:right-2.5 after:w-[2px] after:h-[calc(100%_+_20px)] after:bg-white"
          >
            <p>始める</p>
          </button>
        </div>
      )}
    </>
  );
};

export default StartMenu;
