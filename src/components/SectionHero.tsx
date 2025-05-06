import Image from "next/image"
import Container from "./Container";

import ImgAppeStore from "../assets/btn-apple-store.svg"
import ImgGooglePlay from "../assets/btn-google-play.svg"
import ArrowExplorer from "../assets/arrow-explorer.svg"
import WomanImage from "../assets/woman.png"

export function SectionHero() {
    return(
        <section className="w-full h-[704px] bg-[url('../assets/bg-hero.jpg')] bg-no-repeat bg-center bg-cover">
            <Container className="flex items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto">
                <div className="flex-1 max-w-[560px]">
                    <h1 className="text-white text-7xl font-bold mb-4">Tenha seu banco na palma da mão.</h1>
                    <p className="text-white text-xl  max-w-[420px] mb-8">Todas operações que você precisa em um só lugar. Simples, completo e feito pra você.</p>
                    <div className="flex gap-4 mb-24">
                        <button>
                            <Image src={ImgAppeStore} alt="Apple Store"/>
                        </button>
                        <button>
                            <Image src={ImgGooglePlay} alt="Google Play"/>
                        </button>
                    </div>
                    <button className="flex items-center gap-3">
                        <Image src={ArrowExplorer} alt="Arrow explorer" />
                        <span className="text-white text-sm font-bold">Continue explorando</span>
                    </button>
                </div>
                <Image src={WomanImage} alt="Woman Image" className="mr-[-40px]"/>
            </Container>
        </section>
    )
}