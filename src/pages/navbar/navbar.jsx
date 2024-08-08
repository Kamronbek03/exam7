import React from 'react';
import CustomNavLink from '../../components/NavbarLink/NavbarLink';
import { Home, Search, Library, Playlist, Songs } from "../Icons/Icons";

function Navbar() {
    return (
        <div className='flex justify-between h-[100vh]'>
            <div className='flex flex-col gap-[40px] mt-[50px]'>
                <div className='flex flex-col gap-[20px] px-[20px]'>
                    <ul>
                        <CustomNavLink url={"/"} title={"Home"}>
                            <Home />
                        </CustomNavLink>
                        <CustomNavLink url={"/search"} title={"Search"}>
                            <Search />
                        </CustomNavLink>
                        <CustomNavLink url={"/library"} title={"Your Library"}>
                            <Library />
                        </CustomNavLink>
                        <CustomNavLink url={"/create"} title={"Create Playlist"}>
                            <Playlist />
                        </CustomNavLink>
                        <CustomNavLink url={"/songs"} title={"Liked Songs"}>
                            <Songs />
                        </CustomNavLink>
                    </ul>
                    <span className='h-[1px] bg-[#282828] w-full'></span>
                    <ul className='flex flex-col gap-[18px] mb-[30px]'>
                        <li className='text-[18px] font-[450] leading-[22.77px] text-[#B3B3B3]'>Chill Mix</li>
                        <li className='text-[18px] font-[450] leading-[22.77px] text-[#B3B3B3]'>Insta Hits</li>
                        <li className='text-[18px] font-[450] leading-[22.77px] text-[#B3B3B3]'>Your Top Songs 2021</li>
                        <li className='text-[18px] font-[450] leading-[22.77px] text-[#B3B3B3]'>Mellow Songs</li>
                        <li className='text-[18px] font-[450] leading-[22.77px] text-[#B3B3B3]'>Anime Lofi & Chillhop Music</li>
                        <li className='text-[18px] font-[450] leading-[22.77px] text-[#B3B3B3]'>BG Afro “Select” Vibes</li>
                        <li className='text-[18px] font-[450] leading-[22.77px] text-[#B3B3B3]'>Afro “Select” Vibes</li>
                        <li className='text-[18px] font-[450] leading-[22.77px] text-[#B3B3B3]'>Happy Hits!</li>
                        <li className='text-[18px] font-[450] leading-[22.77px] text-[#B3B3B3]'>Deep Focus</li>
                        <li className='text-[18px] font-[450] leading-[22.77px] text-[#B3B3B3]'>Instrumental Study</li>
                        <li className='text-[18px] font-[450] leading-[22.77px] text-[#B3B3B3]'>OST Compilations</li>
                        <li className='text-[18px] font-[450] leading-[22.77px] text-[#B3B3B3]'>Nostalgia for old souled mill...</li>
                        <li className='text-[18px] font-[450] leading-[22.77px] text-[#B3B3B3]'>Mixed Feelings</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
