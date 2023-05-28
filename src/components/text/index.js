import Icons from "@/src/components/icons";

export default function Text() {
  return (
    <>
      <div className="flex flex-row pt-10">
        <div className="basis-1/12" />
        <h3 className="font-oswald-400 text-2xl xl:text-4xl basis-7/12 text-blue-dark">
          Olá, meu nome é Danillo Gustavo Monteiro no momento eu estou cursando
          Análise e Desenvolvimento de Sistemas, e fora isso sempre estou
          fazendo algum curso que me ajude a desenvolver meus conhecimentos. Se
          você está procurando um desenvolvedor comprometido, apaixonado e
          motivado para se juntar à sua equipe de desenvolvimento, só entrar em
          contato comigo. Estou ansioso para contribuir para o sucesso de sua
          empresa e aprender com vocês!
        </h3>
      </div>
      <Icons />
      <div className="font-oswald-400 text-blue-dark">
        <h1 className="">Conhecimentos</h1>
      </div>
    </>
  );
}
