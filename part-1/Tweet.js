const Tweet = ({username, name, message, date}) => {
   return (
   <span className="tweet">
        <h3 className="username">{username}</h3>
        <b className="name">{name} tweeted </b>
        <span>{message}</span> 
        on <span className="date"><b>{date}</b></span>
    </span>
   )
    
};


