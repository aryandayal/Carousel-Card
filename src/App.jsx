import React from 'react'
import {useState} from 'react'

import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'

function App() {
    const contentOfCard =[
        {
            imgSrc: img1,
            title: 'This is my crousel card',
            content: 'Hey, this is my gimplise of crousel card'
        },
        {
            imgSrc: img2,
            title: 'This image about img2',
            content: 'Hey, this is my gimplise of crousel card'
        },
        {
            imgSrc: img3,
            title: 'This image about img3',
            content: 'Hey, this is my gimplise of crousel card'
        },
        {
            imgSrc: img4,
            title: 'This image about img4',
            content: 'Hey, this is my gimplise of crousel card'
        }
    ]

    const [image, setImage] = useState(contentOfCard[0].imgSrc);
    const [title, setTitle] = useState(contentOfCard[0].title);
    const [content, setContent] = useState(contentOfCard[0].content);
    const [index, setIndex] = useState(1);

    
    const rightMove=(e) => {
        if(index<contentOfCard.length){
            setIndex(index+1);
            setImage(contentOfCard[index].imgSrc)
            setTitle(contentOfCard[index].title)
            setContent(contentOfCard[index].content)
            }

        else
            console.log('stopRight');
    }

    const leftMove=(e) => {
        if(index>=0){
            setIndex(index-1);
            setImage(contentOfCard[index].imgSrc)
            setTitle(contentOfCard[index].title)
            setContent(contentOfCard[index].content)
            }

        else
            console.log('stopLeft');
    }

    return(
        <>
            <h1>Crousel Card</h1>
            <span>click on the &lt; &gt; to change picture</span>
            <div id='container' style={containerStyle}>
                <span style={{fontWeight: 'bold', fontSize: '20px'}}>Heading</span>
                    <span id='navigator' style={navigatorStyle}>
                    <span id='leftNav' onClick={leftMove}>&lt;</span>&nbsp; &nbsp;
                    <span id='rightNav'onClick={rightMove}>&gt;</span>
                </span>
                <img id='image' style={imageStyle} src={image} alt="NoImage"/>
                <h4 id='title'>{title}</h4>
                <p id='content' style={contentStyle}>{content}</p>
            </div>
        </>
    )
}

const containerStyle ={
    border: '2px solid black',
    height: 'auto',
    width: '20%',
    borderRadius: '4px',
    padding: '10px',
    position: 'relative',
}

const navigatorStyle ={
    position: 'absolute',
    right: '10px',
    top: '10px',
    fontSize: '20px',
    fontWeight: 'bold',
    userSelect:'none'
}

const contentStyle ={
    backgroundColor: 'lightgrey'
}

const imageStyle ={
    width: '100%',
    height: 'auto',
    marginTop: '20px',
}



export default App