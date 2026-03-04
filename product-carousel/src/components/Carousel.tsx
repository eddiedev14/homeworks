import type IProduct from "../interfaces/IProduct"
import { Button } from "./Button";

interface Props {
    product: IProduct
    onPrev: () => void;
    onNext: () => void;
}

export const Carousel = ({ product, onPrev, onNext }: Props) => {
    return (
        <>
            <main className="flex flex-col items-center gap-4 max-w-56 py-2 px-4 border border-gray-200 rounded-md shadow mt-6 mx-auto">
                <img src={product.img} alt="Product thumbnail" className="size-32" />
                <div>
                    <h3 className="font-medium text-xl">{product.name}</h3>
                    <p className="font-extrabold text-2xl">${product.price} USD</p>
                </div>
            </main>
            <div className="flex justify-center gap-2 mt-4">
                <Button text="Anterior" onClick={onPrev} />
                <Button text="Siguiente" onClick={onNext} />
            </div>
        </>
    )
}
