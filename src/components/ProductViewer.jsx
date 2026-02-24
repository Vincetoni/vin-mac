import clsx from "clsx";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";
import useMacBookStore from "../store";
import MacbookModel14 from "./models/Macbook-14";
import StudioLight from "./studioLight"

const ProductViewer = () => {

        const { color, setColor, scale, setScale } = useMacBookStore();
    return(
        <section id="product-viewer">
            <h2>Take a closer look</h2>

            <div className="controls">
                 <p className="info">Macbookpro {scale}" in {color} / space black</p>
            

             <div className="flex-center gap-5 mt-5">
                <div className="color-control">
                    <div 
                    onClick={() => setColor('#adb5bd')} 
                    className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')} 
                    />

                    <div 
                    onClick={() => setColor('#0fe70f')} 
                    className={clsx('bg-neutral-900', color === '#0fe70f' && 'active')}
                    />
                </div>

                <div className="size-control">
                   <div 
                    onClick={() => setScale(0.06)} 
                    className={clsx(scale === 0.06 ? 'bg-white text-black' : 'bg-transparent text-white')}
                    >14</div>

                    <div 
                    onClick={() => setScale(0.08)} 
                    className={clsx(scale === 0.08 ? 'bg-white text-black' : 'bg-transparent text-white')}
                    >16</div>

                </div>

             </div>
            </div>
         <Canvas id="canvas" camera={{ position:[0,2,5], fov:50, near:0.1, far:100}}>
            <StudioLight />
                  
            <MacbookModel14 scale={0.06} position={[0, 0.5, 0]} />

            <OrbitControls enableZoom={false} />
        </Canvas>
        </section>
    )
}

export default ProductViewer
