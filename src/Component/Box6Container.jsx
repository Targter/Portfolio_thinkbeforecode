const Box6container = () => {
  return (
    <>
      <div className="box6container">
        <div className="box6holder">
          <div className="getintouchbox">
            <div className="getintouch">GET IN TOUCH</div>
            <div className="CONTACT">CONTACT</div>
            <form className="formbox">
              <label htmlFor="name">Your name</label>
              <input type="text" placeholder="what's your good name?" />
              <label htmlFor="yourmail">Your email</label>
              <input type="mail" placeholder="what's your web address?" />
              <label htmlFor="yourmessage">Your message</label>
              <input type="text" placeholder="what you want to say?" />
            </form>
            <button className="sendbtn">Send</button>
          </div>
          <div className="diconbox6"></div>
        </div>
      </div>
    </>
  );
};

export default Box6container;
