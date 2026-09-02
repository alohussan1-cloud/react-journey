
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  return (
     <div className='flex h-7/10 flex-col'>
      <div className="p-4 text-2xl font-normal flex gap-16 justify-center">
        
        <Link to="/products/phones"  > Phones</Link>
        <Link to="/products/laptops"  > Laptops</Link>
        <Link to="/products/accessories"  > Accessories</Link>
      </div>
      

    <Outlet/>
    </div>
  )
}

export default Products