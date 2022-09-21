import pratocc from './img/pratocc.png';
import comida1 from './img/comida1.png';
import bc from './img/bc.png';
import laranja from'./img/laranja.png';
import vv from './img/vv.png';
import folha from './img/folha.png';
import noodles from './img/noodles.png';
import nn from './img/nn.png';
import face from './img/face.jpg'
import figura from './img/figura.png';
import pratob from './img/pratob.png';
import garfo from './img/garfo.png';
import tomates from './img/tomates.png';
import comidas from './img/comidas.png';
import React from 'react';

export default function App(){
  return (
   <body>
        <header className='copntainer'>
          <div className='menu'>
        
            <h1>Nutri</h1>
            <div>
            <img src={comidas}className='comidas'alt='comidas' width={110}/>
            <img src={tomates}className='tomates'alt='tomates' width={120}/>
            <img src={garfo}className='garfo'alt='garfo' width={250}/> 
            <img src={pratob}className='pratob'alt='pratob' width={100}/> 
        <img src={comida1}className='comida1'alt='comida1' width={250}/> 
        <img src={folha}className='folha'alt='folha' width={150}/>
        <img src={figura}className='figura'alt='figura' width={150}/>
        <img src={nn}className='nn'alt='nn' width={150}/>
        <img src={noodles}className='noodles'alt='noodles'width={90}/>
        <img src={laranja}className='laranja'alt='laranja' width={150}/>
<img src={pratocc}className='pratocc'alt='pratocc'width={150}/>
 <img src={bc}className='bc'alt='bc'width={90}/>

              <nav>
                
                <button className='botao'>
               
                  <a href='#'>  como fazemos &nbsp </a>

                  <a href='#'>Planos e serviços</a>

                  <a href='#'>Receitas</a>

                  <a href='#'>Sobre Nós</a>
                
                  
                </button>
               
              </nav>
            </div>
            
          </div>
        </header> 
        <main>
          <div className='container'>
          
            <p className='descricao'>Receitas pensadas em voce, experimente e desfrute desses sabores.<br></br> veja tambem nossas redes socias.</p>
          </div>
        </main>
       
         <div className='group'>
          
               <p>
                  <span ><a >ver cardapio <br></br></a></span>
              
                   <span><a >cancelar compra<br></br></a>  </span>
                </p>
         </div> 
      
         <div className='group2'>
        
         <p className='not-account'>
              
              <span >ver cardapio <br></br></span>
              
              <span>cancelar compra  </span>
             </p>
         </div>
         <div className='group3'>
          
          <p className='not-account'>
           
           <span>ver cardapio <br></br></span>
           
           <span>cancelar compra  </span>
          </p>
         
      </div>
      <div className='group4'>
      <p clasNames="not-account">
           
           <span><a>ver cardapio<br></br></a> </span>
           
           <span>cancelar compra  </span>
           
      </p>
      </div>
        <img src={vv}className='vv'alt='vector' width={300}/>
        <footer>
          <div>
            <p>veja tambem nossas redes socias.</p>
          <img src={face}className='face'alt='face' width={60}/>
          </div>
        </footer>
      </body>
      
  )
}