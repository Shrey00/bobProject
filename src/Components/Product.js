import { useCallback,memo} from 'react';

const Product = memo(({ name, quantity, setProducts, index, c1, c2 }) => {
    let count = quantity;
    return (
        <div
            onClick={
                useCallback(() => {
                    ++count;
                    if (c1) {
                        c1[index].quantity = count;
                        setProducts((prev) => ({
                            ...prev,
                            c1,
                        }))
                    }
                    if (c2) {
                        c2[index].quantity = count;
                        setProducts((prev) => ({
                            ...prev,
                            c2,
                        }))
                    }
                },[])
                }>
            <p>{name}, quantity: {count}</p>
        </div>
    )
})

export default Product