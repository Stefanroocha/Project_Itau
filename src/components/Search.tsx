import Image from "next/image";
import IconSearch from "../assets/icon-search.svg"

export function Search() {
    return (
        <div className="flex items-center gap-4">
            <Image src={IconSearch} alt="Search"/>
            <input type="text" className="text-white bg-transparent outline-none placeholder:text-white pr-5"  placeholder="Buscar"/>
        </div>
    )
}