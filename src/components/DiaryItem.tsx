import { info } from "../App";
import { useNavigate } from "react-router-dom";
import Mybutton from "./MyButton";

const DiaryItem = ({id,emotion,content,date}:info)=>{
    const navigate = useNavigate();
    const strDate =  new Date(date).toLocaleDateString();
    
    const goDetail = ()=>{
        navigate(`./diary/${id}`);
    }

    const goEdit = ()=>{
        navigate("/edit");
    }
    return (
        <div className="DiaryItem">
            
            <div onClick={goDetail} className={["emotion_img_wrapper", `emotion_img_wrapper_${emotion}`].join(" ")}>
                <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}/>
            </div>

            <div onClick={goDetail} className="info_wrapper">
                <div className="diary_date">
                    {strDate}
                </div>

                <div className="diary_content_preview">
                    {content.slice(0.25)}
                </div>

            </div>

            <div className="btn_wrapper">
                <Mybutton text="수정하기" onClick={goEdit}/>
            </div>
        </div>
        )
        
}; 

export default DiaryItem;