// import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import './bootstrap.min.css';
import './commonstyles.css';
import './welcome.css';
import './glide.core.css';
import './glide.core.min.css';
import './glide.theme.css';
import './glide.theme.min.css';
import './fontawesome-all.min.css';

import {
  IonContent,
  IonHeader,
  IonPage,
  IonSearchbar,
  IonSlide,
  IonSlides,
  IonTitle,
  IonToolbar,
} from '@ionic/react';

const slideOpts = {
    initialSlide: 1,
    speed: 400,
    grabCursor: true,
    effect: 'cube',
    cubeEffect: {
        slideShadows: false,
      },
      autoplay: {
        delay: 5000,
      },
  };
const Tab1: React.FC = () => {
 
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle> 
                                                                          
                                                               
          <IonSearchbar show-cancel-button="focus"></IonSearchbar>  
             
              </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
                       <div className="container mt-5 " x-data x-init="collectionSliders">
                                    <div className="row  part1 mb-5 py-0">
                        
                                        <div className="col-md-6 col-xs-6 hsp">
                                              <div className=" hero-slider " x-data x-init="new Glide('.hero-slider', { autoplay: 3000, type: 'carousel' }).mount()">
                                                <div className="glide__track" data-glide-el="track">
                                                    <div className="glide__slides">
                                                    <IonSlides pager={true} options={slideOpts}>
                                     
                                                                <IonSlide>  
                                                                    <div className="glide__slide">

                                                                            
                                                                                    <div className="bg-center  bg-no-repeat bg-cover" >
                                                                                        <div className="mb-0 py-48  px-0  text-center sm:w-5/6 lg:w-3/4 xl:w-2/3">
                                                                                        <img src="assets/img/bg/aiony-haust-K0DxxljcRv0-unsplash.jpg" />
                                                                                            <a href="{{ route('vet_access') }}" className="   btn btn-primary btn-lg mb-0 smalltxt">Vêtements et Accessoires</a>
                                                                                        </div>
                                                                                    </div>
                                                                            
                                                                    
                                                                    </div>
                                                                </IonSlide>
                                                            
                                                                    <IonSlide>
                                                                        <div className="glide__slide">

                                                                    
                                                                    
                                                                            <div className="bg-center bg-no-repeat bg-cover" >
                                                                                                    <div className="mb-0 py-48 px-0  text-center  sm:w-5/6 lg:w-3/4 xl:w-2/3">
                                                                                                    <img className="w-full cover-full" src="assets/img/bg/tamara-bellis-y6CbTYPjY3Y-unsplash.jpg" />
                                                                                                        <a href="{{ route('vet_access') }}" className="btn btn-primary btn-lg mb-0 smalltxt">Vêtements et Accessoires</a>
                                                                                                    </div>
                                                                                                </div>
                                                                                        
                                                                    
                                                                        </div>     
                                                                </IonSlide>
                                                     </IonSlides>                   
                                                         
                                                    </div>
                                                </div>
                                              
                                            </div>
                        
                                        </div>
                                        <div className="col-md-6 col-xs-6 hsp">
                                            <div className="hero-slides " x-data x-init="new Glide('.hero-slides', { autoplay: 3000, type: 'carousel' }).mount()">
                                                <div className="glide__track" data-glide-el="track">
                                                    <div className="glide__slides">
                        
                                                    <IonSlides pager={true} options={slideOpts}>
                        
                                               
                                                                <IonSlide>   
                                                                    
                                                                    <div className="glide__slide">
                                                                        <div className="bg-center bg-no-repeat bg-cover" >
                                                                            <div className="mb-0 py-48 px-0  text-center  sm:w-5/6 lg:w-3/4 xl:w-2/3">
                                                                                  <img  src="assets/img/bg/vladimir-yelizarov-7UOFTvTsHuU-unsplash.jpg" />
                                                                                <a href="{{ route('chev_coif') }}" className="btn btn-primary btn-lg mb-0 smalltxt">Cheveux et Coiffures</a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    
                                                                    </IonSlide>

                                                                    <IonSlide>  
                                                                        
                                                                    <div className="glide__slide">
                                                                            <div className="bg-center bg-no-repeat bg-cover" >
                                                                                <div className="mb-0 py-48 px-0  text-center  sm:w-5/6 lg:w-3/4 xl:w-2/3">
                                                                                <img  src="assets/img/bg/molly-mears-AX-7NFFrOZo-unsplash.jpg" />
                                                                                    <a href="{{ route('chev_coif') }}" className="btn btn-primary btn-lg mb-0 smalltxt">Cheveux et Coiffures</a>
                                                                                </div>
                                                                            </div>
                                                                    </div> 
                                                                    
                                                                    </IonSlide>
                                                        
                                                        </IonSlides>     
                        
                                                    </div>
                                                </div>
                                              
                                            </div>
                                          
                                        </div>
                                    </div>
                                    <div className="row part2 mb-5 py-2">
                                        <div className="col-md-6 col-xs-6 hsp">
                                            <div className="hero-sliders " x-data x-init="new Glide('.hero-sliders', { autoplay: 3000, type: 'carousel' }).mount()">
                                                <div className="glide__track" data-glide-el="track">
                                                    <div className="glide__slides ">
                                                          <div className="glide__slide">
                                                          <IonSlides pager={true} options={slideOpts}>
                            
                                                          <IonSlide>       <div className="glide__slide">
                                                            <div className="bg-center bg-no-repeat bg-cover" >
                                                                <div className="mb-0 py-48 px-0  text-center  sm:w-5/6 lg:w-3/4 xl:w-2/3">
                                                                 
                                                                <img  src="assets/img/bg/fernando-andrade-potCPE_Cw8A-unsplash.jpg" />
                                                                    <a href="{{ route('cosmetique_page') }}" className="btn btn-primary btn-lg mb-0 smalltxt">cosmétiques</a>
                                                                </div>
                                                            </div>
                                                        </div></IonSlide>

                                                        <IonSlide>       <div className="glide__slide">
                                                            <div className="bg-center bg-no-repeat bg-cover" >
                                                                <div className="mb-0 py-48 px-0  text-center  sm:w-5/6 lg:w-3/4 xl:w-2/3">
                                                                 
                                                                <img src="assets/img/bg/greg-kantra-Xl1s-AkSLj4-unsplash.jpg" />
                                                                    <a href="{{ route('cosmetique_page') }}" className="btn btn-primary btn-lg mb-0 smalltxt">cosmétiques</a>
                                                                </div>
                                                            </div>
                                                        </div></IonSlide>
                                                        
                                                        </IonSlides>     
                                                        </div>
                                                      
                        
                                                    </div>
                                                </div>
                                              
                                            </div>
                                            </div>
                                        <div className="col-md-6 col-xs-6 hsp">
                                            <div className="hero-slide " x-data x-init="new Glide('.hero-slide', { autoplay: 3000, type: 'carousel' }).mount()">
                                                <div className="glide__track" data-glide-el="track">
                                                    <div className="glide__slides">
                                                    <IonSlides pager={true} options={slideOpts}>
                        
                                                              
                            
                                                    <IonSlide>           <div className="glide__slide">
                                                            <div className="bg-center bg-no-repeat bg-cover" >
                                                                <div className="mb-0 py-48 px-0  text-center  sm:w-5/6 lg:w-3/4 xl:w-2/3">
                                                                <img  src="assets/img/bg/mohammad-metri-E-0ON3VGrBc-unsplash.jpg" />
                                                                    <a href="{{ route('services_show') }}" className="btn btn-primary btn-lg mb-0 smalltxt">Services</a>
                                                                </div>
                                                            </div>
                                                        </div></IonSlide>
                                                        
                                                               
                            
                                                        <IonSlide>     <div className="glide__slide">
                                                            <div className="bg-center bg-no-repeat bg-cover" >
                                                                <div className="mb-0 py-48 px-0  text-center  sm:w-5/6 lg:w-3/4 xl:w-2/3">
                                                                <img  src="assets/img/bg/mohamad-khosravi-YGJ9vfuwyUg-unsplash.jpg" />
                                                                    <a href="{{ route('services_show') }}" className="btn btn-primary btn-lg mb-0 smalltxt">Services</a>
                                                                </div>
                                                            </div>
                                                        </div></IonSlide>
                                                        
                                                   
                                                                
                            
                                                        <IonSlide>         <div className="glide__slide">
                                                            <div className="bg-center bg-no-repeat bg-cover" >
                                                                <div className="mb-0 py-48 px-0  text-center  sm:w-5/6 lg:w-3/4 xl:w-2/3">
                                                                <img  src="assets/img/bg/oladimeji-odunsi-tUUmR82pq68-unsplash.jpg" />
                                                                    <a href="{{ route('services_show') }}" className="btn btn-primary btn-lg mb-0 smalltxt">Services</a>
                                                                </div>
                                                            </div>
                                                        </div></IonSlide>
                                                        
                                                   
                                                                
                            
                                                        <IonSlide>    <div className="glide__slide">
                                                            <div className="bg-center bg-no-repeat bg-cover" >
                                                                <div className="mb-0 py-48 px-0  text-center  sm:w-5/6 lg:w-3/4 xl:w-2/3">
                                                                <img  src="assets/img/bg/stylish-man-sitting-in-barbershop.jpg" />
                                                                    <a href="{{ route('services_show') }}" className="btn btn-primary btn-lg mb-0 smalltxt">Services</a>
                                                                </div>
                                                            </div>
                                                        </div></IonSlide>
                                                        
                                                        </IonSlides>     
                        
                                                    </div>
                                                </div>
                                                  </div>
                                            </div>
                        
                        
                                    </div>
                        
                        
                        
                        
                                </div>

                              
                          

      </IonContent>
       
                                  
                              
    </IonPage>
  );
};
 
      
 

 
export default Tab1;
