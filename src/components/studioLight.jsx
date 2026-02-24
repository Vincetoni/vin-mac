import { Environment, Lightformer } from "@react-three/drei";

const StudioLight = () => {
  return (
    <group name="light">
        <ambientLight intensity={0.6} />
        <Environment resolution={256}>
            <group>
                <Lightformer 
                    form="rect"
                    intensity={20}
                    position={[-10,5,-5]}
                />
            </group>
        </Environment>
    </group>
  )
}

export default StudioLight
