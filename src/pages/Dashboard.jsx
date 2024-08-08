import React from 'react'
import { Route, Routes } from 'react-router-dom/dist'
import Navbar from './navbar/navbar'
import HomePage from "../pages/Home"
import SearchPage from "../pages/Search"
import LibraryPage from "../pages/Library"
import PlaylistPage from "../pages/Playlist"
import LikedPage from "../pages/Songs"
import Part from './Part'
function Dashboard({ code}) {
    return (
        <div className='flex flex-col '>
            <div className='flex  pb-[50px]'>
                <div className='w-[20%] relative overflow-y-auto bg-[#000000] h-[100vh]'>
                    <Navbar />
                </div>
                <div className='w-[60%] overflow-y-auto h-[100vh]'>
                    <Routes>
                        <Route path="/" element={<HomePage code={code} />} />
                        <Route path="/search" element={<SearchPage/>} />
                        <Route path="/library" element={<LibraryPage />} />
                        <Route path="/create" element={<PlaylistPage />} />
                        <Route path="/songs" element={<LikedPage/>} />
                        {/* <Route path="/more" element={<MorePage />} /> */}
                    </Routes>
                </div>
                <div className='w-[20%] bg-[#00000000]'>
                    <Part />
                </div>
            </div>
        </div>
    )
}

export default Dashboard