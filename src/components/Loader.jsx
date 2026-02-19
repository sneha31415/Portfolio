// this lets us use html within canva
import { Html, useProgress } from "@react-three/drei"

// loader for displaying till the astronaut model loads
const Loader = () => {
    const { progress } = useProgress();
    return (
        <Html center className="text-xl font-normal text-center">
            {progress}% loaded</Html>
            )  
}

export default Loader