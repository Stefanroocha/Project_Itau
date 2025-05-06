import Image from "next/image";

import Container from "./Container";
import { ItemMenu } from "./ItemMenu";
import { Search } from "./Search";


import Logo from "../assets/logo.svg"
import IconUser from "../assets/icon-user.svg"


export function Header() {
    return (
        <header className="relative flex items-center w-full h-20 bg-[var(--color-primary-orange)]">
            <div
            className="absolute top-0 right-0 w-[19%] h-20 z-0"
            style={{ backgroundColor: "var(--color-primary-blue)" }}
            ></div>
            <Container className="flex items-center justify-between w-full max-w-[1246px] px-[15px] mx-auto">
                <div className="flex flex-1 items-center justify-between">
                    <div className="flex items-center gap-14">
                    <Image src={Logo} alt="Logo" />
                    <ul className="flex items-center gap-14">
                        <li>
                            <ItemMenu
                            name="Para você"
                            />
                        </li>
                        <li>
                            <ItemMenu
                            name="Para empresas"
                            />
                        </li>
                        <li>
                            <ItemMenu
                            name="Serviços"
                            />
                        </li>
                        <li>
                            <ItemMenu
                            name="Para empresas"
                            />
                        </li>
                        <li>
                            <ItemMenu
                            name="Ajuda"
                            />
                        </li>
                    </ul>
                    </div>
                    <Search/>
                </div>
                <button className="relative flex items-center gap-4 h-20 pl-10 z-10" style={{ backgroundColor: "var(--color-primary-blue)" }}>
                <Image src={IconUser} alt="Search"/>
                    <span className="text-white font-bold">Acessar conta</span>
                </button>
            </Container>
        </header>
    )
}