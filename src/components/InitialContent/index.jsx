import React, { useState } from "react";
import niceView from'../../images/nice_view.jpeg';

export default function InitialContent() {
    
    return(
        <>
          <h1> Title </h1>
          <>
            <img src={niceView.src} alt="nice view" width={450} height={500}/>

            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id eros bibendum, tincidunt ligula eu, bibendum nunc. Nunc vitae nunc sed nisi euismod fringilla. Proin eget erat eget ipsum tincidunt aliquam. Cras vehicula, dolor nec ultricies fringilla, quam nunc bibendum nisl, vitae tincidunt orci nibh eget leo.
            </div>
          </>
        </>
    );
}
