import clsx from "clsx";
import useMacBookStore from "../store";

const ProductViewer = () => {

        const { color, setColor, scale, setScale } = useMacBookStore();
    return(
        <section id="product-viewer">
            <h2>Take a closer look</h2>

            <div className="controls">
                 <p className="info">Macbookpro 16" in {color} / space black</p>
            

            <div className="flex-center gap-5 mt-5">
                <div className="color-control">
                    <div 
                    onClick={() => setColor('#adb5bd')} 
                    className={clsx('bg-neutral-300', color === '#adb5bd' && 'active')} 
                    />

                    <div 
                    onClick={() => setColor('black')} 
                    className={clsx('bg-neutral-900', color === 'black' && 'active')}
                    />
                </div>

                <div className="size-control">
                   <div><p>14"</p></div>
                   <div><p>16"</p></div>
                </div>

            </div>
            </div>
        </section>
    )
}

export default ProductViewer
