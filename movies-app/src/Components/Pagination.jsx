
export default function Pagination({page,handlenext,handlebefore}){
  
 return(
   <div className="flex justify-center text-3xl gap-8 h-[4rem] w-[screen] bg-slate-400 items-center">
    <div onClick={handlebefore} className="cursor-pointer"><i className="fa-solid fa-angle-left"></i></div>
    <div>{page}</div>
    <div onClick={handlenext} className="cursor-pointer"><i className="fa-solid fa-angle-right"></i></div>
   </div>
    
 )
}