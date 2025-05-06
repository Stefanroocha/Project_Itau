import Image from "next/image"
import Container from "./Container";

import ImgAppeStore from "../assets/btn-apple-store.svg"
import ImgGooglePlay from "../assets/btn-google-play.svg"
import ArrowExplorer from "../assets/arrow-explorer.svg"
import WomanImage from "../assets/woman.png"

export function SectionHero() {
    return(
        <section className="w-full lg:h-[704px] bg-[url('../assets/bg-hero.jpg')] bg-no-repeat bg-center bg-cover">
            <Container className="flex items-center justify-center md:justify-between w-full max-w-[1246px] px-2 lg:px-[15px] mx-auto">
                <div className="flex-1 w-[600px] md:w-[560px]">
                    <h1 className="text-white lg:w-[512px] text-[90px] mb-10 mt-10 md:text-7xl font-bold md:mt-10 lg:mb-6 md:mb-8">Tenha seu banco na palma da mão.</h1>
                    <p className="text-white text-center md:text-start text-2xl lg:text-[18px] lg:w-[512px] mb-9 md:mb-8">Todas operações que você precisa em um só lugar. Simples, completo e feito pra você.</p>
                    <div className="flex items-center justify-center md:justify-start gap-4 mb-16 lg:mb-24">
                        <button>
                            <Image src={ImgAppeStore} alt="Apple Store"/>
                        </button>
                        <button>
                            <Image src={ImgGooglePlay} alt="Google Play"/>
                        </button>
                    </div>
                    <button className="flex items-center gap-3 mb-10 md:items-start lg:items-start">
                        <Image src={ArrowExplorer} alt="Arrow explorer" className="w-3 md:w-2.5"/>
                        <span className="text-white text-2xl md:text-sm font-bold">Continue explorando</span>
                    </button>
                </div>
                <Image src={WomanImage} alt="Woman Image" className="hidden md:block md:lg:mr-[-26px] md:w-[400px] lg:w-[600px] lg:mr-[-28px] xl:mr-[-67px]"/>
            </Container>
        </section>
    )
}