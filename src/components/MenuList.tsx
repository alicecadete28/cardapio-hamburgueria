import burger1 from '../assets/burger1.png';
import burger2 from '../assets/burger2.png';
import burger3 from '../assets/burger3.png';
import burger4 from '../assets/burger4.png';
import burger5 from '../assets/burger5.png';
import burger6 from '../assets/burger6.png';
import burger7 from '../assets/burger7.png';
import burger8 from '../assets/burger8.png';
import refri1 from '../assets/refri1.png';
import refri2 from '../assets/refri2.png';
export function MenuList({ onAdd, openPopUp }) {
  return(
    <div>
            <div className='text-center py-[70px]'>
              <h2 className='title'>Conheça nosso menu</h2>
            </div>
            <main className='grid grid-cols-1 md:grid-cols-2 w-full h-auto px-[95px] gap-x-14 gap-y-8 mb-8'>
              
              <div className='flex gap-4'>
                <img src={burger1} className='w-[144px] h-[144px] rounded hover:scale-110'/>
                <div>
                  <p className='font-bold'>Cheese Burger Duplo</p>
                  <p className='text-sm'>Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa</p>
                  <div className='flex justify-between items-center mt-[20px]'>
                    <p>R$ 35,90</p>
                    <button className='bg-gray-900 text-white px-5 rounded add-to-cart-btn'
                    data-name='Cheese Burger Duplo'
                    data-price='35.90'
                    onClick={ () => {onAdd(); openPopUp(); } }
                    >
                      <i className='fa fa-cart-plus text-lg text-white'></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className='flex gap-4'>
                <img src={burger2} className='w-[144px] h-[144px] rounded hover:scale-110'/>
                <div>
                  <p className='font-bold'>Cheese Burger</p>
                  <p className='text-sm'>Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa</p>
                  <div className='flex justify-between items-center mt-[20px]'>
                    <p>R$ 35,90</p>
                    <button className='bg-gray-900 px-5 rounded'
                    data-name='Cheese Burger'
                    data-price='35.90'
                    onClick={onAdd}
                    >
                      <i className='fa fa-cart-plus text-lg text-white'></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className='flex gap-4'>
                <img src={burger3} className='w-[144px] h-[144px] rounded hover:scale-110'/>
                <div>
                  <p className='font-bold'>Smash Burger</p>
                  <p className='text-sm'>Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa</p>
                  <div className='flex justify-between items-center mt-[20px]'>
                    <p>R$ 35,90</p>
                    <button className='bg-gray-900 text-white px-5 rounded'
                    data-name='Smash Burger'
                    data-price='35.90'
                    onClick={onAdd}>
                      <i className='fa fa-cart-plus text-lg text-white'></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className='flex gap-4'>
                <img src={burger4} className='w-[144px] h-[144px] rounded hover:scale-110'/>
                <div>
                  <p className='font-bold'>Cheese Bacon</p>
                  <p className='text-sm'>Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa</p>
                  <div className='flex justify-between items-center mt-[20px]'>
                    <p>R$ 35,90</p>
                    <button className='bg-gray-900 px-5 rounded'
                    data-name='Cheese Bacon'
                    data-price='35.90'
                    onClick={onAdd}>
                      <i className='fa fa-cart-plus text-lg text-white'></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className='flex gap-4'>
                  <img src={burger5} className='w-[144px] h-[144px] rounded hover:scale-110'/>
                  <div>
                    <p className='font-bold'>Cheese Burger Premium</p>
                    <p className='text-sm'>Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa</p>
                    <div className='flex justify-between items-center mt-[20px]'>
                      <p>R$ 35,90</p>
                      <button className='bg-gray-900 px-5 rounded'
                      data-name='Cheese Burger Premium'
                      data-price='35.90'
                      onClick={onAdd}
                      >
                        <i className='fa fa-cart-plus text-lg text-white'></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <img src={burger6 } className='w-[144px] h-[144px] rounded hover:scale-110'/>
                  <div>
                    <p className='font-bold'>Cheese Burger Onion</p>
                    <p className='text-sm'>Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa</p>
                    <div className='flex justify-between items-center mt-[20px]'>
                      <p>R$ 35,90</p>
                      <button className='bg-gray-900 px-5 rounded'
                      data-name='Cheese Burger Onion'
                      data-price='35.90'
                      onClick={onAdd}>
                        <i className='fa fa-cart-plus text-lg text-white'></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <img src={burger7} className='w-[144px] h-[144px] rounded hover:scale-110'/>
                  <div>
                    <p className='font-bold'>Cheese Salada</p>
                    <p className='text-sm'>Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa</p>
                    <div className='flex justify-between items-center mt-[20px]'>
                      <p>R$ 35,90</p>
                      <button className='bg-gray-900 px-5 rounded'
                      data-name='Cheese Salada'
                      data-price='35.90'
                      onClick={onAdd}>
                        <i className='fa fa-cart-plus text-lg text-white'></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className='flex gap-4'>
                  <img src={burger8} className='w-[144px] h-[144px] rounded hover:scale-110'/>
                  <div>
                    <p className='font-bold'>Cheese Burger Super</p>
                    <p className='text-sm'>Pão levinho de fermentação natural da Trigou, burger 160g, queijo prato e maionese da casa</p>
                    <div className='flex justify-between items-center mt-[20px]'>
                      <p>R$ 35,90</p>
                      <button className='bg-gray-900 px-5 rounded'
                      data-name='Cheese Burger Super'
                      data-price='35.90'
                      onClick={onAdd}>
                        <i className='fa fa-cart-plus text-lg text-white'></i>
                      </button>
                    </div>
                  </div>
                </div>
            </main>
       
          {/* BEBIDA ITENS */}
    
          <div className='w-full px-[95px] my-2'>
            <h2 className='font-bold text-3xl'>Bebidas</h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 w-full h-auto px-[95px] gap-x-14 gap-y-10 pb-20 '>
            <div className='flex gap-4'>
              <img src={refri1 } className='w-[144px] h-[144px] rounded hover:scale-110'/>
              <div className='w-full'>
                <p className='font-bold'>Coca Cola Lata</p>
                
                <div className='flex justify-between items-center mt-[20px]'>
                  <p>R$ 5,90</p>
                  <button className='bg-gray-900 px-5 rounded'
                  data-name='Coca Cola Lata'
                  data-price='35.90'
                  onClick={onAdd}>
                    <i className='fa fa-cart-plus text-lg text-white'></i>
                  </button>
                </div>
              </div>
            </div>
            <div className='flex gap-4'>
              <img src={refri2 } className='w-[144px] h-[144px] rounded hover:scale-110'/>
              <div className='w-full'>
                <p className='font-bold'>Guaraná Lata</p>
                
                <div className='flex justify-between items-center mt-[20px]'>
                  <p>R$ 5,90</p>
                  <button className='bg-gray-900 px-5 rounded'
                  data-name='Guaraná Lata'
                  data-price='35.90'
                  onClick={onAdd}>
                    <i className='fa fa-cart-plus text-lg text-white'></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div> 
  );
}