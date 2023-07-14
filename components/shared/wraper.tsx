import { FC } from "react"


const Wraper: FC<{children: React.ReactNode}> = ({children}) => {
    return(
        <div className="max-w-[1440px] mx-auto px-6">
            {children}
        </div>
    )
} 

export default Wraper