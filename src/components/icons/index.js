import Image from "next/image";

export default function Icons() {
  return (
    <>
      <div className="flex flex-row icons-container ml-[200px] lg:ml-[160px] md:ml-[130px] sm:ml-[70px]">
        <a href="https://github.com/DanilloMonteiro" target="_blank">
          <Image
            className="icon1"
            src="/images/github1.png"
            width={70}
            height={70}
          />
        </a>
        <a
          href="https://www.linkedin.com/in/danillo-monteiro-7227a419b/"
          target="_blank"
        >
          <Image
            className="icon2 "
            src="/images/linkedin1.png"
            width={70}
            height={70}
          />
        </a>
        <a href="mailto:danillo.monteiro324@outlook.com" target="_blank">
          <Image
            className="icon3"
            src="/images/email.png"
            width={70}
            height={70}
          />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5519997058652"
          target="_blank"
        >
          <Image
            className="icon4"
            src="/images/whatsapp1.png"
            width={70}
            height={70}
          />
        </a>
      </div>
    </>
  );
}
