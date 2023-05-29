import Imagens from "@/src/components/imagens";
import Text from "@/src/components/text";
import Icons from "@/src/components/icons";
import Title from "@/src/components/title";
import Waves from "@/src/components/waves";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="w-auto h-auto waves-container right-side-color">
        <div className="flex flex-col">
          <h1 className="font-oswald text-4xl xl:text-5xl text-blue-light ml-[200px] lg:ml-[160px] md:ml-[130px] sm:ml-[70px] sm:ml-[70px] mt-[80px]">
            Olá, meu nome é
          </h1>
          <h1 className="font-oswald text-7xl xl:text-8xl text-blue-dark ml-[195px] lg:ml-[160px] md:ml-[130px] sm:ml-[70px] mt-[25px]">
            Danillo Monteiro
          </h1>
          <h2 className="font-oswald text-3xl xl:text-5xl text-blue-light sm:w-[300px] ml-[200px] lg:ml-[160px] md:ml-[130px] sm:ml-[70px] mt-[30px]">
            Desenvolvedor full-stack React
          </h2>
          <h3 className="font-oswald-400 w-[1050px] xl:w-[900px] lg:w-[600px] md:w-[400px] sm:w-[250px] text-2xl xl:text-3xl text-blue-dark ml-[200px] lg:ml-[160px] md:ml-[130px] sm:ml-[70px] mt-[25px] mb-[50px] flex-wrap">
            Olá, meu nome é Danillo Gustavo Monteiro no momento eu estou
            cursando Análise e Desenvolvimento de Sistemas, e fora isso sempre
            estou fazendo algum curso que me ajude a desenvolver meus
            conhecimentos. Se você está procurando um desenvolvedor
            comprometido, apaixonado e motivado para se juntar à sua equipe de
            desenvolvimento, só entrar em contato comigo. Estou ansioso para
            contribuir para o sucesso de sua empresa e aprender com vocês!
          </h3>
          <Icons />
          <div className="flex flex-col ">
            <h1 className="font-oswald-400 text-2xl xl:text-4xl text-blue-light ml-[200px] lg:ml-[160px] md:ml-[130px] sm:ml-[70px] mt-[40px]">
              Conhecimentos:
            </h1>
            <h1 className="font-oswald-400 w-[1050px] xl:w-[800px] lg:w-[600px] md:w-[400px] sm:w-[250px] text-2xl xl:text-3xl lg:text-2xl text-blue-dark ml-[200px] lg:ml-[160px] md:ml-[130px] sm:ml-[70px] mt-[30px] mb-[40px]">
              React, Node, Git, GitHub, TypeScript, Sass, Bootstrap, Bulma,
              Tailwindcss, MongoDB, PostgresSQL, Prisma, Material UI.
            </h1>
            <h1 className="font-oswald-400 text-2xl xl:text-4xl text-blue-light ml-[200px] lg:ml-[160px] md:ml-[130px] sm:ml-[70px] mt-[30px] mb-[30px]">
              Projetos:
            </h1>
            <h1 className="font-oswald-400 sm:w-[250px] text-2xl xl:text-3xl text-blue-dark ml-[200px]  lg:ml-[160px] md:ml-[130px] sm:ml-[70px]  mb-[40px]">
              Aqui estão alguns dos meus projeto.
            </h1>
            <div className="flex flex-row lg:w-[1200px] md:w-[500px] sm:w-[250px] lg:flex-wrap md:flex-wrap sm:flex-wrap ml-[200px] lg:ml-[160px] md:ml-[130px] sm:ml-[70px] gap-[40px] ">
              <div className="flex flex-col card mb-[20px]">
                <img
                  className="imagem mt-5 self-center "
                  src="https://www.guiaviagensbrasil.com/imagens/Imagem%20do%20mar%20calma%20e%20belo%20da%20Praia%20da%20Engenhoca-Itacar%C3%A9-Bahia-BA.jpg"
                ></img>
                <div className="flex justify-center gap-[20px] mt-5 xl:mt-3">
                  <button className="button1">Repositorio</button>
                  <button className="button1">Repositorio</button>
                </div>
              </div>
              <div className="flex flex-col card mb-[20px]">
                <img
                  className="imagem mt-5 self-center "
                  src="https://www.guiaviagensbrasil.com/imagens/Imagem%20do%20mar%20calma%20e%20belo%20da%20Praia%20da%20Engenhoca-Itacar%C3%A9-Bahia-BA.jpg"
                ></img>
                <div className="flex justify-center gap-[20px] mt-5 xl:mt-3">
                  <button className="button1">Repositorio</button>
                  <button className="button1">Repositorio</button>
                </div>
              </div>
              <div className="flex flex-col card mb-[40px]">
                <img
                  className="imagem mt-5 self-center "
                  src="https://www.guiaviagensbrasil.com/imagens/Imagem%20do%20mar%20calma%20e%20belo%20da%20Praia%20da%20Engenhoca-Itacar%C3%A9-Bahia-BA.jpg"
                ></img>
                <div className="flex justify-center gap-[20px] mt-5 xl:mt-3">
                  <button className="button1">Repositorio</button>
                  <button className="button1">Repositorio</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Image
          className="estrela-do-mar"
          src="/../public/images/estrela-do-mar.png"
          width={70}
          height={70}
        />
        <Image
          className="guarda-sol"
          src="/../public/images/guarda-sol1.png"
          width={170}
          height={170}
        />
        <Image
          className="concha-do-mar"
          src="/../public/images/concha-do-mar.png"
          width={50}
          height={50}
        />
        <Image
          className="folhas-de-coqueiro"
          src="/../public/images/folhas-de-coqueiro5.png"
          width={190}
          height={190}
        />
        <Image
          className="folhas-de-coqueiro2"
          src="/../public/images/folhas-de-coqueiro5.png"
          width={190}
          height={190}
        />
        <Image
          className="folhas-de-coqueiro3"
          src="/../public/images/folhas-de-coqueiro5.png"
          width={190}
          height={190}
        />
        <Image
          className="folhas-de-coqueiro4"
          src="/../public/images/folhas-de-coqueiro5.png"
          width={190}
          height={190}
        />
        <Image
          className="folhas-de-coqueiro5"
          src="/../public/images/folhas-de-coqueiro5.png"
          width={190}
          height={190}
        />
        <Image
          className="folhas-de-coqueiro6"
          src="/../public/images/folhas-de-coqueiro5.png"
          width={190}
          height={190}
        />
        <Image
          className="folhas-de-coqueiro7"
          src="/../public/images/folhas-de-coqueiro5.png"
          width={190}
          height={190}
        />
        <Image
          className="folhas-de-coqueiro8"
          src="/../public/images/folhas-de-coqueiro5.png"
          width={190}
          height={190}
        />
        <Image
          className="toalha"
          src="/../public/images/toalha1.png"
          width={130}
          height={130}
        />
        <Waves />
      </div>
    </>
  );
}
