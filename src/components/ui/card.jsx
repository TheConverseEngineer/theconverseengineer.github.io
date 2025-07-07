
export const Card = ({classes = "", title, content}) => {
    return (
    <div className={`border-[.5px] border-gray-800 rounded-xl bg-background shadow-2xl ${classes}`}>
        <div className="w-full rounded-t-xl text-white text-3xl px-6 py-2 bg-card mb-6"> 
            {title}
        </div>
      
        {content}
    </div>
    )
}