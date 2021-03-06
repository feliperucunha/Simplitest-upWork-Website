import React from 'react';
import './styles.css';


function LandingPhone() {
    return (
        <div id="container">
        <div id="phone">
          <div id="appHeader">
            <img id="arrow" src="https://i.ibb.co/0cY1CMJ/FDA22-A46-9-D10-495-A-9471-108-F08037359.png" alt="a" />
            <img id="avatar" src="https://i.ibb.co/1s15SSq/avatar.jpg" alt="avatar" />
            <div id="headingWrap">
              <div id="userName">Samuel Green</div>
              <span id="status">Available to walk</span>
            </div>
            <div id="kebab">
              <div id="dot1"></div>
              <div id="dot2"></div>
              <div id="dot3"></div>
            </div>
          </div>
          <div id="appBody">
            <div id="tb1" class="textBubble left">That sounds great. I'd be happy to discuss more.</div>
            <div id="tb2" class="textBubble left">Could you send over some pictures of your dog, please?</div>
            <div id="photosWrap">
              <img src="https://i.ibb.co/5B9HR0B/dog-image-1.jpg" alt="dog-image-1" border="0" />
              <img src="https://i.ibb.co/GHjyxhQ/dog-image-2.jpg" alt="dog-image-2" border="0" />
              <img src="https://i.ibb.co/LpQxVL0/dog-image-3.jpg" alt="dog-image-3" border="0" />
            </div>
            <div id="tb3" class="textBubble right">Here are a few pictures. She's a happy girl!</div>
            <div id="tb4" class="textBubble right">Can you make it?</div>
            <div id="tb5" class="textBubble left">She looks so happy! The time we discussed works. How long shall I take her out for?</div>
            <div id="tb6" class="textBubble left"><a class="ring">&nbsp;</a>30 minute walk <span>$29</span></div>
            <div id="tb7" class="textBubble left"><a class="ring">&nbsp;</a>1 hour walk <span>$49</span></div>
            <div id="textInput">Type a message...<a><img id="arrow2" src="https://i.ibb.co/0cY1CMJ/FDA22-A46-9-D10-495-A-9471-108-F08037359.png" alt="a" /></a></div>
          </div>
        </div>
        <div id="textWrap">
          <span id="h1">SimpliTest</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore magnam quaerat alias, cum neque qui eius quidem voluptatem voluptate minus dolor fuga ab aperiam molestias quasi sunt accusantium ea beatae!</p>
        </div>
      </div>
 );
}

export default LandingPhone;