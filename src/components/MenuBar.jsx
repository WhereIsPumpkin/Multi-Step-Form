const MenuBar = () => {
  return (
    <div className="w-screen h-40 bg-mb-pattern bg-cover bg-no-repeat flex justify-center">
      <div className="flex gap-4 items-center mb-16">
        <div className="rounded-full h-8 w-8 flex items-center justify-center bg-transparent border border-white">
          <span className="font-ubuntu text-sm text-white font-bold">1</span>
        </div>
        <div className="rounded-full h-8 w-8 flex items-center justify-center bg-transparent border border-white">
          <span className="font-ubuntu text-sm text-white font-bold">2</span>
        </div>
        <div className="rounded-full h-8 w-8 flex items-center justify-center bg-transparent border border-white">
          <span className="font-ubuntu text-sm text-white font-bold">3</span>
        </div>
        <div className="rounded-full h-8 w-8 flex items-center justify-center bg-transparent border border-white">
          <span className="font-ubuntu text-sm text-white font-bold">4</span>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
