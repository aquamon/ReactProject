import { useState } from "react";

const Section = ({title,description,isVisible,setIsVisible})=>{
    

    return(
        <div className="p-2 m-2 border border-black">
            <h3 className="font-bold text-xl">{title}</h3>
            
            {isVisible ? <button onClick={()=>{setIsVisible(false)}}>Hide</button> : <button onClick={()=>setIsVisible(true)}>Show</button>}
            {isVisible && <p>{description}</p>}
        </div>
    );
};



const InstamartComponent = ()=>{

    const [visibleSection , setVisibleSection] = useState("about");
    return (
        <div>
            <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>
            <Section
                title={"About Instamart"}
                description = {"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}

                isVisible={visibleSection === "about"}

                setIsVisible={(show)=>show?setVisibleSection("about"):setVisibleSection("null")}
            
            />

<Section
                title={"Team Instamart"}
                description = {"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}

                isVisible = {visibleSection === "team"}

                setIsVisible={(show)=>show?setVisibleSection("team"):setVisibleSection("null")}
            />

<Section
                title={"Careers Instamart"}
                description = {"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}

                isVisible = {visibleSection === "career"}

                setIsVisible={(show)=>show?setVisibleSection("career"):setVisibleSection("null")}   
            />

        </div>
    )
}

export default InstamartComponent;
