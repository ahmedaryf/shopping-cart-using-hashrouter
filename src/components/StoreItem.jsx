import { useEffect } from 'react'
import { Button, Card} from 'react-bootstrap'
import { formatCurreny } from '../utilities/formatCurrency'
import { useShoppingCart } from '../context/ShoppingCartContext'
import AOS from 'aos';
import 'aos/dist/aos.css';


export function StoreItem({id, productName, price, imageUrl}) {
  const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart();
  const quantity = getItemQuantity(id);

  useEffect(()=> {
    AOS.init();
  },[])

  return (
    <div>
        <Card className='d-flex align-items-center h-100' data-aos="fade-up" data-aos-once="true" data-aos-duration="1000">
            <Card.Img variant='top' src={imageUrl} height="200px" style={{width:"250px", objectFit: "cover"}}/>
            <Card.Body className='d-flex flex-column'>
              <Card.Title className='d-flex justify-content-around align-items-baseline mb-4'>
                <span className='fs-3'>{productName}</span>
                <span style={{fontSize: "1rem"}} className='ms-2 text-muted'>{formatCurreny(price)}</span>
              </Card.Title>
              <div className='mt-auto'>
                {quantity === 0 ? (
                  <Button className='w-100' onClick={() => increaseCartQuantity(id)}>+ Add To Cart</Button>
                ): <div className='d-flex align-items-center flex-column' style={{gap: ".5rem"}}>
                    <div className='d-flex align-items-center justify-content-center' style={{gap: ".5rem"}}>
                     <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                      <div>
                        <span className='fs-3'>{quantity}</span> in cart
                      </div>
                     <Button onClick={() => increaseCartQuantity(id)} >+</Button>
                    </div>
                    <Button onClick={() => removeFromCart(id)} variant='danger' size='sm'>Remove</Button>
                  </div>}
              </div>
            </Card.Body>
        </Card>
    </div>
  )
}

