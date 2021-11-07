import react, { useEffect, useRef, useState } from "react";

interface IImageWithBboxes{
    bboxes: {
        bbox: number[],
        type: number
    }[],
    src: string;
    height?:number;
}



export const ImageWithBboxes:react.FC<IImageWithBboxes> = (props) => {
    
    var [values, setValues] = useState([<div></div>]);
    const img = useRef(null)

    
    
    return <div className="img-with-bb__container" style={{height: props.height || 300}}>
        {
            ...values
        }
        <img src={props.src} ref={img} alt="" height={props.height || 300} onLoad={() =>{
            var box = (img.current! as HTMLElement).getBoundingClientRect();
            setValues(props.bboxes.map((e) => {
                return <Bbox
                    bbox={
                        [
                            e.bbox[1] * ( box.width / (img.current! as any).naturalWidth),
                            e.bbox[0] * ( box.height /(img.current! as any).naturalHeight),
                            e.bbox[3] * ( box.width / (img.current! as any).naturalWidth),
                            e.bbox[2] * ( box.height / (img.current! as any).naturalHeight)
                        
                        ]
                    }
                    img_cords={
                        [
                            box.top,
                            box.left
                        ]
                    }
                    type={1}
                ></Bbox>
            }))
        }}/>
    </div> 
    
}

interface IBBox{
    bbox: number[];
    type: number;
    img_cords: number[];
}

const Bbox:react.FC<IBBox> = (props) => {
    console.log(props.bbox, props)
    return <div className="bbox__container"
     style={{
            position: 'absolute',
            top: (props.bbox[1] + props.img_cords[0]).toString() + "px", 
            left: (props.bbox[0] ).toString() + "px", 
            width: (props.bbox[2] - props.bbox[0]).toString() + "px",
            height: (props.bbox[3] - props.bbox[1]).toString() + "px",
            backgroundColor: "#F5433838",
            zIndex: 2,
            border: "1px solid #F54338"
        }}
    ></div>
}