import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './faq.css';





export default function ControlledAccordions() {
  
  const [expanded, setExpanded] = React.useState('panel1');
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className='faq'>
      <div className='faqTextHeading'>
        <h1 className='headFaqText'>FAQ's</h1>
      </div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} className="faq-header">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className='headerBoxFaq'
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }} className="faqhead">
          What is BBCC?
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography  className="faqhead">
          Parked in the Ethereum garage these 8000 heavily-specced V12’s are Supercar Avatars in your MetaGarage. Meet other BBCC & supercar owners at the Pitlane or try your luck at the BBCC Bullpen - our MetaDrag Strip. The NFT entitles you to the Real-World-Raffle giveaway using the Chainlink VRF, where the winning ticket will win an actual Murcielago, door delivered anywhere in the world, amongst other giveaways. Each of the 92 traits have been designed in collaboration with supercar owners, automotive designers and gamers and make this computer generated series a coveted project to change the way we absorb the Metaverse. BBCC IS YOUR LOVE FOR CARS.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} className="faq-header">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
          className='headerBoxFaq'
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }} className="faqhead">
          When is the Launch and what’s it all about?

          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography  className="faqhead">
          The NFT collection will be launched at the end of April 2022. Whitelisted addresses (Paddock Pass Holders) will gain access to the mint 24 hours prior to the main mint date. The final launch date will be announced on the Discord group and social media by 15th of April.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} className="faq-header">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          className='headerBoxFaq'
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }} className="faqhead">
          How will the Raffle draws be conducted? Will they be fair?

          </Typography>
        
        </AccordionSummary>
        <AccordionDetails>
          <Typography  className="faqhead">
          We will host a live draw for the winners on 6th June 2022. A snapshot of holders will be conducted and those will be fed into the randomiser for the draw. The draws will be conducted using the Chainlink VRF to pick the lucky winners for the various rounds and this will be live to make sure there is no tampering of results.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')} className="faq-header">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
          className='headerBoxFaq'
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }} className="faqhead">
          Will there be other prizes? Am I going to receive anything as a holder?

          </Typography>
        
        </AccordionSummary>
        <AccordionDetails>
          <Typography  className="faqhead">
          Yes. All wallets will be needed to carry out a basic KYC for us to be able to contact you after the draws are carried out. We will be giving out merchandise or gifts to ALL ticket holders after the snapshot of holders is taken on 6th June 2022 from the date of the launch of the collection. During this period the NFTs can be traded on Opensea.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')} className="faq-header">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
          className='headerBoxFaq'
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }} className="faqhead">
          What if I live in a country which has high taxation for importing cars?

          </Typography>
        
        </AccordionSummary>
        <AccordionDetails>
          <Typography  className="faqhead">
          We will partner with a Supercar specialist company that will be able to source and ship the car to the winner of the raffle. Since we don’t know which part of the world that will be, we will hire a third party provider to carry out the prize delivery end-to-end, with all funds sponsored by BBCC including the import duty where-ever applicable. This might lead to some delays in logistical time of the prize delivery, which may be out of our hands but we strive to deliver on what we commit - For a hassle free prize delivery with no additional charges.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')} className="faq-header">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel6bh-content"
          id="panel6bh-header"
          className='headerBoxFaq'
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }} className="faqhead">
          What happens if I have the winning NFT Raffle?

          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography  className="faqhead">
          You will be contacted through the information provided by you during your KYC. We will provide further instructions on how to carry out the collection of your prize. Merchandise and gifts will be mailed across to the address provided by you during the KYC. Please ensure correct details are provided during the KYC process.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')} className="faq-header">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel7bh-content"
          id="panel7bh-header"
          className='headerBoxFaq'
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }} className="faqhead">
          What will be the cost to mint each NFT?


          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography  className="faqhead">
          1 NFT will be made available for 0.15 ETH and a maximum of 10 can be minted by one wallet.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')} className="faq-header">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel8bh-content"
          id="panel8bh-header"
          className='headerBoxFaq'
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }} className="faqhead">
          What will be the whitelist sale price?

          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography  className="faqhead">
          The Whitelist price for the NFT will  be 0.1 ETH. The Whitelist will allow for eligible wallets to mint the NFT at their own leisure based on prevalent GAS fees on the network and overcome any Gas wars that may occur during the mint.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')} className="faq-header">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel9bh-content"
          id="panel9bh-header"
          className='headerBoxFaq'
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }} className="faqhead">
          What will the funds be used for?

          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography  className="faqhead">
          All fund-related decisions will be routed through the DAO. As a BBCC holder you will receive a right to vote on these aspects before a deadline-date and have your say in how the funds should be allocated and utilised. The BBCC team will retain a small portion of the NFTs that will be minted by us fairly like the rest of the community. We will mint some NFTs for influencers and marketing that will be withdrawn from the mint treasury in order-of-mint to keep the minting process genuine for the entire collection.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')} className="faq-header">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel10bh-content"
          id="panel10bh-header"
          className='headerBoxFaq'
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }} className="faqhead">
          What will be the total supply?

          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography  className="faqhead">
          BBCC collection will have 8000 NFTs. 8000 number was selected because the specific car in the NFT has a max rev limit of 8000 RPM. So if you’re a petrolhead - You know.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')} className="faq-header">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel11bh-content"
          id="panel11bh-header"
          className='headerBoxFaq'
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }} className="faqhead">
          What will be the utility of the NFT?
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography  className="faqhead">
          The NFTs will keep getting features and affiliations added to it as the time progresses. The first big project planned is the procurement of land in the metaverse from which profits of running any business in the Metaverse will be given to the holders of the NFT. If the land is ever sold, the proceeds will also be divided equally amongst all NFT holders. 
<br /><br />We plan on building a member only club for BBCC holders. This club will feature events and guest DJs from some of the best destinations in the world. These will be member only events and we plan an exclusive merchandise store which can only be accessed by Members. We intend to launch our own crypto in the future and have already planned to offer a staking feature, which will be announced as the project progresses.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')} className="faq-header">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel12bh-content"
          id="panel12bh-header"
          className='headerBoxFaq'
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }} className="faqhead">
          What will be the utility of the NFT?

          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography  className="faqhead">
          The NFTs will keep adding affiliations as the time progresses. The first big project planned is the procurement of land in the metaverse to build the MetaBullpen. All holders will be treated as equity holders of that land and all profit realizations will be shared with the holders periodically.
Other than the Raffle, in the first year, BBCC will build a member-only club for BBCC holders. This club will feature events and guest DJs from some of the best destinations in the world. These will be member-only events and we plan an exclusive merchandise store which can only be accessed by Members.`
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel13'} onChange={handleChange('panel13')} className="faq-header">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel13bh-content"
          id="panel13bh-header"
          className='headerBoxFaq'
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }} className="faqhead">
          What is the BBCC DAO?

          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography  className="faqhead">
          A Decentralized Autonomous Organization is made with community focus & Control at its core. The community decides the actions and they have a right in navigating the direction and shape of a project in which they are investors. A thread is made available to eligible holders and those will be able to vote on all major decisions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel14'} onChange={handleChange('panel14')} className="faq-header">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel14bh-content"
          id="panel14bh-header"
          className='headerBoxFaq'
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }} className="faqhead">
          What rights do I have as a NFT holder in the DAO?
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography  className="faqhead">
          1 NFT gives you 1 vote. 1 decision needs to have at least 65% vote from total token holders to be able to arrive at consensus. Once consensus is arrived at, the decision cannot be overruled. The votes must be given before the deadline expiry of each decision posted on the DAO, a non vote will be counted as a delegation-of-vote to the devs to be able to carry the decision on behalf of the member that chose not to vote. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel15'} onChange={handleChange('panel15')} className="faq-header">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel15bh-content"
          id="panel15bh-header"
          className='headerBoxFaq'
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }} className="faqhead">
          What is land in the Metaverse?
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography  className="faqhead">
          A digital piece of real estate will be selected in Sandbox for which we have a completely innovative plan in store - MetaBullpen. We want the community to decide how to navigate this development, so the decisions pertaining to the Metaverse will only be revealed once the mint has been launched and once the DAO has active members.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel17'} onChange={handleChange('panel17')} className="faq-header">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel16bh-content"
          id="panel16bh-header"
          className='headerBoxFaq'
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }} className="faqhead">
          Why is BBCC buying Land in the Metaverse?
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography  className="faqhead">
          We want to utilize the funds of the community in the manner we have planned. This land will be exposed to growth and utility with time, and as we develop the project deeper, any proceeds that come from gains in the future will be distributed back to the community either in the way of tokens or NFTs that have a definite utility and value.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel17'} onChange={handleChange('panel17')} className="faq-header">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel17bh-content"
          id="panel17bh-header"
          className='headerBoxFaq'
        >
          <Typography sx={{ width: '100%', flexShrink: 0 }} className="faqhead">
          What Merchandise will be available for?

          </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography  className="faqhead">
          We will contact various top brands to collaborate on our merchandise to make BBCC merch a coveted thing to own. Assured Merchandise delivery has been promised to our holders - and we plan to deliver on the best quality there is.

          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
