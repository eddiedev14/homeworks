import { useEffect, useState } from "react"
import { Header } from "./Header"
import DoubleLinkedList from "../algorithms/DoubleLinkedList"
import { products } from "../data/products.mock.data"
import { Carousel } from "./Carousel"

export const App = () => {
    //* States
    const [carousel, setCarousel] = useState(() => {
        const list = new DoubleLinkedList()
        products.forEach(product => {
            list.append(product)
        })
        return list;
    })
    const [currentProduct, setCurrentProduct] = useState(carousel.peek(1))

    //* Effects
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentProduct(prev => {
                if (!prev) return null;
                return prev.next;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    //* Handlers
    const handlePrevProduct = () => {
        if (!currentProduct) return;
        setCurrentProduct(currentProduct?.prev)
    }

    const handleNextProduct = () => {
        if (!currentProduct) return;
        setCurrentProduct(currentProduct?.next)
    }

    return (
        <>
            <Header title="Product Carousel" paragraph="Practica 02 - Corte 02" />
            {currentProduct && <Carousel product={currentProduct.value} onNext={handleNextProduct} onPrev={handlePrevProduct} />}
        </>
    )
}
