import './CollectionsUser.css'
import MusicCarPlayerComponent from '../../../GlobalComponents/MusicAllComponents/MusicCardPlayerComponent/MusicCarPlayerComponent';
import RectangleContent from '../../../GlobalComponents/RectangleContent/RectangleContent';
function CollectionsUser() {
  return (
    <section className='SectionCollectionsUser'>

<RectangleContent titulo={"COLLECTION"}>

    <div className='content-all-card-CollectionUser'>
        <MusicCarPlayerComponent
            size={"214px"}
            imgSrc={"/img/NFTs/IMG-20231218-WA0029.jpg"}
            tileSubActive={true}
        ></MusicCarPlayerComponent>
        <MusicCarPlayerComponent
            size={"214px"}
            imgSrc={"/img/NFTs/IMG-20231218-WA0022.jpg"}
            tileSubActive={true}
        ></MusicCarPlayerComponent>
        <MusicCarPlayerComponent
            size={"214px"}
            imgSrc={"/rectangle-67@2x.png"}
            tileSubActive={true}
        ></MusicCarPlayerComponent>
        <MusicCarPlayerComponent index={1}
            size={"214px"}
            imgSrc={"/rectangle-117@2x.png"}
            tileSubActive={true}
            titleTheme={"En el patio (Original Mix)"}
            subitileTheme={"Arakaki"}
        ></MusicCarPlayerComponent>
        
        <MusicCarPlayerComponent index={3}
            size={"214px"}
            imgSrc={"/rectangle-119@2x.png"}
            tileSubActive={true}
            titleTheme={"Coda"}
            subitileTheme={"Taylorythm"}
        ></MusicCarPlayerComponent>
    </div>

</RectangleContent>

      
    </section>
  );
}

export default CollectionsUser;
