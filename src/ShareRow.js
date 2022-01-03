import {
    EmailShareButton,
    FacebookShareButton,
    LinkedinShareButton,
    MailruShareButton,
    OKShareButton,
    RedditShareButton,
    TelegramShareButton,
    TwitterShareButton,
    ViberShareButton,
    VKShareButton,
    WhatsappShareButton,
    WorkplaceShareButton,
    EmailIcon,
    FacebookIcon,
    LinkedinIcon,
    MailruIcon,
    OKIcon,
    RedditIcon,
    TelegramIcon,
    TwitterIcon,
    ViberIcon,
    VKIcon,
    WhatsappIcon,
    WorkplaceIcon
  } from "react-share";

  const QUOTE = "Try this Goals and Values analyzer in your planning process!";
  const URL = "https://psavinov.github.io/gav";
  const TITLE = "Goals and Values analyzer";
  const HASHTAG = "planning";

  function ShareRow() {
    return (
        <div className="share-row">
            <FacebookShareButton
                quote={QUOTE}
                hashtag={`#${HASHTAG}`}
                url={URL}
            >
                <FacebookIcon size={32} round={true} />
            </FacebookShareButton>

            <VKShareButton
                title={TITLE}
                url={URL}
            >
                <VKIcon size={32} round={true} />
            </VKShareButton>

            <WhatsappShareButton
                title={TITLE}
                url={URL}
            >
                <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
            
            <TwitterShareButton
                url={URL}
                hashtags={[HASHTAG]}
                title={TITLE}
            >
                <TwitterIcon size={32} round={true} />
            </TwitterShareButton>

            <TelegramShareButton
                url={URL}
                title={TITLE}  
            >
                <TelegramIcon size={32} round={true} />  
            </TelegramShareButton>    

            <ViberShareButton
                url={URL}
                title={TITLE}  
            >
                <ViberIcon size={32} round={true} />  
            </ViberShareButton>   

            <RedditShareButton
                url={URL}
                title={TITLE}  
            >
                <RedditIcon size={32} round={true} />  
            </RedditShareButton> 

            <WorkplaceShareButton
                quote={QUOTE}
                hashtag={`#${HASHTAG}`}
                url={URL}
            >
                <WorkplaceIcon size={32} round={true} />
            </WorkplaceShareButton>  

            <OKShareButton
                url={URL}
                title={TITLE}  
                description={QUOTE}
            >
                <OKIcon size={32} round={true} />  
            </OKShareButton>  

            <MailruShareButton
                url={URL}
                title={TITLE}  
                description={QUOTE}
            >
                <MailruIcon size={32} round={true} />  
            </MailruShareButton> 

            <LinkedinShareButton
                summary={QUOTE}
                title={TITLE}
                url={URL}
                source={URL}
            >
                <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>

            <EmailShareButton
                subject={TITLE}
                body={QUOTE}
                url={URL}
            >
                <EmailIcon size={32} round={true} />
            </EmailShareButton>
        </div>
    );
  }

  export default ShareRow;