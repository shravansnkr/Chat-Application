import React from "react";

const Chat = ({ user, msg, setMsg }) => {
  return (
    <div className="card border-2 border-info w-100">
      <div className="row vh-100">
        <div className="d-flex flex-column col-12 col-lg-12 col-xl-12">
          {/* Chat Header */}
          <div className="align-item-start py-2 px-4 w-100  border-bottom border-info d-lg-block sticky-top bg-white">
            <div className="d-flex align-items-center py-1">
              <div className="position-relative">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar6.png"
                  className="rounded-circle mx-2"
                  alt={user}
                  width="50"
                  height="50"
                />
              </div>
              <div className="flex-grow-3"></div>
              <strong>Logged In As {user} </strong>
            </div>
          </div>
          {/* Chat Header */}
          <div className="align-item-end border-info py-3 px-4 border-top d-lg-block">
            <div className="input-group flex-fill">
              <input
                type="text"
                className="form-control"
                name="message"
                value=""
                placeholder="Type Your Message..."
                onChange={({currentTarget: input})=>setMsg(input.value)}
              />
              <button className="btn btn-info">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
