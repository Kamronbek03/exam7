import React from "react";

function ArtistList({ item, choosePlay }) {
  return (
    <div
      onClick={() => choosePlay(item)}
      className="flex flex-col rounded-[8px] bg-opacity-[4%] bg-gray-900 border-2 border-gray-700 w-[172px] p-[10px] scale-100 hover:scale-110 active:bg-green-600 cursor-pointer"
    >
      <img src={item.img} alt="Artist" width={162} height={162} />
      <div className="p-2">
        <p className="font-bold text-[20px] leading-[25.3px] tracking-[3%] text-[#FFFFFF]">{item.artist}</p>
        <p className="font-[450] text-[18px] leading-[22.77px] text-[#B3B3B3]">{item.name}</p>
        {item.type === 'track' && <p className="text-sm text-gray-500">{item.artist}</p>}
      </div>
    </div>
  );
}

export default ArtistList;
