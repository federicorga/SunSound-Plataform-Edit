import TextBoxLanding from '../TextBoxLanding/TextBoxLanding';


function TextBoxLandingContentA() {
  return (
    <section className='content-textboxlanding-A'>
        <div>
            <TextBoxLanding imagen={'rectangle-5@2x.gif'} colorWords={['experiencia', 'musical', 'siempre']} h2Text={"Tu experiencia musical, para siempre"} h3Text={"Con SunSound, tu conexión con la música se vuelve tangible. Descubre, comparte y próximamente, intercambia tus pistas favoritas para que tus amigos las disfruten."}/>
        </div>
        <div>
            <TextBoxLanding applyStyle={true} imagen={'aae742e7ae143e686fa6fc69aa1d1abd-1@2x.gif'} colorWords={['Tu', 'Colección', 'Unica']} h2Text={"NFTs Musicales: Tu Colección Unica."} h3Text={"Descubre y adquiere obras digitales de artistas destacados para enriquecer tu experiencia musical.Además, interactúa con los artistas en un nivel completamente nuevo."}/>
        </div>
       
    </section>
  );
}

export default TextBoxLandingContentA;
