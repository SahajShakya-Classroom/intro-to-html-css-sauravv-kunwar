import Child2 from "./Child2"
import Child3 from "./Child3"
function Parent() {
    return (
        <div className="p-4 bg-green-100 m-4 rounded-lg">
            <h1 className="text-2xl font-bold text-green-800 mb-4"> This is my parent2 component</h1>
            <Child2 />
            <Child3 />
        </div>
    )
}


export default Parent