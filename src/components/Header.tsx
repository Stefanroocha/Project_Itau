"use client";
import { useState } from "react";
import Image from "next/image";

import Container from "./Container";
import { ItemMenu } from "./ItemMenu";
import { Search } from "./Search";


import Logo from "../assets/logo.svg"
import IconUser from "../assets/icon-user.svg"
import IconMenu from "../assets/iconsMenu.png"


export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="flex items-center w-full h-20 bg-[var(--color-primary-orange)]">
            <Container className="flex items-center justify-between w-full max-w-[1246px] px-2.5 lg:px-[15px] mx-auto">
                <div className="flex flex-1 items-center justify-between">
                    <div className="flex items-center gap-14 sm:w-full sm:justify-between">
                    <Image src={Logo} alt="Logo" className="hidden sm:block"/>
                    <button
                    className="sm:max-sm:block xl:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                    <Image src={IconMenu} alt="Menu" className="w-9"/>
                    </button>
                    <ul className="hidden xl:flex items-center gap-14">
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
            </Container>
            <button className="w-[35px] flex lg:w-[25%] xl:[19%] items-center justify-end lg:justify-center gap-4 h-20 pr-2.5 lg:pl-10 lg:pr-10 bg-transparent lg:bg-[var(--color-primary-blue)]">
                <Image src={IconUser} alt="Search" className="w-7 lg:w-5"/>
                    <span className="hidden lg:flex text-white font-bold">Acessar conta</span>
                </button>
        </header>
    )
}