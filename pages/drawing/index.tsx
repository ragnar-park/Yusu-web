import Button from "@/components/ui/ButtonM";
import Header from "@/components/AppHeader";
import ButtonM from "@/components/ui/ButtonM";
import ButtonS from "@/components/ui/ButtomS";
import ButtonL from "@/components/ui/ButtonL";

const Drawing = () => {
    return (
        <div>
            <ButtonM buttonText='테스트 버튼' onClick={() => {
            }}/>
            <ButtonS buttonText='테스트 버튼' onClick={() => {
            }}/>
            <ButtonL buttonText='테스트 버튼' onClick={() => {
            }}/>
        </div>
    );
}

export default Drawing;
