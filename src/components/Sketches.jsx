import { useEffect, useState } from "react";
import { Button, Space } from 'antd';
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons';


const Sketches = ({footer}) => {
    const [sketchList, setSketchList] = useState([])
    const [count, setCount] = useState()
    const [max, setMax] = useState()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('fileList.json');
                const data = await response.json();
                setSketchList(data.sketchList);
                setCount(data.sketchList.length-1)
                setMax(data.sketchList.length-1)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    const increment = () => {
        // console.log("max " + max)
        if (count === max){
            setCount(0)
        }
        else {
            setCount((prev)=>++prev)
        }
    }

    return (
        <div className="sketchPageContainer">
            {/* <Button style={{ fontSize: '20px', height: 50, borderRadius: 100}} type="primary" onClick={()=>decrement()}>
                <CaretLeftOutlined />
            </Button> */}

           <div onClick={()=>increment()} className="sketchFrame">
                <img className="sketch" src={sketchList[count]} key={sketchList[count]} />
           </div>
            
            {/* <Button style={{ fontSize: '20px', height: 50, borderRadius: 100}} type="primary" onClick={()=>increment()}>
                <CaretRightOutlined />
            </Button> */}
            {footer}
        </div>
    );
}
export default Sketches