import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { DiaryStateContext } from "../App";
import { info } from "../App";
const useDiary = (id: string | undefined) => {
  const navigate = useNavigate();
  const data = useContext(DiaryStateContext);
  const [curDiaryItem, setCurDiaryItem] = useState<info>();
  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      navigate("/", { replace: true });
    }
    setCurDiaryItem(currentDiaryItem);
  }, [id, data]);
  return curDiaryItem;
};

export default useDiary;

