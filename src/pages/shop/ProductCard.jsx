import React, { useContext } from 'react'
import { getImgUrl } from '../../utils/getImgUrl';
import { FaPlus } from 'react-icons/fa';
import { CartContext } from '../../context/CartContext';

const ProductCard = ({ products }) => {
    const {addToCart} = useContext(CartContext)
    return (
        <div>
            <div className='bg-[#fafafa]'>
                <img src={getImgUrl(`${products.imageUrl}`)} alt="" />
            </div>
            <div className='p-6 bg-white dark:bg-black rounded-lg shadow-md'>
                <h4>{products.category}</h4>
                <h3 className='font-semibold text-xl mb-2'>{products.name}</h3>
                <div className='flex items-center gap-2 mb-2'>
                    <span className='text-yellow-500'>{'★'.repeat(products.rating)}</span>
                    <span className='text-gray-500'>({products.rating})</span>
                </div>
                <div className='mt-5 flex justify-between items-center'>
                    <p>
                        <span>$</span>
                        <span className='text-2xl font-bold text-black dark:text-white'>{products.price}</span>
                    </p>
                    <button
                    onClick={() => addToCart(products)}
                    className='bg-slate-900/65 hover:text-black/20 text-white p-2 rounded-full text-sm'><FaPlus /></button>
                </div>
            </div>

        </div>
    )
}

export default ProductCard;