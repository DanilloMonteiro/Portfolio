export default function Title() {
  return (
    <>
      <div className="flex flex-row pt-10 pl-1">
        <div className="basis-1/12" />
        <h1 className="font-oswald text-4xl xl:text-6xl basis-9/12 text-blue-light">
          Olá, meu nome é
        </h1>
      </div>
      <div className="flex flex-row pt-6 ">
        <div className="basis-1/12" />
        <h1 className="font-oswald text-7xl xl:text-9xl basis-9/12 text-blue-dark">
          Danillo Monteiro
        </h1>
      </div>
      <div className="flex flex-row pt-10">
        <div className="basis-1/12" />
        <h2 className="font-oswald text-3xl xl:text-6xl basis-9/12 text-blue-dark">
          Desenvolvedor full-stack React
        </h2>
      </div>
    </>
  );
}
