import BookCreate from "../components/Book/BookCreate"
import { Bg } from "../components/dist/bg"

export default function page (){

    return (
        <div className="flex min-h-screen w-f bg-gray-100">
            <Bg/>
            <BookCreate className="m-4"/></div>
            
        
    )
}