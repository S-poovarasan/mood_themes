function Modedisplay({mode}){


    const mood={
        happy: "Keep Smiling😀",
        sad: "Don't worry I'am here ☺️",
        good:"Stay neutral😇",
        anger:"Take deep breath 🙂‍↔️"
    };

    return <div>
            {mode?<p>{mood[mode]}</p>:<p>Select your Mode👆</p>}
        </div>
    
}


export default Modedisplay;