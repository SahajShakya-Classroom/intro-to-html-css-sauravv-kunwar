import Child from "./Child"
import Child1 from "./Child1"
function Parent() {
    return (
        <div className="p-4 bg-blue-100 m-4 rounded-lg">
            <h1 className="text-2xl font-bold text-blue-800 mb-4"> This is my parent1 component</h1>
            <Child />
            <Child1 />
        </div>
    )
}


export default Parent