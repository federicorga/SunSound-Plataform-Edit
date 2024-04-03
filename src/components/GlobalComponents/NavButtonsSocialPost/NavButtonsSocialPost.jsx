import IconCompartir from '../IconBtn/IconCompartir/IconCompartir';
import IconConversation from '../IconBtn/IconConversation/IconConversation';
import IconLike from '../IconBtn/IconLike/IconLike';
import IconRetweet from '../IconBtn/IconRetweet/IconRetweet';
import './NavButtonsSocialPost.css'

function NavButtonsSocialPost() {
  return (
    <section>
      <div>
        <button className='button-NavButtonsSocialPost'>
            <div className='intern-button-content-icon-spa-NavButtonsSocialPost'>
                <div className='icon-NavButtonsSocialPost'>
                    <IconConversation></IconConversation>
                </div>
                <span>1</span>
            </div>
        </button>
        <button className='button-NavButtonsSocialPost'>
            <div className='intern-button-content-icon-spa-NavButtonsSocialPost'>
                <div className='icon-NavButtonsSocialPost'>
                   <IconLike></IconLike>
                </div>
                <span>1</span>
            </div>
        </button>
        <button className='button-NavButtonsSocialPost'>
            <div className='intern-button-content-icon-spa-NavButtonsSocialPost'>
                <div className='icon-NavButtonsSocialPost'>
                    <IconRetweet></IconRetweet>
                </div>
                <span>1</span>
            </div>
        </button>
        <button className='button-NavButtonsSocialPost'>
            <div className='intern-button-content-icon-spa-NavButtonsSocialPost'>
                <div className='icon-NavButtonsSocialPost'>
                    <IconCompartir></IconCompartir>
                </div>
                <span>1</span>
            </div>
        </button>
     
      </div>
    </section>
  );
}

export default NavButtonsSocialPost;
