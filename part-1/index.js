
let App = () => {
    return (
    <div>
        <FirstComponent/>
        <NamedComponent name="Jeremy"/>
    
        <Tweet className="tweetle" username = "jermDizzle" name="Jeremy" date="07/21/23" message="Does this work?"/>
        <Tweet username = "roleypoley" name="Roger" date="07/22/23" message="I think so?"/>
        <Tweet username = "spartie" name="Sparticus" date="07/23/23" message="It sure does?"/>
  
        <Person name="Jeremy" age={32} hobbies={["boats", "code", "sports"]}/>
    
    </div>
    )
};

ReactDOM.render(<App/>, document.getElementById("root"));