
import Image from "next/image"
import Container from "./Container";

import PhoneIcon from "../assets/icon-phone.svg"
import SoluctionsIcon from "../assets/icon-solutions.svg"
import OptionsIcon from "../assets/icon-options.svg"
import CardIcon from "../assets/icon-card.svg"
import ImagePhone from "../assets/phone.png"

export function SectionServices() {
    return (
        <section className="relative w-full lg:h-[865px] xl:h-[965px]">
            <Container className="flex lg:items-center md:justify-center lg:justify-between w-full max-w-[1246px] px-[15px]  xl:px-2 mx-auto">
                <div className="flex-1 w-full lg:max-w-[650px] pt-10 lg:pt-24 xl:pt-32">
                    <span className="block text-sm font-bold uppercase mb-9 text-[var(--color-primary-orange)]">Serviços exclusivos</span>
                    <h2 className="text-[16px] lg:text-5xl xl:text-[56px] font-bold leading-tight mb-9 md:mb-6 text-[var((--color-primary-gray)]">Gerencie suas finanças sem sair de casa</h2>
                    <p className="text-center text-lg lg:text-start lg:max-w-[550px] xl:max-w-[600px] mb-16 text-[var(--color-second-gray)]">Veja como você pode cuidar das suas finanças pelo app Itaú de forma segura, rápida e o melhor, no conforto da sua casa.</p>
                    <ul className="flex flex-col gap-9"> 
                        <li className="flex items-center lg:max-w-[550px] xl:max-w-[580px] gap-9 pb-9 border-b border-b-[var(--color-opacity-gray)]">
                            <div className="w-7 h-7 flex items-center justify-center">
                            <Image src={PhoneIcon} alt="Search"/>
                            </div>
                            <p className="flex-1 text[14px] text-[var(--color-text-gray)]">Acompanha sua conta, fazer transferência e pagamentos de onde estiver</p>
                        </li>
                        <li className="flex items-center lg:max-w-[550px] xl:max-w-[580px] gap-9 pb-9 border-b border-b-[var(--color-opacity-gray)]">
                            <div className="w-7 h-7 flex items-center justify-center">
                            <Image src={SoluctionsIcon} alt="Search"/>
                            </div>
                            <p className="flex-1 text[14px] text-[var(--color-text-gray)]">Soluções de empréstimos e renegociação para organizar suas finanças</p>
                        </li>
                        <li className="flex items-center lg:max-w-[550px] xl:max-w-[580px] gap-9 pb-9 border-b border-b-[var(--color-opacity-gray)]">
                            <div className="w-7 h-7 flex items-center justify-center">
                            <Image src={OptionsIcon} alt="Search"/>
                            </div>
                            <p className="flex-1 text[14px] text-[var(--color-text-gray)]">Diversas opções de investimentos, de acordo com o seu perfil de investidor</p>
                        </li>
                        <li className="flex items-center lg:max-w-[550px] xl:max-w-[580px] gap-9">
                            <div className="w-7 h-7 flex items-center justify-center">
                            <Image src={CardIcon} alt="Search"/>
                            </div>
                            <p className="flex-1 text[14px] text-[var(--color-text-gray)]">Acompanhe a fatura do seu cartão e faça compras online com seu cartão virtual</p>
                        </li>
                    </ul>
                </div>
            </Container>
            <div className="hidden absolute top-0 right-0 lg:flex items-center lg:w-[25%] xl:w-[32%] h-full bg-[var(--color-gray-phone)]">
            <Image src={ImagePhone} alt="Phone" className="translate-x-[-50%]"/>
            </div>
        </section>
    )
}